import EditorialLanding from '@/components/EditorialLanding'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'Casamentos em Ipanema e Zona Sul | Rios Lux',
  description: 'Planejamento e produção de casamentos e celebrações privadas em Ipanema e na Zona Sul do Rio de Janeiro.',
  path: '/casamentos-luxo-ipanema',
})

export default function Page() {
  return (
    <EditorialLanding
      eyebrow="Private · Ipanema"
      title="Uma celebração com a identidade de quem vive a história."
      intro="A Rios Lux planeja casamentos a partir das pessoas, do significado da ocasião e da experiência que desejam compartilhar com seus convidados."
      sectionTitle="Menos fórmula. Mais intenção em cada escolha."
      sections={[
    { title: 'História', description: 'Começamos pelo casal, pelas prioridades e pela maneira como querem receber.' },
    { title: 'Composição', description: 'Conectamos espaço, gastronomia, ambientação, música e serviço em uma mesma linguagem.' },
    { title: 'Condução', description: 'Organizamos cronograma, parceiros, montagem, cerimônia, recepção e operação.' },
      ]}
      scope={['Briefing', 'Conceito', 'Espaço', 'Gastronomia', 'Ambientação', 'Música', 'Convidados', 'Logística', 'Produção']}
      closing="O ponto de partida é a história que só vocês podem contar."
    />
  )
}
