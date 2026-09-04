import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cases Reais | Rios Lux',
  description: 'Área reservada para projetos reais da Rios Lux com informações e imagens autorizadas.',
  alternates: { canonical: '/casos-sucesso' },
  robots: { index: false, follow: true },
  openGraph: {
    type: 'website',
    title: 'Cases Reais | Rios Lux',
    description: 'Projetos documentados com informações e imagens autorizadas.',
    url: '/casos-sucesso',
  },
}

export default function CasosReais() {
  return (
    <div className="section-space min-h-[70svh] bg-canvas text-ink">
      <div className="page-shell pt-10 sm:pt-16">
        <p className="eyebrow mb-6">Cases reais</p>
        <h1 className="max-w-5xl text-balance font-serif text-5xl leading-[0.98] sm:text-6xl lg:text-8xl">
          Histórias verdadeiras merecem ser contadas com precisão.
        </h1>
        <div className="mt-12 grid gap-8 border-t border-ink/20 pt-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-2xl space-y-4 text-lg leading-relaxed text-ink/65">
            <p>Esta área será destinada somente a trabalhos confirmados, com dados verificáveis e autorização para publicação.</p>
            <p>Até que esse material seja disponibilizado, a Rios Lux não apresenta números, avaliações, clientes ou depoimentos sem comprovação.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/experiencias" className="button-dark">Ver conceitos de experiência</Link>
            <Link href="/contato" data-track-event="click_curadoria" data-track-label="cases_empty" className="inline-flex min-h-12 items-center justify-center border border-ink/30 px-7 py-3.5 text-sm font-semibold text-ink transition hover:bg-ink hover:text-white">
              Solicitar curadoria <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
