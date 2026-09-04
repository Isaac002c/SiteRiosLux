type Review = {
  author: string
  text: string
  source: 'Google'
}

export default function SocialProof({ reviews }: { reviews: Review[] }) {
  if (reviews.length === 0) return null

  return (
    <section className="section-space bg-canvas text-ink" aria-labelledby="social-proof-title">
      <div className="page-shell">
        <p className="eyebrow mb-5">Avaliações verificadas</p>
        <h2 id="social-proof-title" className="max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">
          Experiências contadas por quem viveu cada projeto.
        </h2>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {reviews.map((review) => (
            <figure key={`${review.author}-${review.text}`} className="border border-ink/15 p-7 sm:p-8">
              <blockquote className="text-lg leading-relaxed text-ink/75">“{review.text}”</blockquote>
              <figcaption className="mt-7 text-sm text-ink/70">
                {review.author} · avaliação no {review.source}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
