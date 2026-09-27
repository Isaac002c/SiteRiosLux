import { createHash } from 'node:crypto'
import { validateLeadPayload } from '@/lib/lead-validation'
import { saveLead } from '@/lib/lead-storage'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const maxDuration = 15

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX_REQUESTS = 12
const rateLimitStore = new Map<string, { count: number; resetAt: number }>()

const responseHeaders = {
  'Cache-Control': 'no-store, max-age=0',
  'X-Content-Type-Options': 'nosniff',
}

function json(body: Record<string, unknown>, status: number) {
  return Response.json(body, { status, headers: responseHeaders })
}

function messages(locale: string) {
  if (locale.startsWith('en')) return {
    origin: 'Invalid request origin.', rate: 'Too many attempts. Please wait a few minutes and try again.',
    large: 'The request is too large.', parse: 'We could not read the request.', review: 'Review the highlighted fields.',
    unavailable: 'Form delivery is temporarily unavailable. Please contact us on WhatsApp.', failure: 'We could not record your enquiry. Your information is still filled in; please try again.',
  }
  if (locale.startsWith('es')) return {
    origin: 'Origen de la solicitud inválido.', rate: 'Demasiados intentos. Espere unos minutos e inténtelo de nuevo.',
    large: 'La solicitud es demasiado grande.', parse: 'No fue posible interpretar la solicitud.', review: 'Revise los campos destacados.',
    unavailable: 'El formulario no está disponible temporalmente. Contáctenos por WhatsApp.', failure: 'No fue posible registrar su solicitud. Sus datos siguen completos; inténtelo nuevamente.',
  }
  return {
    origin: 'Origem da solicitação inválida.', rate: 'Muitas tentativas em pouco tempo. Aguarde alguns minutos e tente novamente.',
    large: 'Solicitação muito grande.', parse: 'Não foi possível interpretar a solicitação.', review: 'Revise os campos destacados.',
    unavailable: 'O recebimento está temporariamente indisponível. Fale conosco pelo WhatsApp.', failure: 'Não foi possível registrar sua solicitação agora. Seus dados continuam preenchidos; tente novamente.',
  }
}

function isSameOrigin(request: Request) {
  const origin = request.headers.get('origin')
  if (!origin) return false

  try {
    return new URL(origin).host === new URL(request.url).host
  } catch {
    return false
  }
}

function getClientAddress(request: Request) {
  const forwarded = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
  return forwarded || request.headers.get('x-real-ip')?.trim() || 'unknown'
}

function getClientFingerprint(request: Request) {
  const secret = process.env.RIOS_LUX_HUB_TOKEN || 'rios-lux-rate-limit'
  return createHash('sha256').update(`${getClientAddress(request)}:${secret}`).digest('hex')
}

function checkRateLimit(request: Request) {
  const now = Date.now()
  const key = getClientFingerprint(request)
  const current = rateLimitStore.get(key)

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return { allowed: true, retryAfter: 0 }
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return { allowed: false, retryAfter: Math.max(1, Math.ceil((current.resetAt - now) / 1000)) }
  }

  current.count += 1
  return { allowed: true, retryAfter: 0 }
}

export async function POST(request: Request) {
  let copy = messages(request.headers.get('accept-language') || 'pt')
  if (!isSameOrigin(request)) return json({ ok: false, message: copy.origin }, 403)

  const rateLimit = checkRateLimit(request)
  if (!rateLimit.allowed) {
    return Response.json(
      { ok: false, message: copy.rate },
      {
        status: 429,
        headers: { ...responseHeaders, 'Retry-After': String(rateLimit.retryAfter) },
      },
    )
  }

  const contentLength = Number(request.headers.get('content-length') || 0)
  if (contentLength > 24000) return json({ ok: false, message: copy.large }, 413)

  let input: unknown

  try {
    const body = await request.text()
    if (body.length > 24000) return json({ ok: false, message: copy.large }, 413)
    input = JSON.parse(body)
  } catch {
    return json({ ok: false, message: copy.parse }, 400)
  }

  if (input && typeof input === 'object' && 'locale' in input) copy = messages(String((input as Record<string, unknown>).locale || 'pt'))

  const validation = validateLeadPayload(input)
  if (!validation.success) {
    return json({ ok: false, message: copy.review, fieldErrors: validation.fieldErrors }, 422)
  }

  if (validation.data.website) return json({ ok: true }, 201)

  try {
    const lead = await saveLead(validation.data, getClientFingerprint(request))
    return json({ ok: true, leadId: lead.id, duplicate: lead.duplicate }, lead.duplicate ? 200 : 201)
  } catch (error) {
    const unavailable = error instanceof Error && error.message === 'CRM_INTEGRATION_NOT_CONFIGURED'
    return json(
      {
        ok: false,
        message: unavailable ? copy.unavailable : copy.failure,
      },
      503,
    )
  }
}
