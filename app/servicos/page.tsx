import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Eventos Corporativos e Experiências Exclusivas | Rios Lux',
  description: 'Consultoria, planejamento e produção de eventos corporativos, celebrações privadas e experiências no Rio de Janeiro.',
  alternates: { canonical: '/servicos' },
  openGraph: {
    type: 'website',
    title: 'Eventos Corporativos e Experiências Exclusivas | Rios Lux',
    description: 'Conheça as frentes de atuação e o escopo de coordenação da Rios Lux no Rio de Janeiro.',
    url: '/servicos',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Rios Lux — Arquitetura de Experiências' }],
  },
}

const categories = [
  {
    number: '01',
    label: 'Corporate',
    title: 'Eventos que fortalecem marcas, negócios e relações.',
    description: 'Encontros executivos, experiências para clientes, lançamentos, eventos corporativos e ativações de marca.',
    examples: ['Encontros executivos', 'Lançamentos', 'Experiências de marca', 'Recepção de clientes'],
  },
  {
    number: '02',
    label: 'Private',
    title: 'Celebrações que traduzem histórias pessoais.',
    description: 'Casamentos, aniversários, jantares e ocasiões especiais com planejamento sob medida.',
    examples: ['Casamentos', 'Aniversários', 'Jantares', 'Celebrações especiais'],
  },
  {
    number: '03',
    label: 'Lifestyle',
    title: 'Hospitalidade e experiências pensadas para cada ritmo.',
    description: 'Consultoria de experiências e concierge para momentos no Rio de Janeiro.',
    examples: ['Consultoria local', 'Hospitalidade', 'Reservas e logística', 'Concierge'],
  },
]

const scope = [
  'Conceito',
  'Planejamento',
  'Consultoria de parceiros',
  'Espaços',
  'Gastronomia',
  'Decoração',
  'Audiovisual',
  'Logística',
  'Recepção',
  'Concierge',
  'Produção',
  'Operação',
]

export default function Servicos() {
  return (
    <div>
      <section className="section-space bg-forest">
        <div className="page-shell pt-10 sm:pt-16">
          <p className="eyebrow mb-6">Serviços</p>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <h1 className="max-w-5xl text-balance font-serif text-5xl leading-[0.98] sm:text-6xl lg:text-8xl">
              Uma direção completa, do primeiro pensamento à última entrega.
            </h1>
            <p className="max-w-xl border-l border-white/20 pl-6 text-lg leading-relaxed text-sand/70">
              A Rios Lux coordena as decisões, as pessoas e a operação necessárias para transformar intenção em experiência.
            </p>
          </div>
        </div>
      </section>

      <section className="section-space bg-canvas text-ink">
        <div className="page-shell">
          <div className="divide-y divide-ink/20 border-y border-ink/20">
            {categories.map((category) => (
              <article key={category.label} className="grid gap-8 py-12 lg:grid-cols-[0.2fr_0.8fr_1fr] lg:gap-14 lg:py-16">
                <p className="font-serif text-4xl text-brass">{category.number}</p>
                <div>
                  <p className="eyebrow mb-5">{category.label}</p>
                  <h2 className="max-w-lg font-serif text-3xl leading-tight sm:text-4xl">{category.title}</h2>
                  <p className="mt-5 max-w-lg leading-relaxed text-ink/65">{category.description}</p>
                </div>
                <ul className="grid content-start gap-0 sm:grid-cols-2">
                  {category.examples.map((item) => (
                    <li key={item} className="border-b border-ink/15 py-4 text-sm text-ink/75">{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-ink">
        <div className="page-shell grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <div>
            <p className="eyebrow mb-5">Coordenação integral</p>
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">Tudo conversa. Tudo tem uma direção.</h2>
            <p className="mt-6 max-w-md leading-relaxed text-sand/65">
              O escopo é definido de acordo com cada projeto. A Rios Lux conecta as frentes necessárias e mantém a visão do todo.
            </p>
          </div>
          <div className="grid grid-cols-2 border-l border-t border-white/15 sm:grid-cols-3">
            {scope.map((item, index) => (
              <div key={item} className="min-h-28 border-b border-r border-white/15 p-5">
                <span className="block text-[10px] tracking-[0.2em] text-brass">{String(index + 1).padStart(2, '0')}</span>
                <span className="mt-5 block text-sm text-sand">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-canvas py-16 text-ink">
        <div className="page-shell flex flex-col justify-between gap-6 border-t border-ink/20 pt-8 sm:flex-row sm:items-center">
          <p className="max-w-2xl font-serif text-2xl">Cada projeto começa entendendo o que precisa ser vivido — e o que precisa funcionar.</p>
          <Link href="/contato" data-track-event="click_consultoria" data-track-label="services" className="button-dark shrink-0">
            Solicitar consultoria <ArrowRight className="ml-2" size={16} />
          </Link>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
