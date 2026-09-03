import type { Metadata } from 'next'
import Link from 'next/link'
import { MotionDiv, MotionSection } from '@/components/Motion'

export const metadata: Metadata = {
  title: 'Eventos Barra da Tijuca | Concierge Premium | RiosLux RJ',
  description: 'Eventos premium e concierge na Barra da Tijuca. Produção luxo, experiências exclusivas. Agência referência em eventos sofisticados no Rio de Janeiro.',
  alternates: { canonical: '/eventos-barra-tijuca' },
  openGraph: {
    title: 'Eventos Barra da Tijuca | RiosLux',
    description: 'Eventos premium e serviços de concierge na região da Barra da Tijuca.',
    url: 'https://www.agenciarioslux.com.br/eventos-barra-tijuca',
    images: [{ url: 'https://www.agenciarioslux.com.br/og.png', width: 1200, height: 630, alt: 'RiosLux — eventos premium e concierge no Rio de Janeiro' }],
  }
}

export default function EventosBarraTijuca() {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-32"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold gradient-text mb-8 leading-tight">
            Eventos Premium na Barra da Tijuca
          </h1>
          <p className="text-xl md:text-2xl text-beige/80 max-w-3xl mx-auto mb-12">
            Produção de eventos luxo, concierge exclusivo e experiências sofisticadas na região mais moderna do Rio
          </p>
          <Link
            href="/contato"
            className="bg-gold text-primary px-12 py-6 rounded-full font-medium text-lg hover:bg-beige transition-all duration-300 shadow-2xl hover:shadow-gold/50 hover:-translate-y-2 inline-block"
          >
            Agendar Consultoria na Barra
          </Link>
        </MotionDiv>

        <MotionSection
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-12 text-center">
            Especializações na Barra da Tijuca
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: 'Eventos em Resorts', desc: 'Produção em resorts premium com infraestrutura de luxo' },
              { title: 'Casamentos em Hotéis Boutique', desc: 'Celebrações sofisticadas em hotéis selecionados' },
              { title: 'Conferências Corporativas', desc: 'Eventos de negócios com tecnologia de ponta' },
              { title: 'Experiências em Clube', desc: 'Acesso exclusivo a clubes premium da região' }
            ].map((spec, i) => (
              <MotionDiv
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-2xl border border-gold/20"
              >
                <h3 className="text-2xl font-serif font-bold gradient-text mb-3">{spec.title}</h3>
                <p className="text-beige/80">{spec.desc}</p>
              </MotionDiv>
            ))}
          </div>
        </MotionSection>

        <MotionSection
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-16 rounded-3xl bg-gradient-to-r from-gold/10 to-beige/10 border border-gold/20"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-8">
            Sua Experiência Premium Começa Aqui
          </h2>
          <p className="text-xl text-beige/80 max-w-2xl mx-auto mb-12">
            RiosLux: especialista em eventos de luxo na Barra da Tijuca e região.
          </p>
          <Link
            href="/contato"
            className="bg-gold text-primary px-12 py-6 rounded-full font-medium text-lg hover:bg-beige transition-all duration-300 shadow-2xl hover:shadow-gold/50 hover:-translate-y-2 inline-block"
          >
            Solicitar Proposta Premium
          </Link>
        </MotionSection>
      </div>
    </div>
  )
}
