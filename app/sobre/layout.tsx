import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre a Rios Lux | Arquitetura de Experiências',
  description: 'Conheça a filosofia e o processo da Rios Lux para arquitetar eventos e experiências no Rio de Janeiro.',
  alternates: { canonical: '/sobre' },
  openGraph: {
    type: 'website',
    title: 'Sobre a Rios Lux | Arquitetura de Experiências',
    description: 'Mais do que organizar eventos: intenção, consultoria, planejamento e operação sob uma mesma direção.',
    url: '/sobre',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Rios Lux — Arquitetura de Experiências' }],
  },
}

export default function SobreLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
