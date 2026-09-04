import EditorialLanding from '@/components/EditorialLanding'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'Celebrações Pré-casamento no Rio de Janeiro | Rios Lux',
  description: 'Consultoria e produção de despedidas e celebrações pré-casamento no Rio de Janeiro.',
  path: '/despedida-solteiro-luxo-rj',
})

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
      scope={['Briefing', 'Consultoria', 'Agenda', 'Reservas', 'Espaços', 'Gastronomia', 'Transporte', 'Concierge', 'Produção']}
      closing="Conte como é o grupo. O formato vem depois."
    />
  )
}
