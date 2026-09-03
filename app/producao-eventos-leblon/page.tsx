import type { Metadata } from 'next'
import Link from 'next/link'
import { MotionDiv, MotionSection } from '@/components/Motion'

export const metadata: Metadata = {
  title: 'Produção Eventos Leblon | Agência Luxo Premium RJ | RiosLux',
  description: 'Produção de eventos premium em Leblon. Experiências sofisticadas, concierge 24h, locais exclusivos. RiosLux - especialista em eventos de alto padrão.',
  alternates: { canonical: '/producao-eventos-leblon' },
  openGraph: {
    title: 'Produção Eventos Leblon | RiosLux',
    description: 'Eventos premium e concierge exclusivo em Leblon e Zona Sul do Rio.',
    url: 'https://www.agenciarioslux.com.br/producao-eventos-leblon',
    images: [{ url: 'https://www.agenciarioslux.com.br/og.png', width: 1200, height: 630, alt: 'RiosLux — eventos premium e concierge no Rio de Janeiro' }],
  }
}

export default function ProducaoLeblon() {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-32"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold gradient-text mb-8 leading-tight">
            Produção de Eventos Premium em Leblon
          </h1>
          <p className="text-xl md:text-2xl text-beige/80 max-w-3xl mx-auto mb-12">
            Eventos sofisticados no bairro mais charmoso e elegante do Rio de Janeiro
          </p>
          <Link
            href="/contato"
            className="bg-gold text-primary px-12 py-6 rounded-full font-medium text-lg hover:bg-beige transition-all duration-300 shadow-2xl hover:shadow-gold/50 hover:-translate-y-2 inline-block"
          >
            Agendar Consultoria em Leblon
          </Link>
        </MotionDiv>

        <MotionSection
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-16 rounded-3xl bg-gradient-to-r from-gold/10 to-beige/10 border border-gold/20 mb-32"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-8">
            Leblon: O Bairro Mais Sofisticado do Rio
          </h2>
          <p className="text-xl text-beige/80 max-w-2xl mx-auto">
            Restaurantes premium, boutiques exclusivas e paisagem única: o cenário perfeito para eventos memoráveis.
          </p>
        </MotionSection>

        <MotionSection
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-16 rounded-3xl bg-gradient-to-r from-gold/10 to-beige/10 border border-gold/20"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-8">
            Pronto para Seu Evento Premium?
          </h2>
          <p className="text-xl text-beige/80 max-w-2xl mx-auto mb-12">
            Transforme sua visão em uma experiência inesquecível em um dos cenários mais lindos do Rio.
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
