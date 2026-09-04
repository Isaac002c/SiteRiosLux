import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navigation = [
  { href: '/servicos', label: 'Serviços' },
  { href: '/experiencias', label: 'Experiências' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/contato', label: 'Contato' },
]

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-[90rem] items-center justify-between px-5 sm:px-8 lg:px-12" aria-label="Navegação principal">
        <Link href="/" className="group flex min-w-0 items-center gap-3">
          <span className="font-serif text-xl tracking-[0.18em] text-white sm:text-2xl">RIOS LUX</span>
          <span className="hidden border-l border-brass/50 pl-3 text-[9px] uppercase leading-tight tracking-[0.22em] text-sand/65 sm:block">
            Arquitetura<br />de experiências
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm tracking-wide text-sand/80 transition-colors hover:text-white">
              {item.label}
            </Link>
          ))}
          <Link
            href="/contato"
            data-track-event="contact_start"
            data-track-label="header"
            className="button-primary !px-6 !py-3"
          >
            Solicitar consultoria
          </Link>
        </div>

        <details className="group lg:hidden">
          <summary className="inline-flex h-11 w-11 cursor-pointer list-none items-center justify-center border border-white/15 text-white [&::-webkit-details-marker]:hidden">
            <span className="sr-only group-open:hidden">Abrir menu</span>
            <span className="sr-only hidden group-open:inline">Fechar menu</span>
            <Menu aria-hidden="true" className="group-open:hidden" size={21} />
            <X aria-hidden="true" className="hidden group-open:block" size={21} />
          </summary>

          <div id="mobile-navigation" className="fixed inset-x-0 top-20 border-t border-white/10 bg-ink px-5 pb-7 pt-3">
            <div className="mx-auto flex max-w-[90rem] flex-col">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border-b border-white/10 py-4 font-serif text-2xl text-sand"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contato"
                data-track-event="contact_start"
                data-track-label="mobile_header"
                className="button-primary mt-6 justify-center"
              >
                Solicitar consultoria
              </Link>
            </div>
          </div>
        </details>
      </nav>
    </header>
  )
}
