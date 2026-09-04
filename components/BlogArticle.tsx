import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

type BlogSection = {
  title: string
  paragraphs?: string[]
  bullets?: string[]
}

type BlogArticleProps = {
  category: string
  title: string
  intro: string
  sections: BlogSection[]
}

export default function BlogArticle({ category, title, intro, sections }: BlogArticleProps) {
  return (
    <article className="bg-canvas text-ink">
      <header className="section-space">
        <div className="mx-auto max-w-5xl px-5 pt-10 sm:px-8 sm:pt-16">
          <Link href="/blog" className="mb-10 inline-flex items-center text-sm text-ink/60 transition hover:text-ink">
            <ArrowLeft className="mr-2" size={16} /> Voltar ao editorial
          </Link>
          <p className="eyebrow mb-6">{category}</p>
          <h1 className="text-balance font-serif text-5xl leading-[0.98] sm:text-6xl lg:text-7xl">{title}</h1>
          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-ink/68">{intro}</p>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-5 pb-24 sm:px-8 lg:pb-32">
        <div className="border-t border-ink/20">
          {sections.map((section, index) => (
            <section key={section.title} className="grid gap-5 border-b border-ink/20 py-10 sm:grid-cols-[0.15fr_0.85fr] sm:gap-8 lg:py-14">
              <p className="font-serif text-3xl text-brass">{String(index + 1).padStart(2, '0')}</p>
              <div>
                <h2 className="font-serif text-3xl sm:text-4xl">{section.title}</h2>
                <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink/66">
                  {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.bullets && (
                    <ul className="space-y-3 border-l border-brass/50 pl-5">
                      {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                    </ul>
                  )}
                </div>
              </div>
            </section>
          ))}
        </div>

        <div className="mt-14 flex flex-col justify-between gap-6 bg-ink p-7 text-white sm:flex-row sm:items-center sm:p-10">
          <p className="max-w-xl font-serif text-2xl">Quer transformar o contexto do seu projeto em uma direção clara?</p>
          <Link href="/contato" data-track-event="click_consultoria" data-track-label="blog_article" className="button-primary shrink-0">
            Solicitar consultoria <ArrowRight className="ml-2" size={16} />
          </Link>
        </div>
      </div>
    </article>
  )
}
