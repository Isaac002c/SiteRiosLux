'use client'

import { motion } from 'framer-motion'

interface HeroProps {
  title: string
  subtitle: string
  description: string
  ctaText: string
  ctaLink?: string
}

export default function Hero({ title, subtitle, description, ctaText, ctaLink = '#' }: HeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden gradient-hero">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center px-4 max-w-4xl mx-auto z-10"
      >
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 gradient-text leading-tight"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {title}
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl lg:text-3xl font-sans mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {subtitle}
        </motion.p>
        <motion.p 
          className="text-lg md:text-xl lg:text-2xl mb-12 text-beige/80 max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {description}
        </motion.p>
        <motion.a
          href={ctaLink}
          className="bg-gold text-primary px-12 py-6 rounded-full font-medium text-lg hover:bg-beige transition-all duration-300 shadow-2xl hover:shadow-gold/50 hover:-translate-y-2 inline-block"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {ctaText}
        </motion.a>
      </motion.div>
      
      <div className="absolute inset-0 bg-black/30" />
    </section>
  )
}

