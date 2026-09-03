import type { Metadata } from 'next'
import Link from 'next/link'
import { MotionDiv, MotionSection } from '@/components/Motion'

export const metadata: Metadata = {
  title: 'Casos de Sucesso | Portfólio de Eventos Premium | RiosLux',
  description: '50+ eventos premium realizados com sucesso. Casamentos, corporativos, despedidas. Veja nosso portfólio completo de experiências sofisticadas.',
  alternates: { canonical: '/casos-sucesso' },
  openGraph: {
    title: 'Casos de Sucesso RiosLux | Eventos Premium',
    description: 'Conheça os 50+ eventos premium que transformamos em experiências memoráveis.',
    url: 'https://www.agenciarioslux.com.br/casos-sucesso',
    images: [{ url: 'https://www.agenciarioslux.com.br/og.png', width: 1200, height: 630, alt: 'RiosLux — eventos premium e concierge no Rio de Janeiro' }],
  }
}

const casosSuccesso = [
  {
    titulo: 'Casamento em Iate - Baía de Guanabara',
    tipo: 'Casamento',
    ano: '2025',
    detalhes: '120 convidados | Sunset romântico | Champagne premium'
  },
  {
    titulo: 'Gala Corporativa - Rooftop Zona Sul',
    tipo: 'Corporativo',
    ano: '2025',
    detalhes: '300 executivos | Networking premium | Prêmios e reconhecimento'
  },
  {
    titulo: 'Despedida de Solteiro - Mansão Joá',
    tipo: 'Evento Privado',
    ano: '2025',
    detalhes: '80 amigos | 3 dias de experiência | Concierge white-glove'
  },
  {
    titulo: 'Lançamento Produto Premium',
    tipo: 'Corporativo',
    ano: '2024',
    detalhes: '200 convidados | Hologramas e tech premium | ROI mensurável'
  },
  {
    titulo: 'Aniversário 50 Anos - Mansão Ipanema',
    tipo: 'Evento Privado',
    ano: '2024',
    detalhes: '150 convidados | Coquetel sofisticado | Entretenimento premium'
  },
  {
    titulo: 'Reunião Estratégica - Restaurante Privativo',
    tipo: 'Corporativo',
    ano: '2024',
    detalhes: '20 board members | Gastronomia premium | Confidencialidade total'
  }
]

export default function CasosSucesso() {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-32"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold gradient-text mb-8 leading-tight">
            Casos de Sucesso
          </h1>
          <p className="text-xl md:text-2xl text-beige/80 max-w-3xl mx-auto">
            Mais de 50 eventos premium realizados com excelência, sofisticação e zero imprevistos
          </p>
        </MotionDiv>

        {/* Estatísticas */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8 mb-32"
        >
          {[
            { numero: '50+', label: 'Eventos Realizados' },
            { numero: '100%', label: 'Taxa de Satisfação' },
            { numero: '5★', label: 'Classificação Média' },
            { numero: '24h', label: 'Atendimento' }
          ].map((stat, i) => (
            <MotionDiv
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center glass p-8 rounded-2xl border border-gold/20"
            >
              <p className="text-5xl font-serif font-bold gradient-text mb-3">{stat.numero}</p>
              <p className="text-beige/80">{stat.label}</p>
            </MotionDiv>
          ))}
        </MotionDiv>

        {/* Casos */}
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-6 mb-32"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold gradient-text mb-12">
            Portfólio de Eventos Premium
          </h2>

          {casosSuccesso.map((caso, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass p-8 rounded-2xl border border-gold/20 hover:border-gold/50 transition-all group hover:bg-white/5"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="px-4 py-1 bg-gold/20 text-gold rounded-full text-sm font-semibold">
                      {caso.tipo}
                    </span>
                    <span className="text-beige/60 text-sm">{caso.ano}</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold gradient-text mb-3 group-hover:translate-y-1 transition-transform">
                    {caso.titulo}
                  </h3>
                  <p className="text-beige/80">
                    {caso.detalhes}
                  </p>
                </div>
                <button className="px-8 py-4 bg-gold text-primary rounded-full font-medium hover:bg-beige transition-all duration-300 shadow-lg hover:shadow-gold/50 whitespace-nowrap">
                  Ver Detalhes
                </button>
              </div>
            </MotionDiv>
          ))}
        </MotionDiv>

        {/* Testimonial */}
        <MotionSection
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-16 rounded-3xl bg-gradient-to-r from-gold/10 to-beige/10 border border-gold/20"
        >
          <p className="text-2xl md:text-3xl font-serif italic text-beige/90 mb-8 max-w-2xl mx-auto">
            "A RiosLux transformou nossa visão em realidade. Não apenas produziram um evento impecável, mas criaram uma experiência que nossos convidados não esquecem."
          </p>
          <p className="text-gold font-semibold text-lg mb-12">— Cliente Premium, Rio de Janeiro</p>

          <Link
            href="/contato"
            className="inline-block bg-gold text-primary px-12 py-6 rounded-full font-medium hover:bg-beige transition-all duration-300 shadow-2xl hover:shadow-gold/50 hover:-translate-y-2"
          >
            Criar Seu Caso de Sucesso
          </Link>
        </MotionSection>
      </div>
    </div>
  )
}
