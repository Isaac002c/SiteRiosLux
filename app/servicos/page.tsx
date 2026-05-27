'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Serviços de Eventos Luxo | Produção Premium RJ | RiosLux',
  description: 'Produção de eventos premium, concierge, gestão completa. Corporativos, casamentos, experiências exclusivas. Qualidade inquestionável. Consulte a RiosLux.',
  openGraph: {
    title: 'Serviços de Eventos Luxo | RiosLux',
    description: 'Eventos corporativos, casamentos, despedidas de solteiro premium e experiências exclusivas no Rio de Janeiro.',
    url: 'https://riooslux.com.br/servicos',
  }
}

const services = [
  {
    title: 'Eventos Corporativos Premium',
    desc: 'Conferências, lançamentos e eventos para empresas de alto padrão com produção impecável.',
    icon: '💼',
    features: ['Networking premium', 'Locais exclusivos', 'Produção impecável']
  },
  {
    title: 'Casamentos e Eventos Privados',
    desc: 'Casamentos, aniversários e celebrações familiares sofisticadas personalizadas.',
    icon: '💍',
    features: ['Planejamento completo', 'Fornecedores selecionados', 'Detalhes personalizados']
  },
  {
    title: 'Experiências Exclusivas',
    desc: 'Mansões, iates, rooftops e locais únicos no Rio de Janeiro com acesso privilegiado.',
    icon: '🛥️',
    features: ['Acesso privilegiado', 'Concierge 24h', 'Experiência white-glove']
  }
]

export default function Servicos() {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold gradient-text mb-8 leading-tight">
            Nossos Serviços de Eventos Premium
          </h1>
          <p className="text-xl text-beige/80 max-w-2xl mx-auto">
            Soluções completas para eventos que impressionam e transformam ocasiões em experiências memoráveis
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="glass p-10 rounded-3xl border border-gold/20 backdrop-blur-md h-full hover:border-gold/50 hover:bg-white/5 transition-all duration-500 group-hover:scale-105 hover:-translate-y-4 shadow-xl hover:shadow-2xl">
                <div className="text-6xl mb-8">{service.icon}</div>
                <h3 className="text-3xl font-serif font-semibold mb-6 gradient-text group-hover:translate-y-2 transition-transform duration-300">
                  {service.title}
                </h3>
                <p className="text-beige/80 mb-8 leading-relaxed text-lg">
                  {service.desc}
                </p>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-beige/90">
                      <span className="text-gold text-sm">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contato" className="inline-flex items-center gap-2 text-gold hover:text-beige transition-colors font-medium">
                  Saiba mais <span>→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Diferenciais */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 gradient-text">
            Diferenciais que Fazem a Diferença
          </h2>
          <p className="text-xl text-beige/80 max-w-2xl mx-auto mb-12">
            O que torna a RiosLux a referência em eventos de luxo no Rio de Janeiro
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-20">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl border border-gold/20 hover:border-gold transition-all"
            >
              <h3 className="text-2xl font-serif font-bold mb-4 gradient-text">
                Exclusividade Absoluta
              </h3>
              <p className="text-beige/80">
                Acesso a locais e serviços únicos no Rio de Janeiro
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass p-8 rounded-2xl border border-gold/20 hover:border-gold transition-all"
            >
              <h3 className="text-2xl font-serif font-bold mb-4 gradient-text">
                Organização Impecável
              </h3>
              <p className="text-beige/80">
                Zero imprevistos, 100% satisfação garantida
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass p-8 rounded-2xl border border-gold/20 hover:border-gold transition-all"
            >
              <h3 className="text-2xl font-serif font-bold mb-4 gradient-text">
                Concierge Completo
              </h3>
              <p className="text-beige/80">
                Do conceito à execução perfeita, disponível 24h
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 gradient-text">
            Pronto para Criar Uma Experiência Premium?
          </h2>
          <Link 
            href="/contato"
            className="bg-gold text-primary px-12 py-6 rounded-full font-medium text-lg hover:bg-beige transition-all duration-300 shadow-2xl hover:shadow-gold/50 hover:-translate-y-2 inline-block"
          >
            Agendar Consultoria Gratuita
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

