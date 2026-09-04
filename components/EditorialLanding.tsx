import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

type EditorialLandingProps = {
  eyebrow: string
  title: string
  intro: string
  sectionTitle: string
  sections: Array<{ title: string; description: string }>
  scope: string[]
  closing: string
}

export default function EditorialLanding({
  eyebrow,
  title,
  intro,
  sectionTitle,
  sections,
  scope,
  closing,
}: EditorialLandingProps) {
  return (
    <div>
      <section className="section-space bg-forest">
        <div className="page-shell pt-10 sm:pt-16">
          <p className="eyebrow mb-6">{eyebrow}</p>
          <h1 className="max-w-6xl text-balance font-serif text-5xl leading-[0.96] sm:text-6xl lg:text-8xl">{title}</h1>
          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-sand/70">{intro}</p>
        </div>
      </section>

      <section className="section-space bg-canvas text-ink">
        <div className="page-shell">
          <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
            <div>
              <p className="eyebrow mb-5">Como pensamos</p>
              <h2 className="font-serif text-4xl leading-tight sm:text-5xl">{sectionTitle}</h2>
            </div>
            <div className="divide-y divide-ink/20 border-y border-ink/20">
              {sections.map((section, index) => (
                <article key={section.title} className="grid gap-4 py-7 sm:grid-cols-[0.15fr_0.85fr] sm:gap-6">
                  <span className="font-serif text-2xl text-brass">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="font-serif text-2xl">{section.title}</h3>
                    <p className="mt-3 max-w-2xl leading-relaxed text-ink/62">{section.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-ink">
        <div className="page-shell grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <div>
            <p className="eyebrow mb-5">Escopo possível</p>
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">Uma operação conectada.</h2>
            <p className="mt-6 max-w-md leading-relaxed text-sand/62">
              As frentes são definidas conforme o briefing, o formato e as responsabilidades de cada projeto.
            </p>
          </div>
          <ul className="grid grid-cols-2 border-l border-t border-white/15 sm:grid-cols-3">
            {scope.map((item, index) => (
              <li key={item} className="min-h-28 break-words border-b border-r border-white/15 p-4 sm:p-5">
                <span className="block text-[10px] tracking-[0.2em] text-brass">{String(index + 1).padStart(2, '0')}</span>
                <span className="mt-5 block text-sm text-sand">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-space bg-brass text-ink">
        <div className="page-shell grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <h2 className="max-w-4xl font-serif text-4xl leading-tight sm:text-6xl">{closing}</h2>
          <Link href="/contato" data-track-event="contact_start" data-track-label={eyebrow.toLowerCase()} className="button-dark">
            Solicitar consultoria <ArrowRight className="ml-2" size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
