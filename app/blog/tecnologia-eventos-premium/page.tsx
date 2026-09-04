import type { Metadata } from 'next'
import BlogArticle from '@/components/BlogArticle'

export const metadata: Metadata = {
  title: "Tecnologia em Eventos e Experiências | Rios Lux",
  description: "Como avaliar audiovisual, automação e recursos digitais a partir da experiência e do objetivo do evento.",
  alternates: { canonical: "/blog/tecnologia-eventos-premium" },
  openGraph: {
    title: "Tecnologia em Eventos e Experiências | Rios Lux",
    description: "Como avaliar audiovisual, automação e recursos digitais a partir da experiência e do objetivo do evento.",
    url: "/blog/tecnologia-eventos-premium",
    type: 'article',
  },
}

export default function ArticlePage() {
  return (
    <BlogArticle
      category="Produção"
      title="Tecnologia em eventos: quando ela serve à experiência"
      intro="Tecnologia é meio. A escolha certa melhora acesso, comunicação ou participação sem disputar atenção com o que importa."
      sections={[
  {
    "title": "Parta da necessidade",
    "paragraphs": [
      "Antes de escolher uma ferramenta, defina o problema: ampliar alcance, orientar convidados, apresentar conteúdo, reduzir filas ou facilitar interação."
    ],
    "bullets": [
      "Qual decisão a tecnologia melhora?",
      "Quem realmente precisa usá-la?",
      "O que acontece se ela falhar?"
    ]
  },
  {
    "title": "Projete para as pessoas",
    "paragraphs": [
      "Interfaces, credenciamento, transmissão, som, luz e conteúdo devem considerar diferentes níveis de familiaridade e condições de acesso."
    ],
    "bullets": [
      "Instruções simples.",
      "Alternativa acessível.",
      "Equipe preparada para orientar."
    ]
  },
  {
    "title": "Planeje a contingência",
    "paragraphs": [
      "Recursos digitais exigem energia, conectividade, testes, conteúdo correto e responsáveis definidos."
    ],
    "bullets": [
      "Teste no ambiente real.",
      "Tenha caminhos alternativos.",
      "Evite adicionar complexidade sem benefício claro."
    ]
  }
]}
    />
  )
}
