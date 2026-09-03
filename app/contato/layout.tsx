import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contato | Planeje seu Evento com a RiosLux',
  description: 'Fale com a RiosLux e solicite uma consultoria para seu evento premium ou serviço de concierge no Rio de Janeiro.',
  alternates: { canonical: '/contato' },
  openGraph: {
    title: 'Contato | Planeje seu Evento com a RiosLux',
    description: 'Converse com a equipe RiosLux sobre seu próximo evento premium no Rio de Janeiro.',
    url: '/contato',
    images: [{ url: 'https://www.agenciarioslux.com.br/og.png', width: 1200, height: 630, alt: 'RiosLux — eventos premium e concierge no Rio de Janeiro' }],
  },
}

export default function ContatoLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}

