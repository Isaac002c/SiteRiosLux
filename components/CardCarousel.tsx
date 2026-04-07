'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion } from 'framer-motion'
import Card from './Card'

const cards = [
  {
    title: 'Exclusividade',
    desc: 'Eventos únicos para clientes que buscam experiências memoráveis e personalizadas.'
  },
  {
    title: 'Alto Padrão',
    desc: 'Perfeição em cada detalhe, do planejamento à execução impecável.'
  },
  {
    title: 'Sem Preocupações',
    desc: 'Concierge completo - você só aproveita a experiência.'
  }
]

export default function CardCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1))
  }, [])

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1))
  }, [])

  return (
    <div className="w-full">
      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="hidden md:block"
          >
            <Card title={card.title} desc={card.desc} />
          </motion.div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden overflow-hidden rounded-3xl mt-8">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="w-full flex-shrink-0 px-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card title={card.title} desc={card.desc} />
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center gap-3 mt-6">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === index ? 'bg-gold scale-125' : 'bg-beige/50 hover:bg-gold'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

