import CommercialLanding from '@/components/CommercialLanding'
import { createPageMetadata } from '@/lib/metadata'

const title = 'Eventos Corporativos no Rio de Janeiro | Rios Lux'
const description = 'Planejamento e produção de eventos corporativos no Rio de Janeiro para empresas, marcas e lideranças, com direção e execução integradas.'

export const metadata = createPageMetadata({
  title,
  description,
  path: '/eventos-corporativos-rio-de-janeiro',
})

const faqs = [
  {
    question: 'Que tipos de eventos corporativos a Rios Lux produz?',
    answer: 'O escopo pode incluir convenções, encontros executivos, lançamentos, ativações, jantares corporativos, confraternizações, eventos internos, experiências para clientes e projetos de marca.',
  },
  {
    question: 'A Rios Lux atende empresas no Rio de Janeiro?',
    answer: 'Sim. A comunicação e a atuação apresentadas neste site estão concentradas no Rio de Janeiro. O local, a data e a viabilidade são avaliados no briefing.',
  },
  {
    question: 'A Rios Lux cuida dos fornecedores e da logística?',
    answer: 'Essas frentes podem fazer parte do escopo. A definição considera o que a empresa já contratou, as responsabilidades de cada parceiro e as necessidades operacionais do evento.',
  },
  {
    question: 'É possível produzir lançamentos e experiências de marca?',
    answer: 'Sim. A Rios Lux pode conectar conceito, conteúdo, espaço, hospitalidade, audiovisual, fornecedores e operação em torno da mensagem e do público do projeto.',
  },
  {
    question: 'Com quanto tempo de antecedência devo iniciar?',
    answer: 'Quanto maior a complexidade, mais importante é começar cedo. O prazo adequado depende de data, espaço, número de convidados, escopo e disponibilidade dos parceiros.',
  },
  {
    question: 'Como solicitar uma proposta?',
    answer: 'Comece pelo formulário de contato ou pelo WhatsApp oficial. O briefing inicial reúne objetivo, público, data, local, dimensão e prioridades para orientar os próximos passos.',
  },
]

export default function EventosCorporativosRioDeJaneiro() {
  return (
    <CommercialLanding
      path="/eventos-corporativos-rio-de-janeiro"
      eyebrow="Corporate · Rio de Janeiro"
      title="Eventos corporativos com direção estratégica e execução integrada."
      intro="A Rios Lux planeja e produz encontros para empresas, marcas e lideranças, conectando objetivo, experiência do convidado, hospitalidade e operação sob uma mesma direção."
      serviceName="Eventos corporativos no Rio de Janeiro"
      serviceDescription={description}
      typesTitle="Formatos diferentes, sempre orientados pelo objetivo do encontro."
      types={[
        { title: 'Convenções', description: 'Conteúdo, fluxo, infraestrutura e hospitalidade coordenados para reunir equipes, parceiros ou redes.' },
        { title: 'Encontros executivos', description: 'Ambientes reservados e operação precisa para decisões, relacionamento e conversas estratégicas.' },
        { title: 'Lançamentos', description: 'Narrativa, espaço, audiovisual e recepção organizados em torno da mensagem do produto ou da marca.' },
        { title: 'Ativações', description: 'Interações presenciais planejadas para aproximar pessoas, contexto e proposta de valor.' },
        { title: 'Jantares corporativos', description: 'Gastronomia, serviço e atmosfera desenhados para receber clientes, parceiros ou lideranças.' },
        { title: 'Confraternizações', description: 'Celebrações empresariais com identidade, conforto e ritmo adequados ao público.' },
        { title: 'Eventos para clientes', description: 'Experiências de relacionamento que traduzem atenção, posicionamento e hospitalidade.' },
        { title: 'Experiências de marca', description: 'Projetos que transformam estratégia e identidade em uma vivência coerente.' },
        { title: 'Eventos internos', description: 'Encontros para cultura, reconhecimento, integração e comunicação com equipes.' },
      ]}
      approachIntro="Cada decisão parte do objetivo de negócio, do perfil dos convidados e da experiência que a empresa deseja construir."
      approach={[
        { title: 'Briefing estratégico', description: 'Alinhamos intenção, público, mensagem, prioridades, limites, data e responsabilidades.' },
        { title: 'Conceito e formato', description: 'Transformamos o objetivo em uma direção clara para conteúdo, espaço, atmosfera e jornada.' },
        { title: 'Consultoria e planejamento', description: 'Organizamos alternativas, parceiros, escopo, orçamento, cronograma e pontos de decisão.' },
        { title: 'Produção integrada', description: 'Conectamos fornecedores, audiovisual, gastronomia, ambientação, recepção e logística.' },
        { title: 'Operação', description: 'Coordenamos montagem, passagem técnica, credenciamento, fluxos e execução no evento.' },
        { title: 'Experiência do convidado', description: 'Cuidamos dos pontos de contato para que comunicação, hospitalidade e ritmo façam sentido juntos.' },
      ]}
      scope={['Estratégia', 'Conceito', 'Planejamento', 'Espaço', 'Fornecedores', 'Audiovisual', 'Gastronomia', 'Ambientação', 'Credenciamento', 'Logística', 'Hospitalidade', 'Produção']}
      differentials={[
        'Visão integrada entre intenção de negócio e experiência presencial.',
        'Uma direção central para reduzir ruído entre empresa, espaço e parceiros.',
        'Planejamento proporcional à complexidade e às prioridades reais do projeto.',
        'Atenção à jornada de convidados, clientes, lideranças e equipes.',
        'Comunicação objetiva para apoiar decisões ao longo da produção.',
        'Execução alinhada ao padrão, ao contexto e à identidade da marca.',
      ]}
      faqs={faqs}
      relatedLinks={[
        { href: '/experiencias-de-marca', label: 'Experiências de marca' },
        { href: '/eventos-privados-rio-de-janeiro', label: 'Eventos privados' },
        { href: '/concierge-rio-de-janeiro', label: 'Concierge e hospitalidade' },
      ]}
      ctaEvent="corporate_cta_click"
    />
  )
}
