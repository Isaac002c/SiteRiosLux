'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import CardCarousel from '@/components/CardCarousel'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden gradient-hero">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center px-4 max-w-4xl mx-auto z-10"
        >
            <motion.div
              className="flex flex-col items-center justify-center mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/logo.png"
                alt="RiosLux - Eventos Premium no Rio de Janeiro"
                width={512}
                height={509}
                sizes="(min-width: 1024px) 160px, (min-width: 768px) 128px, 96px"
                priority
                className="h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 shadow-2xl drop-shadow-2xl mb-6"
              />
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold gradient-text leading-tight tracking-tight"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Eventos Premium e Concierge Exclusivo no Rio de Janeiro
              </motion.h1>
            </motion.div>
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl font-sans mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experiências Sofisticadas para Clientes de Alto Padrão
          </motion.p>
          <motion.p
            className="text-lg md:text-xl lg:text-2xl mb-12 text-beige/80 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Transformamos ocasiões em experiências memoráveis com concierge 24h e produção impecável
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="/contato"
              className="bg-gold text-primary px-12 py-6 rounded-full font-medium text-lg hover:bg-beige transition-all duration-300 shadow-2xl hover:shadow-gold/50 hover:-translate-y-2 inline-block"
            >
              Agendar Consultoria Gratuita
            </a>
          </motion.div>
        </motion.div>

        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </section>

      {/* Sobre Preview */}
      <section id="sobre-preview" className="py-32 bg-gradient-to-b from-primary to-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-6">
              Sobre a RiosLux
            </h2>
            <p className="text-xl text-beige/80 max-w-2xl mx-auto">
              A agência especializada em eventos de alto padrão que transforma ocasiões em experiências sofisticadas e exclusivas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-2xl font-serif font-bold gradient-text mb-3">Exclusividade Absoluta</h3>
              <p className="text-beige/80">Acesso a locais e serviços únicos no Rio de Janeiro</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <h3 className="text-2xl font-serif font-bold gradient-text mb-3">Organização Impecável</h3>
              <p className="text-beige/80">Zero imprevistos, 100% satisfação garantida</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <h3 className="text-2xl font-serif font-bold gradient-text mb-3">Concierge Completo</h3>
              <p className="text-beige/80">Do conceito à execução perfeita, 24h disponível</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Serviços Preview */}
      <section className="py-32 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-6">
              Serviços Especializados em Eventos de Luxo
            </h2>
            <p className="text-xl text-beige/80 max-w-2xl mx-auto">
              Soluções completas para eventos que impressionam
            </p>
          </motion.div>

          <CardCarousel />
        </div>
      </section>

      <CTASection />
    </div>
  )
}
