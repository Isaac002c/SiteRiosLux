import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Experiências Premium no Rio de Janeiro | RiosLux',
  description: 'Conheça experiências e eventos premium em iates, mansões, rooftops e locais exclusivos do Rio de Janeiro.',
  alternates: { canonical: '/experiencias' },
  openGraph: {
    title: 'Experiências Premium no Rio de Janeiro | RiosLux',
    description: 'Conheça experiências sofisticadas em locais exclusivos do Rio de Janeiro.',
    url: '/experiencias',
    images: [{ url: 'https://www.agenciarioslux.com.br/og.png', width: 1200, height: 630, alt: 'RiosLux — eventos premium e concierge no Rio de Janeiro' }],
  },
}

export default function ExperienciasLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}

