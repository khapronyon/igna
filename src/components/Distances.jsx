import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'

const distances = [
  { place: 'Aeroporto di Olbia', km: '19 km', time: '~ 25 min' },
  { place: 'Arzachena', km: '12 km', time: '~ 15 min' },
  { place: 'Porto Cervo · Costa Smeralda', km: '32 km', time: '~ 35 min' },
  { place: 'Palau · imbarco La Maddalena', km: '22 km', time: '~ 25 min' },
  { place: 'Santa Teresa Gallura', km: '29 km', time: '~ 35 min' },
  { place: 'Lago del Liscia', km: 'pochi km', time: 'breve tragitto' },
]

export default function Distances() {
  return (
    <section className="bg-calce-100 py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <SectionHeader
          eyebrow="Distanze in auto"
          title="Vicini a tutto, lontani dal rumore."
          subtitle="Da Sant'Antonio di Gallura il mare, gli aeroporti e i porti sono raggiungibili in pochi minuti, ma ogni rientro è un ritorno alla quiete."
        />

        <div className="mt-16">
          <ul>
            {distances.map((d, i) => (
              <Reveal
                as="li"
                key={d.place}
                delay={Math.min((i % 3) + 1, 3)}
                className="grid grid-cols-12 gap-4 items-baseline border-b border-granito-light/30 py-6"
              >
                <span className="col-span-1 text-xs tracking-[0.28em] uppercase text-macchia">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="col-span-7 sm:col-span-6 font-display text-2xl sm:text-3xl text-granito-dark">
                  {d.place}
                </span>
                <span className="col-span-2 sm:col-span-2 text-granito text-sm sm:text-base text-right sm:text-left">
                  {d.km}
                </span>
                <span className="col-span-2 sm:col-span-3 text-granito text-sm sm:text-base text-right tracking-wide">
                  {d.time}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
