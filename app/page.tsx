'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
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
              <img 
                src="/logo.png" 
                alt="Rios Lux" 
                className="h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 rounded-full shadow-2xl ring-4 ring-gold/50 mb-6 drop-shadow-2xl"
              />
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold gradient-text leading-tight tracking-tight"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Rios Lux
              </motion.h1>
            </motion.div>
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl font-sans mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Eventos Premium
          </motion.p>
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl mb-12 text-beige/80 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Experiências exclusivas para quem exige excelência
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
              Agendar Consultoria
            </a>
          </motion.div>
        </motion.div>
        
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </section>

      {/* Preview Sections */}
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
              A agência especializada em eventos de alto padrão que transforma ocasiões em experiências sofisticadas e exclusivas.
            </p>
          </motion.div>

          <CardCarousel />
        </div>
      </section>

      <CTASection />
    </div>
  )
}

