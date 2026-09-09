import 'server-only'
import type { LeadPayload } from '@/lib/lead-validation'

type HubResponse = {
  ok?: boolean
  id?: string
  duplicate?: boolean
}

export async function saveLead(payload: LeadPayload, clientFingerprint: string) {
  const endpoint = process.env.RIOS_LUX_HUB_LEAD_ENDPOINT?.trim()
  const token = process.env.RIOS_LUX_HUB_TOKEN?.trim()

  if (!endpoint || !token) throw new Error('CRM_INTEGRATION_NOT_CONFIGURED')

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      'User-Agent': 'RiosLuxWebsite/1.0',
      'X-Rios-Lux-Client': clientFingerprint,
    },
    body: JSON.stringify(payload),
    cache: 'no-store',
    signal: AbortSignal.timeout(12000),
  })

  const result = await response.json().catch(() => null) as HubResponse | null

  if (!response.ok || !result?.ok || !result.id) {
    throw new Error('CRM_LEAD_NOT_PERSISTED')
  }

  return { id: result.id, duplicate: Boolean(result.duplicate) }
}
