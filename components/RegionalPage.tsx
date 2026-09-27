import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, MessageCircle } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import StructuredData from '@/components/StructuredData'
import { createWhatsAppUrl, siteConfig } from '@/config/site'
import { common, getRegionalContent, type RegionalKey } from '@/lib/site-content'
import { routes, type Locale } from '@/lib/i18n'

export default function RegionalPage({ locale, region }: { locale: Locale; region: RegionalKey }) {
  const content = getRegionalContent(locale, region)
  const shared = common[locale]
  const path = routes[region][locale]
  const labels = locale === 'pt'
    ? { kicker: 'Eventos privados · Atuação', coverage: 'Área de atendimento', approach: 'Operação no destino', more: 'Ver todas as regiões' }
    : locale === 'en'
      ? { kicker: 'Private events · Coverage', coverage: 'Areas served', approach: 'Destination operations', more: 'View all regions' }
      : { kicker: 'Eventos privados · Actuación', coverage: 'Área de atención', approach: 'Operación en destino', more: 'Ver todas las regiones' }
  const schema = { '@context': 'https://schema.org', '@type': 'Service', name: content.title, description: content.metaDescription, url: siteConfig.url + path, provider: { '@id': siteConfig.url + '/#organization' }, areaServed: content.nearby.map((name) => ({ '@type': region === 'regionalBrasil' ? 'AdministrativeArea' : 'City', name })) }

  return <div>
    <StructuredData data={schema} />
    <section className="relative min-h-[72svh] overflow-hidden bg-ink">
      <Image src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2400&q=86" alt="Editorial private event reference" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,20,17,.94)_0%,rgba(5,20,17,.6)_62%,rgba(5,20,17,.25)_100%)]" />
      <div className="page-shell relative z-10 flex min-h-[72svh] flex-col justify-end pb-12 pt-24 sm:pb-16"><p className="eyebrow mb-6">{labels.kicker}</p><h1 className="max-w-[78rem] text-balance font-serif text-[clamp(3.1rem,7vw,7.6rem)] font-medium leading-[0.88] tracking-[-0.04em]">{content.title}</h1><div className="mt-8 grid max-w-6xl gap-7 border-t border-white/25 pt-7 lg:grid-cols-[1fr_auto] lg:items-end"><p className="max-w-3xl text-lg leading-relaxed text-sand/78 sm:text-xl">{content.intro}</p><div className="flex flex-col gap-3 sm:flex-row"><Link href="#iniciar" data-track-event="proposal_request" data-track-label={region} className="button-primary">{shared.primaryCta}<ArrowRight className="ml-2" size={16} /></Link><a href={createWhatsAppUrl(shared.whatsappMessage as string)} target="_blank" rel="noopener noreferrer" data-track-event="whatsapp_click" data-track-label={region} className="button-secondary"><MessageCircle className="mr-2" size={16} />WhatsApp</a></div></div></div>
    </section>

    <section className="section-space bg-canvas text-ink"><div className="page-shell"><p className="eyebrow mb-5">{labels.approach}</p><div className="grid border-l border-t border-ink/20 lg:grid-cols-3">{[
      { title: content.operationsTitle, description: content.operationsCopy }, { title: content.logisticsTitle, description: content.logisticsCopy }, { title: content.contextTitle, description: content.contextCopy },
    ].map((item, index) => <article key={item.title} className="min-h-72 border-b border-r border-ink/20 p-7 sm:p-9"><span className="font-serif text-2xl text-brass-dark">{String(index + 1).padStart(2, '0')}</span><h2 className="mt-10 font-serif text-3xl font-medium leading-[1.02] sm:text-4xl">{item.title}</h2><p className="mt-5 leading-relaxed text-ink/65">{item.description}</p></article>)}</div></div></section>

    <section className="section-space bg-forest"><div className="page-shell grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24"><div><p className="eyebrow mb-5">{labels.coverage}</p><h2 className="font-serif text-5xl font-medium leading-[0.96] sm:text-6xl">{content.city}{content.state ? ' · ' + content.state : ''}</h2><Link href={routes.coverage[locale]} className="mt-8 inline-flex items-center text-xs font-semibold uppercase tracking-[0.14em] text-brass">{labels.more}<ArrowRight className="ml-2" size={15} /></Link></div><ul className="grid border-l border-t border-white/15 sm:grid-cols-2">{content.nearby.map((place) => <li key={place} className="flex min-h-28 items-end gap-3 border-b border-r border-white/15 p-6 font-serif text-2xl text-white"><MapPin size={16} className="mb-1 shrink-0 text-brass" />{place}</li>)}</ul></div></section>

    <section className="section-space bg-canvas text-ink"><div className="page-shell grid gap-14 lg:grid-cols-[0.62fr_1.38fr] lg:gap-24"><div><p className="eyebrow mb-5">{shared.processKicker}</p><h2 className="font-serif text-5xl font-medium leading-[0.96] sm:text-6xl">{shared.processTitle}</h2></div><ol className="divide-y divide-ink/20 border-y border-ink/20">{shared.process.map((step, index) => <li key={step.title} className="grid gap-3 py-7 sm:grid-cols-[0.13fr_0.3fr_0.57fr] sm:gap-6"><span className="font-serif text-2xl text-brass-dark">{String(index + 1).padStart(2, '0')}</span><h3 className="font-serif text-2xl">{step.title}</h3><p className="leading-relaxed text-ink/65">{step.description}</p></li>)}</ol></div></section>

    <section id="iniciar" className="section-space scroll-mt-20 bg-ink"><div className="page-shell grid gap-12 lg:grid-cols-[0.6fr_1.4fr] lg:gap-24"><div><p className="eyebrow mb-5">{shared.formKicker}</p><h2 className="font-serif text-5xl font-medium leading-[0.96] sm:text-6xl">{shared.formTitle}</h2><p className="mt-6 max-w-md leading-relaxed text-sand/65">{shared.formIntro}</p></div><ContactForm locale={locale} mode="private" /></div></section>
  </div>
}
