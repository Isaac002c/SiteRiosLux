import type { Metadata } from 'next'
import EditorialLanding from '@/components/EditorialLanding'

export const metadata: Metadata = {
  title: 'Eventos em Mansões no Rio de Janeiro | Rios Lux',
  description: 'Planejamento e produção de eventos em residências e mansões no Rio de Janeiro, conforme disponibilidade e regras de cada espaço.',
  alternates: { canonical: '/eventos-mansoes-rio' },
  openGraph: {
    type: 'website',
    title: 'Eventos em Mansões no Rio de Janeiro | Rios Lux',
    description: 'Planejamento e produção de eventos em residências e mansões no Rio de Janeiro, conforme disponibilidade e regras de cada espaço.',
    url: '/eventos-mansoes-rio',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Rios Lux — Arquitetura de Experiências' }],
  },
}

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
