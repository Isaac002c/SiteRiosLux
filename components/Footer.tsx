import Link from 'next/link'
import { Instagram, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { createWhatsAppUrl, siteConfig } from '@/config/site'

const navigation = [
  { href: '/experiencias', label: 'Experiências' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/contato', label: 'Contato' },
  { href: '/faq', label: 'Perguntas frequentes' },
]

const services = [
  { href: '/eventos-corporativos-rio-de-janeiro', label: 'Eventos corporativos' },
  { href: '/eventos-privados-rio-de-janeiro', label: 'Eventos privados' },
  { href: '/experiencias-de-marca', label: 'Experiências de marca' },
  { href: '/concierge-rio-de-janeiro', label: 'Concierge' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <div className="page-shell py-16 sm:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.15fr_0.9fr_0.75fr_1fr]">
          <div>
            <Link href="/" className="font-serif text-2xl tracking-[0.18em]">RIOS LUX</Link>
            <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-brass">{siteConfig.descriptor}</p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-sand/65">
              Consultoria, planejamento e execução de eventos e experiências no Rio de Janeiro.
            </p>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rios Lux no Instagram"
              className="mt-7 inline-flex min-h-11 items-center gap-3 text-sm text-sand/75 transition hover:text-white"
            >
              <Instagram size={18} className="text-brass" /> @agenciarioslux
            </a>
          </div>

          <div>
            <p className="eyebrow mb-5">Serviços</p>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-sand/70 transition hover:text-white">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5">Navegação</p>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-sand/70 transition hover:text-white">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5">Contato</p>
            <address className="space-y-4 not-italic">
              <a href={`tel:${siteConfig.phoneHref}`} data-track-event="phone_click" data-track-label="footer" className="flex min-h-11 items-center gap-3 text-sm text-sand/75 transition hover:text-white">
                <Phone size={16} className="text-brass" /> {siteConfig.phoneDisplay}
              </a>
              <a href={`mailto:${siteConfig.email}`} data-track-event="email_click" data-track-label="footer" className="flex min-h-11 items-center gap-3 break-all text-sm text-sand/75 transition hover:text-white">
                <Mail size={16} className="shrink-0 text-brass" /> {siteConfig.email}
              </a>
              <a
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                data-track-event="whatsapp_click"
                data-track-label="footer"
                className="flex min-h-11 items-center gap-3 text-sm text-sand/75 transition hover:text-white"
              >
                <MessageCircle size={16} className="text-brass" /> Falar pelo WhatsApp
              </a>
              <p className="flex items-center gap-3 text-sm text-sand/75">
                <MapPin size={16} className="text-brass" /> Rio de Janeiro, RJ
              </p>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-xs text-sand/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Rios Lux. Todos os direitos reservados.</p>
          <p>Digital Experience by TELUN</p>
        </div>
      </div>
    </footer>
  )
}
