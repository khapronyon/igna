import Reveal from './Reveal.jsx'

const images = [
  { src: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80', alt: 'Soggiorno' },
  { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80', alt: 'Cucina' },
  { src: 'https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?auto=format&fit=crop&w=900&q=80', alt: 'Esterno' },
  { src: 'https://images.unsplash.com/photo-1522444690501-9ed10c1aae6f?auto=format&fit=crop&w=900&q=80', alt: 'Camera' },
  { src: 'https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=900&q=80', alt: 'Dettaglio' },
  { src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80', alt: 'Interno' },
]

export default function Gallery() {
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
