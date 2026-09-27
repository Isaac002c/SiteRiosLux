import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import { createWhatsAppUrl, siteConfig } from '@/config/site'
import { common } from '@/lib/site-content'
import { routes, type Locale } from '@/lib/i18n'

const marketGroups = [
  { state: 'Rio de Janeiro', cities: ['Rio de Janeiro', 'Niterói', 'Angra dos Reis', 'Búzios', 'Petrópolis'], route: 'regionalRio' as const },
  { state: 'São Paulo', cities: ['São Paulo', 'Ibirapuera', 'Moema', 'Vila Nova Conceição', 'Itaim Bibi', 'Jardins', 'Barueri', 'Alphaville', 'Santana de Parnaíba', 'São Caetano do Sul', 'Campinas', 'Santos'], route: 'regionalSaoPaulo' as const },
  { state: 'Minas Gerais', cities: ['Belo Horizonte', 'Nova Lima'], route: 'regionalBeloHorizonte' as const },
  { state: 'Espírito Santo', cities: ['Vitória', 'Vila Velha'], route: 'regionalVitoria' as const },
]

const atmosphereImages = [
  'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1800&q=84',
  'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=1800&q=84',
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1800&q=84',
]

const atmosphereAlts: Record<Locale, string[]> = {
  pt: ['Salão preparado para receber convidados', 'Composição floral em mesa de celebração', 'Atmosfera de evento com iluminação cênica'],
  en: ['Event space prepared to welcome guests', 'Floral composition on a celebration table', 'Event atmosphere with stage lighting'],
  es: ['Salón preparado para recibir invitados', 'Composición floral en una mesa de celebración', 'Ambiente de evento con iluminación escénica'],
}

export function CoveragePage({ locale }: { locale: Locale }) {
  const text = locale === 'pt' ? {
    eyebrow: 'Onde atuamos', title: 'Base no Rio de Janeiro. Operação desenhada para cada destino.', intro: 'A Rios Lux não mantém escritórios em todas as cidades. Estruturamos equipe, parceiros e logística conforme a necessidade real de cada projeto.',
    cities: 'Mercados prioritários', other: 'Outros destinos', otherCopy: 'Projetos em outras regiões do Brasil são avaliados conforme data, escopo, logística e viabilidade operacional.', cta: 'Conversar sobre um destino',
  } : locale === 'en' ? {
    eyebrow: 'Where we work', title: 'Based in Rio de Janeiro. Operations designed for each destination.', intro: 'Rios Lux does not maintain offices in every city. We structure teams, partners and logistics around the real needs of each project.',
    cities: 'Priority markets', other: 'Other destinations', otherCopy: 'Projects in other regions of Brazil are reviewed according to timing, scope, logistics and operational feasibility.', cta: 'Discuss a destination',
  } : {
    eyebrow: 'Dónde trabajamos', title: 'Con base en Río de Janeiro. Operación diseñada para cada destino.', intro: 'Rios Lux no mantiene oficinas en todas las ciudades. Estructuramos equipo, aliados y logística según las necesidades reales de cada proyecto.',
    cities: 'Mercados prioritarios', other: 'Otros destinos', otherCopy: 'Los proyectos en otras regiones de Brasil se analizan según fecha, alcance, logística y viabilidad operativa.', cta: 'Conversar sobre un destino',
  }
  return <div><PageHero eyebrow={text.eyebrow} title={text.title} intro={text.intro} />
    <section className="section-space bg-canvas text-ink"><div className="page-shell"><p className="eyebrow mb-6">{text.cities}</p><div className="grid border-l border-t border-ink/20 sm:grid-cols-2">{marketGroups.map((group, index) => <article key={group.state} className="border-b border-r border-ink/20 p-7 sm:p-10"><div className="flex items-center justify-between"><span className="font-serif text-2xl text-brass-dark">{String(index + 1).padStart(2, '0')}</span><MapPin size={18} className="text-brass-dark" /></div><h2 className="mt-10 font-serif text-4xl font-medium">{group.state}</h2><ul className="mt-6 space-y-2 text-ink/65">{group.cities.map((city) => <li key={city}>{city}</li>)}</ul><Link href={routes[group.route][locale]} className="mt-7 inline-flex items-center text-xs font-semibold uppercase tracking-[0.14em] text-brass-dark">{locale === 'en' ? 'See how we work' : locale === 'es' ? 'Ver cómo trabajamos' : 'Como atuamos'}<ArrowRight className="ml-2" size={15} /></Link></article>)}</div></div></section>
    <section className="section-space bg-forest"><div className="page-shell grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="eyebrow mb-5">{text.other}</p><h2 className="max-w-5xl font-serif text-5xl font-medium leading-[0.95] sm:text-7xl">{text.otherCopy}</h2></div><Link href={routes.regionalBrasil[locale]} className="button-secondary">{text.cta}<ArrowRight className="ml-2" size={16} /></Link></div></section>
  </div>
}

