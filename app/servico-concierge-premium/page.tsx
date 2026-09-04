import type { Metadata } from 'next'
import EditorialLanding from '@/components/EditorialLanding'

export const metadata: Metadata = {
  title: 'Serviço de Concierge para Experiências | Rios Lux',
  description: 'Curadoria e concierge para experiências, hospitalidade e eventos no Rio de Janeiro.',
  alternates: { canonical: '/servico-concierge-premium' },
  openGraph: {
    type: 'website',
    title: 'Serviço de Concierge para Experiências | Rios Lux',
    description: 'Curadoria e concierge para experiências, hospitalidade e eventos no Rio de Janeiro.',
    url: '/servico-concierge-premium',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Rios Lux — Arquitetura de Experiências' }],
  },
}

export default function Page() {
  return (
    <EditorialLanding
      eyebrow="Serviço de concierge"
      title="Atenção aos detalhes sem transformar cuidado em ruído."
      intro="Concierge é a camada que conecta preferências, informações e execução para tornar cada etapa mais simples para o cliente."
      sectionTitle="Um serviço desenhado em torno do contexto."
      sections={[
    { title: 'Escuta', description: 'Entendemos perfil, agenda, preferências, restrições e prioridades.' },
    { title: 'Curadoria', description: 'Organizamos alternativas coerentes e apoiamos decisões de acordo com o briefing.' },
    { title: 'Coordenação', description: 'Conectamos as escolhas à logística e aos parceiros envolvidos na experiência.' },
      ]}
      scope={['Briefing', 'Curadoria', 'Reservas', 'Agenda', 'Recepção', 'Logística', 'Hospitalidade', 'Coordenação', 'Acompanhamento']}
      closing="O cuidado começa muito antes da chegada."
    />
  )
}
