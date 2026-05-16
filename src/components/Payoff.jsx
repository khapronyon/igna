import Reveal from './Reveal.jsx'

export default function Payoff() {
  return (
    <section className="bg-calce-50 py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-6 sm:px-10 text-center">
        <Reveal as="h2" className="font-display text-4xl sm:text-6xl text-granito-dark leading-[1.1]">
          Il tuo ritiro in Gallura
        </Reveal>
        <Reveal as="p" delay={1} className="mt-8 text-granito text-lg leading-relaxed">
          Igna Country Retreat è un appartamento su due piani immerso nella
          campagna gallurese, a Suldarana, nel cuore della Gallura nord-orientale.
          Un posto semplice e autentico, da cui raggiungere in pochi minuti le
          spiagge della Costa Smeralda, i borghi di granito e le acque
          dell'Arcipelago della Maddalena.
        </Reveal>
      </div>
    </section>
  )
}
