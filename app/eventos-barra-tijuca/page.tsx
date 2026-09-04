import EditorialLanding from '@/components/EditorialLanding'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'Eventos na Barra da Tijuca | Rios Lux',
  description: 'Planejamento e produção de eventos corporativos e celebrações privadas na Barra da Tijuca, Rio de Janeiro.',
  path: '/eventos-barra-tijuca',
})

export default function Page() {
  return (
    <EditorialLanding
      eyebrow="Rio de Janeiro · Barra"
      title="Eventos na Barra da Tijuca com planejamento conectado ao lugar."
      intro="Formato, deslocamentos, fornecedores, hospitalidade e operação são pensados em conjunto para cada encontro na região."
      sectionTitle="O endereço influencia a experiência inteira."
      sections={[
    { title: 'Contexto', description: 'Avaliamos objetivo, público, horários, acessos e necessidades do projeto.' },
    { title: 'Consultoria', description: 'Selecionamos soluções compatíveis com o formato, a região e as prioridades do briefing.' },
    { title: 'Logística', description: 'Organizamos fornecedores, convidados, montagem e operação considerando os fluxos locais.' },
      ]}
      scope={['Conceito', 'Espaços', 'Acessos', 'Gastronomia', 'Audiovisual', 'Recepção', 'Transporte', 'Produção', 'Operação']}
      closing="Uma boa experiência também é uma experiência bem localizada."
    />
  )
}
