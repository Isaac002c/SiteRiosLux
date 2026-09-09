import Image from 'next/image'
import Link from 'next/link'
import { ArrowDownRight, ArrowRight, MessageCircle } from 'lucide-react'
import CTASection from '@/components/CTASection'
import PossibilitiesCarousel from '@/components/PossibilitiesCarousel'
import { createWhatsAppUrl } from '@/config/site'

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
    label: 'Brand Experience',
    href: '/experiencias-de-marca',
    event: 'corporate_cta_click' as const,
    title: 'Estratégia de marca transformada em presença.',
    description: 'Lançamentos, ativações, relacionamento e hospitalidade conectados a uma intenção clara.',
  },
]

const process = [
  { title: 'Entendimento', description: 'Objetivo, pessoas, ocasião, prioridades e o que já está definido.' },
  { title: 'Curadoria', description: 'Conceito e seleção de soluções coerentes com o contexto.' },
  { title: 'Planejamento', description: 'Orçamento, cronograma, parceiros, responsabilidades e logística.' },
  { title: 'Produção', description: 'Coordenação das frentes necessárias e dos parceiros especializados.' },
  { title: 'Experiência', description: 'Execução e atenção ao percurso de anfitriões e convidados.' },
]

const values = [
  { title: 'Excelência', description: 'Cuidamos de cada detalhe como parte da experiência.' },
  { title: 'Confiança', description: 'Assumimos responsabilidade pelo que prometemos e pelo que entregamos.' },
  { title: 'Curadoria', description: 'Cada escolha deve ter intenção, coerência e propósito.' },
]

const team = [
  { name: 'Antônio', role: 'Comercial, Curadoria & Experiência', description: 'Diagnóstico, proposta, negociação e direcionamento da experiência.' },
  { name: 'Isaac', role: 'Growth, Tecnologia & Financeiro', description: 'Estratégia, aquisição, tecnologia, estrutura e gestão financeira.' },
  { name: 'Manoel', role: 'Operações, Fornecedores & Logística', description: 'Viabilidade operacional, parceiros, negociação, produção e logística.' },
]

