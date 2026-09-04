import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'

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
  alt: 'Rios Lux — Arquitetura de Experiências',
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
