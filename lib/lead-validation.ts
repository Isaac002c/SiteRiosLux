import type { Attribution } from '@/lib/attribution'

export const eventTypes = [
  'Evento corporativo',
  'Encontro executivo',
  'Lançamento',
  'Experiência de marca',
  'Outro',
] as const

export type EventType = (typeof eventTypes)[number]

export type LeadPayload = {
  submissionId: string
  name: string
  company: string
  whatsapp: string
  email: string
  eventType: EventType
  date?: string
  guests?: number
  location?: string
  message: string
  source: 'corporate-landing' | 'contact-page'
  pageUrl: string
  attribution: Attribution
  privacyAccepted: true
  formStartedAt: number
  website?: string
}

export type LeadField =
  | 'name'
  | 'company'
  | 'whatsapp'
  | 'email'
  | 'eventType'
  | 'date'
  | 'guests'
  | 'location'
  | 'message'
  | 'privacyAccepted'

export type LeadValidationResult =
  | { success: true; data: LeadPayload }
  | { success: false; fieldErrors: Partial<Record<LeadField, string>> }

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phonePattern = /^\d{10,13}$/
const submissionIdPattern = /^[a-zA-Z0-9-]{20,80}$/
const datePattern = /^\d{4}-\d{2}-\d{2}$/

function stringValue(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
}

function optionalString(value: unknown, maxLength: number) {
  return stringValue(value, maxLength) || undefined
}

function attributionValue(value: unknown, maxLength: number) {
  return optionalString(value, maxLength)
}

export function validateLeadPayload(input: unknown): LeadValidationResult {
  const raw = input && typeof input === 'object' ? input as Record<string, unknown> : {}
  const errors: Partial<Record<LeadField, string>> = {}
  const name = stringValue(raw.name, 100)
  const company = stringValue(raw.company, 140)
  const whatsapp = stringValue(raw.whatsapp, 30)
  const phoneDigits = whatsapp.replace(/\D/g, '')
  const email = stringValue(raw.email, 160).toLowerCase()
  const eventType = stringValue(raw.eventType, 80)
  const date = optionalString(raw.date, 10)
  const location = optionalString(raw.location, 140)
  const message = stringValue(raw.message, 2000)
  const guestsNumber = raw.guests === '' || raw.guests == null ? undefined : Number(raw.guests)

  if (name.length < 2) errors.name = 'Informe seu nome.'
  if (company.length < 2) errors.company = 'Informe a empresa.'
  if (!phonePattern.test(phoneDigits)) errors.whatsapp = 'Informe um WhatsApp com DDD.'
  if (!emailPattern.test(email)) errors.email = 'Informe um e-mail válido.'
  if (!eventTypes.includes(eventType as EventType)) errors.eventType = 'Selecione o tipo de evento.'
  if (date && (!datePattern.test(date) || Number.isNaN(Date.parse(`${date}T12:00:00Z`)))) errors.date = 'Informe uma data válida.'
  if (guestsNumber !== undefined && (!Number.isInteger(guestsNumber) || guestsNumber < 1 || guestsNumber > 100000)) {
    errors.guests = 'Informe uma quantidade válida de convidados.'
  }
  if (message.length < 10) errors.message = 'Conte um pouco mais sobre o evento.'
  if (raw.privacyAccepted !== true) errors.privacyAccepted = 'Confirme a leitura da Política de Privacidade.'

  if (Object.keys(errors).length > 0) return { success: false, fieldErrors: errors }

  const rawAttribution = raw.attribution && typeof raw.attribution === 'object'
    ? raw.attribution as Record<string, unknown>
    : {}
  const attribution: Attribution = {
    utm_source: attributionValue(rawAttribution.utm_source, 200),
    utm_medium: attributionValue(rawAttribution.utm_medium, 200),
    utm_campaign: attributionValue(rawAttribution.utm_campaign, 200),
    utm_content: attributionValue(rawAttribution.utm_content, 200),
    utm_term: attributionValue(rawAttribution.utm_term, 200),
    gclid: attributionValue(rawAttribution.gclid, 500),
  }

  Object.keys(attribution).forEach((key) => {
    if (!attribution[key as keyof Attribution]) delete attribution[key as keyof Attribution]
  })

  return {
    success: true,
    data: {
      submissionId: submissionIdPattern.test(stringValue(raw.submissionId, 80))
        ? stringValue(raw.submissionId, 80)
        : crypto.randomUUID(),
      name,
      company,
      whatsapp,
      email,
      eventType: eventType as EventType,
      date,
      guests: guestsNumber,
      location,
      message,
      source: raw.source === 'contact-page' ? 'contact-page' : 'corporate-landing',
      pageUrl: stringValue(raw.pageUrl, 500),
      attribution,
      privacyAccepted: true,
      formStartedAt: Number(raw.formStartedAt) || 0,
      website: optionalString(raw.website, 200),
    },
  }
}
