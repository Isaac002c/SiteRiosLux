'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'

type Possibility = {
  title: string
  category: string
  image: string
}

type PossibilitiesCarouselProps = {
  possibilities: Possibility[]
}

export default function PossibilitiesCarousel({ possibilities }: PossibilitiesCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const slideRefs = useRef<Array<HTMLElement | null>>([])
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  const goTo = useCallback(
    (index: number) => {
      const track = trackRef.current

      if (!track || possibilities.length === 0) return

      const targetIndex = (index + possibilities.length) % possibilities.length
      track.scrollTo({
        left: targetIndex * track.clientWidth,
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      })
      setActiveIndex(targetIndex)
    },
    [possibilities.length, prefersReducedMotion],
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches)

    updatePreference()
    mediaQuery.addEventListener('change', updatePreference)

    return () => mediaQuery.removeEventListener('change', updatePreference)
  }, [])

  useEffect(() => {
    const track = trackRef.current

    if (!track) return

    const slideObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue

          const index = slideRefs.current.indexOf(entry.target as HTMLElement)
          if (index >= 0) setActiveIndex(index)
        }
      },
      { root: track, threshold: 0.65 },
    )

    slideRefs.current.forEach((slide) => {
      if (slide) slideObserver.observe(slide)
    })

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.25 },
    )
    visibilityObserver.observe(track)

    return () => {
      slideObserver.disconnect()
      visibilityObserver.disconnect()
    }
  }, [possibilities.length])

  useEffect(() => {
    if (isPaused || !isVisible || prefersReducedMotion || possibilities.length < 2) return

    const timer = window.setInterval(() => {
      goTo(activeIndex + 1)
    }, 6000)

    return () => window.clearInterval(timer)
  }, [activeIndex, goTo, isPaused, isVisible, possibilities.length, prefersReducedMotion])

  if (possibilities.length === 0) return null

  return (
    <div
      aria-label="Possibilidades Rios Lux"
      aria-roledescription="carrossel"
      role="region"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false)
      }}
    >
      <div className="relative overflow-hidden bg-ink">
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          onPointerDown={() => setIsPaused(true)}
          onPointerUp={() => setIsPaused(false)}
          onPointerCancel={() => setIsPaused(false)}
        >
          {possibilities.map((possibility, index) => (
            <article
              ref={(element) => {
                slideRefs.current[index] = element
              }}
              key={possibility.title}
              aria-label={`${index + 1} de ${possibilities.length}: ${possibility.title}`}
              aria-roledescription="slide"
              className="w-full shrink-0 snap-start"
              role="group"
            >
              <Link
                href="/experiencias"
                data-track-event="experience_view"
                data-track-label={possibility.category.toLowerCase()}
                className="group relative block min-h-[27rem] sm:min-h-[34rem] lg:min-h-[40rem]"
                tabIndex={index === activeIndex ? 0 : -1}
              >
                <Image
                  src={possibility.image}
                  alt={`Referência visual para ${possibility.title.toLowerCase()}`}
                  fill
                  sizes="(min-width: 1440px) 1344px, (min-width: 640px) calc(100vw - 4rem), calc(100vw - 2.5rem)"
                  className="object-cover transition duration-700 group-hover:scale-[1.025]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-ink/10" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-9 lg:p-12">
                  <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-brass">
                    {possibility.category} · referência visual
                  </p>
                  <h3 className="max-w-xl font-serif text-3xl text-white sm:text-4xl">{possibility.title}</h3>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {possibilities.length > 1 ? (
          <div className="absolute right-4 top-4 z-10 flex gap-2 sm:right-6 sm:top-6">
            <button
              type="button"
              onClick={() => goTo(activeIndex - 1)}
              className="grid size-12 place-items-center border border-white/30 bg-ink/55 text-white backdrop-blur-sm transition hover:border-brass hover:bg-ink"
              aria-label="Ver possibilidade anterior"
            >
              <ArrowLeft aria-hidden="true" size={18} />
            </button>
            <button
              type="button"
              onClick={() => goTo(activeIndex + 1)}
              className="grid size-12 place-items-center border border-white/30 bg-ink/55 text-white backdrop-blur-sm transition hover:border-brass hover:bg-ink"
              aria-label="Ver próxima possibilidade"
            >
              <ArrowRight aria-hidden="true" size={18} />
            </button>
          </div>
        ) : null}
      </div>

      {possibilities.length > 1 ? (
        <div className="mt-5 flex items-center justify-between gap-6 border-t border-ink/15 pt-5">
          <p className="text-xs uppercase tracking-[0.2em] text-ink/55" aria-live="polite">
            {String(activeIndex + 1).padStart(2, '0')} / {String(possibilities.length).padStart(2, '0')}
          </p>
          <div className="flex items-center gap-2" aria-label="Selecionar possibilidade">
            {possibilities.map((possibility, index) => (
              <button
                key={possibility.title}
                type="button"
                onClick={() => goTo(index)}
                className="group grid min-h-11 min-w-11 place-items-center"
                aria-label={`Ver ${possibility.title.toLowerCase()}`}
                aria-current={index === activeIndex ? 'true' : undefined}
              >
                <span
                  className={`block h-px transition-all ${index === activeIndex ? 'w-9 bg-brass-dark' : 'w-5 bg-ink/35 group-hover:bg-ink/70'}`}
                />
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}
