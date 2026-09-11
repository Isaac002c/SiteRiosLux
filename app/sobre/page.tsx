import Image from 'next/image'
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

const values = [
  { title: 'Excelência', description: 'Cuidamos de cada detalhe como parte da experiência.' },
  { title: 'Confiança', description: 'Assumimos responsabilidade pelo que prometemos e pelo que entregamos.' },
  { title: 'Curadoria', description: 'Cada escolha deve ter intenção, coerência e propósito.' },
]

const team = [
  {
    name: 'Antônio',
    image: '/images/team/antonio.webp',
    role: 'Comercial, Curadoria & Experiência',
    description: 'Conduz diagnóstico, proposta, negociação, fechamento e direcionamento da experiência.',
  },
  {
    name: 'Isaac',
    image: '/images/team/isaac.webp',
    role: 'Growth, Tecnologia & Financeiro',
    description: 'Conduz estratégia, aquisição, tecnologia, estrutura e gestão financeira.',
  },
  {
    name: 'Manoel',
    image: '/images/team/manoel.webp',
    role: 'Operações, Fornecedores & Logística',
    description: 'Conduz viabilidade operacional, parceiros, negociação, produção e logística.',
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
            A Rios Lux é uma agência de eventos e experiências no Rio de Janeiro. Planejamos cada projeto como uma arquitetura única de intenção, hospitalidade e operação.
          </p>
        </div>
      </section>

      <section className="section-space bg-forest" aria-labelledby="about-values-title">
        <div className="page-shell grid gap-12 lg:grid-cols-[0.62fr_1.38fr] lg:gap-20">
          <div>
            <p className="eyebrow mb-5">O que orienta a Rios Lux</p>
            <h2 id="about-values-title" className="font-serif text-4xl leading-tight sm:text-5xl">Três valores presentes em cada decisão.</h2>
          </div>
          <div className="divide-y divide-white/15 border-y border-white/15">
            {values.map((value, index) => (
              <article key={value.title} className="grid gap-5 py-8 sm:grid-cols-[0.16fr_0.84fr] sm:gap-8">
                <span className="font-serif text-3xl text-brass">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-serif text-3xl text-white">{value.title}</h3>
                  <p className="mt-3 max-w-2xl leading-relaxed text-sand/70">{value.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-ink" aria-labelledby="about-team-title">
        <div className="page-shell">
          <div className="max-w-4xl">
            <p className="eyebrow mb-5">Quem está por trás</p>
            <h2 id="about-team-title" className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">Especialidades diferentes. Uma responsabilidade compartilhada.</h2>
            <p className="mt-6 max-w-3xl leading-relaxed text-sand/65">A estrutura foi desenhada para manter diagnóstico, estratégia e execução conectados desde o primeiro contato.</p>
          </div>
          <p className="mt-8 text-sm text-sand/75 sm:hidden">Deslize para conhecer os fundadores →</p>
          <div className="mobile-snap-carousel mt-4 grid gap-5 sm:mt-12 lg:grid-cols-3" role="region" aria-label="Fundadores da Rios Lux">
            {team.map((member, index) => (
              <article key={member.name} className="mobile-snap-item overflow-hidden border border-white/15 bg-white/[0.025]">
                <div className="relative aspect-[4/5] overflow-hidden bg-forest">
                  <Image
                    src={member.image}
                    alt={`Retrato de ${member.name}, fundador da Rios Lux`}
                    fill
                    sizes="(min-width: 1024px) 32vw, (min-width: 640px) 45vw, 84vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-7 sm:p-8">
                  <span className="text-xs font-semibold tracking-[0.2em] text-brass">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="mt-7 font-serif text-4xl text-white">{member.name}</h3>
                  <p className="mt-4 text-xs font-semibold uppercase leading-relaxed tracking-[0.15em] text-brass">{member.role}</p>
                  <p className="mt-5 leading-relaxed text-sand/70">{member.description}</p>
                </div>
              </article>
            ))}
          </div>
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
            Falar com a Rios Lux <ArrowRight className="ml-2" size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
