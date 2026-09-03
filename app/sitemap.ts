import type { MetadataRoute } from 'next'

const SITE_URL = 'https://www.agenciarioslux.com.br'

const routes = [
  '',
  '/blog',
  '/blog/concierge-vs-agencia-eventos',
  '/blog/guia-despedida-solteiro-luxo',
  '/blog/melhores-locais-eventos-rio',
  '/blog/roi-eventos-corporativos',
  '/blog/tecnologia-eventos-premium',
  '/blog/tendencias-eventos-premium-2025',
  '/casamentos-luxo-ipanema',
  '/casos-sucesso',
  '/concierge-eventos-rio',
  '/contato',
  '/despedida-solteiro-luxo-rj',
  '/eventos-barra-tijuca',
  '/eventos-corporativos-completo',
  '/eventos-corporativos-premium-rj',
  '/eventos-mansoes-rio',
  '/experiencias',
  '/experiencias-exclusivas-rio',
  '/faq',
  '/por-que-riosilux',
  '/producao-eventos-leblon',
  '/servico-concierge-premium',
  '/servicos',
  '/sobre',
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route || '/'}`,
  }))
}

