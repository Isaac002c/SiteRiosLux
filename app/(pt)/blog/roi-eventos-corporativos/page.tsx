import BlogArticle from '@/components/BlogArticle'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'Resultados em Eventos Corporativos | Rios Lux',
  description: 'Como definir objetivos e indicadores para acompanhar resultados de eventos corporativos.',
  path: '/blog/roi-eventos-corporativos',
  type: 'article',
})

export default function ArticlePage() {
  return (
    <BlogArticle
      category="Corporate"
      title="Como definir e acompanhar resultados em eventos corporativos"
      intro="Resultado começa por um objetivo claro. Sem ele, métricas viram números isolados e o evento perde direção."
      sections={[
  {
    "title": "Defina o que deve mudar",
    "paragraphs": [
      "Antes do formato, descreva o efeito esperado: aproximar clientes, apresentar uma solução, fortalecer uma relação, educar um público ou abrir oportunidades comerciais."
    ],
    "bullets": [
      "Um objetivo principal.",
      "Público prioritário.",
      "Comportamento ou percepção desejada."
    ]
  },
  {
    "title": "Escolha indicadores úteis",
    "paragraphs": [
      "Os indicadores devem responder ao objetivo e ser possíveis de coletar. Cadastros, presença, participação, reuniões geradas, feedback e oportunidades podem compor a leitura."
    ],
    "bullets": [
      "Registre uma linha de base quando existir.",
      "Defina quem coleta cada dado.",
      "Evite métricas que não orientam decisões."
    ]
  },
  {
    "title": "Feche o ciclo",
    "paragraphs": [
      "Depois do evento, reúna dados, percepções da equipe e próximos passos. O valor da mensuração está no que ela permite melhorar ou continuar."
    ],
    "bullets": [
      "Consolide resultados e aprendizados.",
      "Acompanhe desdobramentos no prazo adequado ao negócio.",
      "Compare com o objetivo inicial, não com uma promessa genérica."
    ]
  }
]}
    />
  )
}
