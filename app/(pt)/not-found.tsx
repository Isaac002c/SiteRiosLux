import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="flex min-h-[70svh] items-center bg-canvas text-ink">
      <div className="page-shell py-20">
        <p className="eyebrow mb-6">Erro 404</p>
        <h1 className="max-w-4xl font-serif text-5xl leading-tight sm:text-7xl">Esta página não faz parte da experiência.</h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/62">O endereço pode ter mudado ou não existir.</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="button-dark">Voltar ao início</Link>
          <Link href="/contato" data-track-event="contact_start" data-track-label="404" className="inline-flex min-h-12 items-center justify-center border border-ink/30 px-7 py-3.5 text-sm font-semibold text-ink transition hover:bg-ink hover:text-white">
            Falar com a Rios Lux
          </Link>
        </div>
      </div>
    </section>
  )
}
