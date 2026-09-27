import type { Locale, RouteKey } from '@/lib/i18n'

export type ServiceKey = 'private' | 'corporate' | 'brand' | 'concierge'
export type RegionalKey = 'regionalRio' | 'regionalSaoPaulo' | 'regionalBeloHorizonte' | 'regionalVitoria' | 'regionalBrasil'

type Item = { title: string; description: string }

export const common = {
  pt: {
    brand: 'Arquitetura de Experiências',
    primaryCta: 'Planejar um evento', secondaryCta: 'Falar com a Rios Lux',
    whatsappMessage: 'Olá, conheci a Rios Lux e gostaria de conversar sobre meu evento.',
    processKicker: 'Método Rios Lux', processTitle: 'Clareza do primeiro briefing à operação.',
    process: [
      { title: 'Entendimento', description: 'Objetivo, contexto, pessoas, prioridades e o que já está definido.' },
      { title: 'Curadoria', description: 'Conceito, parceiros e soluções coerentes com a intenção do projeto.' },
      { title: 'Planejamento', description: 'Cronograma, responsabilidades, fornecedores, hospitalidade e logística.' },
      { title: 'Produção', description: 'Coordenação integrada das frentes contratadas e decisões em tempo real.' },
      { title: 'Experiência', description: 'Execução atenta ao percurso de anfitriões, equipes e convidados.' },
    ],
    formKicker: 'Iniciar um projeto', formTitle: 'Compartilhe o ponto de partida.',
    formIntro: 'Conte o que já está definido. A equipe Rios Lux analisará o contexto e retornará para uma conversa inicial.',
  },
  en: {
    brand: 'Experience Architecture',
    primaryCta: 'Plan an event', secondaryCta: 'Talk to Rios Lux',
    whatsappMessage: 'Hello, I found Rios Lux and would like to discuss my event in Brazil.',
    processKicker: 'The Rios Lux method', processTitle: 'Clarity from the first briefing to on-site delivery.',
    process: [
      { title: 'Understanding', description: 'Purpose, context, people, priorities and what is already defined.' },
      { title: 'Curation', description: 'Concept, partners and solutions aligned with the project’s intent.' },
      { title: 'Planning', description: 'Timeline, responsibilities, suppliers, hospitality and logistics.' },
      { title: 'Production', description: 'Integrated coordination of every contracted workstream and live decisions.' },
      { title: 'Experience', description: 'Attentive delivery across the journey of hosts, teams and guests.' },
    ],
    formKicker: 'Start a project', formTitle: 'Share your starting point.',
    formIntro: 'Tell us what is already defined. The Rios Lux team will review the context and follow up for an initial conversation.',
  },
  es: {
    brand: 'Arquitectura de Experiencias',
    primaryCta: 'Planificar un evento', secondaryCta: 'Hablar con Rios Lux',
    whatsappMessage: 'Hola, conocí Rios Lux y me gustaría conversar sobre mi evento en Brasil.',
    processKicker: 'Método Rios Lux', processTitle: 'Claridad desde el primer briefing hasta la operación.',
    process: [
      { title: 'Comprensión', description: 'Objetivo, contexto, personas, prioridades y lo que ya está definido.' },
      { title: 'Curaduría', description: 'Concepto, aliados y soluciones coherentes con la intención del proyecto.' },
      { title: 'Planificación', description: 'Cronograma, responsabilidades, proveedores, hospitalidad y logística.' },
      { title: 'Producción', description: 'Coordinación integral de los frentes contratados y decisiones en tiempo real.' },
      { title: 'Experiencia', description: 'Ejecución atenta al recorrido de anfitriones, equipos e invitados.' },
    ],
    formKicker: 'Iniciar un proyecto', formTitle: 'Comparta el punto de partida.',
    formIntro: 'Cuéntenos lo que ya está definido. El equipo Rios Lux analizará el contexto y responderá para una conversación inicial.',
  },
} satisfies Record<Locale, Record<string, unknown>>

