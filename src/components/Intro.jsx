import Reveal from './Reveal.jsx'

const IMG = `${import.meta.env.BASE_URL}images/Igna/home%201.jpeg`

export default function Intro() {
  return (
    <section id="scopri" className="bg-calce-50">
      <div className="grid md:grid-cols-2 items-stretch min-h-[600px]">

        <Reveal className="relative overflow-hidden min-h-[420px]">
          <img
            src={IMG}
            alt="Igna Country Retreat"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ transform: 'rotate(1.2deg) scale(1.08)' }}
            loading="eager"
          />
        </Reveal>

        <div className="flex flex-col justify-center px-10 sm:px-16 py-24 space-y-8 bg-calce-50">
          <Reveal as="h2" delay={1} className="font-display text-3xl sm:text-5xl text-granito-dark leading-[1.15]">
            Un country retreat<br />nel cuore della Gallura.
          </Reveal>
          <Reveal as="p" delay={2} className="text-granito text-lg leading-relaxed">
            Nella campagna di Suldarana, dove il granito affiora dalla terra e
            la macchia mediterranea profuma di mirto e lentisco, due piani
            raccolgono un'idea semplice di ospitalità. Pietra a vista, legno
            chiaro, finestre che inquadrano l'orizzonte gallurese.
          </Reveal>
          <Reveal as="p" delay={3} className="text-granito text-lg leading-relaxed">
            A pochi minuti di auto dalla Costa Smeralda, ma a un mondo di
            distanza dalla sua frenesia.
          </Reveal>
          <Reveal delay={3}>
            <a
              href="#scopri-igna"
              className="inline-flex items-center gap-3 text-macchia text-xs tracking-[0.32em] uppercase border-b border-macchia/40 pb-2 hover:border-macchia hover:gap-5 transition-all duration-500"
            >
              Scopri Igna
              <span aria-hidden="true">→</span>
            </a>
          </Reveal>
        </div>

      </div>
    </section>
  )
}
