import PageHero from '../components/PageHero.jsx'
import IgnaDescription from '../components/IgnaDescription.jsx'
import Gallery from '../components/Gallery.jsx'
import Amenities from '../components/Amenities.jsx'
import BookingCTA from '../components/BookingCTA.jsx'

export default function Igna() {
  return (
    <>
      <PageHero
        eyebrow="La casa"
        title="Igna."
        subtitle="Un appartamento su due piani, immerso nel verde gallurese, pensato come un piccolo rifugio di pietra e luce."
        image="https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=2000&q=80"
      />
      <IgnaDescription />
      <Gallery />
      <Amenities />
      <BookingCTA />
    </>
  )
}
