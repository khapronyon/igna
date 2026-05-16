import Reveal from './Reveal.jsx'
import { Link } from 'react-router-dom'

const IMG = `${import.meta.env.BASE_URL}images/Igna/home%202.jpeg`

export default function IntroDintorni() {
  return (
    <section className="bg-calce-100">
      <div className="grid md:grid-cols-2 items-stretch min-h-[600px]">

        <div className="flex flex-col justify-center px-10 sm:px-16 py-14 sm:py-20 space-y-8 order-2 md:order-1 text-center md:text-left">
          <Reveal as="h2" delay={1} className="font-display text-3xl sm:text-5xl text-granito-dark leading-[1.15]">
            Il silenzio di casa,<br />il mondo<br className="md:hidden" /> a portata di mano.
          </Reveal>
          <Reveal as="p" delay={2} className="text-granito text-lg leading-relaxed">
            Igna è un rifugio in cui rallentare, ma non isolarsi. Dal cancello
            di casa, in pochi minuti sei sulla Costa Smeralda, sulle spiagge
            dell'Arcipelago della Maddalena o nei borghi di granito dell'entroterra
            gallurese.
          </Reveal>
          <Reveal as="p" delay={3} className="text-granito text-lg leading-relaxed">
            Ogni mattina puoi scegliere: restare tra la macchia e il silenzio,
            o partire verso il mare.
          </Reveal>
          <Reveal delay={3}>
            <Link
              to="/dintorni"
              className="inline-flex items-center gap-3 text-macchia text-xs tracking-[0.32em] uppercase border-b border-macchia/40 pb-2 hover:border-macchia hover:gap-5 transition-all duration-500"
            >
              Scopri i dintorni
              <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>

        <Reveal className="relative overflow-hidden min-h-[420px] order-1 md:order-2">
          <img
            src={IMG}
            alt="I dintorni di Igna"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </Reveal>

      </div>
    </section>
  )
}
