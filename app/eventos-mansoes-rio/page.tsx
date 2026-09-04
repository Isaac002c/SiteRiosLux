import EditorialLanding from '@/components/EditorialLanding'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'Eventos em Mansões no Rio de Janeiro | Rios Lux',
  description: 'Planejamento e produção de eventos em residências e mansões no Rio de Janeiro, conforme disponibilidade e regras de cada espaço.',
  path: '/eventos-mansoes-rio',
})

export default function Page() {
  return (
    <EditorialLanding
      eyebrow="Espaços · Rio de Janeiro"
      title="Um espaço singular pede uma operação desenhada para ele."
      intro="Eventos em residências e mansões exigem leitura técnica do local, respeito às regras, logística detalhada e integração entre todos os parceiros."
      sectionTitle="A experiência começa pela viabilidade."
      sections={[
    { title: 'Leitura do espaço', description: 'Avaliamos acessos, infraestrutura, vizinhança, fluxos e limitações relevantes.' },
    { title: 'Projeto', description: 'Adequamos conceito, layout, fornecedores e cronograma às condições do local.' },
    { title: 'Operação', description: 'Coordenamos montagem, abastecimento, recepção, evento e desmontagem conforme o escopo.' },
      ]}
      scope={['Visita técnica', 'Layout', 'Infraestrutura', 'Acessos', 'Fornecedores', 'Recepção', 'Logística', 'Produção', 'Desmontagem']}
      closing="Antes de transformar o espaço, é preciso compreendê-lo."
    />
  )
}
