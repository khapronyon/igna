import Reveal from './Reveal.jsx'

const BASE = import.meta.env.BASE_URL

const images = [
  { src: `${BASE}images/Igna/c.jpeg`,     alt: 'Igna' },
  { src: `${BASE}images/Igna/c%201.jpeg`, alt: 'Igna' },
  { src: `${BASE}images/Igna/c%202.jpeg`, alt: 'Igna' },
  { src: `${BASE}images/Igna/c3.jpeg`,    alt: 'Igna' },
  { src: `${BASE}images/Igna/c4.jpeg`,    alt: 'Igna' },
  { src: `${BASE}images/Igna/c5.jpeg`,    alt: 'Igna' },
]

export default function PhotoGrid() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3">
      {images.map((img, i) => (
        <Reveal
          key={img.src}
          delay={Math.min((i % 3) + 1, 3)}
          className="relative overflow-hidden aspect-square group"
        >
          <img
            src={img.src}
            alt={img.alt}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
          />
        </Reveal>
      ))}
    </section>
  )
}
