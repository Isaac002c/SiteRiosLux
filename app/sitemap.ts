import type { MetadataRoute } from 'next'
import { routes, type RouteKey } from '@/lib/i18n'
import { siteConfig } from '@/config/site'

const publicKeys: RouteKey[] = ['home', 'private', 'corporate', 'brand', 'concierge', 'projects', 'coverage', 'about', 'contact', 'privacy', 'regionalRio', 'regionalSaoPaulo', 'regionalBeloHorizonte', 'regionalVitoria', 'regionalBrasil']

export default function sitemap(): MetadataRoute.Sitemap {
  return publicKeys.flatMap((key) => {
    const languages = { 'pt-BR': siteConfig.url + routes[key].pt, en: siteConfig.url + routes[key].en, es: siteConfig.url + routes[key].es, 'x-default': siteConfig.url + routes[key].pt }
    return (['pt', 'en', 'es'] as const).map((locale) => ({
      url: siteConfig.url + routes[key][locale],
      lastModified: new Date('2026-09-27'),
      changeFrequency: key === 'home' ? 'weekly' as const : 'monthly' as const,
      priority: key === 'home' ? 1 : key === 'contact' || key.startsWith('regional') ? 0.85 : 0.8,
      alternates: { languages },
    }))
  })
}
