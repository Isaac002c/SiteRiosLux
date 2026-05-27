import Link from 'next/link'
import type { Metadata } from 'next'
import { motion } from 'framer-motion'

export const metadata: Metadata = {
  title: 'Blog RiosLux | Eventos Premium, Concierge e Dicas de Luxo RJ',
  description: 'Blog especializado em eventos premium, concierge white-glove, tendências de luxo e experiências exclusivas no Rio de Janeiro. Conteúdo estratégico e insights.',
  openGraph: {
    title: 'Blog RiosLux - Eventos Premium e Concierge',
    description: 'Artigos, tendências e insights sobre eventos de luxo no Rio.',
    url: 'https://riooslux.com.br/blog',
  }
}

const articles = [
  {
    slug: 'concierge-vs-agencia-eventos',
    title: 'Concierge vs Agência de Eventos: Qual a Diferença?',
    excerpt: 'Entenda as diferenças e quando usar cada serviço para seu evento premium.',
    date: '22 de Maio, 2025',
    category: 'Educacional',
    readTime: '8 min'
  },
  {
    slug: 'melhores-locais-eventos-rio',
    title: 'Melhores Locais para Eventos Premium no Rio de Janeiro',
    excerpt: 'Descubra as 15 locações mais exclusivas: mansões, iates, rooftops e muito mais.',
    date: '20 de Maio, 2025',
    category: 'Locações',
    readTime: '12 min'
  },
  {
    slug: 'tendencias-eventos-premium-2025',
    title: 'Tendências de Eventos Premium para 2025',
    excerpt: 'As tendências mais quentes em experiências premium e eventos sofisticados.',
    date: '18 de Maio, 2025',
    category: 'Tendências',
    readTime: '10 min'
  },
  {
    slug: 'guia-despedida-solteiro-luxo',
    title: 'Guia Completo: Despedida de Solteiro de Luxo no Rio',
    excerpt: 'Ideias criativas, locais exclusivos e experiências memoráveis para sua despedida.',
    date: '15 de Maio, 2025',
    category: 'Guia Prático',
    readTime: '15 min'
  },
  {
    slug: 'roi-eventos-corporativos',
    title: 'Como Maximizar o ROI de Eventos Corporativos Premium',
    excerpt: 'Estratégias para garantir que seu evento corporativo gere resultados reais.',
    date: '12 de Maio, 2025',
    category: 'Corporativo',
    readTime: '11 min'
  },
  {
    slug: 'tecnologia-eventos-premium',
    title: 'Tecnologia em Eventos Premium: Inovações Que Impressionam',
    excerpt: 'Realidade aumentada, hologramas e más soluções tech para eventos inesquecíveis.',
    date: '10 de Maio, 2025',
    category: 'Inovação',
    readTime: '9 min'
  }
]

export default function BlogHub() {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-32"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold gradient-text mb-8 leading-tight">
            Blog RiosLux
          </h1>
          <p className="text-xl md:text-2xl text-beige/80 max-w-3xl mx-auto">
            Insights estratégicos, tendências e dicas sobre eventos premium no Rio de Janeiro
          </p>
        </motion.div>

        {/* Featured Article */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass p-12 rounded-3xl border border-gold/20 mb-32 bg-gradient-to-br from-gold/5 to-beige/5"
        >
          <div className="flex items-center justify-between mb-6">
            <span className="text-sm font-semibold text-gold uppercase tracking-wider">
              ⭐ Destaque
            </span>
            <span className="text-sm text-beige/60">22 de Maio, 2025 • 12 min</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-6">
            Concierge vs Agência de Eventos: Qual a Diferença?
          </h2>
          
          <p className="text-beige/80 text-xl mb-8 leading-relaxed max-w-3xl">
            Muitos clientes premium confundem os dois serviços. Neste artigo, explicamos as diferenças fundamentais, quando usar cada um, e por que a RiosLux oferece ambos integrados para máxima experiência.
          </p>
          
          <Link 
            href="/blog/concierge-vs-agencia-eventos"
            className="inline-flex items-center gap-2 text-gold hover:text-beige transition-colors font-medium text-lg"
          >
            Ler Artigo Completo <span className="text-xl">→</span>
          </Link>
        </motion.article>

        {/* Articles Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-32"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold gradient-text mb-12">
            Artigos Recentes
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-2xl border border-gold/20 hover:border-gold/50 transition-all group cursor-pointer hover:bg-white/5"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-gold uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span className="text-xs text-beige/60">{article.readTime}</span>
                </div>
                
                <h3 className="text-2xl font-serif font-bold gradient-text mb-4 group-hover:translate-y-1 transition-transform">
                  {article.title}
                </h3>
                
                <p className="text-beige/80 text-sm mb-6 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gold/20">
                  <span className="text-xs text-beige/60">{article.date}</span>
                  <Link 
                    href={`/blog/${article.slug}`}
                    className="text-gold hover:text-beige transition-colors font-medium text-sm"
                  >
                    Ler →
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Newsletter CTA */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-20 rounded-3xl bg-gradient-to-r from-gold/10 to-beige/10 border border-gold/20"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-8">
            Receba Insights Exclusivos
          </h2>
          <p className="text-xl text-beige/80 max-w-2xl mx-auto mb-12">
            Tendências, dicas e conteúdo premium direto no seu email. Apenas para clientes VIP.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email"
              placeholder="seu@email.com"
              className="flex-1 px-6 py-4 bg-white/10 border border-gold/30 rounded-full text-white placeholder-beige/50 focus:outline-none focus:border-gold transition-all"
            />
            <button className="bg-gold text-primary px-8 py-4 rounded-full font-medium hover:bg-beige transition-all duration-300 shadow-2xl hover:shadow-gold/50 whitespace-nowrap">
              Inscrever
            </button>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
