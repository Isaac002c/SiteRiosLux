export const locales = ['pt', 'en', 'es'] as const

export type Locale = (typeof locales)[number]

export type RouteKey =
  | 'home'
  | 'private'
  | 'corporate'
  | 'brand'
  | 'concierge'
  | 'projects'
  | 'coverage'
  | 'about'
  | 'contact'
  | 'privacy'
  | 'thanksPrivate'
  | 'thanksContact'
  | 'regionalRio'
  | 'regionalSaoPaulo'
  | 'regionalBeloHorizonte'
  | 'regionalVitoria'
  | 'regionalBrasil'

export const localeInfo = {
  pt: { html: 'pt-BR', og: 'pt_BR', short: 'PT' },
  en: { html: 'en', og: 'en_US', short: 'EN' },
  es: { html: 'es', og: 'es_ES', short: 'ES' },
} as const

export const routes: Record<RouteKey, Record<Locale, string>> = {
  home: { pt: '/', en: '/en', es: '/es' },
  private: { pt: '/private', en: '/en/private-events', es: '/es/eventos-privados' },
  corporate: { pt: '/corporate', en: '/en/corporate-events', es: '/es/eventos-corporativos' },
  brand: { pt: '/brand-experience', en: '/en/brand-experience', es: '/es/experiencias-de-marca' },
  concierge: { pt: '/concierge', en: '/en/concierge', es: '/es/concierge' },
  projects: { pt: '/projetos', en: '/en/projects', es: '/es/proyectos' },
  coverage: { pt: '/onde-atuamos', en: '/en/where-we-work', es: '/es/donde-trabajamos' },
  about: { pt: '/sobre', en: '/en/about', es: '/es/sobre-nosotros' },
  contact: { pt: '/contato', en: '/en/contact', es: '/es/contacto' },
  privacy: { pt: '/politica-de-privacidade', en: '/en/privacy-policy', es: '/es/politica-de-privacidad' },
  thanksPrivate: { pt: '/obrigado/private', en: '/en/thank-you/private', es: '/es/gracias/private' },
  thanksContact: { pt: '/obrigado/contato', en: '/en/thank-you/contact', es: '/es/gracias/contacto' },
  regionalRio: {
    pt: '/eventos-privados-rio-de-janeiro',
    en: '/en/private-events-rio-de-janeiro',
    es: '/es/eventos-privados-rio-de-janeiro',
  },
  regionalSaoPaulo: {
    pt: '/eventos-privados-sao-paulo',
    en: '/en/private-events-sao-paulo',
    es: '/es/eventos-privados-sao-paulo',
  },
  regionalBeloHorizonte: {
    pt: '/eventos-privados-belo-horizonte',
    en: '/en/private-events-belo-horizonte',
    es: '/es/eventos-privados-belo-horizonte',
  },
  regionalVitoria: {
    pt: '/eventos-privados-vitoria',
    en: '/en/private-events-vitoria',
    es: '/es/eventos-privados-vitoria',
  },
  regionalBrasil: {
    pt: '/eventos-privados-brasil',
    en: '/en/private-events-brazil',
    es: '/es/eventos-privados-brasil',
  },
}

export function getLocaleFromPath(pathname: string): Locale {
  if (pathname === '/en' || pathname.startsWith('/en/')) return 'en'
  if (pathname === '/es' || pathname.startsWith('/es/')) return 'es'
  return 'pt'
}

export function getRouteKey(pathname: string): RouteKey {
  const normalized = pathname !== '/' && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname
  const match = (Object.entries(routes) as [RouteKey, Record<Locale, string>][])
    .find(([, localized]) => Object.values(localized).includes(normalized))
  return match?.[0] ?? 'home'
}

export function switchLocale(pathname: string, locale: Locale) {
  return routes[getRouteKey(pathname)][locale]
}

export const ui = {
  pt: {
    nav: { private: 'Private', corporate: 'Corporate', brand: 'Brand Experience', projects: 'Projetos', coverage: 'Onde atuamos' },
    contact: 'Planejar um evento', menuOpen: 'Abrir menu', menuClose: 'Fechar menu', navigation: 'Navegação principal',
    whatsapp: 'Falar pelo WhatsApp', services: 'Frentes', company: 'Rios Lux', legal: 'Informações',
    about: 'Sobre', concierge: 'Concierge', privacy: 'Política de Privacidade', rights: 'Todos os direitos reservados.',
    base: 'Base no Rio de Janeiro. Atuação nacional conforme escopo e logística.',
  },
  en: {
    nav: { private: 'Private', corporate: 'Corporate', brand: 'Brand Experience', projects: 'Projects', coverage: 'Where we work' },
    contact: 'Plan an event', menuOpen: 'Open menu', menuClose: 'Close menu', navigation: 'Main navigation',
    whatsapp: 'Chat on WhatsApp', services: 'Expertise', company: 'Rios Lux', legal: 'Information',
    about: 'About', concierge: 'Concierge', privacy: 'Privacy Policy', rights: 'All rights reserved.',
    base: 'Based in Rio de Janeiro. Working across Brazil according to scope and logistics.',
  },
  es: {
    nav: { private: 'Private', corporate: 'Corporate', brand: 'Brand Experience', projects: 'Proyectos', coverage: 'Dónde trabajamos' },
    contact: 'Planificar un evento', menuOpen: 'Abrir menú', menuClose: 'Cerrar menú', navigation: 'Navegación principal',
    whatsapp: 'Hablar por WhatsApp', services: 'Áreas', company: 'Rios Lux', legal: 'Información',
    about: 'Nosotros', concierge: 'Concierge', privacy: 'Política de Privacidad', rights: 'Todos los derechos reservados.',
    base: 'Con base en Río de Janeiro. Actuación en Brasil según alcance y logística.',
  },
} as const
