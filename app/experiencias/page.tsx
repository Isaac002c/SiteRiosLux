import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const concepts = [
  {
    category: 'Corporate',
    title: 'Encontro executivo com atmosfera reservada',
    description: 'Um formato para conversas estratégicas, hospitalidade e atenção ao ritmo dos convidados.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=82',
  },
  {
    category: 'Private',
    title: 'Celebração à mesa',
    description: 'Gastronomia, ambientação e serviço coordenados em torno de uma ocasião pessoal.',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=82',
  },
  {
    category: 'Lifestyle',
    title: 'Hospitalidade no Rio',
    description: 'Uma jornada construída com curadoria local, logística e momentos pensados em sequência.',
    image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1600&q=82',
  },
  {
    category: 'Corporate',
    title: 'Lançamento com narrativa de marca',
    description: 'Conteúdo, espaço, audiovisual e recepção alinhados a uma mensagem central.',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1600&q=82',
  },
  {
    category: 'Private',
    title: 'Cerimônia contemporânea',
    description: 'Uma composição sensível entre cenário, fluxo, serviço e celebração.',
    image: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1600&q=82',
  },
  {
    category: 'Lifestyle',
    title: 'Jantar de boas-vindas',
    description: 'Um primeiro encontro capaz de definir o tom de toda a experiência.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=82',
  },
]

export default function Experiencias() {
  return (
    <div>
      <section className="section-space bg-canvas text-ink">
        <div className="page-shell pt-10 sm:pt-16">
          <p className="eyebrow mb-6">Conceitos de experiência</p>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <h1 className="max-w-5xl text-balance font-serif text-5xl leading-[0.98] sm:text-6xl lg:text-8xl">
              Possibilidades para imaginar o que ainda não existe.
            </h1>
            <div>
              <p className="max-w-xl text-lg leading-relaxed text-ink/68">
                Referências de atmosferas e formatos que podem orientar uma conversa inicial com a Rios Lux.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink/50">
                Todas as imagens abaixo são referências visuais de banco de imagens e não representam trabalhos realizados pela Rios Lux.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-canvas pb-24 text-ink lg:pb-32">
        <div className="page-shell grid gap-x-6 gap-y-12 lg:grid-cols-2">
          {concepts.map((concept, index) => (
            <article
              key={concept.title}
              data-track-event="view_experience"
              data-track-label={concept.category.toLowerCase()}
              className={index % 3 === 0 ? 'lg:col-span-2' : ''}
            >
              <div className={`relative overflow-hidden bg-ink/5 ${index % 3 === 0 ? 'aspect-[16/7]' : 'aspect-[4/3]'}`}>
                <Image
                  src={concept.image}
                  alt={`Imagem de referência: ${concept.title.toLowerCase()}`}
                  fill
                  sizes={index % 3 === 0 ? '100vw' : '(min-width: 1024px) 50vw, 100vw'}
                  className="object-cover transition duration-700 hover:scale-[1.02]"
                />
              </div>
              <div className="grid gap-4 border-b border-ink/20 py-6 sm:grid-cols-[0.3fr_1fr]">
                <p className="eyebrow">{concept.category}</p>
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl">{concept.title}</h2>
                  <p className="mt-3 max-w-xl leading-relaxed text-ink/62">{concept.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-space bg-forest">
        <div className="page-shell grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="eyebrow mb-5">Seu ponto de partida</p>
            <h2 className="max-w-4xl font-serif text-4xl leading-tight sm:text-6xl">Uma referência não é uma fórmula. Sua experiência começa do zero.</h2>
          </div>
          <Link href="/contato" data-track-event="click_curadoria" data-track-label="experiences" className="button-primary">
            Solicitar curadoria <ArrowRight className="ml-2" size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
