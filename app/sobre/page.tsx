'use client'

import type { Metadata } from 'next'
import { motion } from 'framer-motion'
import Link from 'next/link'
import PublicoCarousel from '@/components/PublicoCarousel'

export const metadata: Metadata = {
  title: 'Sobre RiosLux | Agência Especializada em Eventos Premium RJ',
  description: 'Conheça a história, valores e expertise da RiosLux. Agência premiada em eventos corporativos, casamentos e experiências exclusivas no Rio de Janeiro.',
  openGraph: {
    title: 'RiosLux - Quem Somos',
    description: 'A história de dedicação e excelência em eventos premium',
    url: 'https://riooslux.com.br/sobre',
  }
}

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
                A <strong>RiosLux</strong> é uma agência especializada na criação e execução de <strong>eventos de alto padrão</strong> no Rio de Janeiro.
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
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text text-center mb-6">
            Nosso Público
          </h2>
          <p className="text-xl text-beige/80 max-w-2xl mx-auto text-center mb-16">
            Atendemos clientes de alto padrão que buscam exclusividade e sofisticação
          </p>
          <PublicoCarousel />
        </motion.section>

        {/* Valores */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-12">
            Nossos Valores
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl border border-gold/20"
            >
              <h3 className="text-2xl font-serif font-bold mb-4 gradient-text">Excelência</h3>
              <p className="text-beige/80">Qualidade inquestionável em cada detalhe de cada evento</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass p-8 rounded-2xl border border-gold/20"
            >
              <h3 className="text-2xl font-serif font-bold mb-4 gradient-text">Exclusividade</h3>
              <p className="text-beige/80">Acesso privilegiado a locais e serviços únicos no Rio</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass p-8 rounded-2xl border border-gold/20"
            >
              <h3 className="text-2xl font-serif font-bold mb-4 gradient-text">Inovação</h3>
              <p className="text-beige/80">Ideias criativas que transformam sonhos em realidade</p>
            </motion.div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  )
}

