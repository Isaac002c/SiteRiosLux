import type { Attribution } from '@/lib/attribution'

export const eventTypes = [
  'Evento corporativo',
  'Encontro executivo',
  'Lançamento',
  'Experiência de marca',
  'Evento interno ou confraternização',
  'Celebração privada',
  'Evento de alto padrão',
  'Concierge e hospitalidade',
  'Outro',
] as const

export const corporateEventTypes = eventTypes.slice(0, 5)

export const investmentRanges = [
  'Até R$30 mil',
  'R$30 mil – R$50 mil',
  'R$50 mil – R$100 mil',
  'R$100 mil – R$200 mil',
  'Acima de R$200 mil',
  'Ainda estamos definindo',
] as const

export type EventType = (typeof eventTypes)[number]
export type InvestmentRange = (typeof investmentRanges)[number]

export type LeadPayload = {
  submissionId: string
  name: string
  company?: string
  whatsapp: string
  email: string
  eventType: EventType
  date?: string
  guests?: number
  location?: string
  investmentRange?: InvestmentRange
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
  | 'investmentRange'
  | 'message'
  | 'privacyAccepted'

export type LeadValidationResult =
  | { success: true; data: LeadPayload }
  | { success: false; fieldErrors: Partial<Record<LeadField, string>> }

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phonePattern = /^\d{8,15}$/
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

function normalizedUrlValue(value: unknown, maxLength: number) {
  const rawValue = stringValue(value, maxLength)
  if (!rawValue) return undefined

  try {
    const url = new URL(rawValue)
    const pathname = url.pathname === '/' || !url.pathname.endsWith('/')
      ? url.pathname
      : url.pathname.slice(0, -1)
    return `${url.origin}${pathname}`.slice(0, maxLength)
  } catch {
    return undefined
  }
}

export function validateLeadPayload(input: unknown): LeadValidationResult {
  const raw = input && typeof input === 'object' ? input as Record<string, unknown> : {}
  const locale = raw.locale === 'en' || raw.locale === 'es' ? raw.locale : 'pt'
  const messages = locale === 'en'
    ? { name: 'Enter your name.', company: 'Enter the company name.', phone: 'Enter a valid WhatsApp number.', email: 'Enter a valid email.', event: 'Select the event type.', date: 'Enter a valid date.', guests: 'Enter a valid guest count.', investment: 'Select a valid investment range.', message: 'Tell us a little more about the event.', privacy: 'Please accept the Privacy Policy.' }
    : locale === 'es'
      ? { name: 'Ingrese su nombre.', company: 'Ingrese el nombre de la empresa.', phone: 'Ingrese un WhatsApp válido.', email: 'Ingrese un correo válido.', event: 'Seleccione el tipo de evento.', date: 'Ingrese una fecha válida.', guests: 'Ingrese una cantidad válida de invitados.', investment: 'Seleccione un rango de inversión válido.', message: 'Cuéntenos un poco más sobre el evento.', privacy: 'Acepte la Política de Privacidad.' }
      : { name: 'Informe seu nome.', company: 'Informe a empresa.', phone: 'Informe um WhatsApp válido.', email: 'Informe um e-mail válido.', event: 'Selecione o tipo de evento.', date: 'Informe uma data válida.', guests: 'Informe uma quantidade válida de convidados.', investment: 'Selecione uma faixa de investimento válida.', message: 'Conte um pouco mais sobre o evento.', privacy: 'Confirme a leitura da Política de Privacidade.' }
  const errors: Partial<Record<LeadField, string>> = {}
  const name = stringValue(raw.name, 100)
  const company = stringValue(raw.company, 140)
  const whatsapp = stringValue(raw.whatsapp, 30)
  const phoneDigits = whatsapp.replace(/\D/g, '')
  const email = stringValue(raw.email, 160).toLowerCase()
  const eventType = stringValue(raw.eventType, 80)
  const date = optionalString(raw.date, 10)
  const location = optionalString(raw.location, 140)
  const investmentRange = optionalString(raw.investmentRange, 40)
  const message = stringValue(raw.message, 2000)
  const guestsNumber = raw.guests === '' || raw.guests == null ? undefined : Number(raw.guests)
  const source = raw.source === 'contact-page' ? 'contact-page' : 'corporate-landing'

  if (name.length < 2) errors.name = messages.name
  if (source === 'corporate-landing' && company.length < 2) errors.company = messages.company
  if (company.length === 1) errors.company = messages.company
  if (!phonePattern.test(phoneDigits)) errors.whatsapp = messages.phone
  if (!emailPattern.test(email)) errors.email = messages.email
  if (!eventTypes.includes(eventType as EventType)) errors.eventType = messages.event
  if (date && (!datePattern.test(date) || Number.isNaN(Date.parse(`${date}T12:00:00Z`)))) errors.date = messages.date
  if (guestsNumber !== undefined && (!Number.isInteger(guestsNumber) || guestsNumber < 1 || guestsNumber > 100000)) {
    errors.guests = messages.guests
  }
  if (investmentRange && !investmentRanges.includes(investmentRange as InvestmentRange)) errors.investmentRange = messages.investment
  if (message.length < 10) errors.message = messages.message
  if (raw.privacyAccepted !== true) errors.privacyAccepted = messages.privacy

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
    gbraid: attributionValue(rawAttribution.gbraid, 500),
    wbraid: attributionValue(rawAttribution.wbraid, 500),
    landing_page: normalizedUrlValue(rawAttribution.landing_page, 500),
    referrer: normalizedUrlValue(rawAttribution.referrer, 500),
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
      company: company || undefined,
      whatsapp,
      email,
      eventType: eventType as EventType,
      date,
      guests: guestsNumber,
      location,
      investmentRange: investmentRange as InvestmentRange | undefined,
      message,
      source,
      pageUrl: normalizedUrlValue(raw.pageUrl, 500) || '',
      attribution,
      privacyAccepted: true,
      formStartedAt: Number(raw.formStartedAt) || 0,
      website: optionalString(raw.website, 200),
    },
  }
}
