'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { LoaderCircle } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { captureAttribution, type Attribution } from '@/lib/attribution'
import { trackEvent } from '@/lib/analytics'
import { eventTypes, type LeadField } from '@/lib/lead-validation'

type FormData = {
  name: string
  company: string
  whatsapp: string
  email: string
  eventType: string
  date: string
  guests: string
  location: string
  message: string
  privacyAccepted: boolean
  website: string
}

type FormMode = 'general' | 'corporate'
type FieldErrors = Partial<Record<LeadField, string>>

const initialForm: FormData = {
  name: '',
  company: '',
  whatsapp: '',
  email: '',
  eventType: '',
  date: '',
  guests: '',
  location: '',
  message: '',
  privacyAccepted: false,
  website: '',
}

function formatBrazilianPhone(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 2) return digits
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

function createSubmissionId() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') return crypto.randomUUID()
  return `${Date.now()}-${Math.random().toString(36).slice(2)}-${Math.random().toString(36).slice(2)}`
}

function analyticsAttribution(attribution: Attribution) {
  return Object.fromEntries(
    Object.entries(attribution).filter(([key]) => key !== 'landing_page' && key !== 'referrer'),
  )
}

export default function ContactForm({ mode = 'general' }: { mode?: FormMode }) {
  const router = useRouter()
  const [formData, setFormData] = useState(initialForm)
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [failureMessage, setFailureMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const attribution = useRef<Attribution>({})
  const formStarted = useRef(false)
  const formStartedAt = useRef(0)
  const submissionId = useRef('')
  const isCorporate = mode === 'corporate'

  useEffect(() => {
    attribution.current = captureAttribution()
  }, [])

  const updateField = <Field extends keyof FormData>(field: Field, value: FormData[Field]) => {
    setFailureMessage('')
    setFieldErrors((current) => ({ ...current, [field]: undefined }))
    setFormData((current) => ({ ...current, [field]: value }))
  }

  const handleFormStart = () => {
    if (formStarted.current) return
    formStarted.current = true
    formStartedAt.current = Date.now()
    trackEvent('form_start', {
      form: isCorporate ? 'corporate_proposal' : 'contact',
      ...analyticsAttribution(attribution.current),
    })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (isSubmitting) return

    const form = event.currentTarget
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    setFailureMessage('')
    setFieldErrors({})
    setIsSubmitting(true)
    formStartedAt.current ||= Date.now()
    submissionId.current ||= createSubmissionId()

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          submissionId: submissionId.current,
          name: formData.name,
          company: formData.company,
          whatsapp: formData.whatsapp,
          email: formData.email,
          eventType: formData.eventType,
          date: formData.date || undefined,
          guests: formData.guests ? Number(formData.guests) : undefined,
          location: formData.location || undefined,
          message: formData.message,
          privacyAccepted: formData.privacyAccepted,
          website: formData.website,
          source: isCorporate ? 'corporate-landing' : 'contact-page',
          pageUrl: window.location.href,
          attribution: attribution.current,
          formStartedAt: formStartedAt.current,
        }),
      })
      const result = await response.json() as {
        ok?: boolean
        leadId?: string
        duplicate?: boolean
        message?: string
        fieldErrors?: FieldErrors
      }

      if (!response.ok || !result.ok) {
        setFieldErrors(result.fieldErrors || {})
        setFailureMessage(result.message || 'Não foi possível enviar agora. Tente novamente.')
        return
      }

      const trackingContext = {
        form: isCorporate ? 'corporate_proposal' : 'contact',
        event_type: formData.eventType,
        lead_id: result.leadId,
        ...analyticsAttribution(attribution.current),
      }

      const conversionKey = result.leadId ? `rios_lux_conversion_${result.leadId}` : ''
      let alreadyTracked = false
      try {
        alreadyTracked = Boolean(conversionKey && window.sessionStorage.getItem(conversionKey) === '1')
      } catch {
        // Analytics still runs when browser storage is unavailable.
      }

      if (!alreadyTracked) {
        trackEvent('generate_lead', trackingContext)
        trackEvent('lead_created', trackingContext)
        trackEvent('form_submit', trackingContext)
        try {
          if (conversionKey) window.sessionStorage.setItem(conversionKey, '1')
        } catch {
          // Conversion tracking does not depend on browser storage.
        }
      }

      try {
        window.sessionStorage.setItem('rios_lux_lead_context', JSON.stringify({
          leadId: result.leadId,
          name: formData.name,
          company: formData.company,
          eventType: formData.eventType,
          attribution: attribution.current,
          submittedAt: new Date().toISOString(),
        }))
      } catch {
        // The confirmation page does not depend on browser storage.
      }

      router.push('/obrigado')
    } catch {
      setFailureMessage('Não foi possível conectar ao servidor. Seus dados continuam preenchidos; tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <div className="mb-9">
        <p className="eyebrow mb-4">{isCorporate ? 'Solicitar proposta' : 'Falar com a Rios Lux'}</p>
        <h2 className="font-serif text-3xl sm:text-4xl">
          {isCorporate ? 'Conte-nos o que sua empresa está planejando.' : 'Compartilhe o ponto de partida.'}
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-sand/70">
          Ao enviar, nossa equipe receberá as informações para analisar sua solicitação e entrar em contato.
        </p>
      </div>

      <form onSubmit={handleSubmit} onFocus={handleFormStart} className="relative grid gap-x-5 gap-y-6 sm:grid-cols-2">
        <Field id="lead-name" label="Nome" required error={fieldErrors.name}>
          <input
            id="lead-name"
            name="name"
            required
            autoComplete="name"
            maxLength={100}
            value={formData.name}
            onChange={(event) => updateField('name', event.target.value)}
            className="form-field"
            placeholder="Como podemos chamar você?"
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={fieldErrors.name ? 'lead-name-error' : undefined}
          />
        </Field>

        <Field id="lead-company" label="Empresa" required={isCorporate} hint={isCorporate ? undefined : 'opcional'} error={fieldErrors.company}>
          <input
            id="lead-company"
            name="company"
            required={isCorporate}
            autoComplete="organization"
            maxLength={140}
            value={formData.company}
            onChange={(event) => updateField('company', event.target.value)}
            className="form-field"
            placeholder={isCorporate ? 'Nome da empresa' : 'Nome da empresa (se aplicável)'}
            aria-invalid={Boolean(fieldErrors.company)}
            aria-describedby={fieldErrors.company ? 'lead-company-error' : undefined}
          />
        </Field>

        <Field id="lead-whatsapp" label="WhatsApp" required error={fieldErrors.whatsapp}>
          <input
            id="lead-whatsapp"
            name="whatsapp"
            required
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={formData.whatsapp}
            onChange={(event) => updateField('whatsapp', formatBrazilianPhone(event.target.value))}
            className="form-field"
            placeholder="DDD + número"
            pattern={String.raw`\(\d{2}\) \d{4,5}-\d{4}`}
            title="Informe um telefone com DDD."
            aria-invalid={Boolean(fieldErrors.whatsapp)}
            aria-describedby={fieldErrors.whatsapp ? 'lead-whatsapp-error' : undefined}
          />
        </Field>

        <Field id="lead-email" label="E-mail" required error={fieldErrors.email}>
          <input
            id="lead-email"
            name="email"
            required
            type="email"
            autoComplete="email"
            maxLength={160}
            value={formData.email}
            onChange={(event) => updateField('email', event.target.value)}
            className="form-field"
            placeholder="seu@empresa.com.br"
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? 'lead-email-error' : undefined}
          />
        </Field>

        <Field id="lead-event-type" label="Tipo de evento" required error={fieldErrors.eventType}>
          <select
            id="lead-event-type"
            name="eventType"
            required
            value={formData.eventType}
            onChange={(event) => updateField('eventType', event.target.value)}
            className="form-field"
            aria-invalid={Boolean(fieldErrors.eventType)}
            aria-describedby={fieldErrors.eventType ? 'lead-event-type-error' : undefined}
          >
            <option value="">Selecione</option>
            {eventTypes.map((eventType) => <option key={eventType} value={eventType}>{eventType}</option>)}
          </select>
        </Field>

        <Field id="lead-date" label="Data prevista" hint="se definida" error={fieldErrors.date}>
          <input
            id="lead-date"
            name="date"
            type="date"
            value={formData.date}
            onChange={(event) => updateField('date', event.target.value)}
            className="form-field"
            aria-invalid={Boolean(fieldErrors.date)}
            aria-describedby={fieldErrors.date ? 'lead-date-error' : undefined}
          />
        </Field>

        <Field id="lead-guests" label="Número aproximado de convidados" hint="opcional" error={fieldErrors.guests}>
          <input
            id="lead-guests"
            name="guests"
            type="number"
            min="1"
            max="100000"
            inputMode="numeric"
            value={formData.guests}
            onChange={(event) => updateField('guests', event.target.value)}
            className="form-field"
            placeholder="Ex.: 80"
            aria-invalid={Boolean(fieldErrors.guests)}
            aria-describedby={fieldErrors.guests ? 'lead-guests-error' : undefined}
          />
        </Field>

        <Field id="lead-location" label="Local / cidade" hint="opcional" error={fieldErrors.location}>
          <input
            id="lead-location"
            name="location"
            autoComplete="address-level2"
            maxLength={140}
            value={formData.location}
            onChange={(event) => updateField('location', event.target.value)}
            className="form-field"
            placeholder="Ex.: Rio de Janeiro"
            aria-invalid={Boolean(fieldErrors.location)}
            aria-describedby={fieldErrors.location ? 'lead-location-error' : undefined}
          />
        </Field>

        <div className="sm:col-span-2">
          <Field id="lead-message" label="Conte-nos sobre o evento" required error={fieldErrors.message}>
            <textarea
              id="lead-message"
              name="message"
              required
              minLength={10}
              maxLength={2000}
              rows={5}
              value={formData.message}
              onChange={(event) => updateField('message', event.target.value)}
              className="form-field resize-y"
              placeholder="Compartilhe o objetivo, o público e o que já está definido."
              aria-invalid={Boolean(fieldErrors.message)}
              aria-describedby={fieldErrors.message ? 'lead-message-error' : undefined}
            />
          </Field>
        </div>

        <div className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
          <label htmlFor="lead-website">Não preencha este campo</label>
          <input
            id="lead-website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={formData.website}
            onChange={(event) => updateField('website', event.target.value)}
          />
        </div>

        <div className="sm:col-span-2">
          <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-sand/75">
            <input
              type="checkbox"
              name="privacyAccepted"
              required
              checked={formData.privacyAccepted}
              onChange={(event) => updateField('privacyAccepted', event.target.checked)}
              className="mt-1 size-4 shrink-0 accent-[#c7a464]"
              aria-invalid={Boolean(fieldErrors.privacyAccepted)}
              aria-describedby={fieldErrors.privacyAccepted ? 'privacy-consent-error' : undefined}
            />
            <span>
              Li e concordo com a <Link href="/politica-de-privacidade" className="underline decoration-brass/60 underline-offset-4 hover:text-white">Política de Privacidade</Link> e autorizo o uso dos dados para atendimento desta solicitação.
            </span>
          </label>
          {fieldErrors.privacyAccepted ? (
            <p id="privacy-consent-error" className="mt-2 text-sm text-[#f3b6a8]">{fieldErrors.privacyAccepted}</p>
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <button type="submit" disabled={isSubmitting} className="button-primary w-full disabled:cursor-wait disabled:opacity-70 sm:w-auto">
            {isSubmitting ? <LoaderCircle aria-hidden="true" className="mr-2 animate-spin" size={17} /> : null}
            {isSubmitting ? 'Enviando…' : isCorporate ? 'Solicitar proposta' : 'Enviar solicitação'}
          </button>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-sand/65">
            Ao enviar, nossa equipe receberá as informações para analisar sua solicitação e entrar em contato.
          </p>
          <div aria-live="polite" aria-atomic="true">
            {failureMessage ? (
              <p role="alert" className="mt-4 border-l-2 border-[#f3b6a8] pl-4 text-sm leading-relaxed text-[#f3b6a8]">
                {failureMessage}
              </p>
            ) : null}
          </div>
        </div>
      </form>
    </div>
  )
}

function Field({
  id,
  label,
  hint,
  required,
  error,
  children,
}: {
  id: string
  label: string
  hint?: string
  required?: boolean
  error?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 flex items-center justify-between text-sm text-sand/75">
        <span>{label}{required ? <span className="text-brass"> *</span> : null}</span>
        {hint ? <span className="text-xs text-sand/70">{hint}</span> : null}
      </label>
      {children}
      {error ? <p id={`${id}-error`} className="mt-2 text-sm text-[#f3b6a8]">{error}</p> : null}
    </div>
  )
}
