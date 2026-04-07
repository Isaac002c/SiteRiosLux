import { motion } from 'framer-motion'
import Link from 'next/link'

interface CardProps {
  title: string
  desc: string
}

export default function Card({ title, desc }: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      className="glass p-12 rounded-3xl border border-gold/20 backdrop-blur-md hover:border-gold hover:bg-white/5 transition-all duration-500 cursor-pointer group shadow-xl hover:shadow-2xl text-center"
    >
      <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-6 gradient-text group-hover:translate-y-2 transition-transform leading-tight">
        {title}
      </h3>
      <p className="text-beige/80 leading-relaxed text-lg">
        {desc}
      </p>
    </motion.div>
  )
}

