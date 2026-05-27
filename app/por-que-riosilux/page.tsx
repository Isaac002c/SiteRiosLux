'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Por Que RiosLux | Garantias Premium | Eventos de Luxo RJ',
  description: 'Por que escolher RiosLux? Garantias premium, concierge 24h, 50+ eventos sucesso, zero imprevistos. Referência em eventos premium no Rio.',
  openGraph: {
    title: 'Por Que Escolher RiosLux | Garantias Premium',
    description: 'Conheça os diferenciais que nos tornam referência em eventos premium.',
    url: 'https://riooslux.com.br/por-que-riosilux',
  }
}

const diferenciais = [
  {
    icone: '🎯',
    titulo: 'Consultoria Premium Gratuita',
    descricao: 'Comece com uma sessão de consultoria sem compromisso. Nossos especialistas entendem sua visão.'
  },
  {
    icone: '🤝',
    titulo: 'Concierge White-Glove 24h',
    descricao: 'Atendimento VIP antes, durante e após seu evento. Qualquer solicitação, qualquer hora.'
  },
  {
    icone: '🏆',
    titulo: '50+ Eventos com 100% Sucesso',
    descricao: 'Experiência comprovada. Zero imprevistos. 100% de satisfação dos clientes.'
  },
  {
    icone: '🌟',
    titulo: 'Acesso Privilegiado a Locais Exclusivos',
    descricao: 'Mansões, iates, rooftops que poucas agências conseguem acessar.'
  },
  {
    icone: '💎',
    titulo: 'Fornecedores Premium Selecionados',
    descricao: 'Rede de caterers, fotógrafos, produtores e artistas de classe mundial.'
  },
  {
    icone: '📋',
    titulo: 'Gestão Completa e Organizada',
    descricao: 'Timeline, briefing, coordenação perfeita. Você só aproveita.'
  },
  {
    icone: '💰',
    titulo: 'Máximo ROI Garantido',
    descricao: 'Eventos corporativos com retorno mensurável e impacto real.'
  },
  {
    icone: '🔐',
    titulo: 'Discrição e Confidencialidade Total',
    descricao: 'Seus eventos e dados são tratados com sigilo premium.'
  }
]

const garantias = [
  {
    titulo: 'Garantia de Qualidade',
    descricao: 'Se você não ficar 100% satisfeito, trabalhamos até que fique.'
  },
  {
    titulo: 'Garantia de Pontualidade',
    descricao: 'Tudo ocorre no horário planejado. Não toleramos atrasos.'
  },
  {
    titulo: 'Garantia de Inovação',
    descricao: 'Ideias criativas e trends premium em cada evento.'
  },
  {
    titulo: 'Garantia de Suporte 24h',
    descricao: 'Equipe sempre disponível antes, durante e após o evento.'
  }
]

export default function PorQueRiosLux() {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-32"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold gradient-text mb-8 leading-tight">
            Por Que Escolher RiosLux
          </h1>
          <p className="text-xl md:text-2xl text-beige/80 max-w-3xl mx-auto">
            Referência em eventos premium no Rio de Janeiro. Qualidade, exclusividade e excelência garantidas.
          </p>
        </motion.div>

        {/* Diferenciais */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-32"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text text-center mb-16">
            8 Razões Para Nos Escolher
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {diferenciais.map((diff, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass p-8 rounded-2xl border border-gold/20 text-center hover:border-gold/50 transition-all group"
              >
                <p className="text-6xl mb-4 group-hover:scale-110 transition-transform">{diff.icone}</p>
                <h3 className="text-xl font-serif font-bold gradient-text mb-3">{diff.titulo}</h3>
                <p className="text-beige/80 text-sm">{diff.descricao}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Garantias */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text text-center mb-16">
            Nossas Garantias Premium
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {garantias.map((garantia, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-2xl border border-gold/20 border-l-4 border-l-gold"
              >
                <h3 className="text-2xl font-serif font-bold gradient-text mb-4">{garantia.titulo}</h3>
                <p className="text-beige/80 text-lg">{garantia.descricao}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Nossa Equipe */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-16 rounded-3xl bg-gradient-to-r from-gold/10 to-beige/10 border border-gold/20 mb-32"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-8">
            Equipe de Especialistas Premium
          </h2>
          <p className="text-xl text-beige/80 max-w-2xl mx-auto mb-8">
            Profissionais treinados em eventos de luxo com experiência internacional.
          </p>
          <p className="text-lg text-beige/80 mb-12">
            Cada membro traz expertise, paixão e compromisso com a excelência.
          </p>
        </motion.section>

        {/* Process */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-32"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text text-center mb-16">
            Nosso Processo Premium
          </h2>

          <div className="grid md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { step: '1', title: 'Consultoria', desc: 'Entendemos sua visão' },
              { step: '2', title: 'Planejamento', desc: 'Estruturamos tudo' },
              { step: '3', title: 'Execução', desc: 'Transformamos em realidade' },
              { step: '4', title: 'Celebração', desc: 'Você aproveita perfeito' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="glass p-8 rounded-2xl border border-gold/20 text-center">
                  <p className="text-5xl font-serif font-bold gradient-text mb-4">{item.step}</p>
                  <h3 className="text-xl font-serif font-bold text-beige mb-2">{item.title}</h3>
                  <p className="text-beige/60 text-sm">{item.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-gold text-2xl">→</div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Final */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-20 rounded-3xl bg-gradient-to-r from-gold/10 to-beige/10 border border-gold/20"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-8">
            Pronto para Uma Experiência Premium?
          </h2>
          <p className="text-xl text-beige/80 max-w-2xl mx-auto mb-12">
            Sua próxima experiência memorável começa com uma consultoria gratuita.
          </p>
          <Link 
            href="/contato"
            className="inline-block bg-gold text-primary px-12 py-6 rounded-full font-medium text-lg hover:bg-beige transition-all duration-300 shadow-2xl hover:shadow-gold/50 hover:-translate-y-2"
          >
            Agendar Consultoria Agora
          </Link>
        </motion.section>
      </div>
    </div>
  )
}
