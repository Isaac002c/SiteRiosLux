import Link from 'next/link'
import { Phone, Mail, MapPin, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary/90 backdrop-blur-md border-t border-gold/20 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif gradient-text font-bold mb-4">
              Rios Lux
            </h3>
            <p className="text-beige/80 text-sm opacity-80">
              Eventos premium para experiências exclusivas.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-center md:text-left">
            <Link href="/" className="hover:text-gold transition-colors flex items-center justify-center md:justify-start gap-2">
              Home
            </Link>
            <Link href="/sobre" className="hover:text-gold transition-colors flex items-center justify-center md:justify-start gap-2">
              Sobre
            </Link>
            <Link href="/servicos" className="hover:text-gold transition-colors flex items-center justify-center md:justify-start gap-2">
              Serviços
            </Link>
            <Link href="/experiencias" className="hover:text-gold transition-colors flex items-center justify-center md:justify-start gap-2">
              Experiências
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end items-center">
            <a href="tel:+5511999999999" className="flex items-center gap-2 hover:text-gold transition-colors p-2">
              <Phone size={20} />
              <span>+55 (11) 99999-9999</span>
            </a>
            <a href="mailto:contato@rioslux.com.br" className="flex items-center gap-2 hover:text-gold transition-colors p-2">
              <Mail size={20} />
              contato@rioslux.com.br
            </a>
          </div>
        </div>

        <div className="border-t border-gold/20 mt-12 pt-8 text-center">
          <p className="text-beige/60 text-sm">
            © 2024 Rios Lux. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

