'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Experiências Exclusivas Rio de Janeiro | Iates Luxo | RiosLux Premium',
  description: 'Experiências exclusivas no Rio: iates luxo, rooftops, mansões. Concierge premium, soluções únicas. Transforme sua visão em realidade. RiosLux.',
  openGraph: {
    title: 'Experiências Exclusivas Rio de Janeiro | RiosLux',
    description: 'Iates de luxo, mansões, rooftops e experiências sofisticadas na Baía de Guanabara.',
    url: 'https://riooslux.com.br/experiencias-exclusivas-rio',
  }
}

export default function ExperienciasExclusivas() {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-32"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold gradient-text mb-8 leading-tight">
            Experiências Exclusivas no Rio de Janeiro
          </h1>
          <p className="text-xl md:text-2xl text-beige/80 max-w-3xl mx-auto mb-12">
            Iates de luxo, mansões, rooftops e locais únicos: experiências que transcendem o ordinário
          </p>
          <Link 
            href="/contato"
            className="bg-gold text-primary px-12 py-6 rounded-full font-medium text-lg hover:bg-beige transition-all duration-300 shadow-2xl hover:shadow-gold/50 hover:-translate-y-2 inline-block"
          >
            Reservar Experiência Premium
          </Link>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-12 text-center">
            Nossas Experiências
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                exp: 'Iates de Luxo na Baía',
                desc: 'Navegue pela Baía de Guanabara em iates premium. Sunset, champagne, privacidade absoluta.'
              },
              {
                exp: 'Rooftops Panorâmicos',
                desc: 'Vistas 360º da Zona Sul. Experiências sophisticated em alturas surreais.'
              },
              {
                exp: 'Mansões Históricas',
                desc: 'Arquitetura única em Joá, Joatinga e São Conrado. Espaços verdadeiramente exclusivos.'
              },
              {
                exp: 'Piscinas Infinitas',
                desc: 'Coberturas e piscinas privadas com vista para o mar e montanhas.'
              },
              {
                exp: 'Espaços Culturais Premium',
                desc: 'Galerias, teatros e centros culturais para eventos sofisticados.'
              },
              {
                exp: 'Experiências Gastronômicas',
                desc: 'Chef particular, adega premium, menu degustação customizado.'
              }
            ].map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass p-8 rounded-2xl border border-gold/20"
              >
                <h3 className="text-2xl font-serif font-bold gradient-text mb-3">{exp.exp}</h3>
                <p className="text-beige/80">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-16 rounded-3xl bg-gradient-to-r from-gold/10 to-beige/10 border border-gold/20"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-8">
            Crie Sua Experiência Personalizada
          </h2>
          <p className="text-xl text-beige/80 max-w-2xl mx-auto mb-12">
            Cada experiência é única. Conte-nos sua visão e nós a transformaremos em realidade premium.
          </p>
          <Link 
            href="/contato"
            className="bg-gold text-primary px-12 py-6 rounded-full font-medium text-lg hover:bg-beige transition-all duration-300 shadow-2xl hover:shadow-gold/50 hover:-translate-y-2 inline-block"
          >
            Consultar Especialista
          </Link>
        </motion.section>
      </div>
    </div>
  )
}
