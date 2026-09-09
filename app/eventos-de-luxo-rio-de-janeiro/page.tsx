import CommercialLanding from '@/components/CommercialLanding'
import { createPageMetadata } from '@/lib/metadata'

const title = 'Eventos de Luxo no Rio de Janeiro | Rios Lux'
const description = 'Planejamento e produção de eventos de luxo no Rio de Janeiro, com curadoria, hospitalidade e operação coordenada para experiências de alto padrão.'
const path = '/eventos-de-luxo-rio-de-janeiro'

export const metadata = createPageMetadata({ title, description, path })

const faqs = [
  {
    question: 'O que caracteriza um evento de luxo para a Rios Lux?',
    answer: 'Alto padrão não é sinônimo de excesso. Ele aparece na coerência das escolhas, na qualidade da hospitalidade, na precisão da operação e na atenção dedicada ao contexto de cada anfitrião e convidado.',
  },
  {
    question: 'A Rios Lux trabalha com formatos corporativos e privados?',
    answer: 'Sim. A atuação pode envolver encontros corporativos, lançamentos, experiências de marca, jantares, celebrações privadas e ocasiões especiais, sempre conforme briefing e viabilidade.',
  },
  {
    question: 'Vocês ajudam a selecionar espaços e parceiros?',
    answer: 'A curadoria de espaços e parceiros especializados pode fazer parte do escopo. As opções são avaliadas por adequação ao projeto, disponibilidade, logística, responsabilidades e padrão de entrega.',
  },
  {
    question: 'É possível integrar concierge e hospitalidade ao evento?',
    answer: 'Quando fizer sentido para o projeto, o escopo pode incluir recepção, reservas, deslocamentos, atenção a convidados e outras frentes de concierge relacionadas à experiência contratada.',
  },
  {
    question: 'Como solicitar uma proposta?',
    answer: 'Compartilhe objetivo, tipo de ocasião, data, local, número estimado de convidados e prioridades pelo formulário. A equipe analisa o contexto antes de definir os próximos passos.',
  },
]

export default function EventosDeLuxoRioDeJaneiro() {
  return (
    <CommercialLanding
      path={path}
      eyebrow="Alto padrão · Rio de Janeiro"
      title="Eventos de luxo construídos com intenção, hospitalidade e precisão."
      intro="A Rios Lux planeja experiências em que cada escolha precisa fazer sentido para o contexto, para as pessoas e para a operação. O luxo está no cuidado percebido — do primeiro briefing ao encerramento."
      serviceName="Eventos de luxo no Rio de Janeiro"
      serviceDescription={description}
      typesTitle="Alto padrão para ocasiões com objetivos diferentes."
      types={[
        { title: 'Encontros corporativos', description: 'Hospitalidade, relacionamento e produção para empresas, marcas e lideranças.' },
        { title: 'Celebrações privadas', description: 'Aniversários, jantares e momentos pessoais conduzidos com discrição e identidade.' },
        { title: 'Lançamentos', description: 'Produto, marca, empreendimento ou movimento apresentados por uma experiência coerente.' },
        { title: 'Jantares e recepções', description: 'Gastronomia, ambiente, serviço e ritmo conectados em torno da forma de receber.' },
        { title: 'Espaços singulares', description: 'Projetos adaptados à infraestrutura, aos acessos, às regras e às possibilidades reais de cada local.' },
        { title: 'Hospitalidade e concierge', description: 'Apoio a anfitriões e convidados integrado ao evento quando previsto no escopo.' },
      ]}
      approachIntro="O nível da entrega depende menos de excessos e mais da qualidade das decisões que sustentam o todo."
      approach={[
        { title: 'Intenção', description: 'Compreendemos a ocasião, as pessoas, o que precisa ser comunicado e o que deve ser sentido.' },
        { title: 'Viabilidade', description: 'Avaliamos local, data, logística, prioridades, responsabilidades e condições reais do projeto.' },
        { title: 'Curadoria', description: 'Selecionamos possibilidades, espaços e parceiros coerentes com o briefing e o padrão esperado.' },
        { title: 'Planejamento', description: 'Conectamos orçamento, cronograma, fornecedores, hospitalidade e experiência dos convidados.' },
        { title: 'Produção', description: 'Coordenamos as frentes contratadas para preservar a intenção na execução.' },
      ]}
      scope={['Conceito', 'Planejamento', 'Espaços', 'Gastronomia', 'Cenografia', 'Audiovisual', 'Entretenimento', 'Convidados', 'Logística', 'Recepção', 'Concierge', 'Produção']}
      differentials={[
        'Alto padrão tratado como coerência, não como excesso.',
        'Escopo desenhado para a ocasião, sem pacotes genéricos.',
        'Curadoria e coordenação de parceiros especializados quando aplicável.',
        'Hospitalidade pensada desde a chegada até o encerramento.',
        'Comunicação direta para dar clareza às decisões e responsabilidades.',
        'Integração entre estética, serviço e viabilidade operacional.',
      ]}
      faqs={faqs}
      relatedLinks={[
        { href: '/eventos-corporativos-rio-de-janeiro', label: 'Eventos corporativos no Rio de Janeiro' },
        { href: '/eventos-privados-rio-de-janeiro', label: 'Eventos privados no Rio de Janeiro' },
        { href: '/concierge-rio-de-janeiro', label: 'Concierge e hospitalidade' },
      ]}
    />
  )
}
