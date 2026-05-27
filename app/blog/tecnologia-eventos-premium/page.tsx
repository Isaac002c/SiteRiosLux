import Link from 'next/link'
import type { Metadata } from 'next'
import { motion } from 'framer-motion'

export const metadata: Metadata = {
  title: 'Tecnologia em Eventos Premium: O Futuro do Luxo | RiosLux',
  description: 'Descubra as tecnologias que transformam eventos premium. From VR/AR até hologramas e inteligência artificial para experiências inesquecíveis.',
  keywords: 'tecnologia eventos, eventos premium 2025, AR eventos, VR experiências',
  openGraph: {
    title: 'Tecnologia em Eventos Premium: O Futuro',
    description: 'As inovações que estão mudando eventos de luxo',
    url: 'https://riooslux.com.br/blog/tecnologia-eventos-premium',
    type: 'article',
  },
}

export default function TecnologiaEventos() {
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
            Tecnologia em Eventos Premium: O Futuro do Luxo
          </h1>
          <div className="flex gap-4 text-sm text-gray-400">
            <span>📅 26 de Maio de 2026</span>
            <span>⏱️ 9 min de leitura</span>
            <span>📂 Inovação & Eventos</span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="p-6 border border-gold/20 rounded-lg bg-white/5 backdrop-blur mb-12">
          <p className="text-lg text-gray-200">
            Tecnologia deixou de ser "legal" em eventos para ser "essencial". Conheça as 7 inovações que estão transformando experiências premium em 2025/2026.
          </p>
        </motion.div>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-4xl font-serif font-bold mb-8 text-white">1. Realidade Aumentada (AR)</h2>
          <div className="space-y-4 text-gray-200">
            <p>
              <strong>O que é:</strong> Sobrepor elementos digitais ao mundo real via smartphone/tablet.
            </p>
            <div className="p-4 bg-white/5 border border-gold/10 rounded">
              <p className="font-bold text-gold mb-2">💡 Aplicação em Eventos:</p>
              <ul className="space-y-2 text-sm">
                <li>✦ Convites interativos (scan QR = experiência AR)</li>
                <li>✦ Menu digital flutuante em coquetéis</li>
                <li>✦ Fotos com efeitos premium em tempo real</li>
                <li>✦ Informações de produtos "flutuando" no espaço</li>
              </ul>
            </div>
            <div className="p-4 bg-gold/10 border border-gold/20 rounded">
              <p className="font-bold text-gold mb-2">💰 Custo: R$ 5k-20k por evento</p>
              <p className="text-sm">ROI: Engajamento 3x maior + conteúdo viral</p>
            </div>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-4xl font-serif font-bold mb-8 text-white">2. Realidade Virtual (VR)</h2>
          <div className="space-y-4 text-gray-200">
            <p>
              <strong>O que é:</strong> Imersão total em ambiente digital com óculos VR.
            </p>
            <div className="p-4 bg-white/5 border border-gold/10 rounded">
              <p className="font-bold text-gold mb-2">💡 Aplicação em Eventos:</p>
              <ul className="space-y-2 text-sm">
                <li>✦ Tour virtual de propriedades (imobiliário)</li>
                <li>✦ Experiências de produto imersivas</li>
                <li>✦ Games temáticos premium</li>
                <li>✦ Viagens virtuais (ex: simulação do Everest)</li>
              </ul>
            </div>
            <div className="p-4 bg-gold/10 border border-gold/20 rounded">
              <p className="font-bold text-gold mb-2">💰 Custo: R$ 15k-50k por evento</p>
              <p className="text-sm">ROI: Memorabilidade excepcional + diferenciação</p>
            </div>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-4xl font-serif font-bold mb-8 text-white">3. Hologramas 3D</h2>
          <div className="space-y-4 text-gray-200">
            <p>
              <strong>O que é:</strong> Projeção 3D de pessoas/objetos visíveis a olho nu, sem óculos.
            </p>
            <div className="p-4 bg-white/5 border border-gold/10 rounded">
              <p className="font-bold text-gold mb-2">💡 Aplicação em Eventos:</p>
              <ul className="space-y-2 text-sm">
                <li>✦ Apresentador remoto em 3D (impacto WOW)</li>
                <li>✦ Mascote holográfico interativo</li>
                <li>✦ Produto "flutuando" no palco</li>
                <li>✦ Holograma de celebridade para surpresa</li>
              </ul>
            </div>
            <div className="p-4 bg-gold/10 border border-gold/20 rounded">
              <p className="font-bold text-gold mb-2">💰 Custo: R$ 20k-80k por evento</p>
              <p className="text-sm">ROI: Viral garantido + cobertura de mídia</p>
            </div>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-4xl font-serif font-bold mb-8 text-white">4. Inteligência Artificial (AI)</h2>
          <div className="space-y-4 text-gray-200">
            <p>
              <strong>O que é:</strong> Sistemas inteligentes que aprendem e personalizam experiências.
            </p>
            <div className="p-4 bg-white/5 border border-gold/10 rounded">
              <p className="font-bold text-gold mb-2">💡 Aplicação em Eventos:</p>
              <ul className="space-y-2 text-sm">
                <li>✦ Chatbot AI para assistência 24h</li>
                <li>✦ Recomendação de networking (IA junta pessoas certos)</li>
                <li>✦ DJ AI que aprende preferência musical</li>
                <li>✦ Análise preditiva de quem vai gerar vendas</li>
              </ul>
            </div>
            <div className="p-4 bg-gold/10 border border-gold/20 rounded">
              <p className="font-bold text-gold mb-2">💰 Custo: R$ 8k-25k por evento</p>
              <p className="text-sm">ROI: Otimização de recursos + experiência personalizada</p>
            </div>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-4xl font-serif font-bold mb-8 text-white">5. Mapeamento de Projeção 3D (Mapping)</h2>
          <div className="space-y-4 text-gray-200">
            <p>
              <strong>O que é:</strong> Projeção sincronizada em superfícies (paredes, prédios, esculturas).
            </p>
            <div className="p-4 bg-white/5 border border-gold/10 rounded">
              <p className="font-bold text-gold mb-2">💡 Aplicação em Eventos:</p>
              <ul className="space-y-2 text-sm">
                <li>✦ Fachada de mansão transformada em arte viva</li>
                <li>✦ Palco 3D dinâmico que muda ao vivo</li>
                <li>✦ Experiência imersiva sincronizada com música</li>
                <li>✦ Branding corporativo em superfícies</li>
              </ul>
            </div>
            <div className="p-4 bg-gold/10 border border-gold/20 rounded">
              <p className="font-bold text-gold mb-2">💰 Custo: R$ 30k-100k por evento</p>
              <p className="text-sm">ROI: Impacto visual inesquecível + conteúdo 10/10</p>
            </div>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-4xl font-serif font-bold mb-8 text-white">6. Livestream Profissional + 360°</h2>
          <div className="space-y-4 text-gray-200">
            <p>
              <strong>O que é:</strong> Transmissão ao vivo em 4K + câmeras 360° para experiência remota total.
            </p>
            <div className="p-4 bg-white/5 border border-gold/10 rounded">
              <p className="font-bold text-gold mb-2">💡 Aplicação em Eventos:</p>
              <ul className="space-y-2 text-sm">
                <li>✦ Evento híbrido (presencial + online)</li>
                <li>✦ Participantes remotos vivem o evento em VR</li>
                <li>✦ Integração com YouTube/Instagram/LinkedIn</li>
                <li>✦ Replay sob demanda para registro</li>
              </ul>
            </div>
            <div className="p-4 bg-gold/10 border border-gold/20 rounded">
              <p className="font-bold text-gold mb-2">💰 Custo: R$ 10k-40k por evento</p>
              <p className="text-sm">ROI: Alcance 5-10x maior + inclusão remota</p>
            </div>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-4xl font-serif font-bold mb-8 text-white">7. IoT & Ambientes Inteligentes</h2>
          <div className="space-y-4 text-gray-200">
            <p>
              <strong>O que é:</strong> Ambiente que se adapta via sensores (luz, som, temperatura).
            </p>
            <div className="p-4 bg-white/5 border border-gold/10 rounded">
              <p className="font-bold text-gold mb-2">💡 Aplicação em Eventos:</p>
              <ul className="space-y-2 text-sm">
                <li>✦ Iluminação que muda com a música automaticamente</li>
                <li>✦ Temperatura ideal em cada zona de evento</li>
                <li>✦ Portas que abrem via reconhecimento facial</li>
                <li>✦ Bebidas refrigeradas via sensor de presença</li>
              </ul>
            </div>
            <div className="p-4 bg-gold/10 border border-gold/20 rounded">
              <p className="font-bold text-gold mb-2">💰 Custo: R$ 12k-35k por evento</p>
              <p className="text-sm">ROI: Experiência fluida + luxo invisível</p>
            </div>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12 p-6 border-l-4 border-gold bg-white/5 rounded">
          <h2 className="text-2xl font-bold text-gold mb-4">🎯 Stack Recomendado para Evento Premium</h2>
          <div className="space-y-3 text-gray-200">
            <p><strong>Budget R$ 50k-100k:</strong> AR + Livestream + AI Chatbot</p>
            <p><strong>Budget R$ 100k-200k:</strong> VR + Hologramas + Mapping + AI</p>
            <p><strong>Budget 200k+:</strong> Stack completo + IoT + Experiência imersiva total</p>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-4xl font-serif font-bold mb-8 text-white">Top 3 Tendências 2025</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-6 bg-white/5 border border-gold/10 rounded">
              <h3 className="font-bold text-gold mb-3 text-lg">1️⃣ Metaverso Events</h3>
              <p className="text-sm text-gray-200">
                Eventos que existem em mundo virtual paralelo. Convidados VR vivem evento premium sem sair de casa.
              </p>
            </div>
            <div className="p-6 bg-white/5 border border-gold/10 rounded">
              <h3 className="font-bold text-gold mb-3 text-lg">2️⃣ NFT Exclusivos</h3>
              <p className="text-sm text-gray-200">
                Ticket NFT que prova presença + acesso futuro a eventos. Colecionável e transferível.
              </p>
            </div>
            <div className="p-6 bg-white/5 border border-gold/10 rounded">
              <h3 className="font-bold text-gold mb-3 text-lg">3️⃣ AI Personalization</h3>
              <p className="text-sm text-gray-200">
                Cada convidado vive experiência diferente customizada. Nível de personalização jamais visto.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="text-center py-12">
          <h2 className="text-3xl font-serif font-bold mb-6 text-white">Quer Levar Seu Evento ao Futuro?</h2>
          <p className="text-gray-300 mb-8">
            Nossa equipe domina todas as tecnologias de ponta para criar eventos que transcendem a realidade.
          </p>
          <a
            href="https://wa.me/5521972522076?text=Quero%20tecnologia%20de%20ponta%20no%20meu%20evento"
            className="inline-block px-8 py-4 bg-gold text-black font-bold rounded-lg hover:bg-yellow-300 transition"
          >
            🚀 Explorar Inovações
          </a>
        </motion.section>
      </motion.div>
    </main>
  )
}
