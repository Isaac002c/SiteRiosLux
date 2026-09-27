import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ServicePage from '@/components/ServicePage'
import RegionalPage from '@/components/RegionalPage'
import { AboutPage, ContactPage, CoveragePage, PrivacyPage, ProjectsPage } from '@/components/InstitutionalPages'
import { createLocalizedMetadata } from '@/lib/metadata'
import { getRegionalContent, getServiceContent, routeKeyForService, type RegionalKey, type ServiceKey } from '@/lib/site-content'
import type { RouteKey } from '@/lib/i18n'

type PageDef =
  | { type: 'service'; key: ServiceKey }
  | { type: 'regional'; key: RegionalKey }
  | { type: 'institutional'; key: Extract<RouteKey, 'projects' | 'coverage' | 'about' | 'contact' | 'privacy'> }

export const localizedPages: Record<'en' | 'es', Record<string, PageDef>> = {
  en: {
    'private-events': { type: 'service', key: 'private' }, 'corporate-events': { type: 'service', key: 'corporate' },
    'brand-experience': { type: 'service', key: 'brand' }, concierge: { type: 'service', key: 'concierge' },
    projects: { type: 'institutional', key: 'projects' }, 'where-we-work': { type: 'institutional', key: 'coverage' },
    about: { type: 'institutional', key: 'about' }, contact: { type: 'institutional', key: 'contact' }, 'privacy-policy': { type: 'institutional', key: 'privacy' },
    'private-events-rio-de-janeiro': { type: 'regional', key: 'regionalRio' }, 'private-events-sao-paulo': { type: 'regional', key: 'regionalSaoPaulo' },
    'private-events-belo-horizonte': { type: 'regional', key: 'regionalBeloHorizonte' }, 'private-events-vitoria': { type: 'regional', key: 'regionalVitoria' },
    'private-events-brazil': { type: 'regional', key: 'regionalBrasil' },
  },
  es: {
    'eventos-privados': { type: 'service', key: 'private' }, 'eventos-corporativos': { type: 'service', key: 'corporate' },
    'experiencias-de-marca': { type: 'service', key: 'brand' }, concierge: { type: 'service', key: 'concierge' },
    proyectos: { type: 'institutional', key: 'projects' }, 'donde-trabajamos': { type: 'institutional', key: 'coverage' },
    'sobre-nosotros': { type: 'institutional', key: 'about' }, contacto: { type: 'institutional', key: 'contact' }, 'politica-de-privacidad': { type: 'institutional', key: 'privacy' },
    'eventos-privados-rio-de-janeiro': { type: 'regional', key: 'regionalRio' }, 'eventos-privados-sao-paulo': { type: 'regional', key: 'regionalSaoPaulo' },
    'eventos-privados-belo-horizonte': { type: 'regional', key: 'regionalBeloHorizonte' }, 'eventos-privados-vitoria': { type: 'regional', key: 'regionalVitoria' },
    'eventos-privados-brasil': { type: 'regional', key: 'regionalBrasil' },
  },
}

const institutionalMeta = {
  en: {
    projects: ['Selected Projects | Rios Lux', 'Real projects and visual references presented with transparency and respect for client privacy.'],
    coverage: ['Where We Work in Brazil | Rios Lux', 'Based in Rio de Janeiro and working across São Paulo, Minas Gerais, Espírito Santo and other Brazilian destinations.'],
    about: ['About Rios Lux | Experience Architecture', 'Meet the team, values and method behind Rios Lux events and experiences across Brazil.'],
    contact: ['Contact Rios Lux | Plan an Event in Brazil', 'Discuss a private event, corporate gathering or brand experience with Rios Lux.'],
    privacy: ['Privacy Policy | Rios Lux', 'How Rios Lux processes information submitted through this website.'],
  },
  es: {
    projects: ['Proyectos Seleccionados | Rios Lux', 'Proyectos reales y referencias visuales presentados con transparencia y respeto por la privacidad.'],
    coverage: ['Dónde Trabajamos en Brasil | Rios Lux', 'Con base en Río de Janeiro y actuación en São Paulo, Minas Gerais, Espírito Santo y otros destinos.'],
    about: ['Sobre Rios Lux | Arquitectura de Experiencias', 'Conozca al equipo, los valores y el método detrás de Rios Lux.'],
    contact: ['Contacto Rios Lux | Planifique un Evento en Brasil', 'Converse con Rios Lux sobre un evento privado, corporativo o experiencia de marca.'],
    privacy: ['Política de Privacidad | Rios Lux', 'Cómo Rios Lux trata los datos enviados a través de este sitio web.'],
  },
} as const

export function getLocalizedPageMetadata(locale: 'en' | 'es', slug: string): Metadata {
  const page = localizedPages[locale][slug]
  if (!page) return {}
  if (page.type === 'service') {
    const content = getServiceContent(locale, page.key)
    return createLocalizedMetadata({ title: content.metaTitle, description: content.metaDescription, locale, routeKey: routeKeyForService[page.key] })
  }
  if (page.type === 'regional') {
    const content = getRegionalContent(locale, page.key)
    return createLocalizedMetadata({ title: content.metaTitle, description: content.metaDescription, locale, routeKey: page.key })
  }
  const [title, description] = institutionalMeta[locale][page.key]
  return createLocalizedMetadata({ title, description, locale, routeKey: page.key })
}

export default function LocalizedRoute({ locale, slug }: { locale: 'en' | 'es'; slug: string }) {
  const page = localizedPages[locale][slug]
  if (!page) notFound()
  if (page.type === 'service') return <ServicePage locale={locale} service={page.key} />
  if (page.type === 'regional') return <RegionalPage locale={locale} region={page.key} />
  if (page.key === 'projects') return <ProjectsPage locale={locale} />
  if (page.key === 'coverage') return <CoveragePage locale={locale} />
  if (page.key === 'about') return <AboutPage locale={locale} />
  if (page.key === 'contact') return <ContactPage locale={locale} />
  return <PrivacyPage locale={locale} />
}
