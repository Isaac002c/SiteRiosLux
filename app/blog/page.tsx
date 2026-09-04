import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Editorial | Rios Lux',
  description: 'Perspectivas sobre eventos, hospitalidade, planejamento e experiências no Rio de Janeiro.',
  alternates: { canonical: '/blog' },
  openGraph: {
    type: 'website',
    title: 'Editorial | Rios Lux',
    description: 'Perspectivas sobre eventos, hospitalidade, planejamento e experiências.',
    url: '/blog',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Rios Lux — Arquitetura de Experiências' }],
  },
}

const articles = [
  {
    href: '/blog/concierge-vs-agencia-eventos',
    category: 'Estratégia',
    title: 'Concierge e produção de eventos: papéis diferentes, uma experiência integrada',
    description: 'Como as duas frentes se conectam sem confundir responsabilidades.',
  },
  {
    href: '/blog/melhores-locais-eventos-rio',
    category: 'Rio de Janeiro',
    title: 'Como escolher um espaço para eventos no Rio de Janeiro',
    description: 'Critérios de acesso, infraestrutura, fluxo e operação que merecem atenção.',
  },
  {
    href: '/blog/roi-eventos-corporativos',
    category: 'Corporate',
    title: 'Como definir e acompanhar resultados em eventos corporativos',
    description: 'Um método simples para conectar objetivos, indicadores e aprendizado.',
  },
  {
    href: '/blog/guia-despedida-solteiro-luxo',
    category: 'Private',
    title: 'Como planejar uma celebração pré-casamento com personalidade',
    description: 'O grupo, o ritmo e a logística antes da escolha do formato.',
  },
  {
    href: '/blog/tecnologia-eventos-premium',
    category: 'Produção',
    title: 'Tecnologia em eventos: quando ela serve à experiência',
    description: 'Critérios para escolher recursos digitais sem criar efeitos gratuitos.',
  },
  {
    href: '/blog/tendencias-eventos-premium-2025',
    category: 'Perspectivas',
    title: 'Tendências que estão redesenhando experiências presenciais',
    description: 'Mais intenção, hospitalidade e fluidez; menos excesso e fórmulas repetidas.',
  },
]

export default function Blog() {
  return (
    <div className="bg-canvas text-ink">
      <section className="section-space">
        <div className="page-shell pt-10 sm:pt-16">
          <p className="eyebrow mb-6">Editorial Rios Lux</p>
          <h1 className="max-w-6xl text-balance font-serif text-5xl leading-[0.96] sm:text-6xl lg:text-8xl">
            Ideias para pensar experiências com mais intenção.
          </h1>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="page-shell">
          <div className="divide-y divide-ink/20 border-y border-ink/20">
            {articles.map((article, index) => (
              <Link key={article.href} href={article.href} className="group grid gap-5 py-9 sm:grid-cols-[0.12fr_0.25fr_0.63fr_auto] sm:items-start sm:gap-7">
                <span className="font-serif text-2xl text-brass">{String(index + 1).padStart(2, '0')}</span>
                <span className="eyebrow pt-1">{article.category}</span>
                <div>
                  <h2 className="font-serif text-2xl leading-tight transition group-hover:text-brass sm:text-3xl">{article.title}</h2>
                  <p className="mt-3 max-w-2xl leading-relaxed text-ink/60">{article.description}</p>
                </div>
                <ArrowUpRight size={20} className="mt-1 transition group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
