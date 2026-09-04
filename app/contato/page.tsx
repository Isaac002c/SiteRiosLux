'use client'

import { useRef, useState } from 'react'
import { CalendarDays, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { createWhatsAppUrl, siteConfig } from '@/config/site'
import { trackEvent } from '@/lib/analytics'

type FormData = {
  name: string
  whatsapp: string
  email: string
  company: string
  experience: string
  date: string
  guests: string
  location: string
  message: string
}

const initialForm: FormData = {
  name: '',
  whatsapp: '',
  email: '',
  company: '',
  experience: '',
  date: '',
  guests: '',
  location: '',
  message: '',
}

export default function Contato() {
  const [formData, setFormData] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const formStarted = useRef(false)

  const updateField = (field: keyof FormData, value: string) => {
    setSubmitted(false)
    setFormData((current) => ({ ...current, [field]: value }))
  }

  const handleFormStart = () => {
    if (formStarted.current) return
    formStarted.current = true
    trackEvent('form_start', { form: 'curadoria' })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const details = [
      siteConfig.whatsappMessage,
      '',
      `Nome: ${formData.name}`,
      `WhatsApp: ${formData.whatsapp}`,
      `E-mail: ${formData.email}`,
      formData.company ? `Empresa: ${formData.company}` : '',
      `Tipo de experiência: ${formData.experience}`,
      formData.date ? `Data: ${formData.date}` : '',
      formData.guests ? `Convidados: ${formData.guests}` : '',
      formData.location ? `Local/cidade: ${formData.location}` : '',
      `Mensagem: ${formData.message}`,
    ].filter(Boolean).join('\n')

    trackEvent('form_submit', { form: 'curadoria', experience_type: formData.experience })
    setSubmitted(true)

    const whatsappUrl = createWhatsAppUrl(details)
    const whatsappWindow = window.open(whatsappUrl, '_blank')
    if (whatsappWindow) whatsappWindow.opener = null
    else window.location.assign(whatsappUrl)
  }

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
          <div>
            <div className="mb-9">
              <p className="eyebrow mb-4">Solicitar curadoria</p>
              <h2 className="font-serif text-3xl sm:text-4xl">Compartilhe o ponto de partida.</h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-sand/60">
                Ao enviar, suas informações serão organizadas em uma mensagem e abertas no WhatsApp da Rios Lux.
              </p>
            </div>

            <form onSubmit={handleSubmit} onFocus={handleFormStart} className="grid gap-x-5 gap-y-6 sm:grid-cols-2">
              <Field label="Nome" required>
                <input
                  required
                  autoComplete="name"
                  value={formData.name}
                  onChange={(event) => updateField('name', event.target.value)}
                  className="form-field"
                  placeholder="Como podemos chamar você?"
                />
              </Field>

              <Field label="WhatsApp" required>
                <input
                  required
                  type="tel"
                  autoComplete="tel"
                  value={formData.whatsapp}
                  onChange={(event) => updateField('whatsapp', event.target.value)}
                  className="form-field"
                  placeholder="DDD + número"
                />
              </Field>

              <Field label="E-mail" required>
                <input
                  required
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={(event) => updateField('email', event.target.value)}
                  className="form-field"
                  placeholder="seu@email.com"
                />
              </Field>

              <Field label="Empresa" hint="opcional">
                <input
                  autoComplete="organization"
                  value={formData.company}
                  onChange={(event) => updateField('company', event.target.value)}
                  className="form-field"
                  placeholder="Nome da empresa"
                />
              </Field>

              <Field label="Tipo de experiência" required>
                <select
                  required
                  value={formData.experience}
                  onChange={(event) => updateField('experience', event.target.value)}
                  className="form-field"
                >
                  <option value="">Selecione</option>
                  <option value="Evento corporativo">Evento corporativo</option>
                  <option value="Celebração privada">Celebração privada</option>
                  <option value="Experiência / lifestyle">Experiência / lifestyle</option>
                  <option value="Concierge">Concierge</option>
                  <option value="Outro formato">Outro formato</option>
                </select>
              </Field>

              <Field label="Data" hint="se definida">
                <input
                  type="date"
                  value={formData.date}
                  onChange={(event) => updateField('date', event.target.value)}
                  className="form-field"
                />
              </Field>

              <Field label="Número aproximado de convidados" hint="opcional">
                <input
                  type="number"
                  min="1"
                  inputMode="numeric"
                  value={formData.guests}
                  onChange={(event) => updateField('guests', event.target.value)}
                  className="form-field"
                  placeholder="Ex.: 80"
                />
              </Field>

              <Field label="Local ou cidade" hint="opcional">
                <input
                  autoComplete="address-level2"
                  value={formData.location}
                  onChange={(event) => updateField('location', event.target.value)}
                  className="form-field"
                  placeholder="Ex.: Rio de Janeiro"
                />
              </Field>

              <div className="sm:col-span-2">
                <Field label="O que você imagina?" required>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(event) => updateField('message', event.target.value)}
                    className="form-field resize-y"
                    placeholder="Conte o contexto, a intenção e o que já está definido."
                  />
                </Field>
              </div>

              <div className="sm:col-span-2">
                <button type="submit" className="button-primary w-full sm:w-auto" data-track-event="click_curadoria" data-track-label="contact_form">
                  Solicitar Curadoria
                </button>
                {submitted && (
                  <p role="status" className="mt-4 text-sm text-sand/70">
                    Sua mensagem foi preparada e aberta no WhatsApp.
                  </p>
                )}
              </div>
            </form>
          </div>

          <aside className="border-t border-white/15 pt-9 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <p className="eyebrow mb-7">Fale com a Rios Lux</p>
            <div className="space-y-7">
              <ContactItem icon={<Phone size={18} />} label="Telefone" href={`tel:${siteConfig.phoneHref}`}>
                {siteConfig.phoneDisplay}
              </ContactItem>
              <ContactItem icon={<Mail size={18} />} label="E-mail" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </ContactItem>
              <ContactItem icon={<MapPin size={18} />} label="Atuação">
                Rio de Janeiro, RJ
              </ContactItem>
              <ContactItem icon={<CalendarDays size={18} />} label="Atendimento">
                Conversas e projetos sob agendamento
              </ContactItem>
            </div>

            <a
              href={createWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              data-track-event="click_whatsapp"
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

function Field({
  label,
  hint,
  required,
  children,
}: {
  label: string
  hint?: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center justify-between text-sm text-sand/75">
        <span>{label}{required && <span className="text-brass"> *</span>}</span>
        {hint && <span className="text-xs text-sand/40">{hint}</span>}
      </span>
      {children}
    </label>
  )
}

function ContactItem({
  icon,
  label,
  href,
  children,
}: {
  icon: React.ReactNode
  label: string
  href?: string
  children: React.ReactNode
}) {
  const content = (
    <div className="flex gap-4">
      <span className="mt-0.5 text-brass">{icon}</span>
      <div>
        <p className="text-[10px] uppercase tracking-[0.22em] text-sand/40">{label}</p>
        <p className="mt-2 break-all text-sand/85">{children}</p>
      </div>
    </div>
  )

  return href ? <a href={href} className="block transition hover:opacity-75">{content}</a> : content
}
