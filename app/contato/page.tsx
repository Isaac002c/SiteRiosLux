'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contato() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', message: '' })
    }, 1000)
  }

  const handleWhatsApp = () => {
    const message = `Olá! Gostaria de agendar uma consultoria para meu evento.`
    window.open(`https://wa.me/5521972522076?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <div className="min-h-screen py-24 bg-gradient-to-b from-primary to-primary-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold gradient-text mb-6 leading-tight">
            Vamos Criar Sua Experiência
          </h1>
          <p className="text-xl md:text-2xl text-beige/80 max-w-2xl mx-auto">
            Fale com nossos especialistas e transforme sua visão em realidade
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-serif font-bold gradient-text">
              Orçamento Personalizado
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-beige/80 mb-2 font-medium">Nome Completo</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full p-5 rounded-2xl bg-white/10 border border-gold/30 backdrop-blur-md text-white placeholder-beige/60 focus:border-gold focus:outline-none transition-all"
                  placeholder="Seu nome"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-beige/80 mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full p-5 rounded-2xl bg-white/10 border border-gold/30 backdrop-blur-md text-white placeholder-beige/60 focus:border-gold focus:outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-beige/80 mb-2 font-medium">Telefone</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full p-5 rounded-2xl bg-white/10 border border-gold/30 backdrop-blur-md text-white placeholder-beige/60 focus:border-gold focus:outline-none transition-all"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>
              <div>
                <label className="block text-beige/80 mb-2 font-medium">Mensagem</label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full p-5 rounded-2xl bg-white/10 border border-gold/30 backdrop-blur-md text-white placeholder-beige/60 focus:border-gold focus:outline-none transition-all resize-vertical"
                  placeholder="Conte-nos sobre seu evento..."
                />
              </div>
              <motion.button
                type="submit"
                className="w-full bg-gold text-primary p-6 rounded-3xl font-semibold text-xl hover:bg-beige transition-all duration-300 shadow-2xl hover:shadow-gold/50 hover:-translate-y-1 disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={submitted}
              >
                {submitted ? 'Enviado! Entraremos em contato.' : 'Solicitar Orçamento'}
              </motion.button>
            </form>
          </motion.div>

          {/* CTA Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8 lg:ml-auto"
          >
            <div className="glass p-10 rounded-3xl border border-gold/20 text-center hover:border-gold/50 transition-all cursor-pointer group" onClick={handleWhatsApp}>
              <div className="w-24 h-24 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-green-400/30 transition-all">
                <span className="text-3xl">📱</span>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 gradient-text">
                WhatsApp Direto
              </h3>
              <p className="text-beige/80 mb-6">Fale imediatamente com nosso time</p>
              <p className="font-mono text-lg mb-4">+55 (11) 99999-9999</p>
              <div className="bg-white/10 px-6 py-3 rounded-full inline-block">
                Iniciar Chat
              </div>
            </div>

            <div className="bg-gradient-to-br from-gold/20 to-beige/20 p-10 rounded-3xl border border-gold/30 text-center">
              <h3 className="text-2xl font-serif font-bold mb-4 gradient-text">
                Atendimento Premium
              </h3>
              <div className="space-y-3 text-beige/80">
                <p>• Disponível 24/7</p>
                <p>• Resposta em até 2h</p>
                <p>• Consultoria gratuita inicial</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