export const homeContent = {
  pt: {
    metaTitle: 'Eventos e Experiências de Alto Padrão no Brasil | Rios Lux',
    metaDescription: 'Planejamento, curadoria e produção completa de eventos privados, corporativos e experiências de marca no Brasil.',
    eyebrow: 'Rios Lux · Arquitetura de Experiências',
    title: 'Eventos e experiências de alto padrão no Brasil.',
    intro: 'Planejamento, curadoria e produção completa para celebrações privadas, eventos corporativos e experiências de marca.',
    location: 'Base no Rio de Janeiro, com atuação nacional conforme escopo e logística.',
    directionKicker: 'Uma única direção',
    directionTitle: 'A complexidade inteira do evento, coordenada por uma só equipe.',
    directionCopy: 'Espaço, fornecedores, gastronomia, ambientação, convidados, logística e operação deixam de ser decisões isoladas. A Rios Lux conecta cada frente a uma intenção comum e assume a condução do projeto.',
    servicesKicker: 'Frentes de atuação', servicesTitle: 'Estruturas diferentes. O mesmo rigor de execução.',
    whyKicker: 'Por que Rios Lux', whyTitle: 'Menos pontos soltos. Mais clareza para decidir.',
    why: [
      { title: 'Centralização', description: 'Uma interlocução acompanha prioridades, parceiros, cronograma e operação.' },
      { title: 'Curadoria', description: 'Cada escolha responde ao contexto, à estética e à experiência desejada.' },
      { title: 'Controle', description: 'Responsabilidades claras, antecipação de riscos e decisões bem documentadas.' },
      { title: 'Hospitalidade', description: 'A experiência é pensada também pelo olhar de quem recebe e de quem chega.' },
    ],
    coverageKicker: 'Atuação', coverageTitle: 'Base no Rio. Produção onde o projeto fizer sentido.',
    coverageCopy: 'Atendemos projetos no Rio de Janeiro, São Paulo, Minas Gerais, Espírito Santo e em outros destinos do Brasil, sempre após análise de data, escopo, logística e viabilidade operacional.',
    teamKicker: 'Quem conduz', teamTitle: 'Visão comercial, estratégia e operação na mesma mesa.',
    teamCopy: 'Três responsabilidades complementares estruturam a condução de cada projeto — da primeira conversa à experiência entregue.',
    referencesKicker: 'Direção estética', referencesTitle: 'Atmosferas que orientam possibilidades.',
    referencesCopy: 'Estética, hospitalidade e atmosfera são tratadas como partes do mesmo sistema — sempre a serviço da intenção do projeto.',
    finalTitle: 'Quando o evento importa, a forma de conduzir também importa.',
  },
  en: {
    metaTitle: 'High-End Events and Experiences Across Brazil | Rios Lux',
    metaDescription: 'Full planning, curation and production for private celebrations, corporate events and brand experiences across Brazil.',
    eyebrow: 'Rios Lux · Experience Architecture',
    title: 'High-end events and experiences across Brazil.',
    intro: 'Private celebrations, corporate events and brand experiences planned with precision, hospitality and a single point of direction.',
    location: 'Based in Rio de Janeiro, working nationwide according to scope and logistics.',
    directionKicker: 'One point of direction',
    directionTitle: 'The event’s full complexity, coordinated by one team.',
    directionCopy: 'Venue, suppliers, food, atmosphere, guests, logistics and production stop being disconnected decisions. Rios Lux aligns every workstream around one clear intent and leads the project end to end.',
    servicesKicker: 'Expertise', servicesTitle: 'Different formats. The same standard of delivery.',
    whyKicker: 'Why Rios Lux', whyTitle: 'Fewer loose ends. Greater clarity at every decision.',
    why: [
      { title: 'Central direction', description: 'One team follows priorities, partners, timing and on-site delivery.' },
      { title: 'Curation', description: 'Every choice responds to context, aesthetics and the intended guest experience.' },
      { title: 'Control', description: 'Clear ownership, risk anticipation and well-documented decisions.' },
      { title: 'Hospitality', description: 'The experience is designed from the perspective of both host and guest.' },
    ],
    coverageKicker: 'Across Brazil', coverageTitle: 'Based in Rio. Producing wherever the project makes sense.',
    coverageCopy: 'We work in Rio de Janeiro, São Paulo, Minas Gerais, Espírito Santo and other Brazilian destinations after reviewing timing, scope, logistics and operational feasibility.',
    teamKicker: 'The team', teamTitle: 'Commercial vision, strategy and operations at the same table.',
    teamCopy: 'Three complementary areas guide each project — from the first conversation to the delivered experience.',
    referencesKicker: 'Creative direction', referencesTitle: 'Atmospheres that frame the possibilities.',
    referencesCopy: 'Aesthetics, hospitality and atmosphere are treated as one system — always in service of the project’s intent.',
    finalTitle: 'When the event matters, the way it is led matters too.',
  },
  es: {
    metaTitle: 'Eventos y Experiencias de Alto Nivel en Brasil | Rios Lux',
    metaDescription: 'Planificación, curaduría y producción integral de eventos privados, corporativos y experiencias de marca en Brasil.',
    eyebrow: 'Rios Lux · Arquitectura de Experiencias',
    title: 'Eventos y experiencias de alto nivel en Brasil.',
    intro: 'Planificación, curaduría y producción integral para celebraciones privadas, eventos corporativos y experiencias de marca.',
    location: 'Con base en Río de Janeiro y actuación nacional según alcance y logística.',
    directionKicker: 'Una sola dirección',
    directionTitle: 'Toda la complejidad del evento, coordinada por un solo equipo.',
    directionCopy: 'Espacio, proveedores, gastronomía, ambientación, invitados, logística y producción dejan de ser decisiones aisladas. Rios Lux conecta cada frente con una intención común y lidera el proyecto de principio a fin.',
    servicesKicker: 'Áreas de actuación', servicesTitle: 'Formatos diferentes. El mismo rigor de ejecución.',
    whyKicker: 'Por qué Rios Lux', whyTitle: 'Menos puntos sueltos. Más claridad para decidir.',
    why: [
      { title: 'Centralización', description: 'Un equipo acompaña prioridades, aliados, cronograma y operación.' },
      { title: 'Curaduría', description: 'Cada elección responde al contexto, la estética y la experiencia deseada.' },
      { title: 'Control', description: 'Responsabilidades claras, anticipación de riesgos y decisiones documentadas.' },
      { title: 'Hospitalidad', description: 'La experiencia se diseña desde la mirada de quien recibe y de quien llega.' },
    ],
    coverageKicker: 'Brasil', coverageTitle: 'Con base en Río. Producción donde el proyecto tenga sentido.',
    coverageCopy: 'Trabajamos en Río de Janeiro, São Paulo, Minas Gerais, Espírito Santo y otros destinos de Brasil, tras analizar fecha, alcance, logística y viabilidad operativa.',
    teamKicker: 'El equipo', teamTitle: 'Visión comercial, estrategia y operación en la misma mesa.',
    teamCopy: 'Tres responsabilidades complementarias conducen cada proyecto, desde la primera conversación hasta la experiencia entregada.',
    referencesKicker: 'Dirección estética', referencesTitle: 'Atmósferas que orientan posibilidades.',
    referencesCopy: 'Estética, hospitalidad y atmósfera se trabajan como un solo sistema, siempre al servicio de la intención del proyecto.',
    finalTitle: 'Cuando el evento importa, la forma de conducirlo también importa.',
  },
} satisfies Record<Locale, Record<string, unknown>>

const serviceImages: Record<ServiceKey, string> = {
  private: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2400&q=86',
  corporate: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2400&q=86',
  brand: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=2400&q=86',
  concierge: '/images/corporate/hospitality.webp',
}

