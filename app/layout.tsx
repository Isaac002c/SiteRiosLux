import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnalyticsProvider from '@/components/AnalyticsProvider'
import StructuredData from '@/components/StructuredData'
import { siteConfig } from '@/config/site'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400'],
  display: 'swap',
})

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0B1E1B',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: 'Agência de Eventos no Rio de Janeiro | Rios Lux',
  description: 'Agência de eventos no Rio de Janeiro para projetos corporativos, celebrações privadas e experiências de marca, com planejamento e produção integrada.',
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: 'eventos',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName: siteConfig.name,
    title: 'Agência de Eventos no Rio de Janeiro | Rios Lux',
    description: 'Eventos corporativos, celebrações privadas e experiências de marca no Rio de Janeiro, com planejamento e produção integrada.',
    images: [
      {
        url: 'https://www.agenciarioslux.com.br/og.png',
        width: 1200,
        height: 630,
        alt: 'Logo Rios Lux sobre textura verde-azulada',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agência de Eventos no Rio de Janeiro | Rios Lux',
    description: 'Eventos corporativos, celebrações privadas e experiências de marca no Rio de Janeiro.',
    images: ['https://www.agenciarioslux.com.br/og.png'],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Rios Lux',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-48.png', type: 'image/png', sizes: '48x48' },
      { url: '/favicon.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-touch-icon.png', type: 'image/png', sizes: '180x180' }],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': '/',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        alternateName: ['RiosLux', 'Rioslux', 'Agência Rios Lux'],
        description: 'Planejamento e produção de eventos corporativos, celebrações privadas e experiências no Rio de Janeiro.',
        url: `${siteConfig.url}/`,
        logo: {
          '@type': 'ImageObject',
          url: `${siteConfig.url}/brand/rios-lux-wordmark.png`,
          width: 639,
          height: 336,
        },
        image: `${siteConfig.url}/og.png`,
        email: siteConfig.email,
        telephone: siteConfig.phoneHref,
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          email: siteConfig.email,
          telephone: siteConfig.phoneHref,
          availableLanguage: 'Portuguese',
        },
        areaServed: {
          '@type': 'City',
          name: 'Rio de Janeiro',
        },
        sameAs: [siteConfig.social.instagram],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        url: `${siteConfig.url}/`,
        name: siteConfig.name,
        alternateName: ['RiosLux', 'Rioslux', 'Agência Rios Lux', 'agenciarioslux.com.br'],
        inLanguage: 'pt-BR',
        publisher: { '@id': `${siteConfig.url}/#organization` },
      },
    ],
  }

  return (
    <html lang="pt-BR">
      <head>
        <StructuredData data={schemaData} />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <AnalyticsProvider />
        <Navbar />
        <main className="pt-20 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
