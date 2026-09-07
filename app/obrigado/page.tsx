import ThankYouActions from '@/components/ThankYouActions'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'Solicitação recebida | Rios Lux',
  description: 'Confirmação de recebimento da sua solicitação à Rios Lux.',
  path: '/obrigado',
  index: false,
  shareImage: false,
})

export default function Obrigado() {
  return (
    <section className="flex min-h-[calc(100svh-5rem)] items-center bg-ink">
      <div className="page-shell py-20">
        <div className="max-w-4xl border-l border-brass/60 pl-6 sm:pl-10">
          <p className="eyebrow mb-6">Solicitação enviada</p>
          <h1 className="text-balance font-serif text-5xl leading-[0.96] text-white sm:text-6xl lg:text-8xl">
            Recebemos sua solicitação.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-sand/75 sm:text-xl">
            Nossa equipe analisará as informações e entrará em contato para entender os próximos passos.
          </p>
          <ThankYouActions />
        </div>
      </div>
    </section>
  )
}