const faqs = [
  {
    question: 'Que tipos de eventos a Rios Lux planeja e produz?',
    answer: 'A atuação inclui eventos corporativos, encontros executivos, lançamentos, experiências de marca e celebrações privadas. O formato e o escopo são definidos a partir do briefing.',
  },
  {
    question: 'A Rios Lux coordena espaços e fornecedores?',
    answer: 'A escolha e a coordenação de espaços e parceiros especializados podem fazer parte do projeto, sempre com responsabilidades e entregas definidas no planejamento.',
  },
  {
    question: 'Como começa um projeto?',
    answer: 'O primeiro passo é entender objetivo, público, data, local, dimensão e prioridades. Essas informações orientam a análise e a construção dos próximos passos.',
  },
]

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
          fetchPriority="high"
          loading="eager"
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
              A Rios Lux planeja e produz eventos corporativos, celebrações privadas e experiências de marca para empresas, executivos e clientes que valorizam precisão, hospitalidade e alto padrão.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/eventos-corporativos-rio-de-janeiro#solicitar-proposta" data-track-event="click_request_proposal" data-track-label="home_hero" className="button-primary">
                Solicitar proposta <ArrowRight className="ml-2" size={16} />
              </Link>
              <a href={createWhatsAppUrl()} target="_blank" rel="noopener noreferrer" data-track-event="click_whatsapp" data-track-label="home_hero" className="button-secondary">
                <MessageCircle className="mr-2" size={16} /> Falar com a Rios Lux
              </a>
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
              A Rios Lux é uma agência de eventos e experiências no Rio de Janeiro. Transformamos uma intenção em uma operação coordenada: conceito, planejamento, curadoria de parceiros, produção e experiência caminham sob uma mesma direção.
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
            <Link href="/servicos" className="inline-flex min-h-11 items-center text-sm text-sand/70 transition hover:text-white">
              Ver todos os serviços <ArrowDownRight className="ml-2" size={17} />
            </Link>
          </div>
          <p className="mb-4 text-sm text-sand/75 sm:hidden">Deslize para explorar as frentes →</p>
          <div className="mobile-snap-carousel grid border-t border-white/15 lg:grid-cols-3" role="region" aria-label="Frentes de atuação da Rios Lux">
            {services.map((service, index) => (
              <Link
                href={service.href}
                key={service.label}
                data-track-event={service.event}
                data-track-label="home_service"
                className={`mobile-snap-item group p-7 transition hover:bg-white/[0.035] sm:px-0 sm:py-10 lg:px-9 lg:py-12 ${index > 0 ? 'border-t border-white/15 lg:border-l lg:border-t-0' : ''}`}
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

      <section className="section-space bg-canvas text-ink" aria-labelledby="home-problem-title">
        <div className="page-shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
          <div>
            <p className="eyebrow mb-5">Complexidade sob uma direção</p>
            <h2 id="home-problem-title" className="max-w-4xl text-balance font-serif text-4xl leading-[1.02] sm:text-6xl lg:text-7xl">
              Seu evento não precisa disputar espaço com a rotina da sua equipe.
            </h2>
          </div>
          <div className="border-l border-ink/20 pl-6 sm:pl-10">
            <p className="text-xl leading-relaxed text-ink/80">
              Centralizamos decisões, cronograma, parceiros e operação para que cada responsável enxergue o projeto com clareza.
            </p>
            <p className="mt-7 leading-relaxed text-ink/65">
              O escopo pode reunir planejamento, curadoria, fornecedores, logística, produção e experiência dos convidados — sempre conforme a necessidade real do encontro.
            </p>
          </div>
        </div>
      </section>

      <section className="section-space bg-canvas text-ink">
        <div className="page-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="eyebrow mb-5">Da ideia à experiência</p>
              <h2 className="font-serif text-4xl leading-tight sm:text-5xl">Um processo para dar clareza a cada decisão.</h2>
            </div>
            <p className="mb-4 text-sm text-ink/70 sm:hidden">Deslize para acompanhar as etapas →</p>
            <ol className="mobile-snap-carousel divide-y divide-ink/20 border-y border-ink/20" aria-label="Etapas do processo Rios Lux">
              {process.map((step, index) => (
                <li key={step.title} className="mobile-snap-item grid gap-4 p-7 sm:grid-cols-[0.14fr_0.3fr_0.56fr] sm:items-start sm:gap-7 sm:px-0">
                  <span className="font-serif text-3xl text-brass-dark">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="font-serif text-2xl">{step.title}</h3>
                  <p className="leading-relaxed text-ink/65">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section-space bg-forest" aria-labelledby="home-values-title">
        <div className="page-shell grid gap-12 lg:grid-cols-[0.62fr_1.38fr] lg:gap-20">
          <div>
            <p className="eyebrow mb-5">Valores Rios Lux</p>
            <h2 id="home-values-title" className="font-serif text-4xl leading-tight sm:text-5xl">Confiança construída pela forma de trabalhar.</h2>
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

      <section className="section-space bg-ink" aria-labelledby="home-team-title">
        <div className="page-shell">
          <div className="max-w-4xl">
            <p className="eyebrow mb-5">Quem está por trás</p>
            <h2 id="home-team-title" className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">Três frentes. Uma direção.</h2>
            <p className="mt-6 max-w-2xl leading-relaxed text-sand/65">Responsabilidades complementares conectam visão comercial, estratégia e operação em cada projeto.</p>
          </div>
          <div className="mt-12 grid border-l border-t border-white/15 lg:grid-cols-3">
            {team.map((member, index) => (
              <article key={member.name} className="min-h-64 border-b border-r border-white/15 p-7 sm:p-9">
                <span className="text-xs font-semibold tracking-[0.2em] text-brass">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-9 font-serif text-4xl text-white">{member.name}</h3>
                <p className="mt-4 text-xs font-semibold uppercase leading-relaxed tracking-[0.17em] text-brass">{member.role}</p>
                <p className="mt-6 leading-relaxed text-sand/68">{member.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-canvas text-ink">
        <div className="page-shell">
          <div className="mb-12 max-w-3xl">
            <p className="eyebrow mb-5">Referências e conceitos</p>
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">Possibilidades Rios Lux</h2>
            <p className="mt-5 text-ink/65">Imagens de referência para apresentar atmosferas e formatos possíveis — não representam cases realizados.</p>
          </div>
          <PossibilitiesCarousel possibilities={concepts} />
        </div>
      </section>

      <section className="section-space bg-forest" aria-labelledby="home-faq-title">
        <div className="page-shell grid gap-12 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">
          <div>
            <p className="eyebrow mb-5">Perguntas frequentes</p>
            <h2 id="home-faq-title" className="font-serif text-4xl leading-tight sm:text-5xl">Antes de iniciar o projeto.</h2>
            <Link href="/faq" className="mt-7 inline-flex min-h-11 items-center text-sm font-semibold text-brass underline decoration-brass/60 underline-offset-4">Ver todas as respostas <ArrowRight className="ml-2" size={16} /></Link>
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

      <CTASection
        primaryLabel="Solicitar proposta"
        primaryHref="/eventos-corporativos-rio-de-janeiro#solicitar-proposta"
        primaryEvent="click_request_proposal"
      />
    </div>
  )
}
