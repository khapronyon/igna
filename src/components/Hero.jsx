import { useEffect, useState } from 'react'

const HERO_IMG = `${import.meta.env.BASE_URL}images/Igna/hero%20home.jpeg`

export default function Hero() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * 0.35)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: `url(${HERO_IMG})`,
          transform: `translate3d(0, ${offset}px, 0) scale(1.08)`,
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-granito-dark/40 via-granito-dark/25 to-granito-dark/70" />

      <div className="relative h-full max-w-7xl mx-auto px-6 sm:px-10 flex flex-col justify-end pb-24 sm:pb-32">
        <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl text-calce leading-[1.3] max-w-2xl animate-[fadeIn_1.4s_ease-out_forwards]">
          Un rifugio immerso nella macchia mediterranea,<br />
          a due passi dalla Costa Smeralda.
        </h1>
        <div className="mt-12 reveal is-visible reveal-delay-3">
          <a
            href="#contatti"
            className="inline-flex items-center gap-3 text-calce text-xs tracking-[0.32em] uppercase border-b border-calce/60 pb-2 hover:border-calce hover:gap-5 transition-all duration-500"
          >
            Prenota
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
