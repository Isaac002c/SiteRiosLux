import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import StructuredData from '@/components/StructuredData'
import { siteConfig } from '@/config/site'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'Projetos e Cases | Rios Lux',
  description: 'Estrutura reservada para projetos reais da Rios Lux publicados com contexto, resultados e materiais autorizados.',
  path: '/cases',
  index: false,
})

const futureCaseFields = ['Cliente', 'Desafio', 'Briefing', 'Solução', 'Direção', 'Execução', 'Imagens autorizadas', 'Resultados', 'Depoimento']

export default function Cases() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: `${siteConfig.url}/` },
      { '@type': 'ListItem', position: 2, name: 'Projetos e cases', item: `${siteConfig.url}/cases` },
    ],
  }

  return (
    <div>
      <StructuredData data={breadcrumb} />
      <section className="section-space bg-canvas text-ink">
        <div className="page-shell pt-10 sm:pt-16">
          <p className="eyebrow mb-6">Projetos e cases</p>
          <h1 className="max-w-5xl text-balance font-serif text-5xl leading-[0.98] sm:text-6xl lg:text-8xl">
            Histórias reais, apresentadas com contexto e precisão.
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-ink/70">
            Esta área está preparada para receber projetos autorizados da Rios Lux. Nenhum trabalho, cliente, resultado ou depoimento será publicado sem informação verificável.
          </p>
        </div>
      </section>

      <section className="section-space bg-ink" aria-labelledby="case-structure-title">
        <div className="page-shell grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <div>
            <p className="eyebrow mb-5">Arquitetura preparada</p>
            <h2 id="case-structure-title" className="font-serif text-4xl leading-tight sm:text-5xl">O que cada futuro case poderá mostrar.</h2>
          </div>
          <ol className="grid grid-cols-2 border-l border-t border-white/15 sm:grid-cols-3">
            {futureCaseFields.map((field, index) => (
              <li key={field} className="min-h-28 break-words border-b border-r border-white/15 p-4 sm:p-5">
                <span className="block text-xs tracking-[0.2em] text-brass">{String(index + 1).padStart(2, '0')}</span>
                <span className="mt-5 block text-sm text-sand">{field}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-space bg-brass text-ink">
        <div className="page-shell flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.26em] text-ink">Enquanto os projetos são documentados</p>
            <h2 className="max-w-3xl font-serif text-4xl leading-tight sm:text-6xl">Conheça como a Rios Lux conduz cada experiência.</h2>
          </div>
          <Link href="/por-que-riosilux" className="button-dark shrink-0">
            Ver nosso processo <ArrowRight className="ml-2" size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
