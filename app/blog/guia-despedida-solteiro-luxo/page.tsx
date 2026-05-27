import Link from 'next/link'
import type { Metadata } from 'next'
import { motion } from 'framer-motion'

export const metadata: Metadata = {
  title: 'Guia Completo: Despedida de Solteiro Luxo no Rio | RiosLux',
  description: 'Aprenda como organizar a despedida de solteiro premium perfeita. Locais exclusivos, ideias criativas, orçamento e dicas de sucesso na RiosLux.',
  keywords: 'despedida solteiro luxo, despedida de solteiro premium, festa solteiro rio',
  openGraph: {
    title: 'Guia: Despedida de Solteiro Luxo no Rio',
    description: 'Tudo que você precisa saber para organizar um evento inesquecível',
    url: 'https://riooslux.com.br/blog/guia-despedida-solteiro-luxo',
    type: 'article',
  },
}

export default function GuiaDespedidaSolteiro() {
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
            Guia Completo: Despedida de Solteiro Luxo no Rio
          </h1>
          <div className="flex gap-4 text-sm text-gray-400">
            <span>📅 26 de Maio de 2026</span>
            <span>⏱️ 12 min de leitura</span>
            <span>📂 Eventos Premium</span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="p-6 border border-gold/20 rounded-lg bg-white/5 backdrop-blur mb-12">
          <p className="text-lg text-gray-200">
            Uma despedida de solteiro premium não é só uma festa - é um marco na vida do noivo ou noiva. Neste guia, você aprenderá como organizar um evento que será lembrado para sempre, com elegância, exclusividade e logística perfeita.
          </p>
        </motion.div>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-4xl font-serif font-bold mb-8 text-white">1. Define o Conceito & Vibe</h2>
          <div className="space-y-4 text-gray-200">
            <p>O sucesso começa com clareza. Existem 4 vibes principais:</p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 border border-gold/20 rounded">
                <h3 className="font-bold text-gold mb-2">🎉 Festa Brava</h3>
                <p className="text-sm">Música alta, dança, energia pura. Ideal para quem ama agito.</p>
              </div>
              <div className="p-4 border border-gold/20 rounded">
                <h3 className="font-bold text-gold mb-2">✨ Sofisticada</h3>
                <p className="text-sm">Drinks premium, ambiente elegante, conversas. Classe garantida.</p>
              </div>
              <div className="p-4 border border-gold/20 rounded">
                <h3 className="font-bold text-gold mb-2">🏝️ Experiência</h3>
                <p className="text-sm">Iate, piscina, praias exclusivas. Luxo em movimento.</p>
              </div>
              <div className="p-4 border border-gold/20 rounded">
                <h3 className="font-bold text-gold mb-2">🎭 Temática</h3>
                <p className="text-sm">Fantasia, costume, conceito único. Memorável e diferente.</p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-4xl font-serif font-bold mb-8 text-white">2. Escolha o Local Perfeito</h2>
          <div className="space-y-4 text-gray-200 mb-6">
            <p className="font-bold">Os melhores locais para despedida solteiro no Rio:</p>
          </div>
          <div className="space-y-4">
            {[
              { local: "Mansão em Joá/Joatinga", destaques: "Vista do mar, privacidade total, 50-200 pessoas", preco: "R$ 10k-25k" },
              { local: "Iate Luxo", destaques: "Movimento, saudade no mar, 20-80 pessoas", preco: "R$ 8k-20k" },
              { local: "Rooftop Leblon/Ipanema", destaques: "Pôr do sol, vista 360°, 30-100 pessoas", preco: "R$ 5k-15k" },
              { local: "Beach Club Premium", destaques: "Piscina, deck, DJ, 50-300 pessoas", preco: "R$ 8k-20k" },
              { local: "Casa Noturna Premium", destaques: "Ambiente profissional, segurança, iluminação", preco: "R$ 10k-50k" },
            ].map((item, i) => (
              <div key={i} className="p-4 border border-gold/10 rounded hover:border-gold/30 transition">
                <h3 className="font-bold text-gold mb-2">{item.local}</h3>
                <p className="text-sm text-gray-300 mb-1">{item.destaques}</p>
                <p className="text-sm text-yellow-500 font-semibold">{item.preco}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-4xl font-serif font-bold mb-8 text-white">3. Planejamento Cronológico</h2>
          <div className="space-y-3">
            {[
              { tempo: "3 meses antes", acao: "Decide tema e data" },
              { tempo: "2 meses", acao: "Reserve o local" },
              { tempo: "6 semanas", acao: "Confirme convidados" },
              { tempo: "1 mês", acao: "Contrate fornecedores" },
              { tempo: "2 semanas", acao: "Finalize decoração" },
              { tempo: "1 semana", acao: "Confirmações finais" },
              { tempo: "2 dias", acao: "Última logística" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-3 border border-gold/10 rounded">
                <span className="font-bold text-gold min-w-fit">{item.tempo}</span>
                <span className="text-gray-200">{item.acao}</span>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-4xl font-serif font-bold mb-8 text-white">4. Orçamento Estimado</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gold/10 border-b border-gold/30">
                  <th className="p-3 text-left text-gold font-bold">Item</th>
                  <th className="p-3 text-left text-gold font-bold">Descrição</th>
                  <th className="p-3 text-right text-gold font-bold">Custo</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { item: "Local", desc: "Aluguel/Locação", custo: "R$ 10k-25k" },
                  { item: "Bebidas", desc: "Drinks/cerveja/vinho", custo: "R$ 3k-8k" },
                  { item: "Comida", desc: "Catering premium", custo: "R$ 5k-15k" },
                  { item: "DJ/Música", desc: "Profissional + som", custo: "R$ 2k-5k" },
                  { item: "Decoração", desc: "Flores, cenários", custo: "R$ 2k-6k" },
                  { item: "Atividades", desc: "Surpresas, jogos", custo: "R$ 1k-3k" },
                  { item: "Transporte", desc: "Van/ônibus aluguel", custo: "R$ 2k-4k" },
                  { item: "Fotografia", desc: "Foto/vídeo profissional", custo: "R$ 3k-7k" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gold/10 hover:bg-white/5">
                    <td className="p-3 text-gold font-semibold">{row.item}</td>
                    <td className="p-3 text-gray-300">{row.desc}</td>
                    <td className="p-3 text-right text-yellow-400">{row.custo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-yellow-400 font-bold mt-4">Total Estimado: R$ 28k - 73k</p>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-4xl font-serif font-bold mb-8 text-white">5. 10 Ideias Criativas Comprovadas</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Contrate um dublê do noivo para surpresa",
              "Passeio de Iate no pôr do sol com drinks",
              "Sessão de fotos profissional temática",
              "Jogo de poker de altas apostas (fictício)",
              "Contrate MC para brincadeiras e prêmios",
              "Piscina com topless/barman acrobata",
              "Tour de bares premium com 'prova de fogo'",
              "Jantar surpresa em local secreto",
              "Spa + experiência premium",
              "Experiência de pilotagem de supercar",
            ].map((idea, i) => (
              <div key={i} className="p-4 bg-white/5 border border-gold/10 rounded">
                <p className="text-gray-200">✦ {idea}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12 p-6 border-l-4 border-gold bg-white/5 rounded">
          <h2 className="text-2xl font-bold text-gold mb-4">💡 Dica de Ouro</h2>
          <p className="text-gray-200 mb-4">
            A melhor despedida de solteiro não é aquela com o maior orçamento, mas aquela que reflete a personalidade do homenageado. Um iate modesto com amigos verdadeiros é superior a uma festa de 500 pessoas sem conexão.
          </p>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-4xl font-serif font-bold mb-8 text-white">6. Erros Comuns a Evitar</h2>
          <div className="space-y-3">
            {[
              "❌ Não confirmar convidados com antecedência",
              "❌ Esquecer de alguém importante na lista",
              "❌ Subesestimar o consumo de bebida",
              "❌ Não ter plano B para chuva/emergências",
              "❌ Escolher local muito longe ou difícil acesso",
              "❌ Não combinar com o noivo/noiva antes",
              "❌ Deixar tudo para última hora",
            ].map((erro, i) => (
              <div key={i} className="p-3 bg-red-950/20 border border-red-800/30 rounded text-gray-200">
                {erro}
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="text-center py-12">
          <h2 className="text-3xl font-serif font-bold mb-6 text-white">Pronto para Organizar?</h2>
          <p className="text-gray-300 mb-8">
            Nossa equipe especializada em despedidas solteiro pode ajudar com todo o planejamento e execução.
          </p>
          <a
            href="https://wa.me/5521972522076?text=Quero%20organizar%20uma%20despedida%20de%20solteiro%20premium"
            className="inline-block px-8 py-4 bg-gold text-black font-bold rounded-lg hover:bg-yellow-300 transition"
          >
            🎉 Começar Planejamento
          </a>
        </motion.section>
      </motion.div>
    </main>
  )
}
