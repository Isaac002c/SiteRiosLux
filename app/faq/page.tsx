import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Perguntas Frequentes | Rios Lux',
  description: 'Respostas sobre o processo de curadoria, planejamento e produção de experiências da Rios Lux no Rio de Janeiro.',
  alternates: { canonical: '/faq' },
  openGraph: {
    type: 'website',
    title: 'Perguntas Frequentes | Rios Lux',
    description: 'Entenda como começa e funciona um projeto com a Rios Lux.',
    url: '/faq',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Rios Lux — Arquitetura de Experiências' }],
  },
}

const faqs = [
  {
    q: 'Que tipos de projetos a Rios Lux desenvolve?',
    a: 'A Rios Lux atua em eventos corporativos, celebrações privadas e experiências de lifestyle e concierge. O formato e o escopo são definidos a partir de cada briefing.',
  },
  {
    q: 'O que a Rios Lux pode coordenar?',
    a: 'Conforme a necessidade do projeto, a coordenação pode incluir conceito, planejamento, parceiros, espaços, gastronomia, decoração, audiovisual, logística, recepção, concierge, produção e operação.',
  },
  {
    q: 'Como começa um projeto?',
    a: 'Com uma conversa de briefing. É nesse momento que entendemos intenção, contexto, data, local, número de convidados, prioridades e o que já está definido.',
  },
  {
    q: 'Com quanto tempo de antecedência devo entrar em contato?',
    a: 'Quanto maior o prazo, mais opções costumam estar disponíveis. A viabilidade e o cronograma são avaliados caso a caso, de acordo com a complexidade e a data desejada.',
  },
  {
    q: 'Existe um orçamento mínimo?',
    a: 'O site não publica um valor mínimo. O investimento depende do formato, do escopo, dos parceiros envolvidos e das prioridades definidas no briefing.',
  },
  {
    q: 'A Rios Lux trabalha com fornecedores escolhidos pelo cliente?',
    a: 'Essa possibilidade pode ser avaliada no briefing. O mais importante é alinhar responsabilidades, padrão de entrega, prazos e integração com a operação.',
  },
  {
    q: 'O atendimento é somente no Rio de Janeiro?',
    a: 'A comunicação atual da Rios Lux está concentrada no Rio de Janeiro. Outros locais podem ser avaliados diretamente com a equipe.',
  },
  {
    q: 'Como envio as informações do meu projeto?',
    a: 'Use o formulário de curadoria na página de contato. Ele organiza os dados essenciais e abre uma mensagem pronta para envio no WhatsApp oficial.',
  },
]

export default function FAQ() {
  const schemaFAQ = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
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
            <Link href="/contato" data-track-event="click_curadoria" data-track-label="faq" className="button-dark">Falar com a Rios Lux</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
