import CommercialLanding from '@/components/CommercialLanding'
import { createPageMetadata } from '@/lib/metadata'

const title = 'Concierge no Rio de Janeiro | Rios Lux'
const description = 'Concierge e hospitalidade no Rio de Janeiro com apoio a reservas, roteiros, deslocamentos e experiências, conforme cada projeto.'

export const metadata = createPageMetadata({
  title,
  description,
  path: '/concierge-rio-de-janeiro',
})

const faqs = [
  {
    question: 'O que o concierge da Rios Lux pode coordenar?',
    answer: 'Conforme o projeto, o escopo pode envolver reservas, agenda, deslocamentos, recepção, roteiro, hospitalidade e suporte relacionado à experiência contratada.',
  },
  {
    question: 'O serviço é personalizado?',
    answer: 'Sim. As frentes de atendimento são definidas a partir do perfil, do contexto, das preferências, da agenda e das prioridades apresentadas no briefing.',
  },
  {
    question: 'O concierge pode estar integrado a um evento?',
    answer: 'Sim. Quando previsto no escopo, o concierge pode apoiar convidados, anfitriões ou lideranças antes e durante um evento produzido pela Rios Lux.',
  },
  {
    question: 'A Rios Lux monta roteiros no Rio de Janeiro?',
    answer: 'Roteiros e sequências de experiências podem ser planejados conforme preferências, disponibilidade, deslocamentos e viabilidade dos parceiros.',
  },
  {
    question: 'Como solicitar o serviço?',
    answer: 'Envie o contexto pelo formulário ou WhatsApp. A conversa inicial ajuda a delimitar período, pessoas, necessidades, prioridades e escopo possível.',
  },
]

export default function ConciergeRioDeJaneiro() {
  return (
    <CommercialLanding
      path="/concierge-rio-de-janeiro"
      eyebrow="Concierge · Rio de Janeiro"
      title="Hospitalidade, contexto e precisão em cada detalhe relevante."
      intro="O concierge da Rios Lux conecta informações, reservas, logística e acompanhamento para tornar a experiência mais fluida dentro do escopo definido para cada cliente."
      serviceName="Concierge no Rio de Janeiro"
      serviceDescription={description}
      typesTitle="Atendimento construído em torno do contexto."
      types={[
        { title: 'Reservas', description: 'Organização de solicitações e confirmações compatíveis com o roteiro e a disponibilidade.' },
        { title: 'Roteiros', description: 'Sequências de experiências planejadas conforme perfil, tempo e deslocamentos.' },
        { title: 'Logística', description: 'Coordenação de horários, pontos de encontro, transportes e informações essenciais.' },
        { title: 'Hospitalidade', description: 'Atenção aos momentos de chegada, recepção, permanência e transição.' },
        { title: 'Apoio a convidados', description: 'Informações e acompanhamento relacionados ao evento ou à experiência contratada.' },
        { title: 'Experiências no Rio', description: 'Possibilidades avaliadas de acordo com o briefing, a agenda e a disponibilidade real.' },
      ]}
      approachIntro="O cuidado aparece na antecipação, na qualidade da informação e na coordenação entre as partes."
      approach={[
        { title: 'Perfil e prioridades', description: 'Entendemos pessoas, agenda, preferências, restrições e o nível de acompanhamento necessário.' },
        { title: 'Planejamento', description: 'Organizamos solicitações, alternativas, dependências, confirmações e deslocamentos.' },
        { title: 'Consultoria local', description: 'Avaliamos possibilidades coerentes com o contexto e a disponibilidade do período.' },
        { title: 'Coordenação', description: 'Mantemos informações e parceiros conectados ao roteiro e às responsabilidades definidas.' },
        { title: 'Acompanhamento', description: 'Apoiamos a experiência nos pontos previstos em contrato, com discrição e clareza.' },
      ]}
      scope={['Briefing', 'Agenda', 'Reservas', 'Roteiro', 'Recepção', 'Transportes', 'Convidados', 'Gastronomia', 'Hospitalidade', 'Experiências', 'Coordenação', 'Acompanhamento']}
      differentials={[
        'Escopo personalizado em vez de uma lista genérica de benefícios.',
        'Informação centralizada para reduzir desencontros entre pessoas e parceiros.',
        'Leitura do ritmo, das preferências e das prioridades do cliente.',
        'Integração possível com eventos e celebrações produzidos pela Rios Lux.',
        'Atenção ao que muda a experiência sem criar interferência desnecessária.',
        'Comunicação discreta, objetiva e adequada a cada contexto.',
      ]}
      faqs={faqs}
      relatedLinks={[
        { href: '/eventos-corporativos-rio-de-janeiro', label: 'Eventos corporativos' },
        { href: '/eventos-privados-rio-de-janeiro', label: 'Eventos privados' },
        { href: '/experiencias', label: 'Conceitos de experiência' },
      ]}
      ctaEvent="concierge_cta_click"
    />
  )
}
