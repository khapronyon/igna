import Reveal from './Reveal.jsx'

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
    text: "Una linea storica che attraversa boschi di sughere, valli e altopiani, una delle ferrovie più affascinanti d'Italia.",
    img: 'https://images.unsplash.com/photo-1474314881477-04c4aac40a0e?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Borghi galluresi',
    text: 'Aggius, Tempio Pausania, Luogosanto: vicoli di granito, artigianato del sughero e tradizioni vive.',
    img: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Paesaggio nuragico',
    text: "Tombe dei Giganti, nuraghi e domus de janas raccontano una civiltà antica, conservata nel silenzio dell'entroterra.",
    img: 'https://images.unsplash.com/photo-1503917988258-f87a78e3c995?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Lago del Liscia',
    text: "Uno specchio d'acqua dolce tra le colline, perfetto per passeggiate al tramonto e fughe lontano dalla costa.",
    img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80',
  },
]

export default function Experiences() {
  return (
    <section className="bg-calce-100">
      <div className="grid md:grid-cols-2 items-stretch">
        <div className="flex flex-col justify-center px-10 sm:px-16 py-24 space-y-4 md:col-span-2">
          <Reveal as="h2" className="font-display text-3xl sm:text-5xl text-granito-dark leading-[1.1] text-center">
            Sei modi<br />per perdersi.
          </Reveal>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {experiences.map((e, i) => (
          <Reveal key={e.title} delay={Math.min((i % 3) + 1, 3)} className="relative group overflow-hidden min-h-[420px]">
            <img
              src={e.img}
              alt={e.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-granito-dark/50 group-hover:bg-granito-dark/40 transition-colors duration-700" />
            <div className="relative z-10 flex flex-col justify-end h-full p-10 space-y-3">
              <h3 className="font-display text-2xl sm:text-3xl text-calce leading-tight">{e.title}</h3>
              <p className="text-calce/85 text-sm leading-relaxed">{e.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
