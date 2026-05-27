'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Eventos Corporativos Premium RJ | Produção Luxo | RiosLux',
  description: 'Eventos corporativos premium no Rio de Janeiro. Conferências, lançamentos, galas, jantares executivos. Produção de classe mundial, ROI garantido.',
  openGraph: {
    title: 'Eventos Corporativos Premium | RiosLux',
    description: 'Produção de eventos corporativos de luxo com ROI mensurável.',
    url: 'https://riooslux.com.br/eventos-corporativos-completo',
  }
}

const tiposEventosCorporativos = [
  {
    tipo: 'Conferência Executiva',
    descricao: 'Reunião estratégica com tecnologia de cinema para apresentações impactantes.',
    capacidade: '50-500 pessoas',
    duracao: '1-3 dias'
  },
  {
    tipo: 'Lançamento de Produto',
    descricao: 'Evento wow com hologramas, demonstrações live e networking VIP.',
    capacidade: '100-300 pessoas',
    duracao: '3-4 horas'
  },
  {
    tipo: 'Gala Corporativa',
    descricao: 'Jantar formal sofisticado com entretenimento premium e reconhecimento de executivos.',
    capacidade: '100-400 pessoas',
    duracao: '4-5 horas'
  },
  {
    tipo: 'Retiro Executivo',
    descricao: 'Experiência imersiva em mansão premium: negócios + lazer + luxo.',
    capacidade: '20-150 pessoas',
    duracao: '1-3 dias'
  },
  {
    tipo: 'Jantar Executivo Privativo',
    descricao: 'Restaurante privativo para board meetings com confidencialidade total.',
    capacidade: '8-50 pessoas',
    duracao: '2-3 horas'
  },
  {
    tipo: 'Road Show Nacional',
    descricao: 'Múltiplos eventos em cidades diferentes com padronização premium.',
    capacidade: 'Variável',
    duracao: 'Customizado'
  }
]

const beneficios = [
  'Aumenta presença de marca',
  'Gera leads qualificados',
  'Fortalece relacionamento com clientes',
  'Motiva equipes',
  'Comunica inovações',
  'Diferencia competitively'
]

export default function EventosCorporativosCompleto() {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-32"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold gradient-text mb-8 leading-tight">
            Eventos Corporativos Premium
          </h1>
          <p className="text-xl md:text-2xl text-beige/80 max-w-3xl mx-auto mb-12">
            Produção de classe mundial com ROI comprovado para empresas que exigem excelência
          </p>
          <Link 
            href="/contato"
            className="inline-block bg-gold text-primary px-12 py-6 rounded-full font-medium text-lg hover:bg-beige transition-all duration-300 shadow-2xl hover:shadow-gold/50 hover:-translate-y-2"
          >
            Solicitar Proposta Executiva
          </Link>
        </motion.div>

        {/* Tipos de Eventos */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text text-center mb-16">
            Tipos de Eventos Corporativos
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tiposEventosCorporativos.map((evento, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass p-8 rounded-2xl border border-gold/20 hover:border-gold/50 transition-all"
              >
                <h3 className="text-2xl font-serif font-bold gradient-text mb-3">{evento.tipo}</h3>
                <p className="text-beige/80 mb-6">{evento.descricao}</p>
                <div className="space-y-2 text-sm">
                  <p className="text-beige/60"><span className="font-semibold text-gold">Capacidade:</span> {evento.capacidade}</p>
                  <p className="text-beige/60"><span className="font-semibold text-gold">Duração:</span> {evento.duracao}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Benefícios */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-16 rounded-3xl bg-gradient-to-r from-gold/10 to-beige/10 border border-gold/20 mb-32"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-12">
            Benefícios Comprovados
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {beneficios.map((ben, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="text-left"
              >
                <p className="text-lg text-beige/80 flex items-center gap-3">
                  <span className="text-2xl text-gold">✓</span>
                  {ben}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Processo */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text text-center mb-16">
            Nosso Processo Corporativo
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { fase: 'Briefing', desc: 'Entendemos objetivos, público e KPIs do evento' },
              { fase: 'Proposta Estratégica', desc: 'Apresentamos conceito, timeline e investimento' },
              { fase: 'Planejamento Detalhado', desc: 'Cada elemento planejado para máximo impacto' },
              { fase: 'Execução Perfeita', desc: 'Coordenação total, zero margens de erro' },
              { fase: 'Análise de Resultado', desc: 'Medimos ROI e impacto gerado' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-2xl border border-gold/20"
              >
                <h3 className="text-2xl font-serif font-bold gradient-text mb-3">{item.fase}</h3>
                <p className="text-beige/80 text-lg">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-20 rounded-3xl bg-gradient-to-r from-gold/10 to-beige/10 border border-gold/20"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-8">
            Seu Próximo Evento Corporativo Começa Aqui
          </h2>
          <p className="text-xl text-beige/80 max-w-2xl mx-auto mb-12">
            Transformamos visões corporativas em experiências inesquecíveis com ROI mensurável.
          </p>
          <Link 
            href="/contato"
            className="inline-block bg-gold text-primary px-12 py-6 rounded-full font-medium text-lg hover:bg-beige transition-all duration-300 shadow-2xl hover:shadow-gold/50 hover:-translate-y-2"
          >
            Solicitar Proposta Executiva
          </Link>
        </motion.section>
      </div>
    </div>
  )
}
