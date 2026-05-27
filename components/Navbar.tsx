'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setOpen(!open)

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-primary/95 backdrop-blur-md shadow-xl' : 'bg-primary/90 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img 
              src="/logo.png" 
              alt="Rios Lux" 
              className="h-12 w-auto md:h-16 rounded-full shadow-lg ring-2 ring-gold/30 hover:ring-gold/50 transition-all duration-300"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-gold transition-colors py-2">
              Home
            </Link>
            <div className="group relative">
              <button className="hover:text-gold transition-colors py-2">
                Serviços
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-primary/95 backdrop-blur-md rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gold/20">
                <Link href="/servicos" className="block px-4 py-2 text-sm hover:text-gold">Todos os Serviços</Link>
                <Link href="/despedida-solteiro-luxo-rj" className="block px-4 py-2 text-sm hover:text-gold">Despedida Solteiro</Link>
                <Link href="/eventos-corporativos-premium-rj" className="block px-4 py-2 text-sm hover:text-gold">Corporativos</Link>
                <Link href="/concierge-eventos-rio" className="block px-4 py-2 text-sm hover:text-gold">Concierge</Link>
              </div>
            </div>
            <div className="group relative">
              <button className="hover:text-gold transition-colors py-2">
                Localizações
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-primary/95 backdrop-blur-md rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gold/20">
                <Link href="/eventos-barra-tijuca" className="block px-4 py-2 text-sm hover:text-gold">Barra da Tijuca</Link>
                <Link href="/casamentos-luxo-ipanema" className="block px-4 py-2 text-sm hover:text-gold">Ipanema</Link>
                <Link href="/producao-eventos-leblon" className="block px-4 py-2 text-sm hover:text-gold">Leblon</Link>
                <Link href="/eventos-mansoes-rio" className="block px-4 py-2 text-sm hover:text-gold">Mansões</Link>
              </div>
            </div>
            <Link href="/experiencias" className="hover:text-gold transition-colors py-2">
              Galeria
            </Link>
            <Link href="/faq" className="hover:text-gold transition-colors py-2">
              FAQ
            </Link>
            <Link href="/sobre" className="hover:text-gold transition-colors py-2">
              Sobre
            </Link>
            <Link href="/contato" className="hover:text-gold transition-colors py-2">
              Contato
            </Link>
          </div>

          {/* CTA Button */}
          <Link
            href="/contato"
            className="hidden md:inline-flex bg-gold text-primary px-8 py-3 rounded-full font-medium hover:bg-beige transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Agendar Consultoria
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg backdrop-blur-sm"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-primary/95 backdrop-blur-md pb-4">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <Link href="/" className="block hover:text-gold py-2 font-medium" onClick={toggleMenu}>
                Home
              </Link>
              <div className="py-2">
                <p className="text-xs uppercase text-gold/80 font-semibold px-4 mb-2">Serviços</p>
                <Link href="/servicos" className="block hover:text-gold py-1 px-8 text-sm" onClick={toggleMenu}>
                  Todos
                </Link>
                <Link href="/despedida-solteiro-luxo-rj" className="block hover:text-gold py-1 px-8 text-sm" onClick={toggleMenu}>
                  Despedida Solteiro
                </Link>
                <Link href="/eventos-corporativos-premium-rj" className="block hover:text-gold py-1 px-8 text-sm" onClick={toggleMenu}>
                  Corporativos
                </Link>
                <Link href="/concierge-eventos-rio" className="block hover:text-gold py-1 px-8 text-sm" onClick={toggleMenu}>
                  Concierge
                </Link>
              </div>
              <div className="py-2">
                <p className="text-xs uppercase text-gold/80 font-semibold px-4 mb-2">Locais</p>
                <Link href="/eventos-barra-tijuca" className="block hover:text-gold py-1 px-8 text-sm" onClick={toggleMenu}>
                  Barra da Tijuca
                </Link>
                <Link href="/casamentos-luxo-ipanema" className="block hover:text-gold py-1 px-8 text-sm" onClick={toggleMenu}>
                  Ipanema
                </Link>
                <Link href="/producao-eventos-leblon" className="block hover:text-gold py-1 px-8 text-sm" onClick={toggleMenu}>
                  Leblon
                </Link>
                <Link href="/eventos-mansoes-rio" className="block hover:text-gold py-1 px-8 text-sm" onClick={toggleMenu}>
                  Mansões
                </Link>
              </div>
              <Link href="/experiencias" className="block hover:text-gold py-2 font-medium" onClick={toggleMenu}>
                Galeria
              </Link>
              <Link href="/faq" className="block hover:text-gold py-2 font-medium" onClick={toggleMenu}>
                FAQ
              </Link>
              <Link href="/sobre" className="block hover:text-gold py-2 font-medium" onClick={toggleMenu}>
                Sobre
              </Link>
              <Link href="/contato" className="block hover:text-gold py-2 font-medium" onClick={toggleMenu}>
                Contato
              </Link>
              <Link
                href="/contato"
                className="block bg-gold text-primary px-8 py-3 rounded-full font-semibold mx-4 mt-4 hover:bg-beige transition-all"
                onClick={toggleMenu}
              >
                Agendar Consultoria
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
