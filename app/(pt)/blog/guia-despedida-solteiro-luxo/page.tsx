import BlogArticle from '@/components/BlogArticle'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'Como Planejar uma Celebração Pré-casamento | Rios Lux',
  description: 'Um guia para planejar celebrações pré-casamento com personalidade, cuidado e logística.',
  path: '/blog/guia-despedida-solteiro-luxo',
  type: 'article',
})

export default function ArticlePage() {
  return (
    <BlogArticle
      category="Private"
      title="Como planejar uma celebração pré-casamento com personalidade"
      intro="O melhor formato não é o mais chamativo. É aquele que respeita o grupo, o momento e a maneira como as pessoas querem estar juntas."
      sections={[
  {
    "title": "Entenda o grupo",
    "paragraphs": [
      "Mapeie perfis, limites, disponibilidade, expectativas e necessidades de quem participa antes de escolher atividades."
    ],
    "bullets": [
      "Quem precisa estar presente?",
      "O grupo prefere intensidade ou pausa?",
      "Existem restrições de mobilidade, alimentação ou privacidade?"
    ]
  },
  {
    "title": "Desenhe o ritmo",
    "paragraphs": [
      "Uma boa programação alterna deslocamentos, encontros, alimentação e descanso sem transformar a celebração em uma lista de tarefas."
    ],
    "bullets": [
      "Menos trocas de local podem trazer mais presença.",
      "Reserve margens de tempo.",
      "Defina um ponto claro de contato."
    ]
  },
  {
    "title": "Confirme a operação",
    "paragraphs": [
      "Reservas, regras dos espaços, transporte, pagamentos e comunicação do grupo precisam estar alinhados antes do dia."
    ],
    "bullets": [
      "Informações centralizadas.",
      "Responsabilidades confirmadas.",
      "Alternativas para pontos sensíveis do plano."
    ]
  }
]}
    />
  )
}
