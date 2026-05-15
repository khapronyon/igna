import { useEffect, useState } from 'react'

const HERO_IMG =
  'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=2000&q=80'

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
        <p className="text-xs sm:text-sm tracking-[0.4em] uppercase text-calce/85 mb-6 reveal is-visible">
          Suldarana · Gallura · Sardegna
        </p>
        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl text-calce leading-[1.05] max-w-4xl reveal is-visible reveal-delay-1">
          Dove la campagna<br />incontra il granito.
        </h1>
        <p className="mt-8 max-w-xl text-calce/85 text-base sm:text-lg leading-relaxed reveal is-visible reveal-delay-2">
          Un rifugio sospeso tra macchia mediterranea e silenzio, a pochi minuti
          dal mare della Costa Smeralda.
        </p>
        <div className="mt-12 reveal is-visible reveal-delay-3">
          <a
            href="#scopri"
            className="inline-flex items-center gap-3 text-calce text-xs tracking-[0.32em] uppercase border-b border-calce/60 pb-2 hover:border-calce hover:gap-5 transition-all duration-500"
          >
            Scopri Igna
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-calce/60">
        <span className="text-[0.65rem] tracking-[0.4em] uppercase">Scroll</span>
        <span className="w-px h-12 bg-calce/40 animate-pulse" />
      </div>
    </section>
  )
}
