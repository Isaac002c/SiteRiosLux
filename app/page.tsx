import Image from 'next/image'
import Link from 'next/link'
import { ArrowDownRight, ArrowRight } from 'lucide-react'
import CTASection from '@/components/CTASection'
import SocialProof from '@/components/SocialProof'

const services = [
  {
    number: '01',
    label: 'Corporate',
    href: '/eventos-corporativos-rio-de-janeiro',
    event: 'corporate_cta_click' as const,
    title: 'Encontros que movimentam negócios e relações.',
    description: 'Eventos corporativos, lançamentos, encontros executivos e experiências de marca.',
  },
  {
    number: '02',
    label: 'Private',
    href: '/eventos-privados-rio-de-janeiro',
    event: 'private_cta_click' as const,
    title: 'Celebrações desenhadas a partir de cada história.',
    description: 'Casamentos, aniversários, jantares e ocasiões privadas conduzidas com atenção integral.',
  },
  {
    number: '03',
    label: 'Lifestyle',
    href: '/concierge-rio-de-janeiro',
    event: 'concierge_cta_click' as const,
    title: 'Consultoria para viver o Rio de outra maneira.',
    description: 'Experiências, hospitalidade e concierge conectados ao ritmo de cada cliente.',
  },
]

const process = ['Briefing', 'Conceito', 'Consultoria', 'Planejamento', 'Produção', 'Experiência']

const concepts = [
  {
    title: 'Encontros corporativos',
    category: 'Corporate',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=82',
  },
  {
    title: 'Celebrações privadas',
    category: 'Private',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=82',
  },
  {
    title: 'Hospitalidade e lifestyle',
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=82',
  },
]

export default function Home() {
  return (
    <div>
      <section className="relative flex min-h-[calc(100svh-5rem)] items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2400&q=85"
          alt="Ambiente preparado para uma experiência especial"
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/25 via-ink/35 to-ink/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/65 via-transparent to-transparent" />

        <div className="hero-reveal page-shell relative z-10 pb-14 pt-28 sm:pb-20 lg:pb-24">
          <p className="eyebrow mb-6 text-sand/80">Rios Lux</p>
          <p className="mb-5 font-serif text-2xl text-brass sm:text-3xl">Experiências que não se repetem.</p>
          <h1 className="max-w-6xl text-balance font-serif text-[clamp(3rem,7.4vw,7.25rem)] leading-[0.9] tracking-[-0.045em] text-white">
            Eventos e experiências de alto padrão no Rio de Janeiro.
          </h1>
          <div className="mt-8 grid max-w-5xl gap-7 border-t border-white/25 pt-7 lg:grid-cols-[1fr_auto] lg:items-end">
            <p className="max-w-2xl text-base leading-relaxed text-sand/85 sm:text-lg">
              Eventos corporativos, celebrações privadas e experiências com consultoria, concierge e execução completa.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/contato" data-track-event="contact_start" data-track-label="hero" className="button-primary">
                Solicitar uma consultoria <ArrowRight className="ml-2" size={16} />
              </Link>
              <Link href="/experiencias" className="button-secondary">
                Conhecer experiências
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-canvas text-ink">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <div>
            <p className="eyebrow mb-5">Arquitetura de experiências</p>
            <h2 className="text-balance font-serif text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              Você imagina. Nós planejamos, conectamos e executamos.
            </h2>
          </div>
          <div className="flex flex-col justify-end border-l border-ink/20 pl-6 sm:pl-10">
            <p className="max-w-2xl text-lg leading-relaxed text-ink/72 sm:text-xl">
              A Rios Lux transforma uma intenção em uma operação coordenada. Conceito, planejamento, consultoria de parceiros, produção e experiência caminham sob uma mesma direção.
            </p>
            <p className="mt-7 max-w-xl text-sm leading-relaxed text-ink/70">
              Antecipamos riscos e conduzimos cada etapa para que você possa estar presente no que realmente importa.
            </p>
          </div>
        </div>
      </section>

      <section className="section-space bg-ink">
        <div className="page-shell">
          <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow mb-4">Frentes de atuação</p>
              <h2 className="font-serif text-4xl sm:text-5xl">Uma direção. Diferentes formatos.</h2>
            </div>
            <Link href="/servicos" className="inline-flex items-center text-sm text-sand/70 transition hover:text-white">
              Ver todos os serviços <ArrowDownRight className="ml-2" size={17} />
            </Link>
          </div>
          <div className="grid border-t border-white/15 lg:grid-cols-3">
            {services.map((service, index) => (
              <Link
                href={service.href}
                key={service.label}
                data-track-event={service.event}
                data-track-label="home_service"
                className={`group py-10 transition hover:bg-white/[0.035] lg:px-9 lg:py-12 ${index > 0 ? 'border-t border-white/15 lg:border-l lg:border-t-0' : ''}`}
              >
              <article>
                <div className="mb-12 flex items-center justify-between text-xs uppercase tracking-[0.22em] text-brass">
                  <span>{service.number}</span>
                  <span>{service.label}</span>
                </div>
                <h3 className="max-w-sm font-serif text-3xl leading-tight text-white">{service.title}</h3>
                <p className="mt-6 max-w-sm leading-relaxed text-sand/65">{service.description}</p>
                <p className="mt-8 inline-flex items-center text-sm font-semibold text-brass transition group-hover:text-sand">
                  Conhecer esta frente <ArrowRight className="ml-2" size={16} />
                </p>
              </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-canvas text-ink">
        <div className="page-shell">
          <div className="mb-12 max-w-3xl">
            <p className="eyebrow mb-5">Conceitos de experiência</p>
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">Possibilidades Rios Lux</h2>
            <p className="mt-5 text-ink/65">Imagens de referência para apresentar atmosferas e formatos possíveis — não representam cases realizados.</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-12">
            {concepts.map((concept, index) => (
              <Link
                href="/experiencias"
                key={concept.title}
                data-track-event="experience_view"
                data-track-label={concept.category.toLowerCase()}
                className={`group relative min-h-[28rem] overflow-hidden ${index === 0 ? 'lg:col-span-6' : 'lg:col-span-3'}`}
              >
                <Image src={concept.image} alt={`Referência visual para ${concept.title.toLowerCase()}`} fill sizes={index === 0 ? '(min-width: 1024px) 50vw, 100vw' : '(min-width: 1024px) 25vw, 100vw'} className="object-cover transition duration-700 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-brass">{concept.category} · referência visual</p>
                  <h3 className="font-serif text-2xl text-white">{concept.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SocialProof reviews={[]} />

      <section className="section-space bg-forest">
        <div className="page-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="eyebrow mb-5">Da ideia à experiência</p>
              <h2 className="font-serif text-4xl leading-tight sm:text-5xl">Método para dar tranquilidade a cada decisão.</h2>
            </div>
            <ol className="grid sm:grid-cols-2">
              {process.map((step, index) => (
                <li key={step} className="flex min-h-28 items-center gap-5 border-b border-white/15 py-5 sm:px-6 sm:odd:border-r">
                  <span className="font-serif text-3xl text-brass">{String(index + 1).padStart(2, '0')}</span>
                  <span className="text-lg text-sand">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
