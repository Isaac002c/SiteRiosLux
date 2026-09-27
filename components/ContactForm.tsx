'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { LoaderCircle } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { captureAttribution, type Attribution } from '@/lib/attribution'
import { trackEvent } from '@/lib/analytics'
import { corporateEventTypes, eventTypes, investmentRanges, type LeadField } from '@/lib/lead-validation'
import { routes, type Locale } from '@/lib/i18n'

type FormMode = 'general' | 'corporate' | 'private'
type FieldErrors = Partial<Record<LeadField, string>>
type FormData = { name: string; company: string; whatsapp: string; email: string; eventType: string; date: string; guests: string; city: string; state: string; investmentRange: string; message: string; privacyAccepted: boolean; website: string }

const initialForm: FormData = { name: '', company: '', whatsapp: '', email: '', eventType: '', date: '', guests: '', city: '', state: '', investmentRange: '', message: '', privacyAccepted: false, website: '' }

const copy = {
  pt: {
    name: 'Nome', namePlaceholder: 'Como podemos chamar você?', company: 'Empresa', companyPlaceholder: 'Nome da empresa', optional: 'opcional',
    whatsapp: 'WhatsApp', phonePlaceholder: 'DDD + número', email: 'E-mail', emailPlaceholder: 'seu@email.com',
    eventType: 'Tipo de evento', select: 'Selecione', date: 'Data ou período', dateHint: 'se definido', guests: 'Número aproximado de convidados',
    city: 'Cidade', cityPlaceholder: 'Ex.: Rio de Janeiro', state: 'Estado', statePlaceholder: 'Ex.: RJ',
    investmentRange: 'Faixa de investimento prevista', investmentOptions: ['Até R$30 mil', 'R$30 mil – R$50 mil', 'R$50 mil – R$100 mil', 'R$100 mil – R$200 mil', 'Acima de R$200 mil', 'Ainda estamos definindo'],
    message: 'Conte-nos sobre o evento', messagePlaceholder: 'Compartilhe o objetivo, o perfil dos convidados e o que já está definido.',
    privacyA: 'Li e concordo com a', privacyB: 'e autorizo o uso dos dados para atendimento desta solicitação.',
    submit: 'Enviar solicitação', submitting: 'Enviando…', sent: 'Ao enviar, nossa equipe receberá as informações para analisar sua solicitação e entrar em contato.',
    failure: 'Não foi possível confirmar o envio. Seus dados continuam preenchidos; tente novamente.',
    types: ['Evento corporativo', 'Encontro executivo', 'Lançamento', 'Experiência de marca', 'Evento interno ou confraternização', 'Celebração privada', 'Evento de alto padrão', 'Concierge e hospitalidade', 'Outro'],
  },
  en: {
    name: 'Name', namePlaceholder: 'How should we address you?', company: 'Company', companyPlaceholder: 'Company name', optional: 'optional',
    whatsapp: 'WhatsApp', phonePlaceholder: 'Country code + number', email: 'Email', emailPlaceholder: 'you@email.com',
    eventType: 'Event type', select: 'Select', date: 'Date or period', dateHint: 'if defined', guests: 'Approximate guest count',
    city: 'City', cityPlaceholder: 'E.g. Rio de Janeiro', state: 'State / region', statePlaceholder: 'E.g. RJ',
    investmentRange: 'Expected investment range', investmentOptions: ['Up to BRL 30,000', 'BRL 30,000–50,000', 'BRL 50,000–100,000', 'BRL 100,000–200,000', 'Above BRL 200,000', 'Still being defined'],
    message: 'Tell us about the event', messagePlaceholder: 'Share the purpose, guest profile and what is already defined.',
    privacyA: 'I have read and agree to the', privacyB: 'and authorise the use of my data to respond to this enquiry.',
    submit: 'Send enquiry', submitting: 'Sending…', sent: 'Our team will review the information and contact you to discuss the next steps.',
    failure: 'We could not confirm your submission. Your information is still here; please try again.',
    types: ['Corporate event', 'Executive gathering', 'Launch', 'Brand experience', 'Internal event', 'Private celebration', 'High-end event', 'Concierge and hospitality', 'Other'],
  },
  es: {
    name: 'Nombre', namePlaceholder: '¿Cómo podemos llamarle?', company: 'Empresa', companyPlaceholder: 'Nombre de la empresa', optional: 'opcional',
    whatsapp: 'WhatsApp', phonePlaceholder: 'Código de país + número', email: 'Correo electrónico', emailPlaceholder: 'usted@email.com',
    eventType: 'Tipo de evento', select: 'Seleccione', date: 'Fecha o período', dateHint: 'si está definido', guests: 'Número aproximado de invitados',
    city: 'Ciudad', cityPlaceholder: 'Ej.: Río de Janeiro', state: 'Estado / región', statePlaceholder: 'Ej.: RJ',
    investmentRange: 'Rango de inversión previsto', investmentOptions: ['Hasta BRL 30.000', 'BRL 30.000–50.000', 'BRL 50.000–100.000', 'BRL 100.000–200.000', 'Más de BRL 200.000', 'Aún estamos definiendo'],
    message: 'Cuéntenos sobre el evento', messagePlaceholder: 'Comparta el objetivo, el perfil de invitados y lo que ya está definido.',
    privacyA: 'He leído y acepto la', privacyB: 'y autorizo el uso de mis datos para responder a esta solicitud.',
    submit: 'Enviar solicitud', submitting: 'Enviando…', sent: 'Nuestro equipo analizará la información y se comunicará para conversar sobre los próximos pasos.',
    failure: 'No fue posible confirmar el envío. Sus datos siguen completos; inténtelo nuevamente.',
    types: ['Evento corporativo', 'Encuentro ejecutivo', 'Lanzamiento', 'Experiencia de marca', 'Evento interno', 'Celebración privada', 'Evento de alto nivel', 'Concierge y hospitalidad', 'Otro'],
  },
} as const