const serviceBase: Record<Locale, Record<ServiceKey, Omit<ServiceContent, 'image' | 'routeKey'>>> = {
  pt: {
    private: {
      metaTitle: 'Eventos Privados com Produção Completa | Rios Lux',
      metaDescription: 'Planejamento, curadoria e produção completa de casamentos, aniversários, 15 anos, jantares e celebrações privadas no Brasil.',
      eyebrow: 'Private · Celebrações', title: 'Eventos privados conduzidos com precisão, do planejamento à experiência.',
      intro: 'Celebrações pessoais exigem mais do que bons fornecedores. A Rios Lux conecta planejamento, curadoria, hospitalidade e produção sob uma única direção.',
      location: 'Base no Rio de Janeiro, com projetos em São Paulo, Minas Gerais, Espírito Santo e outros destinos do Brasil conforme escopo e logística.',
      contextsTitle: 'Celebrações com intenção, não fórmulas prontas.',
      contexts: [
        { title: 'Weddings', description: 'Casamentos e encontros que conectam história, hospitalidade e uma operação precisa.' },
        { title: 'Aniversários e 15 anos', description: 'Celebrações relevantes conduzidas com identidade, cuidado e ritmo.' },
        { title: 'Jantares privados', description: 'Experiências de menor escala em que cada escolha permanece visível.' },
        { title: 'Destination events', description: 'Projetos fora da cidade de origem com planejamento de deslocamentos, parceiros e convidados.' },
      ],
      scope: ['Conceito', 'Planejamento', 'Espaços', 'Fornecedores', 'Gastronomia', 'Ambientação', 'Convites', 'Hospitalidade', 'Logística', 'Produção', 'Operação', 'Concierge'],
      valueTitle: 'Presença para quem recebe. Controle para quem organiza.',
      valueCopy: 'A Rios Lux assume a coordenação entre decisões criativas e operacionais. O anfitrião acompanha o que importa sem precisar gerenciar cada fornecedor, ajuste ou dependência separadamente.',
      faq: [
        { title: 'A Rios Lux cuida de todos os fornecedores?', description: 'Podemos conduzir curadoria, contratação e coordenação das frentes previstas no escopo aprovado.' },
        { title: 'Vocês atendem celebrações fora do Rio?', description: 'Sim. Projetos em outras regiões são analisados conforme data, escopo, logística e viabilidade operacional.' },
        { title: 'É possível preservar a privacidade do evento?', description: 'Sim. Imagens, nomes e informações só são publicados quando existe autorização expressa.' },
      ],
    },
    corporate: {
      metaTitle: 'Eventos Corporativos e Encontros Executivos | Rios Lux', metaDescription: 'Estratégia, planejamento e produção integrada para eventos corporativos, encontros executivos, lançamentos e hospitalidade.',
      eyebrow: 'Corporate', title: 'Eventos corporativos conduzidos com estratégia e precisão.', intro: 'Uma direção para alinhar objetivo de negócio, equipes, fornecedores, logística e experiência dos convidados.',
      contextsTitle: 'Encontros que precisam produzir um resultado claro.', contexts: [
        { title: 'Encontros executivos', description: 'Reuniões, convenções e fóruns com atenção a conteúdo, ritmo e hospitalidade.' },
        { title: 'Lançamentos', description: 'Apresentações e momentos de marca conectados a uma intenção comercial.' },
        { title: 'Eventos internos', description: 'Experiências para cultura, relacionamento e alinhamento de equipes.' },
        { title: 'Hospitalidade corporativa', description: 'Recepção, deslocamentos e jornada de convidados coordenados ponta a ponta.' },
      ],
      scope: ['Estratégia', 'Conceito', 'Conteúdo', 'Cronograma', 'Espaços', 'Audiovisual', 'Cenografia', 'Fornecedores', 'Hospitalidade', 'Logística', 'Produção', 'Operação'],
      valueTitle: 'Seu time acompanha decisões. A Rios Lux conduz a operação.', valueCopy: 'Centralizamos as frentes do evento para proteger a rotina da equipe, tornar responsabilidades visíveis e manter o objetivo de negócio presente em cada escolha.',
      faq: [
        { title: 'A Rios Lux trabalha com o time interno da empresa?', description: 'Sim. Estruturamos pontos de decisão, responsáveis e cadência de acompanhamento com as áreas envolvidas.' },
        { title: 'É possível integrar conteúdo, audiovisual e hospitalidade?', description: 'Essas frentes podem fazer parte de um mesmo escopo, coordenadas a partir do objetivo do encontro.' },
        { title: 'Vocês atuam fora do Rio de Janeiro?', description: 'Sim. A operação nacional é definida após análise do projeto e de suas necessidades logísticas.' },
      ],
    },
    brand: {
      metaTitle: 'Brand Experience e Ativações de Marca | Rios Lux', metaDescription: 'Experiências de marca, ativações, lançamentos e hospitalidade com estratégia, curadoria e produção integrada.',
      eyebrow: 'Brand Experience', title: 'Marcas transformadas em experiências presenciais.', intro: 'Estratégia, narrativa, hospitalidade e produção conectadas para tornar uma intenção de marca tangível.',
      contextsTitle: 'Presença de marca com propósito definido.', contexts: [
        { title: 'Ativações', description: 'Interações desenhadas para criar presença e participação coerentes com a marca.' },
        { title: 'Lançamentos', description: 'Ambientes e jornadas que apoiam a apresentação de produtos, serviços e movimentos.' },
        { title: 'Relacionamento', description: 'Experiências para clientes, parceiros, imprensa e comunidades estratégicas.' },
        { title: 'Hospitalidade de marca', description: 'Recepção e cuidado convertidos em parte visível do posicionamento.' },
      ],
      scope: ['Estratégia', 'Conceito', 'Narrativa', 'Jornada', 'Conteúdo', 'Espaço', 'Cenografia', 'Audiovisual', 'Gastronomia', 'Hospitalidade', 'Logística', 'Produção'],
      valueTitle: 'O conceito não termina na apresentação.', valueCopy: 'Traduzimos posicionamento em decisões concretas de espaço, conteúdo, ritmo, serviço e operação — preservando coerência entre a ideia e o que o convidado realmente vive.',
      faq: [
        { title: 'Vocês trabalham com agências e times de marketing?', description: 'Sim. Podemos assumir a produção integral ou integrar uma estrutura já existente, com papéis claramente definidos.' },
        { title: 'A experiência pode acontecer em diferentes cidades?', description: 'Sim. O desenho operacional considera parceiros locais, deslocamentos, padronização e particularidades de cada destino.' },
        { title: 'Como a marca participa das decisões?', description: 'O projeto estabelece momentos de validação para manter estratégia, criação e execução alinhadas.' },
      ],
    },
    concierge: {
      metaTitle: 'Concierge e Hospitalidade para Eventos | Rios Lux', metaDescription: 'Concierge, hospitalidade, reservas, deslocamentos e atenção à jornada de anfitriões e convidados em eventos no Brasil.',
      eyebrow: 'Concierge', title: 'Hospitalidade que começa antes da chegada.', intro: 'Coordenação discreta de informações, reservas, deslocamentos e necessidades que influenciam a experiência de anfitriões e convidados.',
      contextsTitle: 'Cuidado operacional em cada ponto de contato.', contexts: [
        { title: 'Guest management', description: 'Informações, confirmações e orientações organizadas para reduzir ruído.' },
        { title: 'Deslocamentos', description: 'Chegadas, saídas e transportes conectados ao cronograma da experiência.' },
        { title: 'Reservas', description: 'Hospedagem, gastronomia e serviços coordenados de acordo com o perfil do projeto.' },
        { title: 'Atenção no destino', description: 'Suporte contextual para anfitriões e convidados antes e durante o evento.' },
      ],
      scope: ['Guest list', 'Comunicação', 'RSVP', 'Hospedagem', 'Reservas', 'Transportes', 'Roteiros', 'Recepção', 'Credenciamento', 'Informações', 'Suporte', 'Hospitalidade'],
      valueTitle: 'O evento é também tudo o que acontece ao redor dele.', valueCopy: 'Conectamos os detalhes de chegada, permanência e deslocamento ao planejamento central, reduzindo interrupções e preservando a sensação de cuidado.',
      faq: [
        { title: 'Concierge pode ser contratado com a produção do evento?', description: 'Sim. A integração permite que a jornada do convidado responda ao mesmo cronograma e à mesma direção.' },
        { title: 'O atendimento pode ser personalizado por grupo?', description: 'O desenho considera perfis, necessidades e níveis de suporte definidos para cada projeto.' },
        { title: 'Vocês atendem destination events?', description: 'Sim, mediante análise de destino, datas, volume de convidados e logística necessária.' },
      ],
    },
  },
  en: {
    private: {
      metaTitle: 'Full-Service Private Events in Brazil | Rios Lux', metaDescription: 'Planning, curation and full production for weddings, milestone celebrations, private dinners and destination events in Brazil.',
      eyebrow: 'Private · Celebrations', title: 'Private events led with precision, from planning to experience.', intro: 'Personal celebrations demand more than good suppliers. Rios Lux connects planning, curation, hospitality and production through one point of direction.',
      location: 'Based in Rio de Janeiro, with projects in São Paulo, Minas Gerais, Espírito Santo and other Brazilian destinations according to scope and logistics.',
      contextsTitle: 'Celebrations with intent, never a ready-made formula.', contexts: [
        { title: 'Weddings', description: 'Celebrations connecting personal history, hospitality and precise delivery.' },
        { title: 'Milestone celebrations', description: 'Birthdays and meaningful occasions led with identity, care and rhythm.' },
        { title: 'Private dining', description: 'Intimate experiences where every choice remains visible.' },
        { title: 'Destination events', description: 'Projects away from home with coordinated travel, partners and guest logistics.' },
      ],
      scope: ['Concept', 'Planning', 'Venues', 'Suppliers', 'Food & beverage', 'Atmosphere', 'Invitations', 'Hospitality', 'Logistics', 'Production', 'On-site delivery', 'Concierge'],
      valueTitle: 'Presence for the host. Control behind the scenes.', valueCopy: 'Rios Lux coordinates creative and operational decisions as one system. Hosts stay close to what matters without having to manage each supplier, adjustment or dependency separately.',
      faq: [
        { title: 'Does Rios Lux manage every supplier?', description: 'We can lead curation, contracting and coordination for all workstreams included in the agreed scope.' },
        { title: 'Do you produce events outside Rio?', description: 'Yes. Projects in other regions are reviewed according to timing, scope, logistics and operational feasibility.' },
        { title: 'Can the event remain private?', description: 'Yes. Names, images and information are only published with explicit permission.' },
      ],
    },
    corporate: {
      metaTitle: 'Corporate Events and Executive Gatherings in Brazil | Rios Lux', metaDescription: 'Strategy, planning and integrated production for corporate events, executive gatherings, launches and hospitality in Brazil.',
      eyebrow: 'Corporate', title: 'Corporate events led with strategy and precision.', intro: 'One point of direction aligning business goals, teams, suppliers, logistics and the guest experience.',
      contextsTitle: 'Gatherings designed around a clear outcome.', contexts: [
        { title: 'Executive gatherings', description: 'Meetings, conventions and forums with attention to content, pace and hospitality.' },
        { title: 'Launches', description: 'Brand moments connected to a clear commercial intent.' },
        { title: 'Internal events', description: 'Experiences supporting culture, relationships and team alignment.' },
        { title: 'Corporate hospitality', description: 'Arrivals, travel and guest journeys coordinated end to end.' },
      ],
      scope: ['Strategy', 'Concept', 'Content', 'Timeline', 'Venues', 'Audiovisual', 'Scenography', 'Suppliers', 'Hospitality', 'Logistics', 'Production', 'Operations'],
      valueTitle: 'Your team owns the key decisions. Rios Lux leads delivery.', valueCopy: 'We centralise event workstreams to protect internal teams, clarify ownership and keep the business objective present in every choice.',
      faq: [
        { title: 'Do you work alongside internal teams?', description: 'Yes. We define decision points, owners and a clear cadence with every area involved.' },
        { title: 'Can content, audiovisual and hospitality be integrated?', description: 'These workstreams can sit within one coordinated scope built around the meeting’s objective.' },
        { title: 'Do you operate beyond Rio de Janeiro?', description: 'Yes. Nationwide delivery is defined after reviewing the project and its logistical requirements.' },
      ],
    },
    brand: {
      metaTitle: 'Brand Experiences and Activations in Brazil | Rios Lux', metaDescription: 'Brand experiences, activations, launches and hospitality with integrated strategy, curation and production.',
      eyebrow: 'Brand Experience', title: 'Brands translated into live experiences.', intro: 'Strategy, narrative, hospitality and production connected to make brand intent tangible.',
      contextsTitle: 'Brand presence with a defined purpose.', contexts: [
        { title: 'Activations', description: 'Interactions designed for participation and a coherent brand presence.' },
        { title: 'Launches', description: 'Environments and journeys supporting new products, services and initiatives.' },
        { title: 'Relationships', description: 'Experiences for clients, partners, press and strategic communities.' },
        { title: 'Brand hospitality', description: 'Welcome and care made visible as part of positioning.' },
      ],
      scope: ['Strategy', 'Concept', 'Narrative', 'Journey', 'Content', 'Venue', 'Scenography', 'Audiovisual', 'Food & beverage', 'Hospitality', 'Logistics', 'Production'],
      valueTitle: 'The concept does not end with the presentation.', valueCopy: 'We translate positioning into space, content, pacing, service and operational decisions, preserving coherence between the idea and what guests actually experience.',
      faq: [
        { title: 'Do you work with agencies and marketing teams?', description: 'Yes. We can lead full production or join an existing structure with clearly defined responsibilities.' },
        { title: 'Can an experience run across different cities?', description: 'Yes. Operations account for local partners, travel, consistency and the specifics of each destination.' },
        { title: 'How does the brand stay involved?', description: 'The project establishes clear validation moments to keep strategy, creative and delivery aligned.' },
      ],
    },
    concierge: {
      metaTitle: 'Event Concierge and Hospitality in Brazil | Rios Lux', metaDescription: 'Concierge, hospitality, reservations, transport and attentive guest journeys for events across Brazil.',
      eyebrow: 'Concierge', title: 'Hospitality that begins before arrival.', intro: 'Discreet coordination of information, reservations, travel and needs that shape the experience of hosts and guests.',
      contextsTitle: 'Operational care at every touchpoint.', contexts: [
        { title: 'Guest management', description: 'Information, confirmations and guidance organised to reduce friction.' },
        { title: 'Travel', description: 'Arrivals, departures and transport aligned with the experience timeline.' },
        { title: 'Reservations', description: 'Accommodation, dining and services coordinated for the project profile.' },
        { title: 'Destination support', description: 'Contextual support for hosts and guests before and during the event.' },
      ],
      scope: ['Guest list', 'Communication', 'RSVP', 'Accommodation', 'Reservations', 'Transport', 'Itineraries', 'Welcome', 'Accreditation', 'Information', 'Support', 'Hospitality'],
      valueTitle: 'The event includes everything around it.', valueCopy: 'We connect arrival, stay and travel details to the central plan, reducing interruptions and preserving a sense of care.',
      faq: [
        { title: 'Can concierge be integrated with event production?', description: 'Yes. Integration ensures the guest journey follows the same timeline and direction.' },
        { title: 'Can service be tailored by guest group?', description: 'The plan can account for different profiles, needs and levels of support.' },
        { title: 'Do you support destination events?', description: 'Yes, after reviewing the destination, dates, guest volume and required logistics.' },
      ],
    },
  },
  es: {
    private: {
      metaTitle: 'Eventos Privados con Producción Integral en Brasil | Rios Lux', metaDescription: 'Planificación, curaduría y producción integral de bodas, aniversarios, cenas privadas y destination events en Brasil.',
      eyebrow: 'Private · Celebraciones', title: 'Eventos privados conducidos con precisión, desde la planificación hasta la experiencia.', intro: 'Las celebraciones personales exigen más que buenos proveedores. Rios Lux conecta planificación, curaduría, hospitalidad y producción bajo una sola dirección.',
      location: 'Con base en Río de Janeiro, con proyectos en São Paulo, Minas Gerais, Espírito Santo y otros destinos de Brasil según alcance y logística.',
      contextsTitle: 'Celebraciones con intención, nunca fórmulas listas.', contexts: [
        { title: 'Weddings', description: 'Bodas que conectan historia, hospitalidad y una operación precisa.' },
        { title: 'Celebraciones relevantes', description: 'Aniversarios y ocasiones significativas conducidos con identidad, cuidado y ritmo.' },
        { title: 'Cenas privadas', description: 'Experiencias íntimas donde cada elección permanece visible.' },
        { title: 'Destination events', description: 'Proyectos fuera de la ciudad de origen con viajes, aliados e invitados coordinados.' },
      ],
      scope: ['Concepto', 'Planificación', 'Espacios', 'Proveedores', 'Gastronomía', 'Ambientación', 'Invitaciones', 'Hospitalidad', 'Logística', 'Producción', 'Operación', 'Concierge'],
      valueTitle: 'Presencia para quien recibe. Control detrás de escena.', valueCopy: 'Rios Lux coordina decisiones creativas y operativas como un solo sistema. El anfitrión acompaña lo importante sin administrar cada proveedor o dependencia por separado.',
      faq: [
        { title: '¿Rios Lux gestiona todos los proveedores?', description: 'Podemos liderar la curaduría, contratación y coordinación de los frentes incluidos en el alcance acordado.' },
        { title: '¿Producen eventos fuera de Río?', description: 'Sí. Los proyectos en otras regiones se analizan según fecha, alcance, logística y viabilidad operativa.' },
        { title: '¿El evento puede mantenerse privado?', description: 'Sí. Nombres, imágenes e información solo se publican con autorización expresa.' },
      ],
    },
    corporate: {
      metaTitle: 'Eventos Corporativos y Encuentros Ejecutivos en Brasil | Rios Lux', metaDescription: 'Estrategia, planificación y producción integral para eventos corporativos, lanzamientos y hospitalidad en Brasil.',
      eyebrow: 'Corporate', title: 'Eventos corporativos conducidos con estrategia y precisión.', intro: 'Una sola dirección para alinear objetivos, equipos, proveedores, logística y experiencia de los invitados.',
      contextsTitle: 'Encuentros diseñados en torno a un resultado claro.', contexts: [
        { title: 'Encuentros ejecutivos', description: 'Reuniones, convenciones y foros con atención al contenido, ritmo y hospitalidad.' },
        { title: 'Lanzamientos', description: 'Momentos de marca conectados con una intención comercial clara.' },
        { title: 'Eventos internos', description: 'Experiencias para cultura, relaciones y alineación de equipos.' },
        { title: 'Hospitalidad corporativa', description: 'Llegadas, traslados y recorrido de invitados coordinados de principio a fin.' },
      ],
      scope: ['Estrategia', 'Concepto', 'Contenido', 'Cronograma', 'Espacios', 'Audiovisual', 'Escenografía', 'Proveedores', 'Hospitalidad', 'Logística', 'Producción', 'Operación'],
      valueTitle: 'Su equipo decide. Rios Lux conduce la operación.', valueCopy: 'Centralizamos los frentes del evento para proteger la rutina interna, aclarar responsabilidades y mantener presente el objetivo de negocio.',
      faq: [
        { title: '¿Trabajan con equipos internos?', description: 'Sí. Definimos puntos de decisión, responsables y una cadencia clara con las áreas involucradas.' },
        { title: '¿Pueden integrar contenido, audiovisual y hospitalidad?', description: 'Estos frentes pueden formar parte de un mismo alcance coordinado desde el objetivo del encuentro.' },
        { title: '¿Operan fuera de Río de Janeiro?', description: 'Sí. La operación nacional se define después de analizar el proyecto y sus necesidades logísticas.' },
      ],
    },
    brand: {
      metaTitle: 'Brand Experience y Activaciones de Marca en Brasil | Rios Lux', metaDescription: 'Experiencias de marca, activaciones, lanzamientos y hospitalidad con estrategia y producción integral.',
      eyebrow: 'Brand Experience', title: 'Marcas transformadas en experiencias presenciales.', intro: 'Estrategia, narrativa, hospitalidad y producción conectadas para hacer tangible una intención de marca.',
      contextsTitle: 'Presencia de marca con propósito definido.', contexts: [
        { title: 'Activaciones', description: 'Interacciones diseñadas para participación y presencia coherente.' },
        { title: 'Lanzamientos', description: 'Ambientes y recorridos para presentar productos, servicios e iniciativas.' },
        { title: 'Relacionamiento', description: 'Experiencias para clientes, aliados, prensa y comunidades estratégicas.' },
        { title: 'Hospitalidad de marca', description: 'La bienvenida y el cuidado como parte visible del posicionamiento.' },
      ],
      scope: ['Estrategia', 'Concepto', 'Narrativa', 'Recorrido', 'Contenido', 'Espacio', 'Escenografía', 'Audiovisual', 'Gastronomía', 'Hospitalidad', 'Logística', 'Producción'],
      valueTitle: 'El concepto no termina en la presentación.', valueCopy: 'Traducimos posicionamiento en decisiones de espacio, contenido, ritmo, servicio y operación, preservando coherencia entre la idea y lo que vive el invitado.',
      faq: [
        { title: '¿Trabajan con agencias y equipos de marketing?', description: 'Sí. Podemos liderar la producción integral o integrarnos a una estructura existente con responsabilidades claras.' },
        { title: '¿La experiencia puede ocurrir en distintas ciudades?', description: 'Sí. La operación contempla aliados locales, viajes, consistencia y particularidades de cada destino.' },
        { title: '¿Cómo participa la marca en las decisiones?', description: 'El proyecto establece momentos claros de validación para mantener estrategia, creatividad y ejecución alineadas.' },
      ],
    },
    concierge: {
      metaTitle: 'Concierge y Hospitalidad para Eventos en Brasil | Rios Lux', metaDescription: 'Concierge, hospitalidad, reservas, traslados y atención al recorrido de anfitriones e invitados en Brasil.',
      eyebrow: 'Concierge', title: 'Hospitalidad que comienza antes de la llegada.', intro: 'Coordinación discreta de información, reservas, viajes y necesidades que influyen en la experiencia de anfitriones e invitados.',
      contextsTitle: 'Cuidado operacional en cada punto de contacto.', contexts: [
        { title: 'Guest management', description: 'Información, confirmaciones y orientaciones organizadas para reducir fricción.' },
        { title: 'Traslados', description: 'Llegadas, salidas y transportes alineados con el cronograma.' },
        { title: 'Reservas', description: 'Alojamiento, gastronomía y servicios coordinados según el perfil del proyecto.' },
        { title: 'Atención en destino', description: 'Apoyo contextual para anfitriones e invitados antes y durante el evento.' },
      ],
      scope: ['Lista de invitados', 'Comunicación', 'RSVP', 'Alojamiento', 'Reservas', 'Transportes', 'Itinerarios', 'Recepción', 'Acreditación', 'Información', 'Apoyo', 'Hospitalidad'],
      valueTitle: 'El evento también es todo lo que sucede a su alrededor.', valueCopy: 'Conectamos llegada, permanencia y traslados con la planificación central, reduciendo interrupciones y preservando la sensación de cuidado.',
      faq: [
        { title: '¿Concierge puede integrarse con la producción?', description: 'Sí. La integración permite que el recorrido del invitado responda al mismo cronograma y dirección.' },
        { title: '¿El servicio puede personalizarse por grupo?', description: 'El plan puede considerar distintos perfiles, necesidades y niveles de apoyo.' },
        { title: '¿Atienden destination events?', description: 'Sí, después de analizar destino, fechas, cantidad de invitados y logística necesaria.' },
      ],
    },
  },
}

