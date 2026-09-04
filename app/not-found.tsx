import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="flex min-h-[70svh] items-center bg-canvas text-ink">
      <div className="page-shell py-20">
        <p className="eyebrow mb-6">Erro 404</p>
        <h1 className="max-w-4xl font-serif text-5xl leading-tight sm:text-7xl">Esta página não faz parte da experiência.</h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/62">O endereço pode ter mudado ou não existir.</p>
        <Link href="/" className="button-dark mt-9">Voltar ao início</Link>
      </div>
    </section>
  )
}
