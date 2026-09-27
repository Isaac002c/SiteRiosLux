import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnalyticsProvider from '@/components/AnalyticsProvider'
import StructuredData from '@/components/StructuredData'
import MobileWhatsApp, { DocumentLanguage } from '@/components/MobileWhatsApp'
import { siteConfig } from '@/config/site'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '500'],
  display: 'swap',
})

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0B1E1B',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: 'Eventos e Experiências de Alto Padrão no Brasil | Rios Lux',
  description: 'Planejamento, curadoria e produção completa para eventos privados, corporativos e experiências de marca no Brasil.',
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
    title: 'Eventos e Experiências de Alto Padrão no Brasil | Rios Lux',
    description: 'Planejamento, curadoria e produção completa de eventos privados, corporativos e experiências de marca no Brasil.',
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
    description: 'Eventos privados, corporativos e experiências de marca no Brasil.',
    images: ['https://www.agenciarioslux.com.br/og.png'],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Rios Lux',
  },
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png', sizes: '192x192' }],
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
        description: 'Planejamento, curadoria e produção completa de eventos privados, corporativos e experiências de marca no Brasil.',
        url: `${siteConfig.url}/`,
        logo: {
          '@type': 'ImageObject',
          '@id': `${siteConfig.url}/#logo`,
          url: `${siteConfig.url}/brand/rios-lux-monogram-square.png`,
          contentUrl: `${siteConfig.url}/brand/rios-lux-monogram-square.png`,
          width: 500,
          height: 500,
          caption: 'Rios Lux',
        },
        image: `${siteConfig.url}/og.png`,
        email: siteConfig.email,
        telephone: siteConfig.phoneHref,
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          email: siteConfig.email,
          telephone: siteConfig.phoneHref,
          availableLanguage: ['Portuguese', 'English', 'Spanish'],
        },
        areaServed: { '@type': 'Country', name: 'Brazil' },
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
      <body className={`${manrope.variable} ${cormorant.variable} antialiased`}>
        <DocumentLanguage />
        <AnalyticsProvider />
        <Navbar />
        <main className="min-h-screen pt-[4.5rem] max-sm:pb-20">
          {children}
        </main>
        <Footer />
        <MobileWhatsApp />
      </body>
    </html>
  )
}