export function ProjectsPage({ locale }: { locale: Locale }) {
  const shared = common[locale]
  const text = locale === 'pt' ? {
    eyebrow: 'Direção de projetos', title: 'Cada experiência começa com uma intenção clara.', intro: 'Forma, ritmo, hospitalidade e operação são conduzidos como partes de um mesmo sistema.',
    note: 'Da intenção à presença', noteTitle: 'Estética, hospitalidade e operação na mesma linguagem.', noteCopy: 'Espaço, luz, materiais, serviço e percurso dos convidados são coordenados para sustentar a intenção do projeto do início ao fim.',
    anatomy: 'O que estrutura cada projeto', anatomyTitle: 'Arquitetura de experiência', fields: ['Contexto', 'Público', 'Conceito', 'Escopo', 'Curadoria', 'Logística', 'Hospitalidade', 'Operação'], cta: 'Planejar uma experiência',
  } : locale === 'en' ? {
    eyebrow: 'Project direction', title: 'Every experience begins with a clear intent.', intro: 'Form, pacing, hospitality and operations are led as parts of one system.',
    note: 'From intent to presence', noteTitle: 'Aesthetics, hospitality and operations in one language.', noteCopy: 'Space, light, materials, service and the guest journey are coordinated to sustain the project’s intent from beginning to end.',
    anatomy: 'What structures each project', anatomyTitle: 'Experience architecture', fields: ['Context', 'Audience', 'Concept', 'Scope', 'Curation', 'Logistics', 'Hospitality', 'Operations'], cta: 'Plan an experience',
  } : {
    eyebrow: 'Dirección de proyectos', title: 'Cada experiencia comienza con una intención clara.', intro: 'Forma, ritmo, hospitalidad y operación se conducen como partes de un mismo sistema.',
    note: 'De la intención a la presencia', noteTitle: 'Estética, hospitalidad y operación en un mismo lenguaje.', noteCopy: 'Espacio, luz, materiales, servicio y recorrido de los invitados se coordinan para sostener la intención del proyecto de principio a fin.',
    anatomy: 'Qué estructura cada proyecto', anatomyTitle: 'Arquitectura de experiencia', fields: ['Contexto', 'Público', 'Concepto', 'Alcance', 'Curaduría', 'Logística', 'Hospitalidad', 'Operación'], cta: 'Planificar una experiencia',
  }
  return <div><PageHero eyebrow={text.eyebrow} title={text.title} intro={text.intro} />
    <section className="section-space bg-canvas text-ink"><div className="page-shell"><div className="mb-12 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]"><p className="eyebrow">{text.note}</p><div><h2 className="max-w-4xl font-serif text-5xl font-medium leading-[0.98] sm:text-6xl">{text.noteTitle}</h2><p className="mt-6 max-w-2xl leading-relaxed text-ink/65">{text.noteCopy}</p></div></div><p className="mb-4 text-sm text-ink/60 lg:hidden">{locale === 'pt' ? 'Deslize para explorar →' : locale === 'en' ? 'Swipe to explore →' : 'Deslice para explorar →'}</p><div className="media-snap-carousel grid gap-4 lg:grid-cols-3">{atmosphereImages.map((src, index) => <figure key={src} className="media-snap-item relative aspect-[4/5] overflow-hidden"><Image src={src} alt={atmosphereAlts[locale][index]} fill sizes="(min-width:1024px) 33vw,100vw" className="object-cover" /></figure>)}</div></div></section>
    <section className="section-space bg-forest"><div className="page-shell grid gap-14 lg:grid-cols-[0.6fr_1.4fr] lg:gap-24"><div><p className="eyebrow mb-5">{text.anatomy}</p><h2 className="font-serif text-5xl font-medium leading-none">{text.anatomyTitle}</h2></div><ol className="grid border-l border-t border-white/15 sm:grid-cols-2">{text.fields.map((field, index) => <li key={field} className="flex min-h-28 items-end gap-5 border-b border-r border-white/15 p-6"><span className="font-serif text-2xl text-brass">{String(index + 1).padStart(2, '0')}</span><span className="text-sand/75">{field}</span></li>)}</ol></div></section>
    <section className="section-space bg-ink"><div className="page-shell"><h2 className="max-w-5xl font-serif text-6xl font-medium leading-[0.92]">{text.cta}</h2><Link href={routes.contact[locale]} data-track-event="proposal_request" data-track-label="projects" className="button-primary mt-9">{shared.primaryCta}<ArrowRight className="ml-2" size={16} /></Link></div></section>
  </div>
}

