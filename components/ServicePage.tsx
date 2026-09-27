import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import StructuredData from '@/components/StructuredData'
import { createWhatsAppUrl, siteConfig } from '@/config/site'
import { common, getServiceContent, routeKeyForService, type ServiceKey } from '@/lib/site-content'
import { routes, type Locale } from '@/lib/i18n'

export default function ServicePage({ locale, service }: { locale: Locale; service: ServiceKey }) {
  const content = getServiceContent(locale, service)
  const shared = common[locale]
  const routeKey = routeKeyForService[service]
  const path = routes[routeKey][locale]
  const pageUrl = siteConfig.url + path
  const formMode = service === 'corporate' ? 'corporate' : service === 'private' ? 'private' : 'general'
  const labels = {
    possibilities: locale === 'pt' ? 'Formatos' : locale === 'en' ? 'Formats' : 'Formatos',
    scope: locale === 'pt' ? 'Escopo coordenado' : locale === 'en' ? 'Coordinated scope' : 'Alcance coordinado',
    value: locale === 'pt' ? 'O que muda para o cliente' : locale === 'en' ? 'What changes for the client' : 'Qué cambia para el cliente',
    faq: locale === 'pt' ? 'Perguntas frequentes' : locale === 'en' ? 'Frequently asked questions' : 'Preguntas frecuentes',
  }
  const schema = {
    '@context': 'https://schema.org', '@graph': [
      { '@type': 'Service', '@id': pageUrl + '#service', name: content.title, description: content.metaDescription, url: pageUrl, provider: { '@id': siteConfig.url + '/#organization' }, areaServed: { '@type': 'Country', name: 'Brazil' } },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Rios Lux', item: siteConfig.url + routes.home[locale] }, { '@type': 'ListItem', position: 2, name: content.eyebrow, item: pageUrl }] },
      { '@type': 'FAQPage', mainEntity: content.faq.map((item) => ({ '@type': 'Question', name: item.title, acceptedAnswer: { '@type': 'Answer', text: item.description } })) },
    ],
  }

  return <div>
    <StructuredData data={schema} />
    <section className="relative min-h-[78svh] overflow-hidden bg-ink">
      <Image src={content.image} alt="Editorial event reference" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,20,17,.92)_0%,rgba(5,20,17,.58)_58%,rgba(5,20,17,.25)_100%)]" />
      <div className="page-shell relative z-10 flex min-h-[78svh] flex-col justify-end pb-12 pt-24 sm:pb-16 lg:pb-20">
        <p className="eyebrow mb-6">{content.eyebrow}</p><h1 className="max-w-[76rem] text-balance font-serif text-[clamp(3.2rem,7.5vw,8rem)] font-medium leading-[0.87] tracking-[-0.045em]">{content.title}</h1>
        <div className="mt-8 grid max-w-6xl gap-7 border-t border-white/25 pt-7 lg:grid-cols-[1fr_auto] lg:items-end"><p className="max-w-3xl text-lg leading-relaxed text-sand/82 sm:text-xl">{content.intro}</p><div className="flex flex-col gap-3 sm:flex-row"><Link href="#iniciar" data-track-event="proposal_request" data-track-label={service + '_hero'} className="button-primary">{shared.primaryCta}<ArrowRight className="ml-2" size={16} /></Link><a href={createWhatsAppUrl(shared.whatsappMessage as string)} target="_blank" rel="noopener noreferrer" data-track-event="whatsapp_click" data-track-label={service + '_hero'} className="button-secondary"><MessageCircle className="mr-2" size={16} />WhatsApp</a></div></div>
      </div>
    </section>

    <section className="section-space bg-canvas text-ink"><div className="page-shell"><div className="max-w-5xl"><p className="eyebrow mb-5">{labels.possibilities}</p><h2 className="font-serif text-5xl font-medium leading-[0.96] sm:text-6xl">{content.contextsTitle}</h2></div><div className="mt-12 grid border-l border-t border-ink/20 sm:grid-cols-2 lg:grid-cols-4">{content.contexts.map((item, index) => <article key={item.title} className="min-h-64 border-b border-r border-ink/20 p-7"><span className="font-serif text-2xl text-brass-dark">{String(index + 1).padStart(2, '0')}</span><h3 className="mt-10 font-serif text-3xl font-medium leading-none">{item.title}</h3><p className="mt-5 leading-relaxed text-ink/65">{item.description}</p></article>)}</div></div></section>

    <section className="section-space bg-ink"><div className="page-shell grid gap-14 lg:grid-cols-[0.68fr_1.32fr] lg:gap-24"><div><p className="eyebrow mb-5">{shared.processKicker}</p><h2 className="font-serif text-5xl font-medium leading-[0.96] sm:text-6xl">{shared.processTitle}</h2></div><ol className="divide-y divide-white/15 border-y border-white/15">{shared.process.map((step, index) => <li key={step.title} className="grid gap-3 py-7 sm:grid-cols-[0.13fr_0.3fr_0.57fr] sm:gap-6"><span className="font-serif text-2xl text-brass">{String(index + 1).padStart(2, '0')}</span><h3 className="font-serif text-2xl text-white">{step.title}</h3><p className="leading-relaxed text-sand/65">{step.description}</p></li>)}</ol></div></section>

    <section className="section-space bg-canvas text-ink"><div className="page-shell grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24"><div><p className="eyebrow mb-5">{labels.scope}</p><h2 className="font-serif text-5xl font-medium leading-[0.96] sm:text-6xl">{content.valueTitle}</h2><p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/68">{content.valueCopy}</p></div><ul className="grid grid-cols-2 border-l border-t border-ink/20 sm:grid-cols-3">{content.scope.map((item) => <li key={item} className="flex min-h-28 items-end border-b border-r border-ink/20 p-5 text-sm font-medium text-ink/76">{item}</li>)}</ul></div></section>

    <section className="section-space bg-forest"><div className="page-shell grid gap-14 lg:grid-cols-[0.55fr_1.45fr] lg:gap-24"><div><p className="eyebrow mb-5">{labels.faq}</p><h2 className="font-serif text-5xl font-medium leading-none">{labels.value}</h2></div><div className="divide-y divide-white/15 border-y border-white/15">{content.faq.map((item) => <article key={item.title} className="py-7"><h3 className="font-serif text-2xl text-white sm:text-3xl">{item.title}</h3><p className="mt-4 max-w-3xl leading-relaxed text-sand/68">{item.description}</p></article>)}</div></div></section>

    <section id="iniciar" className="section-space scroll-mt-20 bg-ink"><div className="page-shell grid gap-12 lg:grid-cols-[0.6fr_1.4fr] lg:gap-24"><div><p className="eyebrow mb-5">{shared.formKicker}</p><h2 className="font-serif text-5xl font-medium leading-[0.96] sm:text-6xl">{shared.formTitle}</h2><p className="mt-6 max-w-md leading-relaxed text-sand/65">{shared.formIntro}</p></div><ContactForm locale={locale} mode={formMode} /></div></section>
  </div>
}
