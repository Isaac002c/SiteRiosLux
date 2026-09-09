import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import PossibilitiesCarousel from '@/components/PossibilitiesCarousel'
import StructuredData from '@/components/StructuredData'
import { createWhatsAppUrl, siteConfig } from '@/config/site'
import { createPageMetadata } from '@/lib/metadata'

const title = 'Eventos Corporativos no Rio de Janeiro | Rios Lux'
const description = 'Planejamento, curadoria de parceiros e produção coordenada de eventos corporativos no Rio de Janeiro para empresas, marcas e lideranças.'
const path = '/eventos-corporativos-rio-de-janeiro'

export const metadata = createPageMetadata({ title, description, path })

const experiences = [
  {
    title: 'Eventos para clientes',
    description: 'Relacionamento, hospitalidade e experiências para públicos estratégicos.',
  },
  {
    title: 'Encontros executivos',
    description: 'Jantares, networking, reuniões especiais e ocasiões corporativas.',
  },
  {
    title: 'Lançamentos',
    description: 'Produtos, marcas, empreendimentos e momentos importantes.',
  },
  {
    title: 'Brand Experiences',
    description: 'Experiências que aproximam marca, mensagem e público.',
  },
]

const scope = [
  'Conceito',
  'Planejamento',
  'Escolha de espaços',
  'Fornecedores',
  'Gastronomia',
  'Decoração e cenografia',
  'Audiovisual',
  'Entretenimento',
  'Logística',
  'Recepção',
  'Concierge',
  'Produção',
  'Operação no evento',
]

const process = [
  {
    title: 'Entendimento',
    description: 'Objetivo, público, ocasião, expectativa e contexto de investimento.',
  },
  {
    title: 'Curadoria',
    description: 'Conceito, possibilidades e seleção das soluções coerentes com o projeto.',
  },
  {
    title: 'Planejamento',
    description: 'Fornecedores, orçamento, cronograma, responsabilidades e logística.',
  },
  {
    title: 'Produção',
    description: 'Coordenação das frentes necessárias e dos parceiros especializados.',
  },
  {
    title: 'Experiência',
    description: 'Execução, acompanhamento e atenção à jornada dos convidados.',
  },
]

const values = [
  {
    title: 'Excelência',
    description: 'Cuidamos de cada detalhe como parte da experiência.',
  },
  {
    title: 'Confiança',
    description: 'Assumimos responsabilidade pelo que prometemos e pelo que entregamos.',
  },
  {
    title: 'Curadoria',
    description: 'Cada escolha deve ter intenção, coerência e propósito.',
  },
]

const team = [
  {
    name: 'Antônio',
    role: 'Comercial, Curadoria & Experiência',
    description: 'Responsável por diagnóstico, proposta, negociação, fechamento e direcionamento da experiência.',
  },
  {
    name: 'Isaac',
    role: 'Growth, Tecnologia & Financeiro',
    description: 'Responsável por estratégia, aquisição, tecnologia, estrutura e gestão financeira.',
  },
  {
    name: 'Manoel',
    role: 'Operações, Fornecedores & Logística',
    description: 'Responsável por viabilidade operacional, fornecedores, negociação, produção e logística.',
  },
]

const possibilities = [
  {
    title: 'Encontros corporativos',
    category: 'Corporate',
    image: '/images/corporate/hero.webp',
  },
  {
    title: 'Hospitalidade para públicos estratégicos',
    category: 'Corporate',
    image: '/images/corporate/hospitality.webp',
  },
  {
    title: 'Lançamentos e experiências de marca',
    category: 'Brand experience',
    image: '/images/corporate/brand-experience.webp',
  },
]

