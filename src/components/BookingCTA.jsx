import Reveal from './Reveal.jsx'
import Button from './Button.jsx'

const BG = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80'

export default function BookingCTA() {
  return (
    <section id="contatti" className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${BG})` }}
      />
      <div className="absolute inset-0 -z-10 bg-granito-dark/65" />

      <div className="max-w-3xl mx-auto px-6 sm:px-10 py-28 sm:py-40 text-center">
        <Reveal as="p" className="text-xs tracking-[0.4em] uppercase text-calce/85 mb-6">
          Prenota
        </Reveal>
        <Reveal as="h2" delay={1} className="font-display text-4xl sm:text-6xl text-calce leading-[1.1]">
          Una stagione, una settimana,<br />una pausa che cercavi.
        </Reveal>
        <Reveal as="p" delay={2} className="mt-8 text-calce/85 text-lg leading-relaxed">
          Scriveteci per disponibilità, tariffe e per raccontarci che tipo di
          soggiorno immaginate. Vi risponderemo personalmente.
        </Reveal>
        <Reveal delay={3} className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="#contatti" variant="secondary">
            Contattaci
          </Button>
          <Button href="#contatti" variant="ghost" className="text-calce hover:text-calce/80">
            Disponibilità
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
