import Reveal from './Reveal.jsx'

export default function TerritorioIntro() {
  return (
    <section className="bg-calce-50 py-28 sm:py-40">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 grid gap-16 md:grid-cols-12 items-start">
        <Reveal className="md:col-span-4">
          <p className="text-xs tracking-[0.32em] uppercase text-macchia">
            La Gallura
          </p>
          <div className="mt-6 w-12 h-px bg-granito-light" />
        </Reveal>

        <div className="md:col-span-8 space-y-8">
          <Reveal as="h2" delay={1} className="font-display text-3xl sm:text-5xl text-granito-dark leading-[1.15]">
            Una terra di granito, vento e mare.
          </Reveal>
          <Reveal as="p" delay={2} className="text-granito text-lg leading-relaxed">
            La Gallura nord-orientale è un mosaico di colline tondeggianti, rocce
            scolpite dai millenni, borghi che custodiscono la pietra e una costa
            che si apre su uno dei mari più limpidi del Mediterraneo.
          </Reveal>
          <Reveal as="p" delay={3} className="text-granito text-lg leading-relaxed">
            Da Suldarana, in pochi minuti, si passa dal silenzio della campagna
            alle calette di sabbia bianca, dai sentieri tra il mirto alle rotte
            che portano all'Arcipelago della Maddalena.
          </Reveal>
        </div>
      </div>
    </section>
  )
}