function submissionId() {
  return typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : Date.now() + '-' + Math.random().toString(36).slice(2) + '-' + Math.random().toString(36).slice(2)
}

function analyticsAttribution(attribution: Attribution) {
  return Object.fromEntries(Object.entries(attribution).filter(([key]) => key !== 'landing_page' && key !== 'referrer'))
}

export default function ContactForm({ mode = 'general', locale = 'pt' }: { mode?: FormMode; locale?: Locale }) {
  const router = useRouter()
  const labels = copy[locale]
  const [data, setData] = useState(initialForm)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [failure, setFailure] = useState('')
  const [sending, setSending] = useState(false)
  const attribution = useRef<Attribution>({})
  const started = useRef(false)
  const startedAt = useRef(0)
  const id = useRef('')
  const isCorporate = mode === 'corporate'
  const values = isCorporate ? corporateEventTypes : eventTypes
  const typeLabels = isCorporate ? labels.types.slice(0, 5) : labels.types

  useEffect(() => { attribution.current = captureAttribution() }, [])

  const update = <K extends keyof FormData>(field: K, value: FormData[K]) => {
    setFailure('')
    setErrors((current) => ({ ...current, [field]: undefined }))
    setData((current) => ({ ...current, [field]: value }))
  }
  const begin = () => {
    if (started.current) return
    started.current = true
    startedAt.current = Date.now()
    trackEvent('form_start', { form: mode, language: locale, ...analyticsAttribution(attribution.current) })
  }

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (sending) return
    const form = event.currentTarget
    if (!form.checkValidity()) { form.reportValidity(); return }
    setSending(true); setFailure(''); setErrors({})
    startedAt.current ||= Date.now(); id.current ||= submissionId()
    try {
      const response = await fetch('/api/leads', {
        method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept-Language': locale },
        body: JSON.stringify({
          submissionId: id.current, name: data.name, company: data.company, whatsapp: data.whatsapp, email: data.email,
          eventType: data.eventType, date: data.date || undefined, guests: data.guests ? Number(data.guests) : undefined,
          location: [data.city, data.state].filter(Boolean).join(' / ') || undefined, investmentRange: data.investmentRange || undefined, message: data.message,
          privacyAccepted: data.privacyAccepted, website: data.website, locale,
          source: isCorporate ? 'corporate-landing' : 'contact-page',
          pageUrl: window.location.origin + window.location.pathname, attribution: attribution.current, formStartedAt: startedAt.current,
        }),
      })
      const result = await response.json() as { ok?: boolean; leadId?: string; duplicate?: boolean; message?: string; fieldErrors?: FieldErrors }
      if (!response.ok || !result.ok || !result.leadId) { setErrors(result.fieldErrors || {}); setFailure(result.message || labels.failure); return }
      const context = { form: mode, language: locale, event_type: data.eventType, lead_id: result.leadId, ...analyticsAttribution(attribution.current) }
      if (!result.duplicate) { trackEvent('generate_lead', context); trackEvent('form_submit', context) }
      router.push(mode === 'private' ? routes.thanksPrivate[locale] : routes.thanksContact[locale])
    } catch { setFailure(labels.failure) } finally { setSending(false) }
  }

  return <form onSubmit={submit} onFocus={begin} className="relative grid gap-x-5 gap-y-6 sm:grid-cols-2">
    <Field id="lead-name" label={labels.name} required error={errors.name}><input id="lead-name" required autoComplete="name" maxLength={100} value={data.name} onChange={(e) => update('name', e.target.value)} className="form-field" placeholder={labels.namePlaceholder} /></Field>
    <Field id="lead-company" label={labels.company} required={isCorporate} hint={isCorporate ? undefined : labels.optional} error={errors.company}><input id="lead-company" required={isCorporate} autoComplete="organization" maxLength={140} value={data.company} onChange={(e) => update('company', e.target.value)} className="form-field" placeholder={labels.companyPlaceholder} /></Field>
    <Field id="lead-whatsapp" label={labels.whatsapp} required error={errors.whatsapp}><input id="lead-whatsapp" required type="tel" inputMode="tel" autoComplete="tel" maxLength={30} value={data.whatsapp} onChange={(e) => update('whatsapp', e.target.value)} className="form-field" placeholder={labels.phonePlaceholder} /></Field>
    <Field id="lead-email" label={labels.email} required error={errors.email}><input id="lead-email" required type="email" autoComplete="email" maxLength={160} value={data.email} onChange={(e) => update('email', e.target.value)} className="form-field" placeholder={labels.emailPlaceholder} /></Field>
    <Field id="lead-event-type" label={labels.eventType} required error={errors.eventType}><select id="lead-event-type" required value={data.eventType} onChange={(e) => { update('eventType', e.target.value); if (e.target.value) trackEvent('event_type_selected', { event_type: e.target.value, form: mode, language: locale }) }} className="form-field"><option value="">{labels.select}</option>{values.map((value, index) => <option key={value} value={value}>{typeLabels[index]}</option>)}</select></Field>
    <Field id="lead-date" label={labels.date} hint={labels.dateHint} error={errors.date}><input id="lead-date" type="date" value={data.date} onChange={(e) => update('date', e.target.value)} className="form-field" /></Field>
    <Field id="lead-city" label={labels.city} error={errors.location}><input id="lead-city" autoComplete="address-level2" maxLength={100} value={data.city} onChange={(e) => update('city', e.target.value)} className="form-field" placeholder={labels.cityPlaceholder} /></Field>
    <Field id="lead-state" label={labels.state}><input id="lead-state" autoComplete="address-level1" maxLength={40} value={data.state} onChange={(e) => update('state', e.target.value)} className="form-field" placeholder={labels.statePlaceholder} /></Field>
    <Field id="lead-guests" label={labels.guests} hint={labels.optional} error={errors.guests}><input id="lead-guests" type="number" min="1" max="100000" inputMode="numeric" value={data.guests} onChange={(e) => update('guests', e.target.value)} className="form-field" placeholder="80" /></Field>
    <Field id="lead-investment" label={labels.investmentRange} hint={labels.optional} error={errors.investmentRange}><select id="lead-investment" value={data.investmentRange} onChange={(e) => update('investmentRange', e.target.value)} className="form-field"><option value="">{labels.select}</option>{investmentRanges.map((value, index) => <option key={value} value={value}>{labels.investmentOptions[index]}</option>)}</select></Field>
    <div className="sm:col-span-2"><Field id="lead-message" label={labels.message} required error={errors.message}><textarea id="lead-message" required minLength={10} maxLength={2000} rows={5} value={data.message} onChange={(e) => update('message', e.target.value)} className="form-field resize-y" placeholder={labels.messagePlaceholder} /></Field></div>
    <div className="absolute left-[-10000px] h-px w-px overflow-hidden" aria-hidden="true"><label htmlFor="lead-website">Website</label><input id="lead-website" tabIndex={-1} autoComplete="off" value={data.website} onChange={(e) => update('website', e.target.value)} /></div>
    <div className="sm:col-span-2"><label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-sand/75"><input type="checkbox" required checked={data.privacyAccepted} onChange={(e) => update('privacyAccepted', e.target.checked)} className="mt-1 size-4 shrink-0 accent-[#b8945b]" /><span>{labels.privacyA} <Link href={routes.privacy[locale]} className="underline decoration-brass/60 underline-offset-4">{locale === 'en' ? 'Privacy Policy' : locale === 'es' ? 'Política de Privacidad' : 'Política de Privacidade'}</Link> {labels.privacyB}</span></label>{errors.privacyAccepted ? <p className="mt-2 text-sm text-[#f3b6a8]">{errors.privacyAccepted}</p> : null}</div>
    <div className="sm:col-span-2"><button type="submit" disabled={sending} className="button-primary w-full disabled:cursor-wait disabled:opacity-70 sm:w-auto">{sending ? <LoaderCircle className="mr-2 animate-spin" size={17} /> : null}{sending ? labels.submitting : labels.submit}</button><p className="mt-4 max-w-2xl text-sm leading-relaxed text-sand/55">{labels.sent}</p>{failure ? <p role="alert" className="mt-4 border-l-2 border-[#f3b6a8] pl-4 text-sm text-[#f3b6a8]">{failure}</p> : null}</div>
  </form>
}

function Field({ id, label, hint, required, error, children }: { id: string; label: string; hint?: string; required?: boolean; error?: string; children: React.ReactNode }) {
  return <div><label htmlFor={id} className="mb-2 flex items-center justify-between text-sm text-sand/75"><span>{label}{required ? <span className="text-brass"> *</span> : null}</span>{hint ? <span className="text-xs text-sand/50">{hint}</span> : null}</label>{children}{error ? <p className="mt-2 text-sm text-[#f3b6a8]">{error}</p> : null}</div>
}
