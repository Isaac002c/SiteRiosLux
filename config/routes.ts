type IndexableRoute = {
  path: `/${string}` | '/'
  priority: number
  changeFrequency: 'weekly' | 'monthly' | 'yearly'
  lastModified?: string
}

export const indexableRoutes = [
  { path: '/', priority: 1, changeFrequency: 'weekly', lastModified: '2026-09-08' },
  { path: '/servicos', priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-09-08' },
  { path: '/eventos-corporativos-rio-de-janeiro', priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-09-08' },
  { path: '/eventos-privados-rio-de-janeiro', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/experiencias-de-marca', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/concierge-rio-de-janeiro', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/eventos-de-luxo-rio-de-janeiro', priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-09-08' },
  { path: '/experiencias', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/sobre', priority: 0.6, changeFrequency: 'yearly', lastModified: '2026-09-08' },
  { path: '/contato', priority: 0.8, changeFrequency: 'yearly' },
  { path: '/politica-de-privacidade', priority: 0.25, changeFrequency: 'yearly' },
  { path: '/faq', priority: 0.6, changeFrequency: 'monthly', lastModified: '2026-09-08' },
  { path: '/blog', priority: 0.55, changeFrequency: 'weekly' },
  { path: '/blog/concierge-vs-agencia-eventos', priority: 0.45, changeFrequency: 'yearly' },
  { path: '/blog/guia-despedida-solteiro-luxo', priority: 0.4, changeFrequency: 'yearly' },
  { path: '/blog/melhores-locais-eventos-rio', priority: 0.45, changeFrequency: 'yearly' },
  { path: '/blog/roi-eventos-corporativos', priority: 0.45, changeFrequency: 'yearly' },
  { path: '/blog/tecnologia-eventos-premium', priority: 0.4, changeFrequency: 'yearly' },
  { path: '/blog/tendencias-eventos-premium-2025', priority: 0.35, changeFrequency: 'yearly' },
] as const satisfies readonly IndexableRoute[]
