import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Experiências Rios Lux | Rio de Janeiro',
  description: 'Conceitos e referências para eventos corporativos, celebrações privadas e experiências no Rio de Janeiro.',
  alternates: { canonical: '/experiencias' },
  openGraph: {
    type: 'website',
    title: 'Experiências Rios Lux | Rio de Janeiro',
    description: 'Conceitos e referências de atmosferas para começar a desenhar sua experiência.',
    url: '/experiencias',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Rios Lux — Arquitetura de Experiências' }],
  },
}

export default function ExperienciasLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
