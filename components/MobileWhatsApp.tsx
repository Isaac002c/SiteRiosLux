'use client'

import { MessageCircle } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { createWhatsAppUrl } from '@/config/site'
import { common } from '@/lib/site-content'
import { getLocaleFromPath, ui } from '@/lib/i18n'

export default function MobileWhatsApp() {
  const locale = getLocaleFromPath(usePathname())
  return <a href={createWhatsAppUrl(common[locale].whatsappMessage as string)} target="_blank" rel="noopener noreferrer" data-track-event="whatsapp_click" data-track-label="mobile_sticky" className="fixed bottom-4 left-4 right-4 z-40 flex min-h-12 items-center justify-center gap-2 bg-brass px-5 py-3 text-sm font-semibold text-ink shadow-[0_14px_40px_rgba(0,0,0,0.3)] sm:hidden"><MessageCircle size={18} />{ui[locale].whatsapp}</a>
}

export function DocumentLanguage() {
  const locale = getLocaleFromPath(usePathname())
  const lang = locale === 'pt' ? 'pt-BR' : locale
  return <script dangerouslySetInnerHTML={{ __html: `document.documentElement.lang=${JSON.stringify(lang)}` }} />
}
