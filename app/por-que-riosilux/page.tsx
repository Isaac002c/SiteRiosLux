import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Como Trabalhamos | Rios Lux',
  description: 'Conheça o processo de briefing, conceito, curadoria, planejamento e produção da Rios Lux.',
  alternates: { canonical: '/por-que-riosilux' },
  openGraph: {
    type: 'website',
    title: 'Como Trabalhamos | Rios Lux',
    description: 'Uma direção clara para transformar ideias em experiências bem coordenadas.',
    url: '/por-que-riosilux',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Rios Lux — Arquitetura de Experiências' }],
  },
}

const steps = [
  ['01', 'Briefing', 'Entendemos intenção, contexto, pessoas, prioridades e limites do projeto.'],
  ['02', 'Conceito', 'Traduzimos o briefing em uma direção capaz de orientar todas as escolhas.'],
  ['03', 'Curadoria', 'Selecionamos espaços, parceiros e soluções coerentes com essa direção.'],
  ['04', 'Planejamento', 'Organizamos escopo, responsabilidades, cronograma, logística e pontos de atenção.'],
  ['05', 'Produção', 'Coordenamos fornecedores, montagem, recepção e operação do evento.'],
  ['06', 'Experiência', 'Conduzimos o fluxo para que cada parte aconteça no momento certo.'],
]

export default function ComoTrabalhamos() {
  return (
    <div>
      <section className="section-space bg-forest">
        <div className="page-shell pt-10 sm:pt-16">
          <p className="eyebrow mb-6">Como trabalhamos</p>
          <h1 className="max-w-6xl text-balance font-serif text-5xl leading-[0.96] sm:text-6xl lg:text-8xl">
            Organização é o que permite que a experiência pareça simples.
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-sand/68">
            Uma direção clara, decisões conectadas e presença na operação do início ao fim.
          </p>
        </div>
      </section>

      <section className="section-space bg-canvas text-ink">
        <div className="page-shell">
          <p className="eyebrow mb-5">Da ideia à experiência</p>
          <div className="divide-y divide-ink/20 border-y border-ink/20">
            {steps.map(([number, title, description]) => (
              <article key={number} className="grid gap-5 py-8 sm:grid-cols-[0.2fr_0.5fr_1fr] sm:items-start sm:gap-8 lg:py-10">
                <p className="font-serif text-3xl text-brass">{number}</p>
                <h2 className="font-serif text-2xl">{title}</h2>
                <p className="max-w-2xl leading-relaxed text-ink/62">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-ink">
        <div className="page-shell grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <h2 className="max-w-4xl font-serif text-4xl leading-tight sm:text-6xl">A tranquilidade está no processo — antes de estar no resultado.</h2>
          <Link href="/contato" data-track-event="click_curadoria" data-track-label="process_page" className="button-primary">
            Solicitar curadoria <ArrowRight className="ml-2" size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
