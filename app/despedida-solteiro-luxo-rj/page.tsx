'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Despedida de Solteiro de Luxo RJ | Experiências Exclusivas RiosLux',
  description: 'Despedidas de solteiro e solteira premium no Rio de Janeiro. Experiências sofisticadas em iates, mansões e rooftops. Concierge 24h. Consulte a RiosLux.',
  keywords: ['despedida solteiro luxo RJ', 'despedida de solteiro premium', 'festa exclusiva Rio', 'despedida sofisticada'],
  openGraph: {
    title: 'Despedida de Solteiro de Luxo | RiosLux Rio de Janeiro',
    description: 'Crie uma despedida de solteiro inesquecível. Concierge, locais exclusivos, produção impecável.',
    url: 'https://riooslux.com.br/despedida-solteiro-luxo-rj',
  }
}

export default function DespedidaSolteiro() {
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
            Despedida de Solteiro de Luxo no Rio de Janeiro
          </h1>
          <p className="text-xl md:text-2xl text-beige/80 max-w-3xl mx-auto mb-12">
            Experiências exclusivas e sofisticadas para despedidas inesquecíveis em locais premium do Rio
          </p>
          <Link 
            href="/contato"
            className="bg-gold text-primary px-12 py-6 rounded-full font-medium text-lg hover:bg-beige transition-all duration-300 shadow-2xl hover:shadow-gold/50 hover:-translate-y-2 inline-block"
          >
            Agendar Consultoria Gratuita
          </Link>
        </motion.div>

        {/* Locais Exclusivos */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-12 text-center">
            Locais Exclusivos para Despedidas Premium
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Iates de Luxo', desc: 'Navegue na Baía de Guanabara com concierge premium', icon: '⛵' },
              { title: 'Mansões Históricas', desc: 'Espaços únicos no Joá, Joatinga e São Conrado', icon: '🏰' },
              { title: 'Rooftops Exclusivos', desc: 'Vistas panorâmicas da Zona Sul do Rio', icon: '🌃' },
              { title: 'Casarões Privados', desc: 'Locações sofisticadas em Ipanema e Leblon', icon: '🏛️' },
              { title: 'Resorts Premium', desc: 'All-inclusive luxuoso com acesso VIP', icon: '🏨' },
              { title: 'Clubes Selectos', desc: 'Espaços exclusivos com infraestrutura completa', icon: '🎭' }
            ].map((local, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-2xl border border-gold/20 hover:border-gold/50 transition-all"
              >
                <div className="text-5xl mb-4">{local.icon}</div>
                <h3 className="text-2xl font-serif font-bold gradient-text mb-3">{local.title}</h3>
                <p className="text-beige/80">{local.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Serviços Inclusos */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-12 text-center">
            O Que Incluímos em Sua Despedida
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: 'Planejamento Completo', items: ['Roteiro personalizado', 'Seleção de locais', 'Coordenação de horários'] },
              { title: 'Concierge 24h', items: ['Atendimento VIP', 'Reservas garantidas', 'Suporte em tempo real'] },
              { title: 'Experiências Sofisticadas', items: ['Catering premium', 'Animação de luxo', 'Fotografia profissional'] },
              { title: 'Logística Premium', items: ['Transporte VIP', 'Segurança discreta', 'Check-in simplificado'] }
            ].map((servico, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-2xl border border-gold/20"
              >
                <h3 className="text-2xl font-serif font-bold gradient-text mb-6">{servico.title}</h3>
                <ul className="space-y-3">
                  {servico.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-beige/90">
                      <span className="text-gold text-xl mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Por Que Escolher RiosLux */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-12 text-center">
            Por Que Escolher a RiosLux
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-serif font-bold gradient-text mb-3">Exclusividade Garantida</h3>
                <p className="text-beige/80">Acesso privilegiado a locais que poucas agências conseguem acessar. Experiências verdadeiramente únicas no Rio de Janeiro.</p>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold gradient-text mb-3">Execução Impecável</h3>
                <p className="text-beige/80">Cada detalhe planejado e executado com perfeição. Zero imprevistos, 100% satisfação garantida.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-serif font-bold gradient-text mb-3">Concierge White-Glove</h3>
                <p className="text-beige/80">Equipe disponível 24h para atender todas as suas necessidades. Discrição e profissionalismo premium.</p>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold gradient-text mb-3">Portfólio Comprovado</h3>
                <p className="text-beige/80">Centenas de despedidas premium realizadas com sucesso. Referência no mercado de eventos de luxo.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Testimonios/Social Proof */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-12 text-center">
            O Que Nossos Clientes Dizem
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'Fernando B.', text: 'A despedida de solteiro foi perfeita! Todos os detalhes impecáveis.', rating: 5 },
              { name: 'Carla M.', text: 'Experiência única que meus amigos nunca vão esquecer.', rating: 5 },
              { name: 'Roberto S.', text: 'Profissionalismo e luxo em cada momento. Muito satisfeito!', rating: 5 }
            ].map((testimonial, index) => (
              <div key={index} className="glass p-8 rounded-2xl border border-gold/20">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-gold text-lg">★</span>
                  ))}
                </div>
                <p className="text-beige/90 mb-4">"{testimonial.text}"</p>
                <p className="font-serif font-bold gradient-text">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Regiões Atendidas */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-12 text-center">
            Regiões Atendidas
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {['Barra da Tijuca', 'Ipanema', 'Leblon', 'Copacabana', 'Joá', 'Joatinga', 'São Conrado', 'Zona Sul', 'Todo Rio de Janeiro'].map((region, i) => (
              <div key={i} className="glass p-6 rounded-2xl border border-gold/20 text-center">
                <p className="text-beige/90 font-medium">{region}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-12 text-center">
            Perguntas Frequentes
          </h2>
          
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              { q: 'Qual é o valor mínimo para uma despedida premium?', a: 'Não há valor fixo. Customizamos conforme sua visão e orçamento. Agende consultoria gratuita para proposta personalizada.' },
              { q: 'Com quanto tempo de antecedência devo contratar?', a: 'Recomendamos 60 dias de antecedência para melhores opções de locais e fornecedores. Urgências são avaliadas caso a caso.' },
              { q: 'Vocês coordenam alimentação e bebidas?', a: 'Sim! Coordenamos com os melhores caterers, sommeliers e bartenders premium do Rio de Janeiro.' },
              { q: 'É possível personalizar totalmente a experiência?', a: 'Absolutamente! Cada despedida é única. Personalizamos tudo conforme suas preferências e tema desejado.' }
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass p-8 rounded-2xl border border-gold/20"
              >
                <h3 className="text-xl font-serif font-bold gradient-text mb-4">{faq.q}</h3>
                <p className="text-beige/80">{faq.a}</p>
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
            Crie Sua Despedida de Luxo
          </h2>
          <p className="text-xl text-beige/80 max-w-2xl mx-auto mb-12">
            Transforme este momento especial em uma experiência inesquecível. Nossos especialistas estão prontos para fazer a diferença.
          </p>
          <Link 
            href="/contato"
            className="bg-gold text-primary px-12 py-6 rounded-full font-medium text-lg hover:bg-beige transition-all duration-300 shadow-2xl hover:shadow-gold/50 hover:-translate-y-2 inline-block"
          >
            Solicitar Orçamento Premium
          </Link>
        </motion.section>
      </div>
    </div>
  )
}
