import Reveal from './Reveal.jsx'

const IMG = 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80'

export default function IgnaDescription() {
  return (
    <section className="bg-calce-50">
      <div className="grid md:grid-cols-2 items-stretch min-h-[600px]">

        <Reveal className="relative overflow-hidden min-h-[420px]">
          <img
            src={IMG}
            alt="Interno Igna"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
        </Reveal>

        <div className="flex flex-col justify-center px-10 sm:px-16 py-24 space-y-8 bg-calce-50">
          <Reveal as="h2" delay={1} className="font-display text-3xl sm:text-5xl text-granito-dark leading-[1.15]">
            Due piani,<br />un respiro lungo.
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
