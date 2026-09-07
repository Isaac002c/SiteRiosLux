'use client'

import Link from 'next/link'
import { ArrowLeft, MessageCircle } from 'lucide-react'
import { createWhatsAppUrl, siteConfig } from '@/config/site'

type LeadContext = {
  name?: string
  company?: string
  eventType?: string
}

export default function ThankYouActions() {
  const continueOnWhatsApp = (event: React.MouseEvent<HTMLAnchorElement>) => {
    try {
      const rawContext = window.sessionStorage.getItem('rios_lux_lead_context')
      if (!rawContext) return

      const context = JSON.parse(rawContext) as LeadContext
      const details = [
        context.name ? `Meu nome é ${context.name}.` : '',
        context.company ? `Empresa: ${context.company}.` : '',
        context.eventType ? `Interesse: ${context.eventType}.` : '',
      ].filter(Boolean).join(' ')

      event.currentTarget.href = createWhatsAppUrl(`${siteConfig.leadFollowUpMessage}${details ? ` ${details}` : ''}`)
    } catch {
      // A conversa pode continuar mesmo quando o armazenamento do navegador está indisponível.
    }
  }

  return (
    <div className="mt-10 flex flex-col gap-3 sm:flex-row">
      <a
        href={createWhatsAppUrl(siteConfig.leadFollowUpMessage)}
        onClick={continueOnWhatsApp}
        target="_blank"
        rel="noopener noreferrer"
        data-track-event="click_whatsapp"
        data-track-label="thank_you"
        className="button-primary justify-center"
      >
        <MessageCircle aria-hidden="true" className="mr-2" size={17} /> Continuar no WhatsApp
      </a>
      <Link href="/" className="button-secondary justify-center">
        <ArrowLeft aria-hidden="true" className="mr-2" size={17} /> Voltar ao início
      </Link>
    </div>
  )
}
