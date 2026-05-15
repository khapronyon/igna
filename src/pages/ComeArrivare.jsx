import PageHero from '../components/PageHero.jsx'
import HowToArrive from '../components/HowToArrive.jsx'
import Distances from '../components/Distances.jsx'
import BookingCTA from '../components/BookingCTA.jsx'

export default function ComeArrivare() {
  return (
    <>
      <PageHero
        eyebrow="Come arrivare"
        title="Raggiungere Igna."
        subtitle="Dall'aeroporto di Olbia a Suldarana in pochi minuti. Tutto quello che serve per organizzare il viaggio."
        image="https://images.unsplash.com/photo-1474552226712-ac0f0961a954?auto=format&fit=crop&w=2000&q=80"
      />
      <HowToArrive />
      <Distances />
      <BookingCTA />
    </>
  )
}
