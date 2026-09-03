import type { Metadata } from 'next'
import Link from 'next/link'
import { MotionDiv, MotionSection } from '@/components/Motion'

export const metadata: Metadata = {
  title: 'Concierge para Eventos | Serviço Premium 24h | RiosLux RJ',
  description: 'Serviço de concierge completo para eventos premium no Rio de Janeiro. Atendimento white-glove 24h, soluções personalizadas, experiência VIP. RiosLux.',
  keywords: ['concierge eventos Rio', 'serviço concierge premium', 'atendimento white-glove', 'concierge 24h'],
  alternates: { canonical: '/concierge-eventos-rio' },
  openGraph: {
    title: 'Concierge para Eventos | RiosLux Rio de Janeiro',
    description: 'Atendimento concierge premium 24h para suas experiências e eventos exclusivos.',
    url: 'https://www.agenciarioslux.com.br/concierge-eventos-rio',
    images: [{ url: 'https://www.agenciarioslux.com.br/og.png', width: 1200, height: 630, alt: 'RiosLux — eventos premium e concierge no Rio de Janeiro' }],
  }
}

export default function ConciergePremium() {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-32"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold gradient-text mb-8 leading-tight">
            Concierge Premium 24h para Seus Eventos
          </h1>
          <p className="text-xl md:text-2xl text-beige/80 max-w-3xl mx-auto mb-12">
            Atendimento white-glove com soluções personalizadas para experiências exclusivas no Rio de Janeiro
          </p>
          <Link
            href="/contato"
            className="bg-gold text-primary px-12 py-6 rounded-full font-medium text-lg hover:bg-beige transition-all duration-300 shadow-2xl hover:shadow-gold/50 hover:-translate-y-2 inline-block"
          >
            Ativar Serviço de Concierge
          </Link>
        </MotionDiv>

        {/* O Que é Concierge */}
        <MotionSection
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 grid lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-8">
              O Que é Serviço de Concierge Premium?
            </h2>
            <p className="text-xl text-beige/80 mb-6 leading-relaxed">
              Concierge é um serviço de atendimento personalizado 24/7 que resolve tudo que você pode imaginar antes, durante e depois de seu evento.
            </p>
            <p className="text-lg text-beige/80 mb-6">
              Desde reservas em restaurantes exclusivos até coordenação logística completa, contatos de alto nível e soluções criativas para solicitações especiais.
            </p>
            <p className="text-lg text-beige/80">
              Na RiosLux, nosso concierge é treinado para antecipar necessidades e oferecer experiências que excedem expectativas.
            </p>
          </div>
          <div className="bg-gradient-to-br from-gold/20 to-beige/20 p-12 rounded-3xl border border-gold/30">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-serif font-bold gradient-text mb-3">Discrição Absoluta</h3>
                <p className="text-beige/80">Confidencialidade garantida em todos os serviços prestados</p>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold gradient-text mb-3">Resposta Imediata</h3>
                <p className="text-beige/80">Disponível 24h, 7 dias por semana para atender suas solicitações</p>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold gradient-text mb-3">Rede Exclusiva</h3>
                <p className="text-beige/80">Acesso a fornecedores, restaurantes e locais premium do Rio</p>
              </div>
            </div>
          </div>
        </MotionSection>

        {/* Serviços Concierge */}
        <MotionSection
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-12 text-center">
            Serviços Concierge Disponíveis
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Reservas Exclusivas', desc: 'Acesso privilegiado a restaurantes, clubs e eventos privados' },
              { title: 'Logística de Eventos', desc: 'Coordenação completa de transporte, hospedagem e agenda' },
              { title: 'Compras Premium', desc: 'Acesso a lojas exclusivas, personalidades e serviços de styling' },
              { title: 'Soluções Last-Minute', desc: 'Problemas resolvidos em tempo real com soluções criativas' },
              { title: 'Coordenação de Fornecedores', desc: 'Gestão de caterers, fotógrafos, produtoras e todos os terceirizados' },
              { title: 'Atendimento VIP', desc: 'Suporte personalizado para clientes executives e high net worth' }
            ].map((serv, i) => (
              <MotionDiv
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass p-8 rounded-2xl border border-gold/20 hover:border-gold/50 transition-all"
              >
                <h3 className="text-2xl font-serif font-bold gradient-text mb-3">{serv.title}</h3>
                <p className="text-beige/80">{serv.desc}</p>
              </MotionDiv>
            ))}
          </div>
        </MotionSection>

        {/* CTA Final */}
        <MotionSection
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-16 rounded-3xl bg-gradient-to-r from-gold/10 to-beige/10 border border-gold/20"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-8">
            Viva a Experiência de Concierge Premium
          </h2>
          <p className="text-xl text-beige/80 max-w-2xl mx-auto mb-12">
            Deixe todos os detalhes conosco. Você apenas desfruta da experiência perfeita.
          </p>
          <Link
            href="/contato"
            className="bg-gold text-primary px-12 py-6 rounded-full font-medium text-lg hover:bg-beige transition-all duration-300 shadow-2xl hover:shadow-gold/50 hover:-translate-y-2 inline-block"
          >
            Ativar Concierge 24h
          </Link>
        </MotionSection>
      </div>
    </div>
  )
}
