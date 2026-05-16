import PageHero from '../components/PageHero.jsx'
import TerritorioIntro from '../components/TerritorioIntro.jsx'
import Experiences from '../components/Experiences.jsx'
import Distances from '../components/Distances.jsx'

export default function Dintorni() {
  return (
    <>
      <PageHero
        eyebrow="I dintorni"
        title="Gallura."
        subtitle="Tra Costa Smeralda, Arcipelago della Maddalena e l'entroterra dei graniti. Una geografia che si attraversa lentamente."
        image="https://images.unsplash.com/photo-1530870110042-98b2cb110834?auto=format&fit=crop&w=2000&q=80"
      />
      <TerritorioIntro />
      <Experiences />
      <Distances />
    </>
  )
}
