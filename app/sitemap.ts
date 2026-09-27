import type { MetadataRoute } from 'next'
import { routes, type RouteKey } from '@/lib/i18n'
import { siteConfig } from '@/config/site'

const publicKeys: RouteKey[] = ['home', 'private', 'corporate', 'brand', 'concierge', 'projects', 'coverage', 'about', 'contact', 'privacy', 'regionalRio', 'regionalSaoPaulo', 'regionalBeloHorizonte', 'regionalVitoria', 'regionalBrasil']
const editorialPaths = ['/blog', '/blog/concierge-vs-agencia-eventos', '/blog/guia-despedida-solteiro-luxo', '/blog/melhores-locais-eventos-rio', '/blog/roi-eventos-corporativos', '/blog/tecnologia-eventos-premium', '/blog/tendencias-eventos-premium-2025', '/faq'] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedRoutes = publicKeys.flatMap((key) => {
    const languages = { 'pt-BR': siteConfig.url + routes[key].pt, en: siteConfig.url + routes[key].en, es: siteConfig.url + routes[key].es, 'x-default': siteConfig.url + routes[key].pt }
    return (['pt', 'en', 'es'] as const).map((locale) => ({
      url: siteConfig.url + routes[key][locale],
      lastModified: new Date('2026-09-27'),
      changeFrequency: key === 'home' ? 'weekly' as const : 'monthly' as const,
      priority: key === 'home' ? 1 : key === 'contact' || key.startsWith('regional') ? 0.85 : 0.8,
      alternates: { languages },
    }))
  })
  const editorialRoutes = editorialPaths.map((path) => ({
    url: siteConfig.url + path,
    lastModified: new Date('2026-09-27'),
    changeFrequency: path === '/blog' ? 'weekly' as const : 'yearly' as const,
    priority: path === '/blog' ? 0.65 : 0.55,
  }))

  return [...localizedRoutes, ...editorialRoutes]
}
