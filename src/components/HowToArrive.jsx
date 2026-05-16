import Reveal from './Reveal.jsx'

const steps = [
  {
    label: 'In aereo',
    text: "L'aeroporto di Olbia Costa Smeralda dista circa 19 km, raggiungibile in 25 minuti di auto. È lo scalo principale per la Gallura.",
  },
  {
    label: 'In auto',
    text: 'Da Olbia si segue la SS133 in direzione Tempio Pausania, uscendo verso Sant\'Antonio di Gallura. Strade asfaltate e ben segnalate fino alla casa.',
  },
  {
    label: 'Consigliato',
    text: 'Il noleggio di un\'auto è fortemente consigliato: permette di muoversi con libertà tra costa, entroterra e borghi, senza dipendere da orari o trasferimenti.',
  },
]

export default function HowToArrive() {
  return (
    <section className="bg-calce-50">
      <div className="grid md:grid-cols-2 items-stretch min-h-[560px]">

        <div className="flex flex-col justify-center px-10 sm:px-16 py-24 space-y-4">
          <Reveal as="h2" className="font-display text-3xl sm:text-5xl text-granito-dark leading-[1.15]">
            Brevi<br />indicazioni.
          </Reveal>
        </div>

        <div className="flex flex-col justify-center px-10 sm:px-16 py-24 space-y-10 bg-calce-100">
          {steps.map((s, i) => (
            <Reveal key={s.label} delay={Math.min(i + 1, 3)} className="border-l-2 border-macchia/30 pl-6">
              <p className="text-xs tracking-[0.28em] uppercase text-macchia mb-3">{s.label}</p>
              <p className="text-granito-dark text-lg leading-relaxed">{s.text}</p>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
