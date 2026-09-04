import type { Metadata } from 'next'
import EditorialLanding from '@/components/EditorialLanding'

export const metadata: Metadata = {
  title: 'Concierge para Eventos no Rio de Janeiro | Rios Lux',
  description: 'Concierge integrado a eventos e experiências no Rio de Janeiro, com curadoria, reservas, logística e suporte conforme cada projeto.',
  alternates: { canonical: '/concierge-eventos-rio' },
  openGraph: {
    type: 'website',
    title: 'Concierge para Eventos no Rio de Janeiro | Rios Lux',
    description: 'Concierge integrado a eventos e experiências no Rio de Janeiro, com curadoria, reservas, logística e suporte conforme cada projeto.',
    url: '/concierge-eventos-rio',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Rios Lux — Arquitetura de Experiências' }],
  },
}

export default function Page() {
  return (
    <EditorialLanding
      eyebrow="Concierge · Rio de Janeiro"
      title="Cuidado que acompanha a experiência."
      intro="O concierge da Rios Lux organiza solicitações, deslocamentos, reservas e detalhes de hospitalidade dentro do escopo definido para cada projeto."
      sectionTitle="Presença, contexto e resposta coordenada."
      sections={[
    { title: 'Antes', description: 'Mapeamos preferências, agenda, deslocamentos e pontos que pedem preparação prévia.' },
    { title: 'Durante', description: 'Acompanhamos solicitações e ajustes relacionados à experiência e à operação contratada.' },
    { title: 'Integração', description: 'Mantemos concierge, produção e parceiros alinhados para evitar informações desencontradas.' },
      ]}
      scope={['Preferências', 'Reservas', 'Agenda', 'Recepção', 'Deslocamentos', 'Hospitalidade', 'Informações', 'Ajustes', 'Coordenação']}
      closing="Conte o contexto. Nós desenhamos o cuidado necessário."
    />
  )
}
