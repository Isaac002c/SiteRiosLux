import type { Metadata } from 'next'
import EditorialLanding from '@/components/EditorialLanding'

export const metadata: Metadata = {
  title: 'Produção Completa de Eventos Corporativos | Rios Lux',
  description: 'Planejamento, fornecedores, logística, recepção e operação para eventos corporativos no Rio de Janeiro.',
  alternates: { canonical: '/eventos-corporativos-completo' },
  openGraph: {
    type: 'website',
    title: 'Produção Completa de Eventos Corporativos | Rios Lux',
    description: 'Planejamento, fornecedores, logística, recepção e operação para eventos corporativos no Rio de Janeiro.',
    url: '/eventos-corporativos-completo',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Rios Lux — Arquitetura de Experiências' }],
  },
}

export default function Page() {
  return (
    <EditorialLanding
      eyebrow="Produção corporativa"
      title="Todas as frentes sob uma mesma direção."
      intro="A produção completa integra decisões criativas e operacionais para que cada parceiro trabalhe com clareza e o encontro preserve sua intenção."
      sectionTitle="Coordenação para reduzir ruído e sustentar a experiência."
      sections={[
    { title: 'Planejamento', description: 'Organizamos escopo, agenda, responsabilidades, prazos e dependências do projeto.' },
    { title: 'Integração', description: 'Conectamos fornecedores, espaço, conteúdo, hospitalidade e logística em um fluxo único.' },
    { title: 'Condução', description: 'Acompanhamos montagem, recepção, operação e desmontagem conforme o escopo combinado.' },
      ]}
      scope={['Cronograma', 'Fornecedores', 'Espaço', 'Catering', 'Audiovisual', 'Credenciamento', 'Transporte', 'Produção', 'Operação']}
      closing="Quando tudo está conectado, a experiência pode acontecer com naturalidade."
    />
  )
}
