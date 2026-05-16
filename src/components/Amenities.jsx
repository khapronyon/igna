import Reveal from './Reveal.jsx'

const amenities = [
  'Cucina completamente attrezzata',
  'Wi-Fi gratuito',
  'Aria condizionata',
  'Riscaldamento',
  'Parcheggio privato',
  'Aia e spazi esterni',
  'Biancheria e asciugamani',
  'Macchina del caffè',
  'Lavatrice',
  'Animali ammessi su richiesta',
]

export default function Amenities() {
  return (
    <section className="bg-calce-100">
      <div className="grid md:grid-cols-2 items-stretch min-h-[500px]">

        <div className="flex flex-col justify-center px-10 sm:px-16 py-24 space-y-6">
          <Reveal as="h2" className="font-display text-3xl sm:text-5xl text-granito-dark leading-[1.15]">
            L'essenziale,<br />curato.
          </Reveal>
          <Reveal as="p" delay={1} className="text-granito text-lg leading-relaxed">
            Tutto ciò che serve per sentirsi a casa, niente di più. Pensato
            per chi cerca silenzio, non distrazioni.
          </Reveal>
        </div>

        <Reveal delay={1} className="flex flex-col justify-center px-10 sm:px-16 py-24">
          <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-5">
            {amenities.map((a) => (
              <li
                key={a}
                className="flex items-start gap-4 text-granito-dark border-b border-granito-light/30 pb-4"
              >
                <span className="font-display text-macchia text-xl leading-none mt-0.5" aria-hidden="true">·</span>
                <span className="text-base">{a}</span>
              </li>
            ))}
          </ul>
        </Reveal>

      </div>
    </section>
  )
}
