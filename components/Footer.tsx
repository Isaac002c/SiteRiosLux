'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Mail, MapPin, Phone } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { siteConfig } from '@/config/site'
import { getLocaleFromPath, routes, ui } from '@/lib/i18n'

export default function Footer() {
  const locale = getLocaleFromPath(usePathname())
  const labels = ui[locale]
  const services = [
    { href: routes.private[locale], label: labels.nav.private }, { href: routes.corporate[locale], label: labels.nav.corporate },
    { href: routes.brand[locale], label: labels.nav.brand }, { href: routes.concierge[locale], label: labels.concierge },
  ]
  const navigation = [
    { href: routes.projects[locale], label: labels.nav.projects }, { href: routes.coverage[locale], label: labels.nav.coverage },
    { href: routes.about[locale], label: labels.about }, { href: routes.contact[locale], label: labels.contact },
  ]

  return <footer className="border-t border-white/10 bg-ink text-white"><div className="page-shell py-16 sm:py-20">
    <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_0.8fr_1fr]">
      <div><Link href={routes.home[locale]} aria-label="Rios Lux" className="inline-flex min-h-11 items-center"><Image src="/brand/rios-lux-wordmark.png" alt="Rios Lux" width={639} height={336} className="h-20 w-auto object-contain" /></Link><p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-brass">{locale === 'en' ? 'Experience Architecture' : locale === 'es' ? 'Arquitectura de Experiencias' : 'Arquitetura de Experiências'}</p><p className="mt-6 max-w-sm text-sm leading-relaxed text-sand/65">{labels.base}</p><a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram @agenciarioslux" className="mt-7 inline-flex min-h-11 items-center gap-3 text-sm text-sand/75 transition hover:text-white"><Instagram size={17} className="text-brass" /> @agenciarioslux</a></div>
      <FooterLinks title={labels.services} items={services} /><FooterLinks title={labels.company} items={navigation} />
      <div><p className="eyebrow mb-5">{labels.contact}</p><address className="space-y-4 not-italic"><a href={`tel:${siteConfig.phoneHref}`} data-track-event="phone_click" data-track-label="footer" className="flex min-h-11 items-center gap-3 text-sm text-sand/75 transition hover:text-white"><Phone size={16} className="text-brass" />{siteConfig.phoneDisplay}</a><a href={`mailto:${siteConfig.email}`} data-track-event="email_click" data-track-label="footer" className="flex min-h-11 items-center gap-3 break-all text-sm text-sand/75 transition hover:text-white"><Mail size={16} className="shrink-0 text-brass" />{siteConfig.email}</a><p className="flex items-center gap-3 text-sm text-sand/75"><MapPin size={16} className="text-brass" />Rio de Janeiro · Brasil</p></address></div>
    </div>
    <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-xs text-sand/55 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Rios Lux. {labels.rights}</p><Link href={routes.privacy[locale]} className="inline-flex min-h-11 items-center transition hover:text-white">{labels.privacy}</Link></div>
  </div></footer>
}

function FooterLinks({ title, items }: { title: string; items: { href: string; label: string }[] }) {
  return <div><p className="eyebrow mb-5">{title}</p><ul className="space-y-2">{items.map((item) => <li key={item.href}><Link href={item.href} className="inline-flex min-h-10 items-center text-sm text-sand/70 transition hover:text-white">{item.label}</Link></li>)}</ul></div>
}
