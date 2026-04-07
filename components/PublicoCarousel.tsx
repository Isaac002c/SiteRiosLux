'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'

const publicoCards = [
  {
    title: 'Executivos & Empresários',
    desc: 'Profissionais que exigem perfeição'
  },
  {
    title: 'Eventos Privados',
    desc: 'Mansões, barcos e locais exclusivos'
  },
  {
    title: 'Alto Padrão',
    desc: 'Para quem valoriza qualidade premium'
  }
]

export default function PublicoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? publicoCards.length - 1 : prev - 1))
  }, [])

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === publicoCards.length - 1 ? 0 : prev + 1))
  }, [])

  return (
    <div className="w-full">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {publicoCards.map((card, index) => (
          <motion.div
            key={index}
            className="hidden md:block glass p-8 rounded-3xl border border-gold/20 backdrop-blur-md text-center hover:border-gold transition-all hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-serif font-semibold mb-4 gradient-text">
              {card.title}
            </h3>
            <p className="text-beige/80">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden mt-8 overflow-hidden rounded-3xl">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {publicoCards.map((card, index) => (
            <motion.div
              key={index}
              className="w-full flex-shrink-0 px-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="glass p-8 rounded-3xl border border-gold/20 backdrop-blur-md text-center hover:border-gold transition-all hover:scale-[1.02]">
                <h3 className="text-2xl font-serif font-semibold mb-4 gradient-text">
                  {card.title}
                </h3>
                <p className="text-beige/80">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center gap-3 mt-6 p-4">
          {publicoCards.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === index ? 'bg-gold scale-125 shadow-md' : 'bg-beige/50 hover:bg-gold'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

