import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import { createWhatsAppUrl, siteConfig } from '@/config/site'
import type { AnalyticsEvent } from '@/lib/analytics'

export default function Contato() {
  return (
    <div>
      <section className="section-space bg-canvas text-ink">
        <div className="page-shell pt-10 sm:pt-16">
          <p className="eyebrow mb-6">Contato</p>
          <h1 className="max-w-6xl text-balance font-serif text-5xl leading-[0.96] sm:text-6xl lg:text-8xl">
            Sua experiência começa aqui.
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-ink/68 sm:text-2xl">
            Conte-nos o que você imagina. A Rios Lux cuida dos próximos passos.
          </p>
        </div>
      </section>

      <section className="section-space bg-ink">
        <div className="page-shell grid gap-14 lg:grid-cols-[1.3fr_0.7fr] lg:gap-24">
          <ContactForm />

          <aside className="border-t border-white/15 pt-9 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <p className="eyebrow mb-7">Fale com a Rios Lux</p>
            <div className="space-y-7">
              <ContactItem icon={<Phone size={18} />} label="Telefone" href={`tel:${siteConfig.phoneHref}`} event="phone_click">
                {siteConfig.phoneDisplay}
              </ContactItem>
              <ContactItem icon={<Mail size={18} />} label="E-mail" href={`mailto:${siteConfig.email}`} event="email_click">
                {siteConfig.email}
              </ContactItem>
              <ContactItem icon={<MapPin size={18} />} label="Atuação">
                Rio de Janeiro, RJ
              </ContactItem>
            </div>

            <a
              href={createWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              data-track-event="whatsapp_click"
              data-track-label="contact_direct"
              className="mt-10 inline-flex items-center text-sm font-semibold text-brass transition hover:text-sand"
            >
              <MessageCircle className="mr-2" size={18} /> Preferir conversa direta no WhatsApp
            </a>
          </aside>
        </div>
      </section>
    </div>
  )
}

function ContactItem({
  icon,
  label,
  href,
  event,
  children,
}: {
  icon: React.ReactNode
  label: string
  href?: string
  event?: AnalyticsEvent
  children: React.ReactNode
}) {
  const content = (
    <div className="flex gap-4">
      <span className="mt-0.5 text-brass">{icon}</span>
      <div>
        <p className="text-[10px] uppercase tracking-[0.22em] text-sand/70">{label}</p>
        <p className="mt-2 break-all text-sand/85">{children}</p>
      </div>
    </div>
  )

  return href ? (
    <a href={href} data-track-event={event} data-track-label="contact_page" className="block rounded-sm transition hover:opacity-75">
      {content}
    </a>
  ) : content
}
