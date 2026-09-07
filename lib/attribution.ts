export const attributionKeys = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'gclid',
] as const

export type AttributionKey = (typeof attributionKeys)[number]
export type Attribution = Partial<Record<AttributionKey, string>>

const storageKey = 'rios_lux_attribution'

function sanitize(value: string | null, maxLength = 300) {
  return value?.trim().slice(0, maxLength) || undefined
}

export function captureAttribution(): Attribution {
  if (typeof window === 'undefined') return {}

  let stored: Attribution = {}

  try {
    stored = JSON.parse(window.sessionStorage.getItem(storageKey) || '{}') as Attribution
  } catch {
    stored = {}
  }

  const searchParams = new URLSearchParams(window.location.search)
  const current = Object.fromEntries(
    attributionKeys
      .map((key) => [key, sanitize(searchParams.get(key), key === 'gclid' ? 500 : 200)] as const)
      .filter((entry): entry is [AttributionKey, string] => Boolean(entry[1])),
  ) as Attribution

  const attribution = { ...stored, ...current }

  try {
    window.sessionStorage.setItem(storageKey, JSON.stringify(attribution))
  } catch {
    // The form still works when browser storage is unavailable.
  }

  return attribution
}

export function readStoredAttribution(): Attribution {
  if (typeof window === 'undefined') return {}

  try {
    return JSON.parse(window.sessionStorage.getItem(storageKey) || '{}') as Attribution
  } catch {
    return {}
  }
}
