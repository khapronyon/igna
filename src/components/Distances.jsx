import Reveal from './Reveal.jsx'

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
    <section className="bg-calce-50 py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <Reveal as="h2" className="font-display text-3xl sm:text-5xl text-granito-dark leading-[1.1] text-center mb-16">
          Vicini a tutto,<br />lontani dal rumore.
        </Reveal>

        <ul>
          {distances.map((d, i) => (
            <Reveal
              as="li"
              key={d.place}
              delay={Math.min((i % 3) + 1, 3)}
              className="grid grid-cols-12 gap-2 items-baseline border-b border-granito-light/30 py-6"
            >
              <span className="col-span-1 text-xs tracking-[0.28em] uppercase text-macchia hidden sm:block">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="col-span-12 sm:col-span-7 font-display text-xl sm:text-3xl text-granito-dark text-center sm:text-left">
                {d.place}
              </span>
              <span className="hidden sm:block col-span-2 text-granito text-sm sm:text-base">
                {d.km}
              </span>
              <span className="hidden sm:block col-span-2 text-granito text-sm sm:text-base text-right tracking-wide">
                {d.time}
              </span>
              <div className="col-span-12 sm:hidden flex justify-center gap-4 text-sm text-granito mt-1">
                <span>{d.km}</span>
                <span>·</span>
                <span>{d.time}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
