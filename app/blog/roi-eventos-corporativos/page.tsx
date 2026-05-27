import Link from 'next/link'
import type { Metadata } from 'next'
import { motion } from 'framer-motion'

export const metadata: Metadata = {
  title: 'ROI em Eventos Corporativos Premium: Como Mensurar | RiosLux',
  description: 'Aprenda como calcular o retorno financeiro e comercial de eventos corporativos premium. Métricas, fórmulas e case studies reais.',
  keywords: 'ROI eventos corporativos, retorno evento, ROI corporativo, eventos B2B',
  openGraph: {
    title: 'ROI em Eventos Corporativos: Guia Completo',
    description: 'Como mensurar o sucesso financeiro de seus eventos',
    url: 'https://riooslux.com.br/blog/roi-eventos-corporativos',
    type: 'article',
  },
}

export default function ROIEventosCorporativos() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <main className="min-h-screen py-24 px-4 md:px-8 bg-gradient-to-b from-slate-950 to-black">
      <motion.div className="max-w-4xl mx-auto" initial="hidden" animate="visible" variants={containerVariants}>
        <motion.div variants={itemVariants} className="mb-8">
          <Link href="/blog" className="text-gold hover:text-yellow-300 transition-colors mb-4 inline-block">
            ← Voltar ao Blog
          </Link>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 gradient-text">
            ROI em Eventos Corporativos: Guia de Mensuração
          </h1>
          <div className="flex gap-4 text-sm text-gray-400">
            <span>📅 26 de Maio de 2026</span>
            <span>⏱️ 10 min de leitura</span>
            <span>📂 B2B & Corporativo</span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="p-6 border border-gold/20 rounded-lg bg-white/5 backdrop-blur mb-12">
          <p className="text-lg text-gray-200">
            Evento corporativo premium custa dinheiro. Mas quanto ele vai gerar em retorno? Neste guia, descubra como mensurar ROI de eventos como um executive e justificar investimentos para o CFO.
          </p>
        </motion.div>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-4xl font-serif font-bold mb-8 text-white">A Fórmula Básica do ROI</h2>
          <div className="p-6 bg-gold/10 border border-gold/30 rounded-lg mb-6">
            <p className="font-mono text-lg text-gold font-bold mb-4">ROI % = (Ganho Líquido / Investimento Total) × 100</p>
            <p className="text-gray-200 text-sm">
              Exemplo: Evento custou R$ 50.000 e gerou R$ 150.000 em vendas.
              <br />ROI = (150.000 - 50.000) / 50.000 × 100 = <strong>200%</strong>
            </p>
          </div>
          <p className="text-gray-200">
            Mas ROI em eventos corporativos é mais complexo que isso. Você precisa rastrear múltiplas métricas financeiras e não-financeiras.
          </p>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-4xl font-serif font-bold mb-8 text-white">5 Métricas Financeiras Críticas</h2>
          <div className="space-y-4">
            {[
              {
                metrica: "Leads Gerados",
                calculo: "Total de contatos capturados",
                valor: "Depende do setor: B2B = R$ 500-5k por lead"
              },
              {
                metrica: "Vendas Diretas",
                calculo: "Vendas fechadas durante/logo após evento",
                valor: "Rastreável via CRM (código promocional)"
              },
              {
                metrica: "Vendor Relationships",
                calculo: "Valor de networking com fornecedores",
                valor: "Descontos negociados = economia"
              },
              {
                metrica: "Brand Perception",
                calculo: "Aumento de percepção premium da marca",
                valor: "Pesquisa pré/pós evento"
              },
              {
                metrica: "Customer Lifetime Value",
                calculo: "Clientes adquiridos no evento (valor futuro)",
                valor: "3-5x mais lucrativo que leads frios"
              },
            ].map((item, i) => (
              <div key={i} className="p-4 border border-gold/20 rounded">
                <h3 className="font-bold text-gold mb-2">{item.metrica}</h3>
                <p className="text-sm text-gray-300 mb-1">{item.calculo}</p>
                <p className="text-sm text-yellow-400">{item.valor}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-4xl font-serif font-bold mb-8 text-white">3 Métricas Não-Financeiras (Mas Valiosas)</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                titulo: "Engajamento",
                exemplos: "Duração média de permanência, participação em atividades, feedback positivo"
              },
              {
                titulo: "Alcance de Mídia",
                exemplos: "Posts gerados, menções em redes, PR earned (value of media)"
              },
              {
                titulo: "Retenção",
                exemplos: "Clientes presentes que renovaram contrato, referências geradas"
              },
            ].map((item, i) => (
              <div key={i} className="p-4 bg-white/5 border border-gold/10 rounded">
                <h3 className="font-bold text-gold mb-3">{item.titulo}</h3>
                <p className="text-sm text-gray-300">{item.exemplos}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-4xl font-serif font-bold mb-8 text-white">Como Estruturar Rastreamento</h2>
          <div className="space-y-4">
            <div className="p-4 border border-gold/20 rounded">
              <h3 className="font-bold text-gold mb-3">1️⃣ Antes do Evento</h3>
              <ul className="text-sm text-gray-200 space-y-2">
                <li>• Defina objetivos claros (ex: 50 leads, 5 vendas)</li>
                <li>• Crie código promocional único para rastreamento</li>
                <li>• Configure pixel de rastreamento (GA4/Analytics)</li>
                <li>• Prepare formulário de captura de dados</li>
              </ul>
            </div>
            <div className="p-4 border border-gold/20 rounded">
              <h3 className="font-bold text-gold mb-3">2️⃣ Durante o Evento</h3>
              <ul className="text-sm text-gray-200 space-y-2">
                <li>• Registre todas conversas e contatos</li>
                <li>• Capture dados via QR code ou check-in digital</li>
                <li>• Monitore engajamento em tempo real</li>
                <li>• Faça fotos/vídeos para conteúdo</li>
              </ul>
            </div>
            <div className="p-4 border border-gold/20 rounded">
              <h3 className="font-bold text-gold mb-3">3️⃣ Após o Evento (Crucial)</h3>
              <ul className="text-sm text-gray-200 space-y-2">
                <li>• Follow-up em 24h com leads quentes</li>
                <li>• Rastreie conversões por 90 dias</li>
                <li>• Compile feedback via pesquisa NPS</li>
                <li>• Calcule ROI com dados reais</li>
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-4xl font-serif font-bold mb-8 text-white">Case Study Real: Gala Corporativa XYZ</h2>
          <div className="p-6 border-l-4 border-gold bg-white/5 rounded space-y-4">
            <div>
              <h3 className="font-bold text-gold mb-2">Investimento Total</h3>
              <p className="text-gray-200">R$ 180.000 (local, catering, produção, staff)</p>
            </div>
            <div>
              <h3 className="font-bold text-gold mb-2">Retorno Gerado</h3>
              <ul className="text-gray-200 space-y-2">
                <li>• 120 leads capturados</li>
                <li>• 12 vendas fechadas = R$ 480.000</li>
                <li>• 8 parcerias negociadas = R$ 150.000 em economia</li>
                <li>• PR earned = R$ 60.000 (valor de mídia)</li>
              </ul>
            </div>
            <div className="p-3 bg-gold/20 rounded">
              <p className="font-bold text-gold">ROI Total = 342%</p>
              <p className="text-sm text-gray-300">Lucro Líquido: R$ 600.000 em 6 meses</p>
            </div>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-4xl font-serif font-bold mb-8 text-white">Benchmarks por Setor</h2>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gold/10 border-b border-gold/30">
                <th className="p-3 text-left text-gold">Setor</th>
                <th className="p-3 text-left text-gold">ROI Médio</th>
                <th className="p-3 text-left text-gold">Lead Cost</th>
              </tr>
            </thead>
            <tbody>
              {[
                { setor: "Tech/Software", roi: "400-600%", cost: "R$ 1.500-3.000" },
                { setor: "Serviços Financeiros", roi: "250-400%", cost: "R$ 3.000-8.000" },
                { setor: "Consultoria", roi: "300-500%", cost: "R$ 2.000-5.000" },
                { setor: "Construção/Imobiliário", roi: "200-350%", cost: "R$ 4.000-10.000" },
                { setor: "Indústria", roi: "150-300%", cost: "R$ 3.000-6.000" },
              ].map((row, i) => (
                <tr key={i} className="border-b border-gold/10 hover:bg-white/5">
                  <td className="p-3 text-gray-200">{row.setor}</td>
                  <td className="p-3 text-yellow-400">{row.roi}</td>
                  <td className="p-3 text-gray-300">{row.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.section>

        <motion.section variants={itemVariants} className="text-center py-12">
          <h2 className="text-3xl font-serif font-bold mb-6 text-white">Planeja um Evento com ROI Garantido?</h2>
          <p className="text-gray-300 mb-8">
            Especiamos em eventos corporativos que geram retorno mensurável. Vamos estruturar seu evento para máximo ROI.
          </p>
          <a
            href="https://wa.me/5521972522076?text=Quero%20um%20evento%20corporativo%20com%20ROI%20garantido"
            className="inline-block px-8 py-4 bg-gold text-black font-bold rounded-lg hover:bg-yellow-300 transition"
          >
            💼 Consultar ROI Estratégico
          </a>
        </motion.section>
      </motion.div>
    </main>
  )
}
