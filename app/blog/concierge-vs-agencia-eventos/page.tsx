import Link from 'next/link'
import type { Metadata } from 'next'
import { MotionDiv, MotionSection } from '@/components/Motion'

export const metadata: Metadata = {
  title: 'Guia: Diferença Entre Concierge e Agência | RiosLux Premium',
  description: 'Qual é a diferença entre contratar um concierge ou uma agência de eventos? Guia completo para escolher a melhor solução para seu evento premium no Rio.',
  alternates: { canonical: '/blog/concierge-vs-agencia-eventos' },
  openGraph: {
    title: 'Concierge vs Agência de Eventos | RiosLux Guide',
    description: 'Entenda as diferenças e escolha a melhor opção para seu evento.',
    url: 'https://www.agenciarioslux.com.br/blog/concierge-vs-agencia-eventos',
    images: [{ url: 'https://www.agenciarioslux.com.br/og.png', width: 1200, height: 630, alt: 'RiosLux — eventos premium e concierge no Rio de Janeiro' }],
  }
}

export default function GuiaConciergeCorporativo() {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-32"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-gold/20 border border-gold/50 mb-8">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">Guia Completo</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold gradient-text mb-8 leading-tight">
            Concierge vs Agência de Eventos
          </h1>
          <p className="text-xl md:text-2xl text-beige/80 max-w-3xl mx-auto">
            Qual é a diferença? Quando usar cada um? Conheça todas as respostas neste guia premium.
          </p>
        </MotionDiv>

        <MotionSection
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-12">
            O Que é Concierge?
          </h2>
          <p className="text-xl text-beige/80 leading-relaxed mb-8">
            Concierge é um serviço personalizado focado em atender solicitações específicas com discrição e elegância. Oferece soluções customizadas, acesso a conexões exclusivas e atendimento white-glove.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              '✓ Personalização extrema',
              '✓ Discrição absoluta',
              '✓ Acesso privilegiado',
              '✓ Atendimento 24/7'
            ].map((benefit, i) => (
              <div key={i} className="glass p-6 rounded-xl border border-gold/20">
                <p className="text-lg text-beige/80">{benefit}</p>
              </div>
            ))}
          </div>
        </MotionSection>

        <MotionSection
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-12">
            O Que é Agência de Eventos?
          </h2>
          <p className="text-xl text-beige/80 leading-relaxed mb-8">
            Agência de eventos é especializada em planejamento, coordenação e execução completa de eventos. Oferece soluções turnkey com gerenciamento de fornecedores e cronograma.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              '✓ Planejamento estruturado',
              '✓ Fornecedores coordenados',
              '✓ Timeline definida',
              '✓ Produção garantida'
            ].map((benefit, i) => (
              <div key={i} className="glass p-6 rounded-xl border border-gold/20">
                <p className="text-lg text-beige/80">{benefit}</p>
              </div>
            ))}
          </div>
        </MotionSection>

        <MotionSection
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-12">
            Comparação Lado a Lado
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gold/30">
                  <th className="text-left py-4 px-6 text-gold font-serif font-bold">Critério</th>
                  <th className="text-left py-4 px-6 text-gold font-serif font-bold">Concierge</th>
                  <th className="text-left py-4 px-6 text-gold font-serif font-bold">Agência</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { criteria: 'Personalização', concierge: 'Máxima', agencia: 'Alta' },
                  { criteria: 'Discrição', concierge: 'Absoluta', agencia: 'Profissional' },
                  { criteria: 'Planejamento', concierge: 'Sob demanda', agencia: 'Estruturado' },
                  { criteria: 'Execução', concierge: 'Coordenação', agencia: 'Completa' },
                  { criteria: 'Atendimento', concierge: '24/7', agencia: 'Horário' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gold/10 hover:bg-gold/5">
                    <td className="py-4 px-6 text-beige/80 font-medium">{row.criteria}</td>
                    <td className="py-4 px-6 text-beige/80">{row.concierge}</td>
                    <td className="py-4 px-6 text-beige/80">{row.agencia}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </MotionSection>

        <MotionSection
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-16 rounded-3xl bg-gradient-to-r from-gold/10 to-beige/10 border border-gold/20"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-8">
            RiosLux: O Melhor dos Dois Mundos
          </h2>
          <p className="text-xl text-beige/80 max-w-2xl mx-auto mb-12">
            Combinamos excelência em concierge premium com produção impecável de eventos. Planejamento estruturado + personalização extrema + discrição absoluta.
          </p>
          <Link
            href="/contato"
            className="bg-gold text-primary px-12 py-6 rounded-full font-medium text-lg hover:bg-beige transition-all duration-300 shadow-2xl hover:shadow-gold/50 hover:-translate-y-2 inline-block"
          >
            Fale com Especialista
          </Link>
        </MotionSection>
      </div>
    </div>
  )
}
