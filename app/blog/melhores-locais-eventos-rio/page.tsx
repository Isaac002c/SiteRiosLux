import BlogArticle from '@/components/BlogArticle'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'Como Escolher Espaço para Eventos no Rio | Rios Lux',
  description: 'Critérios para avaliar localização, infraestrutura, acessos e operação de espaços para eventos no Rio de Janeiro.',
  path: '/blog/melhores-locais-eventos-rio',
  type: 'article',
})

export default function ArticlePage() {
  return (
    <BlogArticle
      category="Rio de Janeiro"
      title="Como escolher um espaço para eventos no Rio de Janeiro"
      intro="Vista, arquitetura e endereço importam. Mas a escolha só funciona quando experiência e viabilidade são avaliadas juntas."
      sections={[
  {
    "title": "Comece pelo formato",
    "paragraphs": [
      "O número de convidados, o tipo de encontro, a duração e o fluxo esperado ajudam a determinar que tipo de espaço pode funcionar."
    ],
    "bullets": [
      "Cerimônia, conteúdo ou convivência?",
      "Público sentado, em circulação ou misto?",
      "Quais áreas precisam funcionar ao mesmo tempo?"
    ]
  },
  {
    "title": "Leia os acessos",
    "paragraphs": [
      "No Rio de Janeiro, horários, deslocamentos, embarque, estacionamento, carga e descarga podem alterar o desenho da operação."
    ],
    "bullets": [
      "Chegada de convidados.",
      "Entrada de fornecedores.",
      "Rotas para equipamentos e abastecimento."
    ]
  },
  {
    "title": "Valide a infraestrutura",
    "paragraphs": [
      "Energia, climatização, banheiros, cozinha, acústica, acessibilidade e regras do local devem ser verificados antes da decisão final."
    ],
    "bullets": [
      "Visita técnica antes do fechamento.",
      "Registro de limitações e contrapartidas.",
      "Plano compatível com o espaço — não apenas com a fotografia."
    ]
  }
]}
    />
  )
}
