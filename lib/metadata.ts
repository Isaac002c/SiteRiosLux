import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import { localeInfo, routes, type Locale, type RouteKey } from '@/lib/i18n'

type PageMetadataOptions = {
  title: string
  description: string
  path: `/${string}` | '/'
  type?: 'website' | 'article'
  index?: boolean
  shareImage?: boolean
}

const shareImage = {
  url: `${siteConfig.url}/og.png`,
  width: 1200,
  height: 630,
  alt: 'Logo Rios Lux sobre textura verde-azulada',
  type: 'image/png',
}

export function createPageMetadata({
  title,
  description,
  path,
  type = 'website',
  index = true,
  shareImage: includeShareImage = true,
}: PageMetadataOptions): Metadata {
  const images = includeShareImage ? [shareImage] : []

  return {
    title,
    description,
    alternates: { canonical: path },
    robots: { index, follow: true },
    openGraph: {
      type,
      locale: 'pt_BR',
      siteName: siteConfig.name,
      title,
      description,
      url: path,
      images,
    },
    twitter: {
      card: includeShareImage ? 'summary_large_image' : 'summary',
      title,
      description,
      images,
    },
  }
}

const rootCopy: Record<Locale, { title: string; description: string }> = {
  pt: {
    title: 'Eventos e Experiências de Alto Padrão no Brasil | Rios Lux',
    description: 'Planejamento, curadoria e produção completa para eventos privados, corporativos e experiências de marca no Brasil.',
  },
  en: {
    title: 'High-End Events and Experiences Across Brazil | Rios Lux',
    description: 'Private celebrations, corporate events and brand experiences planned with precision across Brazil.',
  },
  es: {
    title: 'Eventos y Experiencias de Alto Nivel en Brasil | Rios Lux',
    description: 'Planificación, curaduría y producción integral de eventos privados, corporativos y experiencias de marca en Brasil.',
  },
}

export function createRootMetadata(locale: Locale): Metadata {
  const copy = rootCopy[locale]
  return {
    metadataBase: new URL(siteConfig.url),
    title: copy.title,
    description: copy.description,
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: 'eventos',
    openGraph: {
      type: 'website',
      locale: localeInfo[locale].og,
      siteName: siteConfig.name,
      title: copy.title,
      description: copy.description,
      images: [shareImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: copy.title,
      description: copy.description,
      images: [shareImage.url],
    },
    appleWebApp: { capable: true, statusBarStyle: 'black-translucent', title: 'Rios Lux' },
    icons: {
      icon: [{ url: '/favicon.png', type: 'image/png', sizes: '192x192' }],
      apple: [{ url: '/apple-touch-icon.png', type: 'image/png', sizes: '180x180' }],
    },
    manifest: '/manifest.json',
  }
}

export function createLocalizedMetadata({
  title,
  description,
  locale,
  routeKey,
  index = true,
}: {
  title: string
  description: string
  locale: Locale
  routeKey: RouteKey
  index?: boolean
}): Metadata {
  const path = routes[routeKey][locale]
  const languages = {
    'pt-BR': routes[routeKey].pt,
    en: routes[routeKey].en,
    es: routes[routeKey].es,
    'x-default': routes[routeKey].pt,
  }

  return {
    title,
    description,
    alternates: { canonical: path, languages },
    robots: { index, follow: true },
    openGraph: {
      type: 'website',
      locale: localeInfo[locale].og,
      siteName: siteConfig.name,
      title,
      description,
      url: path,
      images: [shareImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [shareImage.url],
    },
  }
}
