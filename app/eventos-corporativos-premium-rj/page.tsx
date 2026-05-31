import type { Metadata } from 'next'
import Link from 'next/link'
import { motion } from 'framer-motion'

export const metadata: Metadata = {
  title: 'Eventos Corporativos Premium RJ | Produção Luxo | RiosLux',
  description: 'Eventos corporativos premium no Rio de Janeiro. Conferências, lançamentos, galas de luxo. Produção impecável com concierge 24h. RiosLux - referência em eventos premium.',
  keywords: ['eventos corporativos premium RJ', 'gala corporativa Rio', 'conferência de luxo', 'lançamento produto premium'],
  openGraph: {
    title: 'Eventos Corporativos Premium | RiosLux Rio de Janeiro',
    description: 'Eventos corporativos de alto padrão com organização impecável e concierge exclusivo.',
    url: 'https://riooslux.com.br/eventos-corporativos-premium-rj',
  }
}

export default function EventosCorporativosPremium() {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-32"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold gradient-text mb-8 leading-tight">
            Eventos Corporativos Premium no Rio de Janeiro
          </h1>
          <p className="text-xl md:text-2xl text-beige/80 max-w-3xl mx-auto mb-12">
            Produção impecável de conferências, lançamentos e galas para empresas de alto padrão
          </p>
          <Link 
            href="/contato"
            className="bg-gold text-primary px-12 py-6 rounded-full font-medium text-lg hover:bg-beige transition-all duration-300 shadow-2xl hover:shadow-gold/50 hover:-translate-y-2 inline-block"
          >
            Agendar Consultoria Gratuita
          </Link>
        </motion.div>

        {/* Tipos de Eventos */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-12 text-center">
            Tipos de Eventos Corporativos que Produzimos
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Conferências de Negócios', desc: 'Eventos corporativos de grande porte com infraestrutura completa de tecnologia e networking premium', icon: '💼' },
              { title: 'Galas e Noites de Gala', desc: 'Eventos de celebração corporativa com dress code formal, catering premium e entretenimento sofisticado', icon: '✨' },
              { title: 'Lançamentos de Produtos', desc: 'Eventos estratégicos de lançamento com cobertura de mídia, influenciadores e experiência imersiva', icon: '🚀' },
              { title: 'Jantares Executivos', desc: 'Encontros estratégicos em locais privados com ambiente sofisticado e atendimento white-glove', icon: '🍽️' },
              { title: 'Retiros Corporativos', desc: 'Eventos de integração e planejamento em resorts premium com atividades customizadas', icon: '🏔️' },
              { title: 'Cerimônias e Premiações', desc: 'Eventos de reconhecimento com produção de cinema e experiência memorável para colaboradores', icon: '🏆' }
            ].map((tipo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-2xl border border-gold/20 hover:border-gold/50 transition-all"
              >
                <div className="text-5xl mb-4">{tipo.icon}</div>
                <h3 className="text-2xl font-serif font-bold gradient-text mb-3">{tipo.title}</h3>
                <p className="text-beige/80">{tipo.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Diferenciais */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-12 text-center">
            Por Que Empresas Premium Escolhem a RiosLux
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'ROI Garantido', desc: 'Eventos que geram networking de qualidade, brand awareness e resultados comprovados' },
              { title: 'Produção de Cinema', desc: 'Qualidade audiovisual, cenografia sofisticada e detalhes que impressionam' },
              { title: 'Segurança Discreta', desc: 'Equipes de segurança profissionais e protocolo de confidencialidade premium' },
              { title: 'Gestão Completa', desc: 'Do conceito até a execução final, você tem um parceiro confiável' },
              { title: 'Fornecedores Selecionados', desc: 'Rede de caterers, designers, produtoras e fornecedores top tier' },
              { title: 'Relatório Pós-Evento', desc: 'Análise de sucesso, feedback dos convidados e documentação completa' }
            ].map((dif, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass p-6 rounded-2xl border border-gold/20"
              >
                <h3 className="text-xl font-serif font-bold gradient-text mb-3">{dif.title}</h3>
                <p className="text-beige/80 text-sm">{dif.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Final */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-16 rounded-3xl bg-gradient-to-r from-gold/10 to-beige/10 border border-gold/20"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-8">
            Seu Evento Corporativo Premium Começa Aqui
          </h2>
          <p className="text-xl text-beige/80 max-w-2xl mx-auto mb-12">
            Transforme seu evento corporativo em uma experiência memorável que fortalece marca e relacionamentos.
          </p>
          <Link 
            href="/contato"
            className="bg-gold text-primary px-12 py-6 rounded-full font-medium text-lg hover:bg-beige transition-all duration-300 shadow-2xl hover:shadow-gold/50 hover:-translate-y-2 inline-block"
          >
            Solicitar Proposta Executiva
          </Link>
        </motion.section>
      </div>
    </div>
  )
}
