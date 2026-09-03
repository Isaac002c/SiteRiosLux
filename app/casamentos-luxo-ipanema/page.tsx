import type { Metadata } from 'next'
import Link from 'next/link'
import { MotionDiv, MotionSection } from '@/components/Motion'

export const metadata: Metadata = {
  title: 'Casamentos de Luxo em Ipanema | Eventos Premium RJ | RiosLux',
  description: 'Casamentos premium em Ipanema e Zona Sul do Rio. Produção sofisticada, concierge 24h, locais exclusivos. RiosLux - especialista em casamentos de alto padrão.',
  alternates: { canonical: '/casamentos-luxo-ipanema' },
  openGraph: {
    title: 'Casamentos de Luxo em Ipanema | RiosLux',
    description: 'Seu casamento premium com organização impecável e experiência white-glove.',
    url: 'https://www.agenciarioslux.com.br/casamentos-luxo-ipanema',
    images: [{ url: 'https://www.agenciarioslux.com.br/og.png', width: 1200, height: 630, alt: 'RiosLux — eventos premium e concierge no Rio de Janeiro' }],
  }
}

export default function CasamentosIpanema() {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-32"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold gradient-text mb-8 leading-tight">
            Casamentos de Luxo em Ipanema
          </h1>
          <p className="text-xl md:text-2xl text-beige/80 max-w-3xl mx-auto mb-12">
            Seu casamento sofisticado em um dos bairros mais charmosos e exclusivos do Rio de Janeiro
          </p>
          <Link
            href="/contato"
            className="bg-gold text-primary px-12 py-6 rounded-full font-medium text-lg hover:bg-beige transition-all duration-300 shadow-2xl hover:shadow-gold/50 hover:-translate-y-2 inline-block"
          >
            Agendar Consultoria de Casamento
          </Link>
        </MotionDiv>

        <MotionSection
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 text-center py-16 rounded-3xl bg-gradient-to-r from-gold/10 to-beige/10 border border-gold/20"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-8">
            Transforme Seu Casamento em Obra de Arte
          </h2>
          <p className="text-xl text-beige/80 max-w-2xl mx-auto">
            Cada casamento é uma história única. Deixe a RiosLux contar a sua com sofisticação e elegância.
          </p>
        </MotionSection>
      </div>
    </div>
  )
}
