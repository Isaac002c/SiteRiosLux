import type { Metadata } from 'next'
import EditorialLanding from '@/components/EditorialLanding'

export const metadata: Metadata = {
  title: 'Eventos Corporativos no Rio de Janeiro | Rios Lux',
  description: 'Curadoria, planejamento e produção de eventos corporativos, encontros executivos, lançamentos e experiências de marca no Rio de Janeiro.',
  alternates: { canonical: '/eventos-corporativos-premium-rj' },
  openGraph: {
    type: 'website',
    title: 'Eventos Corporativos no Rio de Janeiro | Rios Lux',
    description: 'Curadoria, planejamento e produção de eventos corporativos, encontros executivos, lançamentos e experiências de marca no Rio de Janeiro.',
    url: '/eventos-corporativos-premium-rj',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Rios Lux — Arquitetura de Experiências' }],
  },
}

export default function Page() {
  return (
    <EditorialLanding
      eyebrow="Corporate · Rio de Janeiro"
      title="Eventos corporativos com intenção, clareza e direção."
      intro="Da conversa estratégica à experiência de marca, a Rios Lux coordena conteúdo, hospitalidade e operação em torno do objetivo do encontro."
      sectionTitle="O evento começa pelo que precisa acontecer depois dele."
      sections={[
    { title: 'Objetivo', description: 'Alinhamos mensagem, público, prioridades e contexto antes de definir formato ou fornecedores.' },
    { title: 'Experiência', description: 'Desenhamos o fluxo de conteúdo, encontros e hospitalidade a partir da jornada dos convidados.' },
    { title: 'Operação', description: 'Planejamos responsabilidades, cronograma, recepção, fornecedores, montagem e condução do evento.' },
      ]}
      scope={['Briefing', 'Conceito', 'Espaços', 'Audiovisual', 'Gastronomia', 'Recepção', 'Logística', 'Produção', 'Operação']}
      closing="Seu próximo encontro pode começar com uma conversa bem orientada."
    />
  )
}
