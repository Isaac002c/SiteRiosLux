import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const principles = [
  {
    number: '01',
    title: 'Escuta antes de proposta',
    description: 'Cada trabalho começa pelo contexto, pelas pessoas e pelo que a ocasião precisa comunicar.',
  },
  {
    number: '02',
    title: 'Visão do todo',
    description: 'Conceito, parceiros, prazos, orçamento, logística e experiência são tratados como partes da mesma arquitetura.',
  },
  {
    number: '03',
    title: 'Presença na operação',
    description: 'Planejar é antecipar. Produzir é conduzir escolhas e respostas sem perder a intenção inicial.',
  },
]

export default function Sobre() {
  return (
    <div>
      <section className="section-space bg-canvas text-ink">
        <div className="page-shell pt-10 sm:pt-16">
          <p className="eyebrow mb-6">Sobre a Rios Lux</p>
          <h1 className="max-w-6xl text-balance font-serif text-5xl leading-[0.96] sm:text-6xl lg:text-8xl">
            Mais do que organizar eventos.
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-ink/68 sm:text-2xl">
            A Rios Lux transforma momentos importantes em experiências cuidadosamente arquitetadas.
          </p>
        </div>
      </section>

      <section className="section-space bg-forest">
        <div className="page-shell grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <p className="eyebrow">Nossa perspectiva</p>
          <div className="space-y-7 font-serif text-2xl leading-relaxed text-sand sm:text-3xl lg:text-4xl">
            <p>Uma boa experiência não começa pela decoração. Começa pela intenção.</p>
            <p className="text-sand/70">
              É a partir dela que organizamos conceito, planejamento, consultoria, parceiros e operação — com decisões coerentes do início ao fim.
            </p>
          </div>
        </div>
      </section>

      <section className="section-space bg-canvas text-ink">
        <div className="page-shell">
          <div className="mb-14 grid gap-8 lg:grid-cols-2 lg:items-end">
            <h2 className="max-w-xl font-serif text-4xl leading-tight sm:text-5xl">Cuidado percebido em cada etapa.</h2>
            <p className="max-w-xl leading-relaxed text-ink/62">
              O trabalho da Rios Lux é tornar o complexo legível: organizar prioridades, conectar especialistas e sustentar a qualidade da experiência sem ruído.
            </p>
          </div>
          <div className="grid border-y border-ink/20 lg:grid-cols-3">
            {principles.map((principle, index) => (
              <article key={principle.title} className={`py-10 lg:px-9 lg:py-12 ${index > 0 ? 'border-t border-ink/20 lg:border-l lg:border-t-0' : ''}`}>
                <p className="font-serif text-3xl text-brass">{principle.number}</p>
                <h3 className="mt-10 font-serif text-2xl">{principle.title}</h3>
                <p className="mt-4 leading-relaxed text-ink/62">{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-ink">
        <div className="page-shell grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="eyebrow mb-5">Uma experiência é pessoal</p>
            <h2 className="max-w-4xl font-serif text-4xl leading-tight sm:text-6xl">
              Por isso, nosso processo começa com uma conversa.
            </h2>
          </div>
          <Link href="/contato" data-track-event="contact_start" data-track-label="about" className="button-primary">
            Solicitar consultoria <ArrowRight className="ml-2" size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
