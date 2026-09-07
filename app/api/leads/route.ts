import { validateLeadPayload } from '@/lib/lead-validation'
import { saveLead } from '@/lib/lead-storage'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const maxDuration = 15

const responseHeaders = {
  'Cache-Control': 'no-store, max-age=0',
  'X-Content-Type-Options': 'nosniff',
}

function json(body: Record<string, unknown>, status: number) {
  return Response.json(body, { status, headers: responseHeaders })
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

export async function POST(request: Request) {
  if (!isSameOrigin(request)) return json({ ok: false, message: 'Origem da solicitação inválida.' }, 403)

  const contentLength = Number(request.headers.get('content-length') || 0)
  if (contentLength > 24000) return json({ ok: false, message: 'Solicitação muito grande.' }, 413)

  let input: unknown

  try {
    const body = await request.text()
    if (body.length > 24000) return json({ ok: false, message: 'Solicitação muito grande.' }, 413)
    input = JSON.parse(body)
  } catch {
    return json({ ok: false, message: 'Não foi possível interpretar a solicitação.' }, 400)
  }

  const validation = validateLeadPayload(input)
  if (!validation.success) {
    return json({ ok: false, message: 'Revise os campos destacados.', fieldErrors: validation.fieldErrors }, 422)
  }

  if (validation.data.website) return json({ ok: true }, 201)

  const elapsed = Date.now() - validation.data.formStartedAt
  if (validation.data.formStartedAt > 0 && elapsed < 750) {
    return json({ ok: false, message: 'Aguarde um instante e tente novamente.' }, 429)
  }

  try {
    const lead = await saveLead(validation.data)
    return json({ ok: true, duplicate: lead.duplicate }, lead.duplicate ? 200 : 201)
  } catch (error) {
    const unavailable = error instanceof Error && error.message === 'CRM_INTEGRATION_NOT_CONFIGURED'
    return json(
      {
        ok: false,
        message: unavailable
          ? 'O recebimento está temporariamente indisponível. Fale conosco pelo WhatsApp.'
          : 'Não foi possível registrar sua solicitação agora. Seus dados continuam preenchidos; tente novamente.',
      },
      503,
    )
  }
}
