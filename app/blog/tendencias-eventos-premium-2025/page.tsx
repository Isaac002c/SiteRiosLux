import Link from 'next/link'
import type { Metadata } from 'next'
import { MotionA, MotionArticle, MotionDiv, MotionSection } from '@/components/Motion'

export const metadata: Metadata = {
  title: 'Blog - Tendências de Eventos Premium 2025 | RiosLux',
  description: 'Tendências em eventos de luxo para 2025. Conheça as novas experiências, iates premium, locais exclusivos e concierge white-glove no Rio de Janeiro.',
  alternates: { canonical: '/blog/tendencias-eventos-premium-2025' },
  openGraph: {
    title: 'Tendências Eventos Premium 2025 | RiosLux Blog',
    description: 'As tendências mais quentes em eventos premium para o próximo ano.',
    url: 'https://www.agenciarioslux.com.br/blog/tendencias-eventos-premium-2025',
    images: [{ url: 'https://www.agenciarioslux.com.br/og.png', width: 1200, height: 630, alt: 'RiosLux — eventos premium e concierge no Rio de Janeiro' }],
  }
}

const articles = [
  {
    title: 'Iates Luxo: A Nova Tendência em Eventos Premium',
    excerpt: 'Navegação pela Baía de Guanabara ao pôr do sol. Eventos em iates são a escolha preferida de clientes premium em 2025.',
    date: '22 de Maio, 2025',
    category: 'Tendências'
  },
  {
    title: 'Concierge White-Glove: Luxo Que Você Não Vê',
    excerpt: 'Entenda o serviço que faz a diferença entre um evento bom e uma experiência memorável.',
    date: '15 de Maio, 2025',
    category: 'Concierge'
  },
  {
    title: 'Mansões Históricas: Os Melhores Locais no Rio',
    excerpt: 'Joá, Joatinga, São Conrado: conheça as propriedades mais exclusivas para eventos premium.',
    date: '10 de Maio, 2025',
    category: 'Locações'
  },
  {
    title: 'Despedidas de Solteiro: Experiências Que Marcam',
    excerpt: 'De experiências radicais a jantares sofisticados: as melhores ideias para sua despedida inesquecível.',
    date: '5 de Maio, 2025',
    category: 'Eventos Privados'
  }
]

export default function BlogTendencias() {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-32"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold gradient-text mb-8 leading-tight">
            Blog RiosLux
          </h1>
          <p className="text-xl md:text-2xl text-beige/80 max-w-3xl mx-auto">
            Tendências, dicas e insights sobre eventos premium no Rio de Janeiro
          </p>
        </MotionDiv>

        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {articles.map((article, index) => (
            <MotionArticle
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-2xl border border-gold/20 hover:border-gold/50 transition-all group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-gold uppercase tracking-wider">
                  {article.category}
                </span>
                <span className="text-sm text-beige/60">{article.date}</span>
              </div>

              <h3 className="text-2xl font-serif font-bold gradient-text mb-4 group-hover:translate-y-1 transition-transform">
                {article.title}
              </h3>

              <p className="text-beige/80 text-lg mb-6 leading-relaxed">
                {article.excerpt}
              </p>

              <Link
                href="#"
                className="inline-flex items-center gap-2 text-gold hover:text-beige transition-colors font-medium"
              >
                Ler Artigo Completo <span>→</span>
              </Link>
            </MotionArticle>
          ))}
        </div>

        <MotionSection
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-16 rounded-3xl bg-gradient-to-r from-gold/10 to-beige/10 border border-gold/20"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-8">
            Fique Atualizado com as Tendências
          </h2>
          <p className="text-xl text-beige/80 max-w-2xl mx-auto mb-12">
            Inscreva-se para receber insights exclusivos sobre eventos premium.
          </p>
          <div className="max-w-md mx-auto">
            <input
              type="email"
              placeholder="seu@email.com"
              className="w-full px-6 py-4 bg-white/10 border border-gold/30 rounded-full text-white placeholder-beige/50 focus:outline-none focus:border-gold transition-all mb-4"
            />
            <button className="w-full bg-gold text-primary px-12 py-4 rounded-full font-medium hover:bg-beige transition-all duration-300 shadow-2xl hover:shadow-gold/50">
              Inscrever-se
            </button>
          </div>
        </MotionSection>
      </div>
    </div>
  )
}
