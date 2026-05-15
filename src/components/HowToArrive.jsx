import Reveal from './Reveal.jsx'

export default function HowToArrive() {
  return (
    <section className="bg-macchia-dark text-calce py-28 sm:py-36">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 grid gap-16 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <p className="text-xs tracking-[0.32em] uppercase text-calce/70 mb-5">
            Come arrivare
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-calce leading-[1.1]">
            Brevi indicazioni.
          </h2>
        </Reveal>

        <div className="md:col-span-8 space-y-10">
          <Reveal className="border-l border-calce/25 pl-6">
            <p className="text-xs tracking-[0.28em] uppercase text-calce/70 mb-3">In aereo</p>
            <p className="text-calce/90 text-lg leading-relaxed">
              L'aeroporto di Olbia Costa Smeralda dista circa 19 km, raggiungibile in
              25 minuti di auto. È lo scalo principale per la Gallura.
            </p>
          </Reveal>

          <Reveal delay={1} className="border-l border-calce/25 pl-6">
            <p className="text-xs tracking-[0.28em] uppercase text-calce/70 mb-3">In auto</p>
            <p className="text-calce/90 text-lg leading-relaxed">
              Da Olbia si segue la SS133 in direzione Tempio Pausania, uscendo verso
              Sant'Antonio di Gallura. Strade asfaltate e ben segnalate fino alla
              casa.
            </p>
          </Reveal>

          <Reveal delay={2} className="border-l border-calce/25 pl-6">
            <p className="text-xs tracking-[0.28em] uppercase text-calce/70 mb-3">Consigliato</p>
            <p className="text-calce/90 text-lg leading-relaxed">
              Il noleggio di un'auto è fortemente consigliato: permette di muoversi
              con libertà tra costa, entroterra e borghi, senza dipendere da orari o
              trasferimenti.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
