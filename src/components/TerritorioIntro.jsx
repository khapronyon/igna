import Reveal from './Reveal.jsx'

const IMG = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80'

export default function TerritorioIntro() {
  return (
    <section className="bg-calce-50">
      <div className="grid md:grid-cols-2 items-stretch min-h-[600px]">

        <div className="flex flex-col justify-center px-10 sm:px-16 py-24 space-y-8 text-center md:text-left">
          <Reveal as="h2" className="font-display text-3xl sm:text-5xl text-granito-dark leading-[1.15]">
            Una terra di granito,<br />vento e mare.
          </Reveal>
          <Reveal as="p" delay={1} className="text-granito text-lg leading-relaxed">
            La Gallura nord-orientale è un mosaico di colline tondeggianti,
            rocce scolpite dai millenni, borghi che custodiscono la pietra e
            una costa che si apre su uno dei mari più limpidi del Mediterraneo.
          </Reveal>
          <Reveal as="p" delay={2} className="text-granito text-lg leading-relaxed">
            Da Suldarana, in pochi minuti, si passa dal silenzio della campagna
            alle calette di sabbia bianca, dai sentieri tra il mirto alle rotte
            che portano all'Arcipelago della Maddalena.
          </Reveal>
        </div>

        <Reveal className="relative overflow-hidden min-h-[420px]">
          <img
            src={IMG}
            alt="Gallura"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
        </Reveal>

      </div>
    </section>
  )
}
