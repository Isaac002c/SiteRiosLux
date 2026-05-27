import Link from 'next/link'
import type { Metadata } from 'next'
import { motion } from 'framer-motion'

export const metadata: Metadata = {
  title: 'Melhores Locais para Eventos Premium Rio | Guia Exclusivo RiosLux',
  description: 'Guia completo dos melhores locais para eventos premium no Rio: iates, mansões, rooftops, restaurantes. Descubra os espaços mais exclusivos e sofisticados.',
  openGraph: {
    title: 'Melhores Locais para Eventos Premium Rio | RiosLux',
    description: 'Iates, mansões, rooftops: conheça os espaços mais exclusivos do Rio de Janeiro.',
    url: 'https://riooslux.com.br/blog/melhores-locais-eventos-rio',
  }
}

const locais = [
  {
    name: 'Iates Privados na Baía',
    desc: 'Navegue pela Baía de Guanabara com vista do Cristo Redentor. Experiência flutuante de luxo.',
    zona: 'Centro',
    capacidade: '50-200 pessoas'
  },
  {
    name: 'Mansões em Joá',
    desc: 'Arquitetura moderna com piscina infinita e vista para o Atlântico. Privacidade absoluta.',
    zona: 'Joá',
    capacidade: '100-200 pessoas'
  },
  {
    name: 'Rooftops em Ipanema',
    desc: 'Vistas panorâmicas de Ipanema ao entardecer. Ambiente sofisticado e cosmopolita.',
    zona: 'Ipanema',
    capacidade: '60-150 pessoas'
  },
  {
    name: 'Restaurantes Premium Leblon',
    desc: 'Ambientes gastronômicos de alta culinária. Experiência all-inclusive sofisticada.',
    zona: 'Leblon',
    capacidade: '40-120 pessoas'
  },
  {
    name: 'Clubes Exclusivos',
    desc: 'Espaços históricos e discretos. Tradição e elegância em seu melhor.',
    zona: 'Zona Sul',
    capacidade: '80-300 pessoas'
  },
  {
    name: 'Casarões em Joatinga',
    desc: 'Propriedades históricas com charm boêmio. Atmósfera única e memorável.',
    zona: 'Joatinga',
    capacidade: '100-150 pessoas'
  }
]

export default function MelhoresLocais() {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-32"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-gold/20 border border-gold/50 mb-8">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">Guia Completo</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold gradient-text mb-8 leading-tight">
            Melhores Locais para Eventos Premium Rio
          </h1>
          <p className="text-xl md:text-2xl text-beige/80 max-w-3xl mx-auto">
            Iates, mansões, rooftops e espaços exclusivos: conheça os cenários mais sofisticados para seu evento inesquecível.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {locais.map((local, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass p-8 rounded-2xl border border-gold/20 hover:border-gold/50 transition-all h-full flex flex-col"
            >
              <div className="mb-4">
                <span className="text-xs font-semibold text-gold uppercase tracking-widest">{local.zona}</span>
              </div>
              
              <h3 className="text-2xl font-serif font-bold gradient-text mb-3">
                {local.name}
              </h3>
              
              <p className="text-beige/80 text-lg mb-6 flex-grow leading-relaxed">
                {local.desc}
              </p>
              
              <div className="pt-6 border-t border-gold/10">
                <p className="text-sm text-gold font-semibold">Capacidade: {local.capacidade}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-16 rounded-3xl bg-gradient-to-r from-gold/10 to-beige/10 border border-gold/20"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-8">
            Deixe Nós Cuidarmos da Escolha Perfeita
          </h2>
          <p className="text-xl text-beige/80 max-w-2xl mx-auto mb-12">
            Nossos especialistas conhecem cada local exclusivo do Rio. Vamos encontrar o espaço ideal para sua visão premium.
          </p>
          <Link 
            href="/contato"
            className="bg-gold text-primary px-12 py-6 rounded-full font-medium text-lg hover:bg-beige transition-all duration-300 shadow-2xl hover:shadow-gold/50 hover:-translate-y-2 inline-block"
          >
            Agendar Visita aos Locais
          </Link>
        </motion.section>
      </div>
    </div>
  )
}