export function AboutPage({ locale }: { locale: Locale }) {
  const shared = common[locale]
  const text = locale === 'pt' ? {
    eyebrow: 'Sobre a Rios Lux', title: 'Uma empresa de direção, não uma soma de fornecedores.', intro: 'A Rios Lux existe para transformar projetos complexos em uma condução clara, conectando estratégia, curadoria, produção e hospitalidade.',
    essence: 'Essência', essenceTitle: 'Excelência sem espetáculo. Confiança sem ruído.', essenceCopy: 'Falamos com objetividade, trabalhamos com discrição e tratamos cada escolha como parte de um sistema. Alto padrão, para nós, é consistência entre intenção, detalhe e execução.',
    values: ['Excelência', 'Confiança', 'Curadoria'], team: 'Três frentes. Uma direção.',
  } : locale === 'en' ? {
    eyebrow: 'About Rios Lux', title: 'A direction-led company, not a collection of suppliers.', intro: 'Rios Lux turns complex projects into clear leadership, connecting strategy, curation, production and hospitality.',
    essence: 'Essence', essenceTitle: 'Excellence without spectacle. Trust without noise.', essenceCopy: 'We communicate clearly, work discreetly and treat every choice as part of a system. To us, high standards mean consistency between intent, detail and delivery.',
    values: ['Excellence', 'Trust', 'Curation'], team: 'Three areas. One direction.',
  } : {
    eyebrow: 'Sobre Rios Lux', title: 'Una empresa de dirección, no una suma de proveedores.', intro: 'Rios Lux transforma proyectos complejos en una conducción clara, conectando estrategia, curaduría, producción y hospitalidad.',
    essence: 'Esencia', essenceTitle: 'Excelencia sin espectáculo. Confianza sin ruido.', essenceCopy: 'Comunicamos con claridad, trabajamos con discreción y tratamos cada elección como parte de un sistema. Alto nivel significa coherencia entre intención, detalle y ejecución.',
    values: ['Excelencia', 'Confianza', 'Curaduría'], team: 'Tres áreas. Una dirección.',
  }
  const members = [
    { name: 'Isaac', image: '/images/team/isaac.webp', role: locale === 'pt' ? 'Growth, Tecnologia & Financeiro' : locale === 'en' ? 'Growth, Technology & Finance' : 'Growth, Tecnología y Finanzas' },
    { name: 'Manoel', image: '/images/team/manoel.webp', role: locale === 'pt' ? 'Operações, Fornecedores & Logística' : locale === 'en' ? 'Operations, Suppliers & Logistics' : 'Operaciones, Proveedores y Logística' },
    { name: 'Antônio', image: '/images/team/antonio.webp', role: locale === 'pt' ? 'Comercial, Curadoria & Experiência' : locale === 'en' ? 'Commercial, Curation & Experience' : 'Comercial, Curaduría y Experiencia' },
  ]
  return <div><PageHero eyebrow={text.eyebrow} title={text.title} intro={text.intro} />
    <section className="section-space bg-canvas text-ink"><div className="page-shell grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24"><div><p className="eyebrow mb-5">{text.essence}</p><h2 className="font-serif text-5xl font-medium leading-[0.96] sm:text-6xl">{text.essenceTitle}</h2><p className="mt-7 max-w-xl leading-relaxed text-ink/65">{text.essenceCopy}</p></div><div className="grid border-l border-t border-ink/20">{text.values.map((value, index) => <div key={value} className="grid min-h-32 grid-cols-[auto_1fr] items-end gap-8 border-b border-r border-ink/20 p-7"><span className="font-serif text-2xl text-brass-dark">{String(index + 1).padStart(2, '0')}</span><h3 className="font-serif text-4xl">{value}</h3></div>)}</div></div></section>
    <section className="section-space bg-ink"><div className="page-shell"><p className="eyebrow mb-5">Rios Lux</p><h2 className="font-serif text-5xl font-medium sm:text-6xl">{text.team}</h2><p className="mt-8 text-sm text-sand/60 lg:hidden">{locale === 'pt' ? 'Deslize para conhecer →' : locale === 'en' ? 'Swipe to meet the team →' : 'Deslice para conocer el equipo →'}</p><div className="media-snap-carousel mt-4 grid gap-4 lg:mt-12 lg:grid-cols-3">{members.map((member) => <article key={member.name} className="media-snap-item border border-white/15"><div className="relative aspect-[4/5]"><Image src={member.image} alt={member.name} fill sizes="(min-width:1024px) 33vw,100vw" className="object-cover" /></div><div className="p-6"><h3 className="font-serif text-3xl">{member.name}</h3><p className="mt-2 text-[10px] uppercase leading-relaxed tracking-[0.14em] text-brass">{member.role}</p></div></article>)}</div></div></section>
    <section className="section-space bg-forest"><div className="page-shell grid gap-14 lg:grid-cols-[0.62fr_1.38fr] lg:gap-24"><div><p className="eyebrow mb-5">{shared.processKicker}</p><h2 className="font-serif text-5xl font-medium leading-[0.96]">{shared.processTitle}</h2></div><ol className="divide-y divide-white/15 border-y border-white/15">{shared.process.map((step, index) => <li key={step.title} className="grid gap-3 py-7 sm:grid-cols-[0.13fr_0.3fr_0.57fr]"><span className="font-serif text-2xl text-brass">{String(index + 1).padStart(2, '0')}</span><h3 className="font-serif text-2xl">{step.title}</h3><p className="text-sand/65">{step.description}</p></li>)}</ol></div></section>
  </div>
}

