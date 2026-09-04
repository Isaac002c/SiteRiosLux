import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contato | Rios Lux',
  description: 'Conte o que você imagina e solicite uma consultoria para seu evento ou experiência no Rio de Janeiro.',
  alternates: { canonical: '/contato' },
  openGraph: {
    type: 'website',
    title: 'Contato | Rios Lux',
    description: 'Sua experiência começa aqui. Converse com a Rios Lux sobre os próximos passos.',
    url: '/contato',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Rios Lux — Arquitetura de Experiências' }],
  },
}

export default function ContatoLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
