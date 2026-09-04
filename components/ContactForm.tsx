'use client'

import { useRef, useState } from 'react'
import { createWhatsAppUrl, siteConfig } from '@/config/site'
import { trackEvent } from '@/lib/analytics'

type FormData = {
  name: string
  whatsapp: string
  email: string
  company: string
  experience: string
  date: string
  guests: string
  location: string
  message: string
}

const initialForm: FormData = {
  name: '',
  whatsapp: '',
  email: '',
  company: '',
  experience: '',
  date: '',
  guests: '',
  location: '',
  message: '',
}

function formatBrazilianPhone(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 2) return digits
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

export default function ContactForm() {
  const [formData, setFormData] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const formStarted = useRef(false)

  const updateField = (field: keyof FormData, value: string) => {
    setSubmitted(false)
    setFormData((current) => ({ ...current, [field]: value }))
  }

  const handleFormStart = () => {
    if (formStarted.current) return
    formStarted.current = true
    trackEvent('contact_start', { form: 'consultoria' })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const details = [
      siteConfig.whatsappMessage,
      '',
      `Nome: ${formData.name}`,
      `WhatsApp: ${formData.whatsapp}`,
      `E-mail: ${formData.email}`,
      formData.company ? `Empresa: ${formData.company}` : '',
      `Tipo de experiência: ${formData.experience}`,
      formData.date ? `Data: ${formData.date}` : '',
      formData.guests ? `Convidados: ${formData.guests}` : '',
      formData.location ? `Local/cidade: ${formData.location}` : '',
      `Mensagem: ${formData.message}`,
    ].filter(Boolean).join('\n')

    trackEvent('contact_submit', { form: 'consultoria', experience_type: formData.experience })
    setSubmitted(true)

    const whatsappUrl = createWhatsAppUrl(details)
    const whatsappWindow = window.open(whatsappUrl, '_blank')
    if (whatsappWindow) whatsappWindow.opener = null
    else window.location.assign(whatsappUrl)
  }

  return (
    <div>
      <div className="mb-9">
        <p className="eyebrow mb-4">Solicitar consultoria</p>
        <h2 className="font-serif text-3xl sm:text-4xl">Compartilhe o ponto de partida.</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-sand/70">
          Ao enviar, suas informações serão organizadas em uma mensagem e abertas no WhatsApp da Rios Lux.
        </p>
      </div>

      <form onSubmit={handleSubmit} onFocus={handleFormStart} className="grid gap-x-5 gap-y-6 sm:grid-cols-2">
        <Field label="Nome" required>
          <input
            name="name"
            required
            autoComplete="name"
            maxLength={100}
            value={formData.name}
            onChange={(event) => updateField('name', event.target.value)}
            className="form-field"
            placeholder="Como podemos chamar você?"
          />
        </Field>

        <Field label="WhatsApp" required>
          <input
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
          />
        </Field>

        <Field label="E-mail" required>
          <input
            name="email"
            required
            type="email"
            autoComplete="email"
            maxLength={160}
            value={formData.email}
            onChange={(event) => updateField('email', event.target.value)}
            className="form-field"
            placeholder="seu@email.com"
          />
        </Field>

        <Field label="Empresa" hint="opcional">
          <input
            name="company"
            autoComplete="organization"
            maxLength={140}
            value={formData.company}
            onChange={(event) => updateField('company', event.target.value)}
            className="form-field"
            placeholder="Nome da empresa"
          />
        </Field>

        <Field label="Tipo de experiência" required>
          <select
            name="experience"
            required
            value={formData.experience}
            onChange={(event) => updateField('experience', event.target.value)}
            className="form-field"
          >
            <option value="">Selecione</option>
            <option value="Evento corporativo">Evento corporativo</option>
            <option value="Celebração privada">Celebração privada</option>
            <option value="Experiência / lifestyle">Experiência / lifestyle</option>
            <option value="Concierge">Concierge</option>
            <option value="Outro formato">Outro formato</option>
          </select>
        </Field>

        <Field label="Data" hint="se definida">
          <input
            name="date"
            type="date"
            value={formData.date}
            onChange={(event) => updateField('date', event.target.value)}
            className="form-field"
          />
        </Field>

        <Field label="Número aproximado de convidados" hint="opcional">
          <input
            name="guests"
            type="number"
            min="1"
            inputMode="numeric"
            value={formData.guests}
            onChange={(event) => updateField('guests', event.target.value)}
            className="form-field"
            placeholder="Ex.: 80"
          />
        </Field>

        <Field label="Local ou cidade" hint="opcional">
          <input
            name="location"
            autoComplete="address-level2"
            maxLength={140}
            value={formData.location}
            onChange={(event) => updateField('location', event.target.value)}
            className="form-field"
            placeholder="Ex.: Rio de Janeiro"
          />
        </Field>

        <div className="sm:col-span-2">
          <Field label="O que você imagina?" required>
            <textarea
              name="message"
              required
              minLength={10}
              maxLength={2000}
              rows={5}
              value={formData.message}
              onChange={(event) => updateField('message', event.target.value)}
              className="form-field resize-y"
              placeholder="Conte o contexto, a intenção e o que já está definido."
            />
          </Field>
        </div>

        <div className="sm:col-span-2">
          <button type="submit" className="button-primary w-full sm:w-auto">
            Solicitar Consultoria
          </button>
          {submitted && (
            <p role="status" className="mt-4 text-sm text-sand/70">
              Sua mensagem foi preparada e aberta no WhatsApp.
            </p>
          )}
        </div>
      </form>
    </div>
  )
}

function Field({
  label,
  hint,
  required,
  children,
}: {
  label: string
  hint?: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center justify-between text-sm text-sand/75">
        <span>{label}{required && <span className="text-brass"> *</span>}</span>
        {hint && <span className="text-xs text-sand/70">{hint}</span>}
      </span>
      {children}
    </label>
  )
}
