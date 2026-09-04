import EditorialLanding from '@/components/EditorialLanding'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'Produção de Eventos no Leblon | Rios Lux',
  description: 'Consultoria, planejamento e produção de eventos no Leblon e na Zona Sul do Rio de Janeiro.',
  path: '/producao-eventos-leblon',
})

export default function Page() {
  return (
    <EditorialLanding
      eyebrow="Rio de Janeiro · Leblon"
      title="Produção de eventos no Leblon com atenção ao ritmo da cidade."
      intro="A Rios Lux conecta conceito e operação para encontros corporativos, celebrações privadas e experiências na Zona Sul."
      sectionTitle="Planejar o todo para cuidar de cada detalhe relevante."
      sections={[
    { title: 'Intenção', description: 'Definimos o que o encontro precisa comunicar e proporcionar.' },
    { title: 'Consultoria', description: 'Construímos uma seleção de espaços e parceiros coerente com o briefing.' },
    { title: 'Operação', description: 'Coordenamos acessos, horários, fornecedores, recepção e produção.' },
      ]}
      scope={['Briefing', 'Conceito', 'Espaços', 'Fornecedores', 'Gastronomia', 'Logística', 'Recepção', 'Produção', 'Operação']}
      closing="O Rio entra no cenário. A direção continua sendo sua."
    />
  )
}
