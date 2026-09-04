import EditorialLanding from '@/components/EditorialLanding'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'Experiências no Rio de Janeiro | Rios Lux',
  description: 'Consultoria de experiências, hospitalidade e concierge no Rio de Janeiro.',
  path: '/experiencias-exclusivas-rio',
})

export default function Page() {
  return (
    <EditorialLanding
      eyebrow="Lifestyle · Rio de Janeiro"
      title="O Rio como matéria-prima para experiências pessoais."
      intro="A Rios Lux combina consultoria local, hospitalidade e logística para construir jornadas coerentes com cada perfil e ocasião."
      sectionTitle="Não é uma lista de lugares. É uma sequência com intenção."
      sections={[
    { title: 'Contexto', description: 'Entendemos quem participa, o motivo, o tempo disponível e as preferências.' },
    { title: 'Consultoria', description: 'Organizamos possibilidades e parceiros de acordo com o briefing e a disponibilidade.' },
    { title: 'Jornada', description: 'Conectamos reservas, deslocamentos, horários e momentos em uma experiência contínua.' },
      ]}
      scope={['Briefing', 'Consultoria', 'Agenda', 'Reservas', 'Gastronomia', 'Cultura', 'Deslocamentos', 'Hospitalidade', 'Concierge']}
      closing="Sua maneira de viver o Rio pode começar a ser desenhada aqui."
    />
  )
}
