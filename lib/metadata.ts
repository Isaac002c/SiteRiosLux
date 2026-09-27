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
