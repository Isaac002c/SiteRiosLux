import type { Metadata } from 'next'
import EditorialLanding from '@/components/EditorialLanding'

export const metadata: Metadata = {
  title: 'Celebrações Pré-casamento no Rio de Janeiro | Rios Lux',
  description: 'Curadoria e produção de despedidas e celebrações pré-casamento no Rio de Janeiro.',
  alternates: { canonical: '/despedida-solteiro-luxo-rj' },
  openGraph: {
    type: 'website',
    title: 'Celebrações Pré-casamento no Rio de Janeiro | Rios Lux',
    description: 'Curadoria e produção de despedidas e celebrações pré-casamento no Rio de Janeiro.',
    url: '/despedida-solteiro-luxo-rj',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Rios Lux — Arquitetura de Experiências' }],
  },
}

export default function Page() {
  return (
    <EditorialLanding
      eyebrow="Private · Pré-casamento"
      title="Um encontro pensado para o grupo — não para seguir um roteiro pronto."
      intro="A Rios Lux desenvolve celebrações pré-casamento de acordo com o perfil das pessoas, o tempo disponível e a atmosfera desejada."
      sectionTitle="A melhor ideia é aquela que faz sentido para quem participa."
      sections={[
    { title: 'Perfil', description: 'Entendemos o grupo, as expectativas, os limites e o ritmo desejado.' },
    { title: 'Roteiro', description: 'Organizamos experiências, deslocamentos, reservas e momentos em uma sequência coerente.' },
    { title: 'Operação', description: 'Coordenamos os parceiros e os pontos logísticos previstos no projeto.' },
      ]}
      scope={['Briefing', 'Curadoria', 'Agenda', 'Reservas', 'Espaços', 'Gastronomia', 'Transporte', 'Concierge', 'Produção']}
      closing="Conte como é o grupo. O formato vem depois."
    />
  )
}