const faqs = [
  {
    question: 'A Rios Lux atende quais tipos de eventos corporativos?',
    answer: 'Atendemos projetos como encontros para clientes, reuniões e jantares executivos, lançamentos, ativações, experiências de marca, confraternizações e eventos internos. O formato é definido conforme o objetivo e o público.',
  },
  {
    question: 'Vocês cuidam dos fornecedores?',
    answer: 'A curadoria, contratação e coordenação de parceiros especializados podem fazer parte do escopo. Também podemos integrar fornecedores já selecionados pela empresa, com responsabilidades definidas no planejamento.',
  },
  {
    question: 'Vocês podem produzir o evento completo?',
    answer: 'Sim, quando esse for o escopo acordado. A Rios Lux pode coordenar planejamento, fornecedores, logística, produção e operação, considerando a complexidade e as necessidades reais de cada projeto.',
  },
  {
    question: 'Atendem apenas no Rio de Janeiro?',
    answer: 'Nossa atuação principal está no Rio de Janeiro. Projetos em outras localidades podem ser avaliados conforme briefing, data, logística e viabilidade operacional.',
  },
  {
    question: 'Com quanto tempo de antecedência devo procurar a Rios Lux?',
    answer: 'Quanto maior a complexidade, mais importante é começar cedo. O prazo adequado depende de data, espaço, número de convidados, escopo e disponibilidade dos parceiros.',
  },
  {
    question: 'Como funciona o primeiro contato?',
    answer: 'Você envia as informações iniciais pelo formulário. Nossa equipe analisa objetivo, público, data, local e escopo para entrar em contato e entender os próximos passos.',
  },
]

const whatsappMessage = siteConfig.leadFollowUpMessage

