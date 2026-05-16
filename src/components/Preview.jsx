import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'

const BASE = import.meta.env.BASE_URL

const cards = [
  {
    title: 'La casa',
    text: 'Un appartamento su due piani con cucina, pensato per chi cerca silenzio, materia e tempo lento.',
    to: '/igna',
    cta: 'Scopri la casa',
    img: `${BASE}images/Igna/p1.jpeg`,
  },
  {
    title: 'Il territorio',
    text: 'La Gallura nord-orientale: arcipelaghi, borghi di granito, calette nascoste e paesaggi nuragici.',
    to: '/dintorni',
    cta: 'Scopri i dintorni',
    img: `${BASE}images/Igna/p2.jpeg`,
  },
  {
    title: 'La tua vacanza',
    text: 'Date flessibili, ospitalità diretta. Raccontaci il viaggio che immagini e troveremo il momento giusto.',
    href: '#contatti',
    cta: 'Prenota',
    img: null,
  },
]

export default function Preview() {
  return (
    <section className="bg-calce-100 pt-20 sm:pt-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <h2 className="font-display text-4xl sm:text-5xl text-granito-dark text-center leading-[1.1] mb-20">
          La casa, il territorio,<br />la tua vacanza.
        </h2>
      </div>

      <div className="grid md:grid-cols-3 min-h-[520px]">
        {cards.map((c, i) => {
          const Inner = (
            <div className="relative h-full min-h-[520px] flex flex-col overflow-hidden group">
              {c.img && (
                <div className="absolute inset-0">
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-granito-dark/40 group-hover:bg-granito-dark/30 transition-colors duration-700" />
                </div>
              )}

              <div className={`relative z-10 flex flex-col justify-end h-full p-10 space-y-4 ${!c.img ? 'bg-calce-50' : ''}`}>
                <Reveal as="h3" delay={Math.min(i + 1, 3)} className={`font-display text-3xl leading-tight ${c.img ? 'text-calce' : 'text-granito-dark'}`}>
                  {c.title}
                </Reveal>
                <Reveal as="p" delay={Math.min(i + 1, 3)} className={`text-base leading-relaxed ${c.img ? 'text-calce/85' : 'text-granito'}`}>
                  {c.text}
                </Reveal>
                <Reveal delay={Math.min(i + 1, 3)}>
                  <span className={`inline-flex items-center gap-2 text-xs tracking-[0.32em] uppercase border-b pb-1 group-hover:gap-4 transition-all duration-500 ${
                    c.img
                      ? 'text-calce border-calce/50 group-hover:border-calce'
                      : 'text-macchia border-macchia/40 group-hover:border-macchia'
                  }`}>
                    {c.cta}
                    <span aria-hidden="true">→</span>
                  </span>
                </Reveal>
              </div>
            </div>
          )

          return c.href ? (
            <a key={c.title} href={c.href} className="block">{Inner}</a>
          ) : (
            <Link key={c.title} to={c.to} className="block">{Inner}</Link>
          )
        })}
      </div>
    </section>
  )
}
