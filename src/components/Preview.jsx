import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'

const cards = [
  {
    label: '01',
    title: 'Igna',
    text: 'Un appartamento su due piani con cucina, pensato per chi cerca silenzio, materia e tempo lento.',
    to: '/igna',
    cta: 'La casa',
    img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
  },
  {
    label: '02',
    title: 'Dintorni',
    text: 'La Gallura nord-orientale: arcipelaghi, borghi di granito, calette nascoste e paesaggi nuragici.',
    to: '/dintorni',
    cta: 'I dintorni',
    img: 'https://images.unsplash.com/photo-1530870110042-98b2cb110834?auto=format&fit=crop&w=1200&q=80',
  },
  {
    label: '03',
    title: 'Prenota',
    text: "Date flessibili, ospitalità diretta. Raccontaci il viaggio che immagini e troveremo il momento giusto.",
    to: null,
    href: '#contatti',
    cta: 'Scrivici',
    img: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80',
  },
]

export default function Preview() {
  return (
    <section className="bg-calce-100 py-28 sm:py-36">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <Reveal as="p" className="text-xs tracking-[0.32em] uppercase text-macchia mb-4">
          Tre passi
        </Reveal>
        <Reveal as="h2" delay={1} className="font-display text-4xl sm:text-5xl text-granito-dark max-w-2xl leading-[1.1]">
          La casa, il territorio,<br />il vostro tempo.
        </Reveal>

        <div className="mt-20 grid gap-10 md:grid-cols-3">
          {cards.map((c, i) => {
            const Inner = (
              <>
                <div className="relative overflow-hidden aspect-[4/5] mb-8">
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-granito-dark/10 group-hover:bg-granito-dark/0 transition-colors duration-700" />
                </div>
                <p className="text-xs tracking-[0.32em] uppercase text-macchia mb-3">{c.label}</p>
                <h3 className="font-display text-3xl text-granito-dark mb-4">{c.title}</h3>
                <p className="text-granito leading-relaxed mb-6">{c.text}</p>
                <span className="inline-flex items-center gap-2 text-xs tracking-[0.32em] uppercase text-macchia border-b border-macchia/40 pb-1 group-hover:gap-4 group-hover:border-macchia transition-all duration-500">
                  {c.cta}
                  <span aria-hidden="true">→</span>
                </span>
              </>
            )

            return (
              <Reveal key={c.title} delay={Math.min(i + 1, 3)} className="group">
                {c.to ? (
                  <Link to={c.to} className="block">{Inner}</Link>
                ) : (
                  <a href={c.href} className="block">{Inner}</a>
                )}
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
