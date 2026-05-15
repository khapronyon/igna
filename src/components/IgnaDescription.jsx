import Reveal from './Reveal.jsx'

export default function IgnaDescription() {
  return (
    <section className="bg-calce-50 py-28 sm:py-40">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 grid gap-20 md:grid-cols-2 items-center">
        <Reveal className="order-2 md:order-1">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80"
              alt="Interno rustico"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>

        <div className="order-1 md:order-2 space-y-8">
          <Reveal as="p" className="text-xs tracking-[0.32em] uppercase text-macchia">
            La casa
          </Reveal>
          <Reveal as="h2" delay={1} className="font-display text-4xl sm:text-5xl text-granito-dark leading-[1.1]">
            Due piani, un respiro lungo.
          </Reveal>
          <Reveal as="p" delay={2} className="text-granito text-lg leading-relaxed">
            Al piano terra una cucina vissuta, un ampio soggiorno e una zona
            pranzo che si apre sull'aia. Travi in legno, pavimenti in cotto e
            pareti chiare richiamano il rigore della tradizione gallurese,
            senza rinunciare al comfort.
          </Reveal>
          <Reveal as="p" delay={3} className="text-granito text-lg leading-relaxed">
            Al piano superiore le camere e il bagno, con finestre che incorniciano
            le colline e i graniti antichi. Ogni dettaglio nasce per accompagnare
            il ritmo lento di una vacanza autentica.
          </Reveal>
        </div>
      </div>
    </section>
  )
}
