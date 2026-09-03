import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.agenciarioslux.com.br'),
  title: 'Eventos Premium no Rio de Janeiro | RiosLux',
  description: 'Planejamento de eventos premium e concierge no Rio de Janeiro para empresas, casamentos e celebrações exclusivas. Fale com a RiosLux.',
  applicationName: 'RiosLux',
  authors: [{ name: 'RiosLux' }],
  creator: 'RiosLux',
  publisher: 'RiosLux',
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
    siteName: 'RiosLux',
    title: 'Eventos Premium no Rio de Janeiro | RiosLux',
    description: 'Planejamento de eventos premium e concierge no Rio de Janeiro para empresas, casamentos e celebrações exclusivas.',
    images: [
      {
        url: 'https://www.agenciarioslux.com.br/og.png',
        width: 1200,
        height: 630,
        alt: 'RiosLux — eventos premium e concierge no Rio de Janeiro',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://www.agenciarioslux.com.br/og.png'],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'RiosLux - Eventos Premium',
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
        name: 'RiosLux',
        alternateName: 'Rios Lux',
        description: 'Planejamento de eventos premium e concierge no Rio de Janeiro.',
        url: 'https://www.agenciarioslux.com.br/',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.agenciarioslux.com.br/logo.png',
          width: 512,
          height: 509,
        },
        email: 'agenciarioslux@gmail.com',
        telephone: '+5521972522076',
        areaServed: {
          '@type': 'City',
          name: 'Rio de Janeiro',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.agenciarioslux.com.br/#website',
        url: 'https://www.agenciarioslux.com.br/',
        name: 'RiosLux',
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
        <Navbar />
        <main className="pt-20 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
