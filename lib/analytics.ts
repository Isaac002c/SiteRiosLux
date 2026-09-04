export type AnalyticsEvent =
  | 'click_whatsapp'
  | 'click_curadoria'
  | 'form_start'
  | 'form_submit'
  | 'view_experience'

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>
    gtag?: (command: 'event', eventName: string, parameters?: Record<string, unknown>) => void
  }
}

export function trackEvent(event: AnalyticsEvent, parameters: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return

  if (window.gtag) {
    window.gtag('event', event, parameters)
    return
  }

  window.dataLayer?.push({ event, ...parameters })
}
