'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navigation = [
  { href: '/servicos', label: 'Serviços' },
  { href: '/experiencias', label: 'Experiências' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/contato', label: 'Contato' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition duration-500 ${
        scrolled || open
          ? 'border-white/10 bg-ink/95 backdrop-blur-xl'
          : 'border-transparent bg-ink/65 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-[90rem] items-center justify-between px-5 sm:px-8 lg:px-12" aria-label="Navegação principal">
        <Link href="/" className="group flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
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
            data-track-event="click_consultoria"
            data-track-label="header"
            className="button-primary !px-6 !py-3"
          >
            Solicitar consultoria
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center border border-white/15 text-white lg:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-controls="mobile-navigation"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {open && (
        <div id="mobile-navigation" className="border-t border-white/10 bg-ink px-5 pb-7 pt-3 lg:hidden">
          <div className="mx-auto flex max-w-[90rem] flex-col">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-white/10 py-4 font-serif text-2xl text-sand"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contato"
              data-track-event="click_consultoria"
              data-track-label="mobile_header"
              className="button-primary mt-6 justify-center"
              onClick={() => setOpen(false)}
            >
              Solicitar consultoria
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
