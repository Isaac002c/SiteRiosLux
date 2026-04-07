import { motion } from 'framer-motion'
import Link from 'next/link'

interface CardProps {
  title: string
  desc: string
  icon: string
}

export default function Card({ title, desc, icon }: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      className="glass p-10 rounded-3xl border border-gold/20 backdrop-blur-md hover:border-gold hover:bg-white/5 transition-all duration-500 cursor-pointer group shadow-xl hover:shadow-2xl"
    >
      <div className="text-5xl mb-6">{icon}</div>
      <h3 className="text-2xl font-serif font-semibold mb-4 gradient-text group-hover:translate-y-2 transition-transform">
        {title}
      </h3>
      <p className="text-beige/80 leading-relaxed">
        {desc}
      </p>
    </motion.div>
  )
}

