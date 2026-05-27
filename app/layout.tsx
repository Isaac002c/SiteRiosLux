import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  metadataBase: new URL('https://riooslux.com.br'),
  title: 'Eventos Premium Rio de Janeiro | Concierge RiosLux',
  description: 'Experiências exclusivas para clientes de alto padrão. Eventos corporativos, casamentos e despedidas de solteiro sofisticadas no Rio. Concierge 24h.',
  keywords: ['eventos premium Rio de Janeiro', 'concierge eventos RJ', 'eventos corporativos premium', 'despedida solteiro luxo', 'agência eventos luxo'],
  authors: [{ name: 'RiosLux' }],
  creator: 'RiosLux',
  publisher: 'RiosLux',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://riooslux.com.br',
    siteName: 'RiosLux - Eventos Premium',
    title: 'RiosLux | Eventos Premium e Concierge Exclusivo no Rio',
    description: 'Experiências sofisticadas para clientes de alto padrão. Concierge 24h, eventos corporativos, casamentos e despedidas exclusivas.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RiosLux - Eventos Premium Rio de Janeiro',
        type: 'image/jpeg',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RiosLux | Eventos Premium RJ',
    description: 'Concierge exclusivo e eventos de luxo no Rio de Janeiro.',
    images: ['/og-image.jpg'],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'RiosLux - Eventos Premium',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://riooslux.com.br',
    languages: {
      'pt-BR': 'https://riooslux.com.br',
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://riooslux.com.br",
    "name": "RiosLux",
    "description": "Agência especializada em eventos premium e concierge exclusivo no Rio de Janeiro",
    "url": "https://riooslux.com.br",
    "telephone": "+5521972522076",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Rio de Janeiro",
      "addressRegion": "RJ",
      "addressCountry": "BR"
    },
    "service": [
      {
        "@type": "Service",
        "name": "Eventos Corporativos Premium",
        "description": "Produção de eventos corporativos de alto padrão no Rio de Janeiro",
        "areaServed": ["Barra da Tijuca", "Ipanema", "Leblon", "Copacabana", "Zona Sul RJ"]
      },
      {
        "@type": "Service",
        "name": "Despedidas de Solteiro Luxo",
        "description": "Despedidas de solteiro e solteira exclusivas e sofisticadas"
      },
      {
        "@type": "Service",
        "name": "Concierge para Eventos",
        "description": "Serviço completo de concierge 24h para eventos premium"
      }
    ],
    "areaServed": {
      "@type": "City",
      "name": "Rio de Janeiro"
    }
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

