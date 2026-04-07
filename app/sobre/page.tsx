'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Sobre() {
  return (
    <div className="min-h-screen py-24">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
<h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold gradient-text mb-8 leading-tight">
              Sobre a RiosLux
            </h1>
            <div className="space-y-6 text-xl leading-relaxed">
              <p>
                A Rios Lux é uma agência especializada na criação e execução de <strong>eventos de alto padrão</strong>.
              </p>
              <p>
                Cuidamos de <strong>cada detalhe</strong> para transformar ocasiões especiais em experiências sofisticadas, exclusivas e sem preocupações para nossos clientes.
              </p>
              <p>
                Do planejamento à execução, entregamos <strong>excelência, organização e um padrão elevado de serviço</strong> para quem valoriza qualidade e não aceita erros.
              </p>
              <p className="font-medium text-2xl gradient-text">
                Mais do que eventos, criamos experiências memoráveis.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-12"
            >
              <Link
                href="/contato"
                className="bg-gold text-primary px-12 py-6 rounded-full font-medium text-lg hover:bg-beige transition-all duration-300 shadow-2xl hover:shadow-gold/50 hover:-translate-y-2 inline-block"
              >
                Fale com Especialista
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 relative h-96 lg:h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br from-gold/20 to-beige/20 border border-gold/30"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-transparent to-olive/30" />
            <div className="absolute inset-0 bg-[url('/api/placeholder/800/600')] bg-cover bg-center opacity-20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl opacity-10">📸</div>
            </div>
          </motion.div>
        </div>

        {/* Público Alvo */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text text-center mb-16">
            Nosso Público
          </h2>
          <PublicoCarousel />
        </motion.section>
      </motion.div>
    </div>
  )
}

