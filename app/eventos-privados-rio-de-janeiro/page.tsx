import CommercialLanding from '@/components/CommercialLanding'
import { createPageMetadata } from '@/lib/metadata'

const title = 'Eventos Privados no Rio de Janeiro | Rios Lux'
const description = 'Planejamento e produção de celebrações e eventos privados no Rio de Janeiro, com hospitalidade, personalidade e execução cuidadosa.'

export const metadata = createPageMetadata({
  title,
  description,
  path: '/eventos-privados-rio-de-janeiro',
})

const faqs = [
  {
    question: 'Que tipos de eventos privados a Rios Lux desenvolve?',
    answer: 'A Rios Lux pode planejar aniversários, jantares, celebrações familiares, encontros especiais, experiências pré-casamento e outros formatos definidos a partir do briefing.',
  },
  {
    question: 'O evento precisa seguir um formato pronto?',
    answer: 'Não. O ponto de partida são as pessoas, a ocasião, o local, o número de convidados e a forma como o anfitrião deseja receber.',
  },
  {
    question: 'A Rios Lux pode ajudar a escolher espaço e fornecedores?',
    answer: 'Sim, quando isso fizer parte do escopo. As alternativas são avaliadas conforme formato, disponibilidade, logística, prioridades e responsabilidades do projeto.',
  },
  {
    question: 'Vocês coordenam a operação no dia?',
    answer: 'A produção e a operação podem incluir montagem, parceiros, recepção, cronograma e acompanhamento dos momentos previstos no projeto.',
  },
  {
    question: 'Como funciona o primeiro contato?',
    answer: 'Uma conversa de briefing reúne a intenção da celebração, o que já está definido e as decisões que ainda precisam ser construídas.',
  },
]

export default function EventosPrivadosRioDeJaneiro() {
  return (
    <CommercialLanding
      path="/eventos-privados-rio-de-janeiro"
      eyebrow="Private · Rio de Janeiro"
      title="Eventos privados desenhados a partir de cada história."
      intro="Celebrações pessoais pedem escuta, discrição e decisões coerentes. A Rios Lux conecta planejamento, hospitalidade e produção para criar uma experiência com identidade própria."
      serviceName="Eventos privados no Rio de Janeiro"
      serviceDescription={description}
      typesTitle="Celebrações pessoais, sem fórmulas prontas."
      types={[
        { title: 'Aniversários', description: 'Encontros construídos a partir da personalidade, da ocasião e da forma de receber.' },
        { title: 'Jantares privados', description: 'Gastronomia, ambientação, serviço e ritmo alinhados em uma experiência à mesa.' },
        { title: 'Comemorações familiares', description: 'Momentos importantes conduzidos com conforto, atenção e respeito à dinâmica dos convidados.' },
        { title: 'Celebrações pré-casamento', description: 'Experiências para grupos que valorizam contexto, logística e personalidade.' },
        { title: 'Hospitalidade privada', description: 'Recepção, deslocamentos, reservas e detalhes organizados conforme o escopo acordado.' },
        { title: 'Ocasiões especiais', description: 'Formatos sob medida para encontros que não cabem em categorias convencionais.' },
      ]}
      approachIntro="A direção nasce da história e das prioridades do anfitrião — não de um pacote predefinido."
      approach={[
        { title: 'Escuta', description: 'Entendemos a ocasião, as pessoas, as expectativas, o local e o que já está decidido.' },
        { title: 'Direção', description: 'Definimos uma linguagem para orientar atmosfera, gastronomia, serviço, música e momentos.' },
        { title: 'Consultoria', description: 'Apresentamos caminhos compatíveis com o briefing, a disponibilidade e as prioridades.' },
        { title: 'Planejamento', description: 'Organizamos cronograma, parceiros, responsabilidades, logística e experiência dos convidados.' },
        { title: 'Produção', description: 'Integramos montagem, fornecedores, recepção, operação e os ajustes necessários ao formato.' },
      ]}
      scope={['Conceito', 'Planejamento', 'Espaço', 'Gastronomia', 'Ambientação', 'Música', 'Convites', 'Recepção', 'Reservas', 'Transporte', 'Produção', 'Concierge']}
      differentials={[
        'Projeto orientado pela identidade da ocasião e de quem recebe.',
        'Discrição e comunicação direta durante todo o planejamento.',
        'Integração entre escolhas estéticas, hospitalidade e operação.',
        'Escopo definido de acordo com o que a celebração realmente exige.',
        'Acompanhamento das decisões sem transformar cuidado em excesso de ruído.',
        'Experiência dos convidados considerada desde a chegada até o encerramento.',
      ]}
      faqs={faqs}
      relatedLinks={[
        { href: '/casamentos-luxo-ipanema', label: 'Casamentos e celebrações na Zona Sul' },
        { href: '/concierge-rio-de-janeiro', label: 'Concierge no Rio de Janeiro' },
        { href: '/eventos-corporativos-rio-de-janeiro', label: 'Eventos corporativos' },
      ]}
      ctaEvent="private_cta_click"
    />
  )
}