export function ContactPage({ locale }: { locale: Locale }) {
  const shared = common[locale]
  const text = locale === 'pt' ? { eyebrow: 'Contato', title: 'Uma boa produção começa com uma conversa precisa.', intro: 'Conte o que você está planejando e o que já está definido. Formulário e WhatsApp são canais independentes.', direct: 'Contato direto' } : locale === 'en' ? { eyebrow: 'Contact', title: 'Strong production begins with a precise conversation.', intro: 'Tell us what you are planning and what is already defined. The form and WhatsApp are independent channels.', direct: 'Direct contact' } : { eyebrow: 'Contacto', title: 'Una buena producción comienza con una conversación precisa.', intro: 'Cuéntenos qué está planificando y qué ya está definido. El formulario y WhatsApp son canales independientes.', direct: 'Contacto directo' }
  return <div><PageHero eyebrow={text.eyebrow} title={text.title} intro={text.intro} />
    <section className="section-space bg-ink"><div className="page-shell grid gap-14 lg:grid-cols-[1.35fr_0.65fr] lg:gap-24"><ContactForm locale={locale} /><aside className="border-t border-white/15 pt-9 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"><p className="eyebrow mb-7">{text.direct}</p><div className="space-y-7"><ContactLink icon={<Phone size={18} />} href={'tel:' + siteConfig.phoneHref} event="phone_click">{siteConfig.phoneDisplay}</ContactLink><ContactLink icon={<Mail size={18} />} href={'mailto:' + siteConfig.email} event="email_click">{siteConfig.email}</ContactLink><p className="flex gap-4 text-sand/75"><MapPin size={18} className="shrink-0 text-brass" />Rio de Janeiro · Brasil</p></div><a href={createWhatsAppUrl(shared.whatsappMessage as string)} target="_blank" rel="noopener noreferrer" data-track-event="whatsapp_click" data-track-label="contact_direct" className="button-secondary mt-10"><MessageCircle className="mr-2" size={17} />WhatsApp</a></aside></div></section>
  </div>
}

