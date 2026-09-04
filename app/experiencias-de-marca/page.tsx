import CommercialLanding from '@/components/CommercialLanding'
import { createPageMetadata } from '@/lib/metadata'

const title = 'Experiências de Marca e Ativações | Rios Lux'
const description = 'Experiências de marca, ativações e lançamentos com estratégia, hospitalidade e produção integrada para empresas no Rio de Janeiro.'

export const metadata = createPageMetadata({
  title,
  description,
  path: '/experiencias-de-marca',
})

const faqs = [
  {
    question: 'O que é uma experiência de marca?',
    answer: 'É uma vivência presencial criada para materializar uma mensagem, fortalecer relacionamento ou apresentar uma marca, produto, serviço ou movimento de forma coerente com o público.',
  },
  {
    question: 'A Rios Lux realiza ativações e lançamentos?',
    answer: 'Esses formatos fazem parte do escopo possível. Cada projeto é avaliado conforme objetivo, audiência, local, data, recursos e responsabilidades envolvidas.',
  },
  {
    question: 'Quem participa do briefing?',
    answer: 'A conversa pode envolver marketing, branding, comercial, RH, diretoria, founders ou outras lideranças ligadas ao objetivo e à aprovação do projeto.',
  },
  {
    question: 'A Rios Lux coordena criação e operação?',
    answer: 'A atuação pode integrar direção de experiência, planejamento, parceiros, conteúdo presencial, hospitalidade, produção e operação, conforme o escopo definido.',
  },
  {
    question: 'Como medir o resultado da experiência?',
    answer: 'Os indicadores devem ser definidos a partir do objetivo. Participação, relacionamento, percepção, conteúdo gerado, oportunidades e aprendizados podem ser considerados quando fizerem sentido.',
  },
]

export default function ExperienciasDeMarca() {
  return (
    <CommercialLanding
      path="/experiencias-de-marca"
      eyebrow="Brand Experience"
      title="Experiências de marca que transformam estratégia em presença."
      intro="A Rios Lux conecta mensagem, ambiente, hospitalidade e operação para criar encontros que façam sentido para a marca e para as pessoas que ela deseja aproximar."
      serviceName="Experiências de marca"
      serviceDescription={description}
      typesTitle="Projetos presenciais com função clara para a marca."
      types={[
        { title: 'Lançamentos', description: 'Apresentação de produtos, serviços ou movimentos com narrativa e jornada coerentes.' },
        { title: 'Ativações', description: 'Interações concebidas para gerar aproximação, descoberta e participação.' },
        { title: 'Relacionamento', description: 'Experiências para clientes, parceiros e comunidades estratégicas.' },
        { title: 'Hospitalidade de marca', description: 'Recepção e cuidado traduzidos em pontos de contato consistentes.' },
        { title: 'Experiências imersivas', description: 'Ambiente, conteúdo e estímulos conectados a uma ideia central, sem excesso gratuito.' },
        { title: 'Encontros estratégicos', description: 'Formatos para liderança, cultura, comercial, branding ou comunicação institucional.' },
      ]}
      approachIntro="A experiência não começa pelo cenário. Ela começa pelo que a marca precisa comunicar, provocar ou tornar possível."
      approach={[
        { title: 'Objetivo', description: 'Definimos público, mensagem, contexto, prioridades e o resultado esperado do encontro.' },
        { title: 'Narrativa', description: 'Construímos uma direção capaz de orientar conteúdo, espaço, linguagem e jornada.' },
        { title: 'Desenho da experiência', description: 'Organizamos os momentos e pontos de contato pela perspectiva de quem participa.' },
        { title: 'Planejamento integrado', description: 'Conectamos parceiros, audiovisual, ambientação, hospitalidade, logística e cronograma.' },
        { title: 'Produção e execução', description: 'Coordenamos a operação para preservar a intenção do projeto em cada etapa presencial.' },
      ]}
      scope={['Estratégia', 'Conceito', 'Narrativa', 'Jornada', 'Conteúdo', 'Espaço', 'Audiovisual', 'Cenografia', 'Gastronomia', 'Hospitalidade', 'Logística', 'Produção']}
      differentials={[
        'Decisões criativas conectadas ao objetivo de marca.',
        'Leitura conjunta de público, mensagem e contexto do negócio.',
        'Experiência desenhada sem depender de efeitos ou excessos.',
        'Integração entre marketing, liderança, parceiros e produção.',
        'Hospitalidade tratada como parte da comunicação da marca.',
        'Operação estruturada para sustentar o conceito no ambiente real.',
      ]}
      faqs={faqs}
      relatedLinks={[
        { href: '/eventos-corporativos-rio-de-janeiro', label: 'Produção de eventos corporativos' },
        { href: '/concierge-rio-de-janeiro', label: 'Concierge e hospitalidade' },
        { href: '/blog/roi-eventos-corporativos', label: 'Como acompanhar resultados de eventos' },
      ]}
      ctaEvent="corporate_cta_click"
    />
  )
}
