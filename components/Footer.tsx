import Link from 'next/link'
import { Phone, Mail, MapPin, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary/90 backdrop-blur-md border-t border-gold/20 py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <img 
              src="/logo.png" 
              alt="RiosLux - Eventos Premium e Concierge" 
              className="h-12 w-auto rounded-full shadow-lg mb-4"
            />
            <h3 className="text-lg font-serif font-bold gradient-text mb-3">RiosLux</h3>
            <p className="text-beige/80 text-sm leading-relaxed mb-4">
              Especialista em eventos premium, concierge 24h e experiências exclusivas no Rio de Janeiro.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-gold/20 transition-all">
                <Instagram className="h-5 w-5 text-gold" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-gold/20 transition-all">
                <Linkedin className="h-5 w-5 text-gold" />
              </a>
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="text-gold font-serif font-bold mb-6 uppercase tracking-wider text-sm">Serviços</h4>
            <ul className="space-y-3">
              <li><Link href="/servicos" className="text-beige/80 hover:text-gold transition-colors text-sm">Todos os Serviços</Link></li>
              <li><Link href="/despedida-solteiro-luxo-rj" className="text-beige/80 hover:text-gold transition-colors text-sm">Despedida Solteiro</Link></li>
              <li><Link href="/eventos-corporativos-premium-rj" className="text-beige/80 hover:text-gold transition-colors text-sm">Corporativos</Link></li>
              <li><Link href="/concierge-eventos-rio" className="text-beige/80 hover:text-gold transition-colors text-sm">Concierge 24h</Link></li>
              <li><Link href="/experiencias-exclusivas-rio" className="text-beige/80 hover:text-gold transition-colors text-sm">Experiências</Link></li>
            </ul>
          </div>

          {/* Localidades */}
          <div>
            <h4 className="text-gold font-serif font-bold mb-6 uppercase tracking-wider text-sm">Localizações</h4>
            <ul className="space-y-3">
              <li><Link href="/eventos-barra-tijuca" className="text-beige/80 hover:text-gold transition-colors text-sm">Barra da Tijuca</Link></li>
              <li><Link href="/casamentos-luxo-ipanema" className="text-beige/80 hover:text-gold transition-colors text-sm">Ipanema</Link></li>
              <li><Link href="/producao-eventos-leblon" className="text-beige/80 hover:text-gold transition-colors text-sm">Leblon</Link></li>
              <li><Link href="/eventos-mansoes-rio" className="text-beige/80 hover:text-gold transition-colors text-sm">Mansões</Link></li>
              <li><a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-beige/80 hover:text-gold transition-colors text-sm">Rio de Janeiro</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-gold font-serif font-bold mb-6 uppercase tracking-wider text-sm">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+5521972522076" className="flex items-center gap-2 text-beige/80 hover:text-gold transition-colors text-sm">
                  <Phone className="h-4 w-4" />
                  +55 21 97252-2076
                </a>
              </li>
              <li>
                <a href="mailto:agenciarioslux@gmail.com" className="flex items-center gap-2 text-beige/80 hover:text-gold transition-colors text-sm">
                  <Mail className="h-4 w-4" />
                  agenciarioslux@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/5521972522076" target="_blank" rel="noopener noreferrer" className="text-beige/80 hover:text-gold transition-colors text-sm">
                  WhatsApp 24h
                </a>
              </li>
              <li><Link href="/faq" className="text-beige/80 hover:text-gold transition-colors text-sm">FAQ</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gold/20 my-12"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-beige/60 text-xs">
            © 2024-2025 RiosLux - Eventos Premium e Concierge no Rio de Janeiro. Todos os direitos reservados.
          </p>
          
          <div className="flex gap-6 text-xs">
            <Link href="/faq" className="text-beige/60 hover:text-gold transition-colors">
              Perguntas Frequentes
            </Link>
            <span className="text-beige/40">•</span>
            <a href="/sitemap.xml" className="text-beige/60 hover:text-gold transition-colors">
              Sitemap
            </a>
            <span className="text-beige/40">•</span>
            <a href="/robots.txt" className="text-beige/60 hover:text-gold transition-colors">
              Robots
            </a>
          </div>

          <p className="text-beige/40 text-xs">
            Desenvolvido com dedicação para excelência premium.
          </p>
        </div>

        {/* Schema Markup Location */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "RiosLux - Agência de Eventos Premium",
          "description": "Especialista em eventos premium, concierge 24h e experiências exclusivas no Rio de Janeiro",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Rio de Janeiro",
            "addressRegion": "RJ",
            "addressCountry": "BR"
          },
          "telephone": "+5521972522076",
          "url": "https://riooslux.com.br"
        })}} />
      </div>
    </footer>
  )
}

