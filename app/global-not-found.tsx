import type { Metadata } from 'next'
import Link from 'next/link'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-serif', weight: ['400', '500'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Página não encontrada | Rios Lux',
  description: 'O endereço solicitado não está disponível.',
}

export default function GlobalNotFound() {
  return (
    <html lang="pt-BR">
      <body className={`${manrope.variable} ${cormorant.variable} bg-canvas font-sans text-ink antialiased`}>
        <main className="flex min-h-screen items-center">
          <div className="page-shell py-20">
            <p className="eyebrow mb-6">Erro 404</p>
            <h1 className="max-w-4xl font-serif text-5xl leading-tight sm:text-7xl">Esta página não faz parte da experiência.</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/62">O endereço pode ter mudado ou não existir.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/" className="button-dark">Voltar ao início</Link>
              <Link href="/contato" className="inline-flex min-h-12 items-center justify-center border border-ink/30 px-7 py-3.5 text-sm font-semibold text-ink transition hover:bg-ink hover:text-white">Falar com a Rios Lux</Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
