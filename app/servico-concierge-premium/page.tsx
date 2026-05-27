'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Serviço de Concierge Premium | Atendimento 24h | RiosLux',
  description: 'Concierge white-glove 24h para eventos premium. Soluções personalizadas, acesso privilegiado, disponibilidade total. Luxo que você não vê.',
  openGraph: {
    title: 'Concierge Premium 24h | RiosLux',
    description: 'Serviço de concierge exclusivo com atendimento VIP permanente.',
    url: 'https://riooslux.com.br/servico-concierge-premium',
  }
}

const servicosConcierge = [
  {
    servico: 'Atendimento Telefônico VIP',
    detalhes: 'Disponível 24h para qualquer solicitação, em português ou inglês'
  },
  {
    servico: 'Reservas Exclusivas',
    detalhes: 'Acesso privilegiado a restaurantes, eventos, experiências impossíveis de conseguir'
  },
  {
    servico: 'Logística & Transporte',
    detalhes: 'Coordenação de transfer premium, helicoptero, iates e transporte VIP'
  },
  {
    servico: 'Soluções de Imprevistos',
    detalhes: 'Resolve qualquer problema em tempo real, discretamente'
  },
  {
    servico: 'Experiências Personalizadas',
    detalhes: 'Cria experiências sob medida baseadas em seus desejos e preferências'
  },
  {
    servico: 'Pesquisa & Recomendações',
    detalhes: 'Oferece sugestões premium alinhadas com seus padrões e gostos'
  },
  {
    servico: 'Gestão de Detalhes',
    detalhes: 'Cuida de cada detalhe para que você só aproveite'
  },
  {
    servico: 'Confidencialidade Absoluta',
    detalhes: 'Seu sigilo é nossa prioridade máxima'
  }
]

export default function ConciergePremium() {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-32"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold gradient-text mb-8 leading-tight">
            Concierge Premium RiosLux
          </h1>
          <p className="text-xl md:text-2xl text-beige/80 max-w-3xl mx-auto mb-12">
            Atendimento white-glove 24h/7. Luxo que você não vê, mas sente em cada detalhe.
          </p>
          <Link 
            href="/contato"
            className="inline-block bg-gold text-primary px-12 py-6 rounded-full font-medium text-lg hover:bg-beige transition-all duration-300 shadow-2xl hover:shadow-gold/50 hover:-translate-y-2"
          >
            Ativar Concierge Agora
          </Link>
        </motion.div>

        {/* O Que é Concierge? */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 glass p-12 rounded-3xl border border-gold/20"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text text-center mb-12">
            O Que é Concierge Premium?
          </h2>
          <p className="text-xl text-beige/80 leading-relaxed max-w-3xl mx-auto">
            Concierge é mais do que um serviço—é uma <strong>filosofia de cuidado premium</strong>. 
            Nosso concierge está disponível 24/7 para resolver qualquer situação, antecipar necessidades 
            e criar experiências memoráveis. Você não pensa em logística, detalhes ou soluções. 
            Você apenas aproveita.
          </p>
        </motion.section>

        {/* Serviços Concierge */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text text-center mb-16">
            Serviços Oferecidos
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {servicosConcierge.map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass p-8 rounded-2xl border border-gold/20 hover:border-gold/50 transition-all"
              >
                <h3 className="text-2xl font-serif font-bold gradient-text mb-3">{svc.servico}</h3>
                <p className="text-beige/80 text-lg">{svc.detalhes}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Como Funciona */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text text-center mb-16">
            Como Funciona
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { etapa: 'Ativação', desc: 'Você nos fornece suas preferências, restrições dietéticas, horários favoritos' },
              { etapa: '24/7 Disponível', desc: 'Nossa equipe está sempre pronta, em qualquer horário' },
              { etapa: 'Antecipação', desc: 'Identificamos necessidades antes de você as mencionar' },
              { etapa: 'Execução Perfeita', desc: 'Tudo resolvido discretamente e com excelência' },
              { etapa: 'Avaliação', desc: 'Ajustamos conforme seu feedback' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-2xl border border-gold/20 flex gap-6"
              >
                <div className="text-4xl font-serif font-bold gradient-text">{i + 1}</div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-beige mb-2">{item.etapa}</h3>
                  <p className="text-beige/80 text-lg">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Exemplo Real */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-16 rounded-3xl bg-gradient-to-r from-gold/10 to-beige/10 border border-gold/20 mb-32"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-8">
            Um Exemplo Real
          </h2>
          <p className="text-xl text-beige/80 max-w-3xl mx-auto italic mb-8">
            "Você chega no Rio sem conhecer ninguém. Ao invés de pesquisar, decidir e se preocupar, 
            liga para nosso concierge. Ele faz a reserva no melhor restaurante de Leblon, 
            agenda transfer privativo, confirma preferências dietéticas com chef, 
            e garante que tudo esteja perfeito. Você só aproveita uma noite inesquecível."
          </p>
        </motion.section>

        {/* White-Glove Standards */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text text-center mb-16">
            Padrões White-Glove
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { padrao: 'Discrição Total', desc: 'Seu sigilo é absoluto' },
              { padrao: 'Resposta Imediata', desc: 'Atendimento em minutos' },
              { padrao: 'Personalização', desc: 'Tudo sob medida para você' },
              { padrao: 'Proatividade', desc: 'Resolvemos antes de você perceber' },
              { padrao: 'Qualidade Premium', desc: 'Apenas os melhores fornecedores' },
              { padrao: 'Flexibilidade', desc: 'Adaptamos a qualquer situação' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass p-8 rounded-2xl border border-gold/20 text-center"
              >
                <h3 className="text-xl font-serif font-bold gradient-text mb-3">{item.padrao}</h3>
                <p className="text-beige/80">{item.desc}</p>
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
            Ativar Seu Concierge Premium
          </h2>
          <p className="text-xl text-beige/80 max-w-2xl mx-auto mb-12">
            Experiência white-glove disponível para você a partir de hoje.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="/contato"
              className="inline-block bg-gold text-primary px-12 py-6 rounded-full font-medium text-lg hover:bg-beige transition-all duration-300 shadow-2xl hover:shadow-gold/50 hover:-translate-y-2"
            >
              Falar com Especialista
            </Link>
            <a 
              href="https://wa.me/5521972522076"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 text-white px-12 py-6 rounded-full font-medium text-lg hover:bg-green-600 transition-all duration-300 shadow-2xl hover:shadow-green-500/50 hover:-translate-y-2"
            >
              WhatsApp 24h
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