export type ServiceContent = {
  routeKey: ServiceKey
  image: string
  metaTitle: string
  metaDescription: string
  eyebrow: string
  title: string
  intro: string
  location?: string
  contextsTitle: string
  contexts: Item[]
  scope: string[]
  valueTitle: string
  valueCopy: string
  faq: Item[]
}

export function getServiceContent(locale: Locale, key: ServiceKey): ServiceContent {
  return { routeKey: key, image: serviceImages[key], ...serviceBase[locale][key] }
}

type RegionRecord = {
  routeKey: RegionalKey
  city: string
  state: string
  metaTitle: string
  metaDescription: string
  title: string
  intro: string
  operationsTitle: string
  operationsCopy: string
  logisticsTitle: string
  logisticsCopy: string
  contextTitle: string
  contextCopy: string
  nearby: string[]
}

const regionalBase: Record<Locale, Record<RegionalKey, Omit<RegionRecord, 'routeKey'>>> = {
  pt: {
    regionalRio: { city: 'Rio de Janeiro', state: 'RJ', metaTitle: 'Eventos Privados no Rio de Janeiro | Rios Lux', metaDescription: 'Planejamento e produção completa de eventos privados no Rio de Janeiro, Niterói, Angra, Búzios e Petrópolis.', title: 'Eventos privados no Rio de Janeiro, conduzidos por uma única direção.', intro: 'Da primeira decisão à operação no dia, conectamos curadoria, fornecedores, hospitalidade e produção para celebrações no Rio e em seus principais destinos.', operationsTitle: 'Como produzimos no Rio', operationsCopy: 'Nossa base está no Rio de Janeiro. Isso favorece acompanhamento próximo, conhecimento operacional e articulação de parceiros na capital e em destinos do estado.', logisticsTitle: 'Cidade, serra ou costa', logisticsCopy: 'O desenho considera deslocamentos, acessos, hospedagem, montagem e particularidades de cada local. Angra, Búzios e Petrópolis exigem planos diferentes — e são tratados assim.', contextTitle: 'Presença local sem perder visão de conjunto', contextCopy: 'Centralizamos decisões e mantemos fornecedores, anfitriões e operação orientados pelo mesmo cronograma.', nearby: ['Rio de Janeiro', 'Niterói', 'Angra dos Reis', 'Búzios', 'Petrópolis'] },
    regionalSaoPaulo: { city: 'São Paulo', state: 'SP', metaTitle: 'Eventos Privados em São Paulo | Rios Lux', metaDescription: 'Planejamento e produção de eventos privados na capital, Alphaville, Campinas, Santos e outros eixos de São Paulo.', title: 'Eventos privados em São Paulo com direção, ritmo e precisão.', intro: 'Planejamento e produção completa para celebrações na capital e nos principais eixos de São Paulo, com uma operação desenhada para a escala e o ritmo da região.', operationsTitle: 'Como produzimos em São Paulo', operationsCopy: 'A operação é estruturada a partir do escopo, com curadoria de parceiros adequados ao projeto e uma frente de coordenação dedicada ao destino.', logisticsTitle: 'Atendimento fora da nossa base', logisticsCopy: 'Planejamos visitas técnicas, deslocamentos, fornecedores locais e equipe de produção de forma antecipada. A presença fora do Rio nunca é tratada como improviso.', contextTitle: 'Complexidade metropolitana sob controle', contextCopy: 'Trânsito, janelas de montagem, acessos e múltiplas equipes entram no plano desde o início, não na véspera.', nearby: ['São Paulo', 'Ibirapuera', 'Moema', 'Vila Nova Conceição', 'Itaim Bibi', 'Jardins', 'Barueri', 'Alphaville', 'Santana de Parnaíba', 'São Caetano do Sul', 'Campinas', 'Santos'] },
    regionalBeloHorizonte: { city: 'Belo Horizonte', state: 'MG', metaTitle: 'Eventos Privados em Belo Horizonte | Rios Lux', metaDescription: 'Planejamento e produção completa de eventos privados em Belo Horizonte e Nova Lima, com curadoria e logística integrada.', title: 'Eventos privados em Belo Horizonte e Nova Lima, planejados por inteiro.', intro: 'Celebrações que conectam contexto, estética e hospitalidade com uma estrutura operacional preparada para atuar em Minas Gerais.', operationsTitle: 'Como produzimos em Minas Gerais', operationsCopy: 'Definimos o modelo de equipe, parceiros e acompanhamento a partir do local e da complexidade do evento, com visitas técnicas quando necessárias.', logisticsTitle: 'Integração entre Rio e fornecedores locais', logisticsCopy: 'A curadoria combina capacidade local e direção central. Cada parceiro entra em um plano comum de entregas, comunicação e operação.', contextTitle: 'O lugar faz parte da experiência', contextCopy: 'Arquitetura, paisagem, acessos e dinâmica do destino orientam decisões sem transformar o projeto em uma coleção de soluções genéricas.', nearby: ['Belo Horizonte', 'Nova Lima'] },
    regionalVitoria: { city: 'Vitória', state: 'ES', metaTitle: 'Eventos Privados em Vitória | Rios Lux', metaDescription: 'Planejamento, curadoria e produção completa de eventos privados em Vitória e Vila Velha.', title: 'Eventos privados em Vitória com hospitalidade e operação coordenada.', intro: 'Planejamento e produção para celebrações no Espírito Santo, conectando convidados, fornecedores e logística sob uma única direção.', operationsTitle: 'Como produzimos no Espírito Santo', operationsCopy: 'O projeto começa com leitura de local, data e perfil dos convidados. A partir disso, estruturamos equipe, parceiros, cronograma e necessidades de deslocamento.', logisticsTitle: 'Continuidade entre planejamento e destino', logisticsCopy: 'O que é decidido antes precisa permanecer claro na montagem e na execução. Documentação, responsabilidades e comunicação acompanham todo o percurso.', contextTitle: 'Hospitalidade como parte da operação', contextCopy: 'Chegadas, deslocamentos e acolhimento são considerados junto da experiência principal, especialmente quando há convidados de outras cidades.', nearby: ['Vitória', 'Vila Velha'] },
    regionalBrasil: { city: 'Brasil', state: '', metaTitle: 'Eventos Privados de Alto Padrão no Brasil | Rios Lux', metaDescription: 'Planejamento e produção completa de eventos privados em diferentes destinos do Brasil, conforme escopo e viabilidade.', title: 'Eventos privados em diferentes destinos do Brasil.', intro: 'A Rios Lux parte do Rio de Janeiro e estrutura operações nacionais para projetos em que escopo, data e logística permitam uma entrega consistente.', operationsTitle: 'Como avaliamos outros destinos', operationsCopy: 'Analisamos acesso, infraestrutura, disponibilidade de parceiros, calendário, dimensão da equipe e particularidades do local antes de confirmar a operação.', logisticsTitle: 'Um plano específico para cada destino', logisticsCopy: 'Não replicamos uma fórmula trocando apenas a cidade. A estrutura combina direção central, apoio local e uma logística proporcional ao projeto.', contextTitle: 'Atuação nacional com responsabilidade', contextCopy: 'Não mantemos escritórios em todas as cidades. A equipe é organizada conforme a necessidade real de cada produção.', nearby: ['Rio de Janeiro', 'São Paulo', 'Minas Gerais', 'Espírito Santo', 'Outros destinos sob análise'] },
  },
  en: {
    regionalRio: { city: 'Rio de Janeiro', state: 'RJ', metaTitle: 'Private Events in Rio de Janeiro | Rios Lux', metaDescription: 'Full planning and production for private events in Rio, Niterói, Angra dos Reis, Búzios and Petrópolis.', title: 'Private events in Rio de Janeiro, led through one point of direction.', intro: 'From the first decision to on-site delivery, we connect curation, suppliers, hospitality and production across Rio and its leading destinations.', operationsTitle: 'How we produce in Rio', operationsCopy: 'Rio de Janeiro is our home base. It gives us close operational oversight and strong coordination across the capital and destinations throughout the state.', logisticsTitle: 'City, mountains or coast', logisticsCopy: 'Travel, access, accommodation, setup and venue specifics are planned from the outset. Angra, Búzios and Petrópolis require different operating models.', contextTitle: 'Local presence, complete perspective', contextCopy: 'We centralise decisions and keep suppliers, hosts and operations aligned to the same timeline.', nearby: ['Rio de Janeiro', 'Niterói', 'Angra dos Reis', 'Búzios', 'Petrópolis'] },
    regionalSaoPaulo: { city: 'São Paulo', state: 'SP', metaTitle: 'Private Events in São Paulo | Rios Lux', metaDescription: 'Planning and production for private events across São Paulo, Alphaville, Campinas, Santos and key city districts.', title: 'Private events in São Paulo with direction, pace and precision.', intro: 'Full planning and production for celebrations in the city and São Paulo’s key areas, with an operation designed for the region’s pace and scale.', operationsTitle: 'How we produce in São Paulo', operationsCopy: 'The operation is built around the scope, with a considered selection of local partners and a dedicated destination production structure.', logisticsTitle: 'Working beyond our home base', logisticsCopy: 'Site visits, travel, local suppliers and the production team are planned well in advance. Working outside Rio is never treated as an improvisation.', contextTitle: 'Metropolitan complexity under control', contextCopy: 'Traffic, access, setup windows and multiple teams enter the plan from the beginning.', nearby: ['São Paulo', 'Ibirapuera', 'Moema', 'Vila Nova Conceição', 'Itaim Bibi', 'Jardins', 'Barueri', 'Alphaville', 'Santana de Parnaíba', 'São Caetano do Sul', 'Campinas', 'Santos'] },
    regionalBeloHorizonte: { city: 'Belo Horizonte', state: 'MG', metaTitle: 'Private Events in Belo Horizonte | Rios Lux', metaDescription: 'Full planning and production for private events in Belo Horizonte and Nova Lima, Brazil.', title: 'Private events in Belo Horizonte and Nova Lima, planned as a whole.', intro: 'Celebrations connecting context, aesthetics and hospitality with an operation prepared for Minas Gerais.', operationsTitle: 'How we produce in Minas Gerais', operationsCopy: 'We define the team, partners and oversight model around the venue and complexity, including site visits whenever required.', logisticsTitle: 'Central direction, local capability', logisticsCopy: 'Curation combines local expertise with one central lead. Every partner works from the same delivery, communication and operating plan.', contextTitle: 'The place is part of the experience', contextCopy: 'Architecture, landscape, access and destination dynamics inform decisions without turning the project into generic styling.', nearby: ['Belo Horizonte', 'Nova Lima'] },
    regionalVitoria: { city: 'Vitória', state: 'ES', metaTitle: 'Private Events in Vitória | Rios Lux', metaDescription: 'Planning, curation and full production for private events in Vitória and Vila Velha, Brazil.', title: 'Private events in Vitória with hospitality and coordinated delivery.', intro: 'Planning and production for celebrations in Espírito Santo, connecting guests, suppliers and logistics through one point of direction.', operationsTitle: 'How we produce in Espírito Santo', operationsCopy: 'We begin with the venue, date and guest profile, then structure the team, partners, timeline and travel requirements.', logisticsTitle: 'Continuity from planning to destination', logisticsCopy: 'What is decided beforehand must remain clear during setup and delivery. Documentation, ownership and communication follow the project throughout.', contextTitle: 'Hospitality as an operating principle', contextCopy: 'Arrivals, transport and welcome are planned together with the main experience, especially for guests travelling from other cities.', nearby: ['Vitória', 'Vila Velha'] },
    regionalBrasil: { city: 'Brazil', state: '', metaTitle: 'High-End Private Events Across Brazil | Rios Lux', metaDescription: 'Full planning and production for private events across Brazil, subject to scope, logistics and operational feasibility.', title: 'Private events across destinations in Brazil.', intro: 'Rios Lux is based in Rio de Janeiro and builds nationwide operations when project scope, timing and logistics allow for a consistent delivery.', operationsTitle: 'How we assess other destinations', operationsCopy: 'Before confirming delivery, we review access, infrastructure, partner availability, calendar, team scale and the specifics of the location.', logisticsTitle: 'A destination-specific plan', logisticsCopy: 'We do not repeat a formula and change the city name. Each structure combines central direction, local support and logistics proportionate to the project.', contextTitle: 'Nationwide work, responsibly stated', contextCopy: 'We do not maintain offices in every city. The team is assembled around the real needs of each production.', nearby: ['Rio de Janeiro', 'São Paulo', 'Minas Gerais', 'Espírito Santo', 'Other destinations by review'] },
  },
  es: {
    regionalRio: { city: 'Río de Janeiro', state: 'RJ', metaTitle: 'Eventos Privados en Río de Janeiro | Rios Lux', metaDescription: 'Planificación y producción integral de eventos privados en Río, Niterói, Angra dos Reis, Búzios y Petrópolis.', title: 'Eventos privados en Río de Janeiro, conducidos por una sola dirección.', intro: 'Desde la primera decisión hasta la operación, conectamos curaduría, proveedores, hospitalidad y producción en Río y sus principales destinos.', operationsTitle: 'Cómo producimos en Río', operationsCopy: 'Nuestra base está en Río de Janeiro. Esto favorece un seguimiento cercano y una coordinación sólida en la capital y en los destinos del estado.', logisticsTitle: 'Ciudad, montaña o costa', logisticsCopy: 'Traslados, accesos, alojamiento, montaje y particularidades del lugar se planifican desde el inicio. Angra, Búzios y Petrópolis exigen modelos distintos.', contextTitle: 'Presencia local, visión completa', contextCopy: 'Centralizamos decisiones y mantenemos a proveedores, anfitriones y operación alineados con el mismo cronograma.', nearby: ['Río de Janeiro', 'Niterói', 'Angra dos Reis', 'Búzios', 'Petrópolis'] },
    regionalSaoPaulo: { city: 'São Paulo', state: 'SP', metaTitle: 'Eventos Privados en São Paulo | Rios Lux', metaDescription: 'Planificación y producción de eventos privados en São Paulo, Alphaville, Campinas, Santos y zonas clave de la capital.', title: 'Eventos privados en São Paulo con dirección, ritmo y precisión.', intro: 'Planificación y producción integral para celebraciones en la capital y los principales ejes de São Paulo, con una operación diseñada para la región.', operationsTitle: 'Cómo producimos en São Paulo', operationsCopy: 'La operación se estructura según el alcance, con curaduría de aliados locales y un frente de producción dedicado al destino.', logisticsTitle: 'Trabajo fuera de nuestra base', logisticsCopy: 'Visitas técnicas, viajes, proveedores locales y equipo se planifican con anticipación. La presencia fuera de Río nunca se trata como improvisación.', contextTitle: 'Complejidad metropolitana bajo control', contextCopy: 'Tráfico, accesos, ventanas de montaje y múltiples equipos entran en el plan desde el principio.', nearby: ['São Paulo', 'Ibirapuera', 'Moema', 'Vila Nova Conceição', 'Itaim Bibi', 'Jardins', 'Barueri', 'Alphaville', 'Santana de Parnaíba', 'São Caetano do Sul', 'Campinas', 'Santos'] },
    regionalBeloHorizonte: { city: 'Belo Horizonte', state: 'MG', metaTitle: 'Eventos Privados en Belo Horizonte | Rios Lux', metaDescription: 'Planificación y producción integral de eventos privados en Belo Horizonte y Nova Lima, Brasil.', title: 'Eventos privados en Belo Horizonte y Nova Lima, planificados por completo.', intro: 'Celebraciones que conectan contexto, estética y hospitalidad con una operación preparada para Minas Gerais.', operationsTitle: 'Cómo producimos en Minas Gerais', operationsCopy: 'Definimos equipo, aliados y seguimiento según el lugar y la complejidad, con visitas técnicas cuando son necesarias.', logisticsTitle: 'Dirección central, capacidad local', logisticsCopy: 'La curaduría combina conocimiento local y una sola dirección. Cada aliado trabaja con el mismo plan de entrega, comunicación y operación.', contextTitle: 'El lugar forma parte de la experiencia', contextCopy: 'Arquitectura, paisaje, accesos y dinámica del destino orientan las decisiones sin convertir el proyecto en una estética genérica.', nearby: ['Belo Horizonte', 'Nova Lima'] },
    regionalVitoria: { city: 'Vitória', state: 'ES', metaTitle: 'Eventos Privados en Vitória | Rios Lux', metaDescription: 'Planificación, curaduría y producción integral de eventos privados en Vitória y Vila Velha, Brasil.', title: 'Eventos privados en Vitória con hospitalidad y operación coordinada.', intro: 'Planificación y producción para celebraciones en Espírito Santo, conectando invitados, proveedores y logística bajo una sola dirección.', operationsTitle: 'Cómo producimos en Espírito Santo', operationsCopy: 'Empezamos por el lugar, la fecha y el perfil de invitados para estructurar equipo, aliados, cronograma y desplazamientos.', logisticsTitle: 'Continuidad entre planificación y destino', logisticsCopy: 'Lo decidido antes debe mantenerse claro durante el montaje y la ejecución. Documentación, responsabilidades y comunicación acompañan todo el proyecto.', contextTitle: 'Hospitalidad como principio operativo', contextCopy: 'Llegadas, traslados y bienvenida se consideran junto con la experiencia principal, especialmente para invitados de otras ciudades.', nearby: ['Vitória', 'Vila Velha'] },
    regionalBrasil: { city: 'Brasil', state: '', metaTitle: 'Eventos Privados de Alto Nivel en Brasil | Rios Lux', metaDescription: 'Planificación y producción integral de eventos privados en diferentes destinos de Brasil, según alcance y viabilidad.', title: 'Eventos privados en diferentes destinos de Brasil.', intro: 'Rios Lux parte de Río de Janeiro y estructura operaciones nacionales cuando alcance, fecha y logística permiten una entrega consistente.', operationsTitle: 'Cómo evaluamos otros destinos', operationsCopy: 'Antes de confirmar la operación analizamos acceso, infraestructura, disponibilidad de aliados, calendario, dimensión del equipo y particularidades del lugar.', logisticsTitle: 'Un plan específico para cada destino', logisticsCopy: 'No repetimos una fórmula cambiando solo la ciudad. Cada estructura combina dirección central, apoyo local y logística proporcional al proyecto.', contextTitle: 'Actuación nacional con responsabilidad', contextCopy: 'No mantenemos oficinas en todas las ciudades. El equipo se organiza según las necesidades reales de cada producción.', nearby: ['Río de Janeiro', 'São Paulo', 'Minas Gerais', 'Espírito Santo', 'Otros destinos bajo análisis'] },
  },
}

export function getRegionalContent(locale: Locale, key: RegionalKey): RegionRecord {
  return { routeKey: key, ...regionalBase[locale][key] }
}

export const routeKeyForService: Record<ServiceKey, RouteKey> = {
  private: 'private', corporate: 'corporate', brand: 'brand', concierge: 'concierge',
}
