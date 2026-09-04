import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnalyticsEvents from '@/components/AnalyticsEvents'
import { siteConfig } from '@/config/site'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: 'Rios Lux | Eventos e Experiências de Alto Padrão no Rio de Janeiro',
  description: 'Arquitetura de experiências no Rio de Janeiro: eventos corporativos, celebrações privadas, curadoria, concierge e execução completa.',
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: 'eventos',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName: siteConfig.name,
    title: 'Rios Lux | Arquitetura de Experiências',
    description: 'Eventos corporativos, celebrações privadas e experiências com curadoria, concierge e execução completa no Rio de Janeiro.',
    images: [
      {
        url: 'https://www.agenciarioslux.com.br/og.png',
        width: 1200,
        height: 630,
        alt: 'Rios Lux — Arquitetura de Experiências',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rios Lux | Arquitetura de Experiências',
    description: 'Experiências que não se repetem, com curadoria e execução completa no Rio de Janeiro.',
    images: ['https://www.agenciarioslux.com.br/og.png'],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Rios Lux',
  },
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png', sizes: '192x192' }],
    shortcut: '/favicon.png',
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
        '@id': 'https://www.agenciarioslux.com.br/#organization',
        name: siteConfig.name,
        alternateName: 'Rios Lux',
        description: 'Arquitetura de experiências, eventos e concierge no Rio de Janeiro.',
        url: `${siteConfig.url}/`,
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.agenciarioslux.com.br/logo.png',
          width: 512,
          height: 509,
        },
        email: siteConfig.email,
        telephone: siteConfig.phoneHref,
        areaServed: {
          '@type': 'City',
          name: 'Rio de Janeiro',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.agenciarioslux.com.br/#website',
        url: 'https://www.agenciarioslux.com.br/',
        name: siteConfig.name,
        alternateName: 'Rios Lux',
        inLanguage: 'pt-BR',
        publisher: { '@id': 'https://www.agenciarioslux.com.br/#organization' },
      },
    ],
  }

  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <AnalyticsEvents />
        <Navbar />
        <main className="pt-20 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
