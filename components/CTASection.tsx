import { motion } from 'framer-motion'

export default function CTASection() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent('Olá! Gostaria de agendar uma consultoria para meu evento.')
    window.open('https://wa.me/5511999999999?' + message, '_blank')
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-32 bg-gradient-to-t from-primary-dark to-primary text-center"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-r from-gold/20 to-beige/20 backdrop-blur-xl rounded-3xl p-16 border border-gold/30"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 gradient-text">
            Pronto para Sua Experiência Única?
          </h2>
          <p className="text-xl md:text-2xl text-beige/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Fale com nossos especialistas e descubra como podemos tornar seu evento inesquecível
          </p>
          <motion.button
            onClick={handleWhatsApp}
            className="bg-gold text-primary px-16 py-8 rounded-full font-semibold text-2xl hover:bg-beige transition-all duration-300 shadow-2xl hover:shadow-gold/50 hover:-translate-y-3 inline-flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Fale pelo WhatsApp
            <span>📱</span>
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  )
}

