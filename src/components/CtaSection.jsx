import Reveal from './Reveal.jsx'

export default function CtaSection() {
  return (
    <section className="bg-calce-50 py-14 sm:py-20">
      <div className="max-w-3xl mx-auto px-6 sm:px-10 text-center">
        <Reveal as="h2" className="font-display text-4xl sm:text-5xl text-granito-dark leading-[1.1]">
          La base ideale<br />per vivere<br className="md:hidden" /> la Costa Smeralda.
        </Reveal>
        <Reveal as="p" delay={1} className="mt-8 text-granito text-lg leading-relaxed">
          Porto Cervo, le calette dell'Arcipelago della Maddalena, i ristoranti
          di Arzachena: tutto a meno di mezz'ora da Igna. La sera si torna in un
          posto tranquillo, immerso nella natura, dove il silenzio della campagna
          gallurese rende ogni giornata ancora più bella.
        </Reveal>
        <Reveal delay={2} className="mt-12">
          <a
            href="#contatti"
            className="inline-flex items-center gap-3 text-macchia text-xs tracking-[0.32em] uppercase border-b border-macchia/40 pb-2 hover:border-macchia hover:gap-5 transition-all duration-500"
          >
            Prenota
            <span aria-hidden="true">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
