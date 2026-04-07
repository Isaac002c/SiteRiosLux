'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const galleryItems = [
  {
    id: 1,
    title: 'Gala Corporativa',
    desc: 'Evento para 300 executivos em rooftop com vista para o mar',
    img: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=600&fit=crop'
  },
  {
    id: 2,
    title: 'Casamento em Iate',
    desc: 'Celebração exclusiva para 80 convidados navegando na Baía de Guanabara',
    img: 'https://images.unsplash.com/photo-1571896349840-e2e4c8d08f4e?w=800&h=600&fit=crop'
  },
  {
    id: 3,
    title: 'Aniversário Mansão',
    desc: 'Festa íntima em mansão histórica no Joá para 120 pessoas',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop'
  },
  {
    id: 4,
    title: 'Lançamento Produto',
    desc: 'Evento de lançamento para marca premium em espaço cultural',
    img: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800&h=600&fit=crop'
  },
  {
    id: 5,
    title: 'Jantar Executivo',
    desc: 'Reunião estratégica para board de empresa em restaurante privativo',
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop'
  },
  {
    id: 6,
    title: 'Festa Black Tie',
    desc: 'Evento formal com dress code black tie para 200 convidados',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop'
  }
]

export default function Experiencias() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold gradient-text mb-8 leading-tight">
            Nossas Experiências
          </h1>
          <p className="text-xl text-beige/80 max-w-2xl mx-auto">
            Momentos inesquecíveis que criamos para nossos clientes
          </p>
        </motion.div>

        {isMobile ? (
          <div className="flex overflow-x-auto space-x-4 pb-4 snap-x snap-mandatory scrollbar-hide">
            {galleryItems.map((item) => (
              <motion.div
                key={item.id}
                className="flex-shrink-0 w-80 h-96 relative group cursor-pointer snap-center"
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                  <img 
                    src={item.img} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-500" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <motion.h3 
                      className="text-2xl font-serif font-bold mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                    >
                      {item.title}
                    </motion.h3>
                    <p className="opacity-90 mb-6">{item.desc}</p>
                    <Link 
                      href="/contato"
                      className="inline-flex items-center gap-2 bg-gold/90 text-primary px-6 py-3 rounded-full font-medium hover:bg-gold transition-all backdrop-blur-sm"
                    >
                      Ver Projeto
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 hover:-translate-y-4">
                  <img 
                    src={item.img} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/60" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <motion.h3 
                      className="text-2xl font-serif font-bold mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                    >
                      {item.title}
                    </motion.h3>
                    <p className="opacity-90 mb-6">{item.desc}</p>
                    <Link 
                      href="/contato"
                      className="inline-flex items-center gap-2 bg-gold/90 text-primary px-6 py-3 rounded-full font-medium hover:bg-gold transition-all backdrop-blur-sm"
                    >
                      Ver Projeto
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

