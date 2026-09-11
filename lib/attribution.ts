export const attributionKeys = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'gclid',
  'gbraid',
  'wbraid',
] as const

export type AttributionKey = (typeof attributionKeys)[number]
export type AttributionContextKey = AttributionKey | 'landing_page' | 'referrer'
export type Attribution = Partial<Record<AttributionContextKey, string>>

const storageKey = 'rios_lux_attribution'

function sanitize(value: string | null, maxLength = 300) {
  return value?.trim().slice(0, maxLength) || undefined
}

function currentPageUrl() {
  const pathname = window.location.pathname === '/' ? '/' : window.location.pathname.replace(/\/$/, '')
  return `${window.location.origin}${pathname}`
}

function normalizedReferrer() {
  if (!document.referrer) return undefined

  try {
    const url = new URL(document.referrer)
    const pathname = url.pathname === '/' ? '/' : url.pathname.replace(/\/$/, '')
    return `${url.origin}${pathname}`.slice(0, 500)
  } catch {
    return sanitize(document.referrer, 500)
  }
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
      .map((key) => [key, sanitize(searchParams.get(key), ['gclid', 'gbraid', 'wbraid'].includes(key) ? 500 : 200)] as const)
      .filter((entry): entry is [AttributionKey, string] => Boolean(entry[1])),
  ) as Attribution

  const attribution: Attribution = {
    ...stored,
    landing_page: stored.landing_page || currentPageUrl(),
    referrer: stored.referrer || normalizedReferrer(),
  }


  for (const [key, value] of Object.entries(current)) {
    if (!attribution[key as AttributionKey]) attribution[key as AttributionKey] = value
  }

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
