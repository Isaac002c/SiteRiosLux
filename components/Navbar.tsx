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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-primary/95 backdrop-blur-md shadow-xl' : 'bg-primary/90 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl md:text-3xl font-serif gradient-text font-bold">
            Rios Lux
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-gold transition-colors py-2">
              Home
            </Link>
            <Link href="/sobre" className="hover:text-gold transition-colors py-2">
              Sobre
            </Link>
            <Link href="/servicos" className="hover:text-gold transition-colors py-2">
              Serviços
            </Link>
            <Link href="/experiencias" className="hover:text-gold transition-colors py-2">
              Experiências
            </Link>
            <Link href="/contato" className="hover:text-gold transition-colors py-2">
              Contato
            </Link>
          </div>

          {/* CTA Button */}
          <Link
            href="#contato"
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
              <Link href="/" className="block hover:text-gold py-2" onClick={toggleMenu}>
                Home
              </Link>
              <Link href="/sobre" className="block hover:text-gold py-2" onClick={toggleMenu}>
                Sobre
              </Link>
              <Link href="/servicos" className="block hover:text-gold py-2" onClick={toggleMenu}>
                Serviços
              </Link>
              <Link href="/experiencias" className="block hover:text-gold py-2" onClick={toggleMenu}>
                Experiências
              </Link>
              <Link href="/contato" className="block hover:text-gold py-2" onClick={toggleMenu}>
                Contato
              </Link>
              <Link
                href="#contato"
                className="block bg-gold text-primary px-8 py-3 rounded-full font-medium mx-4 mt-4 hover:bg-beige transition-all"
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

