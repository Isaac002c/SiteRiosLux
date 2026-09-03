import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre a RiosLux | Eventos Premium no Rio de Janeiro',
  description: 'Conheça a RiosLux, agência de eventos premium e concierge dedicada a experiências exclusivas no Rio de Janeiro.',
  alternates: { canonical: '/sobre' },
  openGraph: {
    title: 'Sobre a RiosLux | Eventos Premium no Rio de Janeiro',
    description: 'Conheça a agência e o cuidado por trás das experiências premium da RiosLux.',
    url: '/sobre',
    images: [{ url: 'https://www.agenciarioslux.com.br/og.png', width: 1200, height: 630, alt: 'RiosLux — eventos premium e concierge no Rio de Janeiro' }],
  },
}

export default function SobreLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}

