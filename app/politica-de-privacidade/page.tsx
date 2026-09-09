import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { createPageMetadata } from '@/lib/metadata'

const title = 'Política de Privacidade | Rios Lux'
const description = 'Entenda como a Rios Lux trata os dados enviados em seus canais digitais e como exercer seus direitos de privacidade.'

export const metadata = createPageMetadata({
  title,
  description,
  path: '/politica-de-privacidade',
})

const sections = [
  {
    title: '1. Dados tratados',
    content: 'Podemos tratar os dados informados voluntariamente nos formulários, como nome, empresa, telefone, e-mail e informações sobre o evento. Também podemos registrar URL de origem, data e hora, identificadores de campanha e parâmetros UTM quando presentes.',
  },
  {
    title: '2. Finalidades',
    content: 'Usamos esses dados para analisar solicitações, responder contatos, elaborar propostas, organizar o relacionamento comercial, proteger o formulário contra abuso e mensurar a efetividade de campanhas quando as ferramentas correspondentes estiverem configuradas.',
  },
  {
    title: '3. Bases legais',
    content: 'O tratamento ocorre conforme a finalidade e o contexto, especialmente para procedimentos preliminares relacionados a uma possível contratação, cumprimento de obrigações legais, exercício regular de direitos, legítimo interesse e consentimento quando aplicável.',
  },
  {
    title: '4. Compartilhamento e operadores',
    content: 'Os dados podem ser processados por fornecedores necessários à operação do site, hospedagem, segurança, armazenamento e gestão do relacionamento. Parceiros envolvidos em um projeto recebem apenas as informações necessárias à execução do escopo, quando aplicável.',
  },
  {
    title: '5. Armazenamento e segurança',
    content: 'Adotamos medidas técnicas e organizacionais proporcionais para reduzir riscos de acesso indevido, perda ou alteração. Os dados são mantidos pelo período necessário ao atendimento, à relação comercial, ao cumprimento de obrigações e à proteção de direitos.',
  },
  {
    title: '6. Cookies, métricas e campanhas',
    content: 'O site pode usar tecnologias de mensuração quando configuradas, inclusive para compreender origem de acessos e conversões. Identificadores de campanha, como UTMs, gclid, gbraid e wbraid, podem ser associados à solicitação enviada para análise de desempenho comercial.',
  },
  {
    title: '7. Seus direitos',
    content: 'Nos termos da LGPD, você pode solicitar confirmação de tratamento, acesso, correção, anonimização, bloqueio, eliminação, portabilidade e informações sobre compartilhamento, observadas as hipóteses e limitações legais.',
  },
]

export default function PoliticaDePrivacidade() {
  return (
    <article className="section-space bg-canvas text-ink">
      <div className="page-shell pt-8 sm:pt-12">
        <header className="max-w-4xl border-b border-ink/20 pb-10">
          <p className="eyebrow mb-6">Privacidade e proteção de dados</p>
          <h1 className="text-balance font-serif text-5xl leading-[0.98] sm:text-6xl lg:text-7xl">Política de Privacidade.</h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-ink/68">
            Esta política explica como a Rios Lux utiliza os dados pessoais recebidos por seus canais digitais para atendimento de solicitações e relacionamento comercial.
          </p>
          <p className="mt-5 text-sm text-ink/55">Última atualização: 8 de setembro de 2026.</p>
        </header>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <aside>
            <p className="eyebrow mb-4">Controladora</p>
            <p className="font-serif text-2xl">Rios Lux</p>
            <a href={`mailto:${siteConfig.email}`} data-track-event="email_click" data-track-label="privacy" className="mt-4 inline-block break-all text-sm text-brass-dark underline underline-offset-4">
              {siteConfig.email}
            </a>
          </aside>

          <div className="divide-y divide-ink/20 border-y border-ink/20">
            {sections.map((section) => (
              <section key={section.title} className="py-8">
                <h2 className="font-serif text-3xl">{section.title}</h2>
                <p className="mt-5 leading-8 text-ink/70">{section.content}</p>
              </section>
            ))}

            <section className="py-8">
              <h2 className="font-serif text-3xl">8. Contato</h2>
              <p className="mt-5 leading-8 text-ink/70">
                Para dúvidas ou solicitações relacionadas a dados pessoais, escreva para{' '}
                <a href={`mailto:${siteConfig.email}`} className="font-medium text-brass-dark underline underline-offset-4">{siteConfig.email}</a>.
                Para iniciar um projeto, use nossa <Link href="/contato" className="font-medium text-brass-dark underline underline-offset-4">página de contato</Link>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </article>
  )
}
