import Reveal from './Reveal.jsx'

export default function Intro() {
  return (
    <section id="scopri" className="bg-calce-50 py-28 sm:py-40">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 grid gap-16 md:grid-cols-12 items-start">
        <Reveal className="md:col-span-4">
          <p className="text-xs tracking-[0.32em] uppercase text-macchia">
            Il luogo
          </p>
          <div className="mt-6 w-12 h-px bg-granito-light" />
        </Reveal>

        <div className="md:col-span-8 space-y-8">
          <Reveal as="h2" delay={1} className="font-display text-3xl sm:text-5xl text-granito-dark leading-[1.15]">
            Igna non è una casa di vacanza. È un ritorno.
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
        </div>
      </div>
    </section>
  )
}
