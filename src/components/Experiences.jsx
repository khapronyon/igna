import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'

const experiences = [
  {
    title: 'Arcipelago della Maddalena',
    text: 'Sette isole di granito rosa e acque turchesi, raggiungibili in giornata da Palau con un breve traghetto.',
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Costa Smeralda',
    text: 'Porto Cervo, Liscia di Vacca, le calette di Romazzino e Capriccioli: la costa più celebrata della Sardegna.',
    img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Trenino Verde della Gallura',
    text: 'Una linea storica che attraversa boschi di sughere, valli e altopiani, una delle ferrovie più affascinanti d\'Italia.',
    img: 'https://images.unsplash.com/photo-1474314881477-04c4aac40a0e?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Borghi galluresi',
    text: "Aggius, Tempio Pausania, Luogosanto: vicoli di granito, artigianato del sughero e tradizioni vive.",
    img: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Paesaggio nuragico',
    text: 'Tombe dei Giganti, nuraghi e domus de janas raccontano una civiltà antica, conservata nel silenzio dell\'entroterra.',
    img: 'https://images.unsplash.com/photo-1503917988258-f87a78e3c995?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Lago del Liscia',
    text: 'Uno specchio d\'acqua dolce tra le colline, perfetto per passeggiate al tramonto e fughe lontano dalla costa.',
    img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80',
  },
]

export default function Experiences() {
  return (
    <section className="bg-calce-50 py-28 sm:py-36">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <SectionHeader
          eyebrow="Esperienze"
          title="Sei modi per perdersi."
          subtitle="Mare, archeologia, sentieri e borghi: ogni giornata può prendere una direzione diversa, restando sempre a portata di mano."
        />

        <div className="mt-20 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((e, i) => (
            <Reveal key={e.title} delay={Math.min((i % 3) + 1, 3)} className="group">
              <div className="aspect-[4/5] overflow-hidden mb-6">
                <img
                  src={e.img}
                  alt={e.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-granito-dark mb-3">{e.title}</h3>
              <p className="text-granito leading-relaxed">{e.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
