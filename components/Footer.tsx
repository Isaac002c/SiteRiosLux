import Link from 'next/link'
import { Phone, Mail, MapPin, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary/90 backdrop-blur-md border-t border-gold/20 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
          <div className="text-center lg:text-left">
            <img 
              src="/logo.png" 
              alt="RiosLux" 
              className="h-12 w-auto mx-auto lg:mx-0 rounded-full shadow-lg mb-4"
            />
            <p className="text-beige/80 text-sm opacity-80">
              Eventos premium para experiências exclusivas.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <a href="tel:+5521972522076" className="flex items-center gap-2 hover:text-gold transition-colors p-3 rounded-xl backdrop-blur-sm hover:bg-white/5">
              +55 21 97252-2076
            </a>
            <a href="mailto:agenciarioslux@gmail.com" className="flex items-center gap-2 hover:text-gold transition-colors p-3 rounded-xl backdrop-blur-sm hover:bg-white/5">
              agenciarioslux@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-gold/20 mt-12 pt-8 text-center">
          <p className="text-beige/60 text-xs">
            © 2024 RiosLux. Todos os direitos reservados.
          </p>
          <p className="text-beige/40 text-xs mt-2">
            Feito por ChronosTek
          </p>
        </div>
      </div>
    </footer>
  )
}

