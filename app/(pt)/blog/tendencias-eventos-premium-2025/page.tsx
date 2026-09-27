import BlogArticle from '@/components/BlogArticle'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'Tendências em Eventos e Experiências | Rios Lux',
  description: 'Perspectivas sobre hospitalidade, personalização, sustentabilidade e tecnologia em experiências presenciais.',
  path: '/blog/tendencias-eventos-premium-2025',
  type: 'article',
})

export default function ArticlePage() {
  return (
    <BlogArticle
      category="Perspectivas"
      title="Tendências que estão redesenhando experiências presenciais"
      intro="O movimento mais relevante não é visual. É a busca por encontros com propósito, ritmo mais humano e escolhas coerentes."
      sections={[
  {
    "title": "Hospitalidade como estrutura",
    "paragraphs": [
      "Receber bem começa antes da chegada. Informações claras, acessos simples, atenção a restrições e um fluxo compreensível influenciam toda a percepção."
    ],
    "bullets": [
      "Comunicação no momento certo.",
      "Chegada sem fricção.",
      "Cuidado integrado à operação."
    ]
  },
  {
    "title": "Personalização com critério",
    "paragraphs": [
      "Personalizar não significa multiplicar elementos. Significa reconhecer contexto, perfis e necessidades sem comprometer clareza ou execução."
    ],
    "bullets": [
      "Escolhas relevantes para o público.",
      "Flexibilidade onde ela acrescenta valor.",
      "Consistência entre intenção e entrega."
    ]
  },
  {
    "title": "Tecnologia e impacto conscientes",
    "paragraphs": [
      "Recursos digitais e decisões de produção precisam justificar sua presença. Eficiência, acessibilidade e redução de desperdício ganham espaço quando fazem parte do projeto desde o início."
    ],
    "bullets": [
      "Tecnologia orientada por necessidade.",
      "Materiais e logística planejados.",
      "Experiências menores em ruído e maiores em significado."
    ]
  }
]}
    />
  )
}
