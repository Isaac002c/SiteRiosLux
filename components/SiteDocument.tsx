import { Cormorant_Garamond, Manrope } from 'next/font/google'
import AnalyticsProvider, { googleTagManagerScript } from '@/components/AnalyticsProvider'
import Footer from '@/components/Footer'
import MobileWhatsApp from '@/components/MobileWhatsApp'
import Navbar from '@/components/Navbar'
import StructuredData from '@/components/StructuredData'
import { siteConfig } from '@/config/site'
import { localeInfo, type Locale } from '@/lib/i18n'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-serif', weight: ['400', '500'], display: 'swap' })

const descriptions: Record<Locale, string> = {
  pt: 'Planejamento, curadoria e produção completa de eventos privados, corporativos e experiências de marca no Brasil.',
  en: 'Full planning, curation and production for private events, corporate gatherings and brand experiences across Brazil.',
  es: 'Planificación, curaduría y producción integral de eventos privados, corporativos y experiencias de marca en Brasil.',
}

export default function SiteDocument({ children, locale }: { children: React.ReactNode; locale: Locale }) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        alternateName: ['RiosLux', 'Rioslux', 'Agência Rios Lux'],
        description: descriptions[locale],
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
        inLanguage: localeInfo[locale].html,
        publisher: { '@id': `${siteConfig.url}/#organization` },
      },
    ],
  }

  return (
    <html lang={localeInfo[locale].html}>
      {/* Next.js App Router supports an inline pre-hydration script in the root document head. */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        <script id="google-tag-manager" dangerouslySetInnerHTML={{ __html: googleTagManagerScript }} />
      </head>
      <body className={`${manrope.variable} ${cormorant.variable} antialiased`}>
        <AnalyticsProvider />
        <StructuredData data={schemaData} />
        <Navbar />
        <main className="min-h-screen pt-[4.5rem] max-sm:pb-20">{children}</main>
        <Footer />
        <MobileWhatsApp />
      </body>
    </html>
  )
}