export function ThankYouPage({ locale, context }: { locale: Locale; context: 'private' | 'contact' }) {
  const text = locale === 'pt' ? { eyebrow: 'Solicitação recebida', title: 'Sua conversa com a Rios Lux começou.', copy: 'As informações foram registradas. Nossa equipe analisará o contexto e entrará em contato pelos canais informados.', home: 'Voltar ao início', whatsapp: 'Continuar no WhatsApp' } : locale === 'en' ? { eyebrow: 'Enquiry received', title: 'Your conversation with Rios Lux has begun.', copy: 'Your information has been recorded. Our team will review the context and follow up using the contact details provided.', home: 'Back to home', whatsapp: 'Continue on WhatsApp' } : { eyebrow: 'Solicitud recibida', title: 'Su conversación con Rios Lux ha comenzado.', copy: 'La información fue registrada. Nuestro equipo analizará el contexto y se comunicará por los canales informados.', home: 'Volver al inicio', whatsapp: 'Continuar por WhatsApp' }
  const shared = common[locale]
  return <section className="flex min-h-[calc(100svh-4.5rem)] items-center bg-ink"><div className="page-shell py-20"><div className="max-w-5xl border-l border-brass/60 pl-6 sm:pl-10"><p className="eyebrow mb-6">{text.eyebrow}</p><h1 className="max-w-4xl text-balance font-serif text-6xl font-medium leading-[0.9] sm:text-8xl">{text.title}</h1><p className="mt-8 max-w-2xl text-lg leading-relaxed text-sand/70">{text.copy}</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><Link href={routes.home[locale]} className="button-primary">{text.home}</Link><a href={createWhatsAppUrl(shared.whatsappMessage as string)} target="_blank" rel="noopener noreferrer" data-track-event="whatsapp_click" data-track-label={'thank_you_' + context} className="button-secondary">{text.whatsapp}</a></div></div></div></section>
}

export function PrivacyPage({ locale }: { locale: Locale }) {
  const text = locale === 'pt' ? { title: 'Política de Privacidade', intro: 'A Rios Lux utiliza os dados enviados voluntariamente para responder solicitações, organizar o atendimento e manter registros necessários da relação comercial.', sections: [['Dados tratados', 'Nome, informações de contato e dados sobre o evento fornecidos no formulário.'], ['Finalidade', 'Atendimento da solicitação, comunicação sobre o projeto e melhoria da experiência digital.'], ['Compartilhamento', 'Os dados não são comercializados. Podem ser tratados por provedores necessários à hospedagem, analytics e gestão de leads.'], ['Seus direitos', 'Para solicitar acesso, correção ou exclusão, escreva para ' + siteConfig.email + '.']] } : locale === 'en' ? { title: 'Privacy Policy', intro: 'Rios Lux uses information voluntarily submitted to respond to enquiries, organise service and maintain necessary commercial records.', sections: [['Information processed', 'Name, contact details and event information provided through the form.'], ['Purpose', 'Responding to enquiries, communicating about the project and improving the digital experience.'], ['Sharing', 'Information is not sold. It may be processed by providers required for hosting, analytics and lead management.'], ['Your rights', 'To request access, correction or deletion, email ' + siteConfig.email + '.']] } : { title: 'Política de Privacidad', intro: 'Rios Lux utiliza los datos enviados voluntariamente para responder solicitudes, organizar la atención y mantener registros comerciales necesarios.', sections: [['Datos tratados', 'Nombre, datos de contacto e información del evento proporcionados en el formulario.'], ['Finalidad', 'Responder solicitudes, comunicarnos sobre el proyecto y mejorar la experiencia digital.'], ['Compartir datos', 'Los datos no se venden. Pueden ser tratados por proveedores de hosting, analytics y gestión de leads.'], ['Sus derechos', 'Para solicitar acceso, corrección o eliminación, escriba a ' + siteConfig.email + '.']] }
  return <div><PageHero eyebrow="Rios Lux" title={text.title} intro={text.intro} /><section className="section-space bg-canvas text-ink"><div className="page-shell max-w-5xl"><div className="divide-y divide-ink/20 border-y border-ink/20">{text.sections.map(([title, body]) => <section key={title} className="py-8"><h2 className="font-serif text-3xl">{title}</h2><p className="mt-4 leading-relaxed text-ink/65">{body}</p></section>)}</div></div></section></div>
}

function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return <section className="section-space bg-forest"><div className="page-shell pt-7 sm:pt-12"><p className="eyebrow mb-6">{eyebrow}</p><h1 className="max-w-[78rem] text-balance font-serif text-[clamp(3.2rem,7.4vw,8rem)] font-medium leading-[0.87] tracking-[-0.04em]">{title}</h1><p className="mt-9 max-w-3xl border-t border-white/20 pt-7 text-lg leading-relaxed text-sand/72 sm:text-xl">{intro}</p></div></section>
}

function ContactLink({ icon, href, event, children }: { icon: React.ReactNode; href: string; event: 'phone_click' | 'email_click'; children: React.ReactNode }) {
  return <a href={href} data-track-event={event} data-track-label="contact_page" className="flex gap-4 break-all text-sand/75 transition hover:text-white"><span className="text-brass">{icon}</span>{children}</a>
}
