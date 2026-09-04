import type { Metadata } from 'next'
import BlogArticle from '@/components/BlogArticle'

export const metadata: Metadata = {
  title: "Concierge e Produção de Eventos | Rios Lux",
  description: "Entenda a diferença entre concierge e produção de eventos e como as duas frentes podem trabalhar integradas.",
  alternates: { canonical: "/blog/concierge-vs-agencia-eventos" },
  openGraph: {
    title: "Concierge e Produção de Eventos | Rios Lux",
    description: "Entenda a diferença entre concierge e produção de eventos e como as duas frentes podem trabalhar integradas.",
    url: "/blog/concierge-vs-agencia-eventos",
    type: 'article',
  },
}

export default function ArticlePage() {
  return (
    <BlogArticle
      category="Estratégia"
      title="Concierge e produção de eventos: papéis diferentes, uma experiência integrada"
      intro="As duas frentes cuidam de necessidades distintas. Quando responsabilidades e informações estão claras, elas se complementam."
      sections={[
  {
    "title": "O papel da produção",
    "paragraphs": [
      "A produção transforma o conceito em plano e operação. Ela conecta cronograma, espaço, fornecedores, montagem, recepção e condução do evento."
    ],
    "bullets": [
      "Define responsabilidades e prazos.",
      "Coordena parceiros e dependências.",
      "Mantém a visão do todo durante a operação."
    ]
  },
  {
    "title": "O papel do concierge",
    "paragraphs": [
      "O concierge acompanha preferências e solicitações ligadas à jornada das pessoas. Pode organizar reservas, informações, deslocamentos e detalhes de hospitalidade conforme o escopo."
    ],
    "bullets": [
      "Centraliza pedidos e contexto.",
      "Organiza alternativas para decisão.",
      "Conecta solicitações à logística da experiência."
    ]
  },
  {
    "title": "Quando integrar",
    "paragraphs": [
      "A integração faz sentido quando a experiência do convidado ultrapassa o momento do evento. O ponto central é definir quem responde por cada etapa e como as informações circulam."
    ],
    "bullets": [
      "Um briefing compartilhado.",
      "Um canal claro de decisão.",
      "Limites e responsabilidades documentados."
    ]
  }
]}
    />
  )
}
