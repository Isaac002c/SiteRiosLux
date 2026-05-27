'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ - Perguntas Frequentes | Eventos Premium RJ | RiosLux',
  description: 'Perguntas frequentes sobre eventos premium, concierge e serviços de luxo no Rio de Janeiro. Tudo que você precisa saber sobre a RiosLux.',
  openGraph: {
    title: 'FAQ - Dúvidas Sobre Eventos Premium | RiosLux',
    description: 'Tire suas dúvidas sobre eventos de luxo e serviços de concierge.',
    url: 'https://riooslux.com.br/faq',
  }
}

const faqs = [
  {
    q: 'Qual é o valor mínimo para contratar um evento premium?',
    a: 'Não temos valor mínimo fixo. Cada evento é customizado conforme sua visão e orçamento. Desde eventos íntimos até produções de grande porte. Agende uma consultoria gratuita para discutir sua proposta.'
  },
  {
    q: 'Com quantos dias de antecedência devo contratar?',
    a: 'Recomendamos 60 a 90 dias de antecedência para melhores opções de locais, fornecedores e flexibilidade. Porém, atendemos demandas urgentes conforme disponibilidade.'
  },
  {
    q: 'Quais são os bairros que vocês atendem?',
    a: 'Atendemos todo o Rio de Janeiro, com especialização em: Barra da Tijuca, Ipanema, Leblon, Copacabana, Zona Sul, Joá, Joatinga e São Conrado.'
  },
  {
    q: 'Vocês coordenam caterers e fornecedores?',
    a: 'Sim! Temos rede de parceiros premium: caterers, fotógrafos, produtoras, decoradores, DJs e todos os fornecedores necessários.'
  },
  {
    q: 'Como funciona o serviço de concierge 24h?',
    a: 'Disponível antes, durante e após seu evento. Resolvemos qualquer solicitação: reservas, logística, soluções criativas. Atendimento discreto e profissional.'
  },
  {
    q: 'Qual é o diferencial da RiosLux?',
    a: 'Acesso exclusivo a locais premium, organização impecável, concierge white-glove e mais de 100+ eventos realizados com sucesso. Referência em eventos de luxo no Rio.'
  },
  {
    q: 'Posso agendar uma consultoria?',
    a: 'Sim! A consultoria inicial é gratuita. Você fala sobre sua visão e nós apresentamos soluções personalizadas. Agende pelo WhatsApp ou formulário.'
  },
  {
    q: 'Vocês trabalham com eventos corporativos?',
    a: 'Especialidade nossa! Conferências, lançamentos, galas corporativas, jantares executivos e retiros com produção de cinema e ROI garantido.'
  }
]

export default function FAQ() {
  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  }

  return (
    <div className="min-h-screen py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-32"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold gradient-text mb-8 leading-tight">
            Perguntas Frequentes
          </h1>
          <p className="text-xl md:text-2xl text-beige/80 max-w-2xl mx-auto">
            Tire todas as suas dúvidas sobre eventos premium e serviços de concierge
          </p>
        </motion.div>

        <div className="space-y-6 mb-32">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass p-8 rounded-2xl border border-gold/20 hover:border-gold/50 transition-all"
            >
              <h3 className="text-2xl font-serif font-bold gradient-text mb-4">
                {index + 1}. {faq.q}
              </h3>
              <p className="text-beige/80 text-lg leading-relaxed">
                {faq.a}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Não achou sua resposta? */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-16 rounded-3xl bg-gradient-to-r from-gold/10 to-beige/10 border border-gold/20"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-8">
            Não Encontrou Sua Resposta?
          </h2>
          <p className="text-xl text-beige/80 max-w-2xl mx-auto mb-12">
            Fale diretamente com nossos especialistas. Estamos aqui para ajudar com qualquer dúvida.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Link 
              href="/contato"
              className="bg-gold text-primary px-12 py-6 rounded-full font-medium text-lg hover:bg-beige transition-all duration-300 shadow-2xl hover:shadow-gold/50 hover:-translate-y-2"
            >
              Enviar Mensagem
            </Link>
            <a 
              href="https://wa.me/5521972522076"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-12 py-6 rounded-full font-medium text-lg hover:bg-green-600 transition-all duration-300 shadow-2xl hover:shadow-green-500/50 hover:-translate-y-2"
            >
              WhatsApp 24h
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
