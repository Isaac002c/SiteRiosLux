export type AnalyticsEvent =
  | 'whatsapp_click'
  | 'contact_start'
  | 'contact_submit'
  | 'phone_click'
  | 'email_click'
  | 'corporate_cta_click'
  | 'private_cta_click'
  | 'concierge_cta_click'
  | 'experience_view'

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>
    gtag?: (command: 'event', eventName: string, parameters?: Record<string, unknown>) => void
    __riosLuxEventsBound?: boolean
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
