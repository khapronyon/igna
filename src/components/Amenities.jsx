import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'

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
    <section className="bg-calce-50 py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 grid gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <SectionHeader
            eyebrow="Comfort"
            title="L'essenziale, curato."
            subtitle="Tutto ciò che serve per sentirsi a casa, niente di più. Pensato per chi cerca silenzio, non distrazioni."
          />
        </div>

        <Reveal className="md:col-span-7">
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
