import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import CTASection from '@/components/CTASection'
import StructuredData from '@/components/StructuredData'
import { siteConfig } from '@/config/site'
import type { AnalyticsEvent } from '@/lib/analytics'

type ContentItem = {
  title: string
  description: string
}

type FAQItem = {
  question: string
  answer: string
}

type RelatedLink = {
  href: string
  label: string
}

type CommercialLandingProps = {
  path: `/${string}`
  eyebrow: string
  title: string
  intro: string
  serviceName: string
  serviceDescription: string
  typesTitle: string
  types: ContentItem[]
  approachIntro: string
  approach: ContentItem[]
  scope: string[]
  differentials: string[]
  faqs: FAQItem[]
  relatedLinks: RelatedLink[]
  ctaEvent: AnalyticsEvent
}

export default function CommercialLanding({
  path,
  eyebrow,
  title,
  intro,
  serviceName,
  serviceDescription,
  typesTitle,
  types,
  approachIntro,
  approach,
  scope,
  differentials,
  faqs,
  relatedLinks,
  ctaEvent,
}: CommercialLandingProps) {
  const pageUrl = `${siteConfig.url}${path}`
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: serviceName,
        description: serviceDescription,
        url: pageUrl,
        provider: { '@id': `${siteConfig.url}/#organization` },
        areaServed: { '@type': 'City', name: 'Rio de Janeiro' },
        availableChannel: {
          '@type': 'ServiceChannel',
          serviceUrl: `${siteConfig.url}/contato`,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: `${siteConfig.url}/` },
          { '@type': 'ListItem', position: 2, name: 'Serviços', item: `${siteConfig.url}/servicos` },
          { '@type': 'ListItem', position: 3, name: serviceName, item: pageUrl },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ],
  }

  return (
    <div>
      <StructuredData data={structuredData} />

      <section className="section-space bg-forest">
        <div className="page-shell pt-8 sm:pt-14">
          <nav aria-label="Navegação estrutural" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-sand/70">
            <Link href="/" className="transition hover:text-white">Início</Link>
            <span aria-hidden="true">/</span>
            <Link href="/servicos" className="transition hover:text-white">Serviços</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="text-sand/85">{serviceName}</span>
          </nav>
          <p className="eyebrow mb-6">{eyebrow}</p>
          <h1 className="max-w-6xl text-balance font-serif text-5xl leading-[0.96] sm:text-6xl lg:text-8xl">{title}</h1>
          <div className="mt-9 grid gap-7 border-t border-white/20 pt-7 lg:grid-cols-[1fr_auto] lg:items-end">
            <p className="max-w-3xl text-lg leading-relaxed text-sand/75 sm:text-xl">{intro}</p>
            <Link
              href="/contato"
              data-track-event={ctaEvent}
              data-track-label={`${path}:hero`}
              className="button-primary shrink-0"
            >
              Solicitar consultoria <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space bg-canvas text-ink" aria-labelledby="types-title">
        <div className="page-shell">
          <div className="max-w-4xl">
            <p className="eyebrow mb-5">Possibilidades</p>
            <h2 id="types-title" className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">{typesTitle}</h2>
          </div>
          <div className="mt-12 grid border-l border-t border-ink/20 sm:grid-cols-2 lg:grid-cols-3">
            {types.map((item, index) => (
              <article key={item.title} className="min-h-64 border-b border-r border-ink/20 p-7 sm:p-8">
                <span className="text-xs font-semibold tracking-[0.2em] text-brass-dark">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-10 font-serif text-2xl leading-tight sm:text-3xl">{item.title}</h3>
                <p className="mt-5 leading-relaxed text-ink/70">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-ink" aria-labelledby="approach-title">
        <div className="page-shell grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <div>
            <p className="eyebrow mb-5">Como trabalhamos</p>
            <h2 id="approach-title" className="font-serif text-4xl leading-tight sm:text-5xl">Direção clara em todas as etapas.</h2>
            <p className="mt-6 max-w-md leading-relaxed text-sand/70">{approachIntro}</p>
          </div>
          <ol className="divide-y divide-white/15 border-y border-white/15">
            {approach.map((item, index) => (
              <li key={item.title} className="grid gap-5 py-8 sm:grid-cols-[0.15fr_0.85fr] sm:gap-8">
                <span className="font-serif text-3xl text-brass">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-serif text-2xl text-white sm:text-3xl">{item.title}</h3>
                  <p className="mt-3 max-w-2xl leading-relaxed text-sand/70">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-space bg-canvas text-ink" aria-labelledby="scope-title">
        <div className="page-shell grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <p className="eyebrow mb-5">Escopo coordenado</p>
            <h2 id="scope-title" className="font-serif text-4xl leading-tight sm:text-5xl">Do planejamento à experiência do convidado.</h2>
          </div>
          <div>
            <ul className="grid grid-cols-2 border-l border-t border-ink/20 sm:grid-cols-3">
              {scope.map((item) => (
                <li key={item} className="flex min-h-24 items-end break-words border-b border-r border-ink/20 p-4 text-sm font-medium text-ink/80 sm:p-5">{item}</li>
              ))}
            </ul>
            <div className="mt-12 border-t border-ink/20 pt-8">
              <p className="eyebrow mb-5">Diferenciais de condução</p>
              <ul className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
                {differentials.map((item) => (
                  <li key={item} className="flex gap-4 leading-relaxed text-ink/72">
                    <span aria-hidden="true" className="mt-2 h-px w-5 shrink-0 bg-brass-dark" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-forest" aria-labelledby="faq-title">
        <div className="page-shell grid gap-12 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">
          <div>
            <p className="eyebrow mb-5">Perguntas frequentes</p>
            <h2 id="faq-title" className="font-serif text-4xl leading-tight sm:text-5xl">Antes de iniciar o projeto.</h2>
          </div>
          <div className="divide-y divide-white/15 border-y border-white/15">
            {faqs.map((faq) => (
              <article key={faq.question} className="py-7">
                <h3 className="font-serif text-2xl text-white">{faq.question}</h3>
                <p className="mt-4 max-w-3xl leading-relaxed text-sand/70">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-canvas py-14 text-ink">
        <div className="page-shell flex flex-col gap-6 border-t border-ink/20 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif text-2xl">Explore também outras frentes da Rios Lux.</p>
          <nav aria-label="Serviços relacionados" className="flex flex-wrap gap-x-6 gap-y-3">
            {relatedLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-semibold text-ink/70 underline decoration-brass-dark/60 underline-offset-4 transition hover:text-ink">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
