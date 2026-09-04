import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { createWhatsAppUrl } from '@/config/site'

export default function CTASection() {
  return (
    <section className="section-space bg-brass text-ink">
      <div className="page-shell grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.26em] text-ink">Comece por uma conversa</p>
          <h2 className="max-w-4xl text-balance font-serif text-4xl leading-[1.02] sm:text-5xl lg:text-7xl">
            Sua experiência começa aqui.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/85">
            Conte-nos o que você imagina. A Rios Lux cuida dos próximos passos.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <Link href="/contato" data-track-event="contact_start" data-track-label="final_cta" className="button-dark">
            Solicitar consultoria <ArrowRight className="ml-2" size={16} />
          </Link>
          <a
            href={createWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            data-track-event="whatsapp_click"
            data-track-label="final_cta"
            className="inline-flex min-h-12 items-center justify-center border border-ink/35 px-7 py-3.5 text-sm font-semibold text-ink transition hover:border-ink hover:bg-ink hover:text-white"
          >
            Falar com a Rios Lux
          </a>
        </div>
      </div>
    </section>
  )
}
