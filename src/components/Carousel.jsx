import { useState, useEffect, useCallback } from 'react'

const BASE = import.meta.env.BASE_URL

const images = [
  { src: `${BASE}images/Igna/c.jpeg`,   alt: 'Igna' },
  { src: `${BASE}images/Igna/c%201.jpeg`, alt: 'Igna' },
  { src: `${BASE}images/Igna/c%202.jpeg`, alt: 'Igna' },
  { src: `${BASE}images/Igna/c3.jpeg`,  alt: 'Igna' },
  { src: `${BASE}images/Igna/c4.jpeg`,  alt: 'Igna' },
  { src: `${BASE}images/Igna/c5.jpeg`,  alt: 'Igna' },
  { src: `${BASE}images/Igna/c%206.jpeg`, alt: 'Igna' },
]

export default function Carousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const prev = useCallback(() =>
    setCurrent(i => (i - 1 + images.length) % images.length), [])
  const next = useCallback(() =>
    setCurrent(i => (i + 1) % images.length), [])

  useEffect(() => {
    if (paused) return
    const t = setInterval(next, 4000)
    return () => clearInterval(t)
  }, [paused, next])

  return (
    <section
      className="relative bg-granito-dark overflow-hidden"
      style={{ height: '70vh', minHeight: 480 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((img, i) => (
        <div
          key={img.src}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover"
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        </div>
      ))}

      {/* overlay leggero */}
      <div className="absolute inset-0 bg-granito-dark/20 pointer-events-none" />

      {/* frecce */}
      <button
        onClick={prev}
        aria-label="Precedente"
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center text-calce/80 hover:text-calce border border-calce/40 hover:border-calce transition-colors bg-granito-dark/30 backdrop-blur-sm"
      >
        ←
      </button>
      <button
        onClick={next}
        aria-label="Successivo"
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center text-calce/80 hover:text-calce border border-calce/40 hover:border-calce transition-colors bg-granito-dark/30 backdrop-blur-sm"
      >
        →
      </button>

      {/* dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Immagine ${i + 1}`}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              i === current ? 'bg-calce w-6' : 'bg-calce/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
