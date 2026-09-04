import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import { siteConfig } from '@/config/site'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'Perguntas Frequentes | Rios Lux',
  description: 'Respostas sobre o processo de consultoria, planejamento e produção de experiências da Rios Lux no Rio de Janeiro.',
  path: '/faq',
})

const faqs = [
  {
    q: 'Que tipos de eventos corporativos a Rios Lux produz?',
    a: 'A Rios Lux pode produzir convenções, encontros executivos, lançamentos, ativações, jantares corporativos, confraternizações, eventos para clientes e experiências de marca. O formato e o escopo são definidos no briefing.',
  },
  {
    q: 'A Rios Lux atende empresas no Rio de Janeiro?',
    a: 'Sim. A comunicação e a atuação apresentadas neste site estão concentradas no Rio de Janeiro. Cada projeto é avaliado conforme data, local, dimensão e viabilidade.',
  },
  {
    q: 'Como funciona o planejamento de um evento?',
    a: 'O processo começa com um briefing sobre objetivo, público, data, local, prioridades e o que já está definido. A partir disso, são organizados conceito, escopo, cronograma, parceiros, logística e operação.',
  },
  {
    q: 'Com quanto tempo de antecedência devo contratar uma empresa de eventos?',
    a: 'Quanto maior a complexidade, mais importante é começar cedo. O prazo adequado depende da data, do espaço, do número de convidados, do escopo e da disponibilidade dos parceiros.',
  },
  {
    q: 'A Rios Lux cuida dos fornecedores?',
    a: 'A seleção e a coordenação de fornecedores podem fazer parte do escopo. Também é possível avaliar parceiros já escolhidos pelo cliente, alinhando responsabilidades, prazos e padrão de entrega.',
  },
  {
    q: 'Vocês realizam lançamentos e experiências de marca?',
    a: 'Sim. A atuação pode integrar direção de experiência, conteúdo presencial, espaço, audiovisual, hospitalidade, logística, fornecedores e produção, conforme o objetivo e o escopo do projeto.',
  },
  {
    q: 'Como solicitar uma proposta?',
    a: 'Use o formulário de consultoria ou o WhatsApp oficial. As informações iniciais ajudam a compreender objetivo, público, data, local, dimensão e prioridades antes dos próximos passos.',
  },
  {
    q: 'A Rios Lux atende eventos fora do Rio de Janeiro?',
    a: 'A comunicação atual está concentrada no Rio de Janeiro. Projetos em outros locais podem ser avaliados diretamente com a equipe, sem promessa prévia de disponibilidade.',
  },
]

export default function FAQ() {
  const schemaFAQ = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'FAQPage',
        '@id': `${siteConfig.url}/faq#faq`,
        mainEntity: faqs.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteConfig.url}/faq#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: `${siteConfig.url}/` },
          { '@type': 'ListItem', position: 2, name: 'Perguntas frequentes', item: `${siteConfig.url}/faq` },
        ],
      },
    ],
  }

  return (
    <div>
      <section className="section-space bg-canvas text-ink">
        <div className="page-shell pt-10 sm:pt-16">
          <p className="eyebrow mb-6">Perguntas frequentes</p>
          <h1 className="max-w-5xl text-balance font-serif text-5xl leading-[0.98] sm:text-6xl lg:text-8xl">
            Antes de começar, algumas respostas.
          </h1>
        </div>
      </section>

      <section className="bg-canvas pb-24 text-ink lg:pb-32">
        <StructuredData data={schemaFAQ} />
        <div className="page-shell max-w-5xl">
          <div className="divide-y divide-ink/20 border-y border-ink/20">
            {faqs.map((faq, index) => (
              <article key={faq.q} className="grid gap-5 py-8 sm:grid-cols-[0.15fr_0.85fr] sm:gap-8 lg:py-10">
                <span className="font-serif text-3xl text-brass">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl">{faq.q}</h2>
                  <p className="mt-4 max-w-3xl leading-relaxed text-ink/62">{faq.a}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <p className="font-serif text-2xl">Ainda quer conversar sobre algum ponto?</p>
            <Link href="/contato" data-track-event="contact_start" data-track-label="faq" className="button-dark">Falar com a Rios Lux</Link>
          </div>
          <nav aria-label="Serviços relacionados" className="mt-12 grid gap-3 border-t border-ink/20 pt-8 sm:grid-cols-2">
            <Link href="/eventos-corporativos-rio-de-janeiro" className="text-sm font-semibold text-ink underline decoration-brass-dark/60 underline-offset-4">Eventos corporativos no Rio de Janeiro</Link>
            <Link href="/eventos-privados-rio-de-janeiro" className="text-sm font-semibold text-ink underline decoration-brass-dark/60 underline-offset-4">Eventos privados no Rio de Janeiro</Link>
            <Link href="/experiencias-de-marca" className="text-sm font-semibold text-ink underline decoration-brass-dark/60 underline-offset-4">Experiências de marca</Link>
            <Link href="/concierge-rio-de-janeiro" className="text-sm font-semibold text-ink underline decoration-brass-dark/60 underline-offset-4">Concierge no Rio de Janeiro</Link>
          </nav>
        </div>
      </section>
    </div>
  )
}
