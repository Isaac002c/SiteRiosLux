'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { getLocaleFromPath, routes, switchLocale, ui, type Locale } from '@/lib/i18n'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const locale = getLocaleFromPath(pathname)
  const labels = ui[locale]
  const navigation = [
    { href: routes.private[locale], label: labels.nav.private },
    { href: routes.corporate[locale], label: labels.nav.corporate },
    { href: routes.brand[locale], label: labels.nav.brand },
    { href: routes.projects[locale], label: labels.nav.projects },
    { href: routes.coverage[locale], label: labels.nav.coverage },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/92 backdrop-blur-xl">
      <nav className="mx-auto flex h-[4.5rem] max-w-[96rem] items-center justify-between px-5 sm:px-8 lg:px-10" aria-label={labels.navigation}>
        <Link href={routes.home[locale]} aria-label="Rios Lux" className="flex min-h-11 items-center">
          <Image src="/brand/rios-lux-wordmark.png" alt="Rios Lux" width={639} height={336} priority className="h-12 w-auto object-contain" />
        </Link>

        <div className="hidden items-center gap-5 xl:flex 2xl:gap-7">
          {navigation.map((item) => <Link key={item.href} href={item.href} className="text-[13px] tracking-[0.04em] text-sand/76 transition-colors hover:text-white">{item.label}</Link>)}
          <LanguageSwitcher pathname={pathname} locale={locale} />
          <Link href={routes.contact[locale]} data-track-event="proposal_request" data-track-label="header" className="button-primary !min-h-10 !px-5 !py-2.5">{labels.contact}</Link>
        </div>

        <details className="group xl:hidden">
          <summary aria-controls="mobile-navigation" className="inline-flex h-11 w-11 cursor-pointer list-none items-center justify-center border border-white/15 text-white [&::-webkit-details-marker]:hidden">
            <span className="sr-only group-open:hidden">{labels.menuOpen}</span><span className="sr-only hidden group-open:inline">{labels.menuClose}</span>
            <Menu aria-hidden="true" className="group-open:hidden" size={21} /><X aria-hidden="true" className="hidden group-open:block" size={21} />
          </summary>
          <div id="mobile-navigation" className="fixed inset-x-0 top-[4.5rem] max-h-[calc(100svh-4.5rem)] overflow-y-auto border-t border-white/10 bg-ink px-5 pb-8 pt-3 shadow-2xl">
            <div className="mx-auto flex max-w-[90rem] flex-col">
              {navigation.map((item) => <Link key={item.href} href={item.href} className="border-b border-white/10 py-3.5 font-serif text-2xl text-sand">{item.label}</Link>)}
              <Link href={routes.concierge[locale]} className="border-b border-white/10 py-3.5 font-serif text-2xl text-sand">{labels.concierge}</Link>
              <Link href={routes.about[locale]} className="border-b border-white/10 py-3.5 font-serif text-2xl text-sand">{labels.about}</Link>
              <div className="flex items-center justify-between gap-5 pt-6"><LanguageSwitcher pathname={pathname} locale={locale} /><Link href={routes.contact[locale]} data-track-event="proposal_request" data-track-label="mobile_header" className="button-primary !min-h-10 !px-5 !py-2.5">{labels.contact}</Link></div>
            </div>
          </div>
        </details>
      </nav>
    </header>
  )
}

function LanguageSwitcher({ pathname, locale }: { pathname: string; locale: Locale }) {
  return <div className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.18em] text-sand/55" aria-label="Language">{(['pt', 'en', 'es'] as const).map((target, index) => <span className="contents" key={target}>{index ? <span aria-hidden="true" className="text-white/20">/</span> : null}<Link href={switchLocale(pathname, target)} hrefLang={target === 'pt' ? 'pt-BR' : target} className={target === locale ? 'text-brass' : 'transition hover:text-white'}>{target.toUpperCase()}</Link></span>)}</div>
}