export default function EventosCorporativosRioDeJaneiro() {
  const pageUrl = `${siteConfig.url}${path}`
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: 'Eventos corporativos no Rio de Janeiro',
        description,
        url: pageUrl,
        provider: { '@id': `${siteConfig.url}/#organization` },
        areaServed: { '@type': 'City', name: 'Rio de Janeiro' },
        serviceType: 'Planejamento e produção de eventos corporativos',
        availableChannel: {
          '@type': 'ServiceChannel',
          serviceUrl: `${pageUrl}#solicitar-proposta`,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: `${siteConfig.url}/` },
          { '@type': 'ListItem', position: 2, name: 'Serviços', item: `${siteConfig.url}/servicos` },
          { '@type': 'ListItem', position: 3, name: 'Eventos corporativos', item: pageUrl },
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

      <section className="relative flex min-h-[calc(100svh-5rem)] items-end overflow-hidden bg-forest">
        <Image
          src="/images/corporate/hero.webp"
          alt="Ambiente corporativo preparado para receber convidados"
          fill
          loading="eager"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/35 via-ink/55 to-ink/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/35 to-transparent" />

        <div className="hero-reveal page-shell relative z-10 pb-14 pt-28 sm:pb-20 lg:pb-24">
          <nav aria-label="Navegação estrutural" className="mb-7 flex flex-wrap items-center gap-2 text-sm text-sand/70">
            <Link href="/" className="transition hover:text-white">Início</Link>
            <span aria-hidden="true">/</span>
            <Link href="/servicos" className="transition hover:text-white">Serviços</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="text-sand/90">Eventos corporativos</span>
          </nav>
          <p className="eyebrow mb-6">Corporate · Rio de Janeiro</p>
          <h1 className="max-w-6xl text-balance font-serif text-[clamp(3rem,7vw,7rem)] leading-[0.92] tracking-[-0.04em] text-white">
            Eventos corporativos no Rio de Janeiro.
          </h1>
          <div className="mt-8 grid max-w-6xl gap-7 border-t border-white/25 pt-7 lg:grid-cols-[1fr_auto] lg:items-end">
            <p className="max-w-3xl text-lg leading-relaxed text-sand/85 sm:text-xl">
              Estratégia, curadoria, fornecedores e produção coordenados pela Rios Lux para transformar encontros empresariais em experiências cuidadosamente executadas.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="#solicitar-proposta" data-track-event="click_request_proposal" data-track-label="corporate_hero" className="button-primary">
                Solicitar proposta <ArrowRight className="ml-2" size={16} />
              </Link>
              <a
                href={createWhatsAppUrl(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                data-track-event="click_whatsapp"
                data-track-label="corporate_hero"
                className="button-secondary"
              >
                Falar com a Rios Lux
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-canvas text-ink" aria-labelledby="experience-types-title">
        <div className="page-shell">
          <div className="max-w-4xl">
            <p className="eyebrow mb-5">Objetivos corporativos</p>
            <h2 id="experience-types-title" className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Experiências para diferentes objetivos.
            </h2>
          </div>
          <p className="mt-8 text-sm text-ink/70 sm:hidden">Deslize para explorar os objetivos →</p>
          <div className="mobile-snap-carousel mt-4 grid border-l border-t border-ink/20 sm:mt-12 md:grid-cols-2" role="region" aria-label="Experiências para objetivos corporativos">
            {experiences.map((experience, index) => (
              <article key={experience.title} className="mobile-snap-item grid min-h-56 gap-8 border-b border-r border-ink/20 p-7 sm:grid-cols-[auto_1fr] sm:p-9">
                <span className="font-serif text-2xl text-brass-dark">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-serif text-3xl leading-tight">{experience.title}</h3>
                  <p className="mt-5 max-w-xl leading-relaxed text-ink/68">{experience.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-ink" aria-labelledby="problem-title">
        <div className="page-shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
          <div>
            <p className="eyebrow mb-5">Complexidade sob uma direção</p>
            <h2 id="problem-title" className="max-w-4xl text-balance font-serif text-4xl leading-[1.02] sm:text-6xl lg:text-7xl">
              Sua equipe não precisa produzir o evento.
            </h2>
          </div>
          <div className="border-l border-white/20 pl-6 sm:pl-10">
            <p className="text-xl leading-relaxed text-sand/85">
              A Rios Lux centraliza o planejamento e coordena as frentes do projeto para reduzir ruído, antecipar decisões e dar visibilidade à operação.
            </p>
            <p className="mt-7 leading-relaxed text-sand/65">
              Sua equipe acompanha os pontos importantes. Nós organizamos curadoria, fornecedores, logística, produção, operação e experiência dos convidados conforme o escopo acordado.
            </p>
          </div>
        </div>
      </section>

      <section className="section-space bg-canvas text-ink" aria-labelledby="scope-title">
        <div className="page-shell grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="eyebrow mb-5">O que cuidamos</p>
            <h2 id="scope-title" className="font-serif text-4xl leading-tight sm:text-5xl">Uma operação conectada, do conceito à execução.</h2>
            <p className="mt-6 max-w-md leading-relaxed text-ink/65">
              Cada escopo é construído a partir da necessidade real. Quando aplicável, a Rios Lux realiza a curadoria e a coordenação de parceiros especializados.
            </p>
          </div>
          <ul className="grid grid-cols-2 border-l border-t border-ink/20 sm:grid-cols-3">
            {scope.map((item, index) => (
              <li key={item} className="flex min-h-28 flex-col justify-between gap-5 border-b border-r border-ink/20 p-4 sm:p-5">
                <span className="text-[10px] tracking-[0.2em] text-brass-dark">{String(index + 1).padStart(2, '0')}</span>
                <span className="break-words text-sm font-medium text-ink/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-space bg-forest" aria-labelledby="process-title">
        <div className="page-shell">
          <div className="max-w-4xl">
            <p className="eyebrow mb-5">Como funciona</p>
            <h2 id="process-title" className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">Da ideia à experiência.</h2>
          </div>
          <p className="mt-8 text-sm text-sand/75 sm:hidden">Deslize para acompanhar as etapas →</p>
          <ol className="mobile-snap-carousel mt-4 grid border-l border-t border-white/15 sm:mt-12 lg:grid-cols-5" aria-label="Etapas da produção de eventos corporativos">
            {process.map((step, index) => (
              <li key={step.title} className="mobile-snap-item min-h-64 border-b border-r border-white/15 p-6 sm:p-7">
                <span className="font-serif text-3xl text-brass">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-10 font-serif text-2xl text-white">{step.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-sand/70">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-space bg-canvas text-ink" aria-labelledby="values-title">
        <div className="page-shell grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <div>
            <p className="eyebrow mb-5">Por que Rios Lux</p>
            <h2 id="values-title" className="font-serif text-4xl leading-tight sm:text-5xl">Confiança construída pela forma de trabalhar.</h2>
          </div>
          <div className="divide-y divide-ink/20 border-y border-ink/20">
            {values.map((value, index) => (
              <article key={value.title} className="grid gap-5 py-8 sm:grid-cols-[0.16fr_0.84fr] sm:gap-8">
                <span className="font-serif text-3xl text-brass-dark">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-serif text-3xl">{value.title}</h3>
                  <p className="mt-3 max-w-2xl leading-relaxed text-ink/68">{value.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-ink" aria-labelledby="team-title">
        <div className="page-shell">
          <div className="max-w-4xl">
            <p className="eyebrow mb-5">Quem está por trás</p>
            <h2 id="team-title" className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">Três frentes. Uma direção.</h2>
            <p className="mt-6 max-w-2xl leading-relaxed text-sand/65">
              A estrutura reúne visão comercial, estratégia e operação para conduzir cada projeto de ponta a ponta.
            </p>
          </div>
          <div className="mt-12 grid border-l border-t border-white/15 lg:grid-cols-3">
            {team.map((member, index) => (
              <article key={member.name} className="min-h-72 border-b border-r border-white/15 p-7 sm:p-9">
                <span className="text-xs font-semibold tracking-[0.2em] text-brass">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-10 font-serif text-4xl text-white">{member.name}</h3>
                <p className="mt-4 text-xs font-semibold uppercase leading-relaxed tracking-[0.17em] text-brass">{member.role}</p>
                <p className="mt-6 leading-relaxed text-sand/68">{member.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-canvas text-ink" aria-labelledby="references-title">
        <div className="page-shell">
          <div className="mb-12 max-w-4xl">
            <p className="eyebrow mb-5">Referências e conceitos</p>
            <h2 id="references-title" className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">Possibilidades Rios Lux.</h2>
            <p className="mt-5 max-w-3xl leading-relaxed text-ink/65">
              Imagens de referência para apresentar atmosferas e formatos possíveis. Não representam eventos ou cases realizados pela Rios Lux.
            </p>
          </div>
          <PossibilitiesCarousel possibilities={possibilities} />
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
        <div className="page-shell grid gap-6 border-t border-ink/20 pt-8 sm:grid-cols-[1fr_auto] sm:items-center">
          <p className="font-serif text-2xl">Conteúdo para apoiar as primeiras decisões do projeto.</p>
          <nav aria-label="Conteúdos relacionados a eventos corporativos" className="flex flex-col gap-3 text-sm font-semibold sm:items-end">
            <Link href="/blog/melhores-locais-eventos-rio" className="underline decoration-brass-dark/60 underline-offset-4">Como escolher um espaço para eventos no Rio</Link>
            <Link href="/blog/roi-eventos-corporativos" className="underline decoration-brass-dark/60 underline-offset-4">Como acompanhar resultados de eventos corporativos</Link>
          </nav>
        </div>
      </section>

      <section id="solicitar-proposta" className="scroll-mt-24 section-space bg-ink" aria-labelledby="proposal-form-title">
        <div className="page-shell grid gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-24">
          <div>
            <span id="proposal-form-title" className="sr-only">Solicitar proposta para evento corporativo</span>
            <ContactForm mode="corporate" />
          </div>
          <aside className="border-t border-white/15 pt-9 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <p className="eyebrow mb-7">O que acontece depois</p>
            <ol className="space-y-7">
              {[
                'O backend registra sua solicitação no CRM.',
                'Nossa equipe analisa o contexto enviado.',
                'Entramos em contato para entender os próximos passos.',
              ].map((item, index) => (
                <li key={item} className="flex gap-4 text-sm leading-relaxed text-sand/75">
                  <span className="font-serif text-xl text-brass">{String(index + 1).padStart(2, '0')}</span>
                  {item}
                </li>
              ))}
            </ol>
            <p className="mt-10 border-t border-white/15 pt-8 text-sm leading-relaxed text-sand/60">
              Seus dados são usados exclusivamente para analisar e atender a solicitação, conforme nossa Política de Privacidade.
            </p>
          </aside>
        </div>
      </section>

      <section className="section-space bg-brass text-ink" aria-labelledby="final-cta-title">
        <div className="page-shell grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.26em]">Próxima experiência</p>
            <h2 id="final-cta-title" className="max-w-4xl text-balance font-serif text-4xl leading-[1.02] sm:text-5xl lg:text-7xl">
              Vamos planejar sua próxima experiência?
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink/85">
              Conte-nos o que sua empresa está planejando. A Rios Lux cuida de transformar a intenção em uma operação cuidadosamente construída.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link href="#solicitar-proposta" data-track-event="click_request_proposal" data-track-label="corporate_final" className="button-dark">
              Solicitar proposta <ArrowRight className="ml-2" size={16} />
            </Link>
            <a
              href={createWhatsAppUrl(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              data-track-event="click_whatsapp"
              data-track-label="corporate_final"
              className="inline-flex min-h-12 items-center justify-center border border-ink/35 px-7 py-3.5 text-sm font-semibold text-ink transition hover:border-ink hover:bg-ink hover:text-white"
            >
              <MessageCircle className="mr-2" size={17} /> Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
