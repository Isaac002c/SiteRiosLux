import type { Metadata } from 'next'
import EditorialLanding from '@/components/EditorialLanding'

export const metadata: Metadata = {
  title: 'Experiências no Rio de Janeiro | Rios Lux',
  description: 'Curadoria de experiências, hospitalidade e concierge no Rio de Janeiro.',
  alternates: { canonical: '/experiencias-exclusivas-rio' },
  openGraph: {
    type: 'website',
    title: 'Experiências no Rio de Janeiro | Rios Lux',
    description: 'Curadoria de experiências, hospitalidade e concierge no Rio de Janeiro.',
    url: '/experiencias-exclusivas-rio',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Rios Lux — Arquitetura de Experiências' }],
  },
}

export default function Page() {
  return (
    <EditorialLanding
      eyebrow="Lifestyle · Rio de Janeiro"
      title="O Rio como matéria-prima para experiências pessoais."
      intro="A Rios Lux combina curadoria local, hospitalidade e logística para construir jornadas coerentes com cada perfil e ocasião."
      sectionTitle="Não é uma lista de lugares. É uma sequência com intenção."
      sections={[
    { title: 'Contexto', description: 'Entendemos quem participa, o motivo, o tempo disponível e as preferências.' },
    { title: 'Curadoria', description: 'Organizamos possibilidades e parceiros de acordo com o briefing e a disponibilidade.' },
    { title: 'Jornada', description: 'Conectamos reservas, deslocamentos, horários e momentos em uma experiência contínua.' },
      ]}
      scope={['Briefing', 'Curadoria', 'Agenda', 'Reservas', 'Gastronomia', 'Cultura', 'Deslocamentos', 'Hospitalidade', 'Concierge']}
      closing="Sua maneira de viver o Rio pode começar a ser desenhada aqui."
    />
  )
}
