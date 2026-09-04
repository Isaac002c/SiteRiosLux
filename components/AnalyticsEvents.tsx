'use client'

import { useEffect } from 'react'
import { trackEvent, type AnalyticsEvent } from '@/lib/analytics'

export default function AnalyticsEvents() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      const trackedElement = target?.closest<HTMLElement>('[data-track-event]')
      const eventName = trackedElement?.dataset.trackEvent as AnalyticsEvent | undefined

      if (eventName && trackedElement) {
        trackEvent(eventName, { label: trackedElement.dataset.trackLabel })
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return null
}
