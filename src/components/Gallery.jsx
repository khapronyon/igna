import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'

const images = [
  { src: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80', alt: 'Soggiorno rustico', span: 'md:col-span-2 md:row-span-2 aspect-[4/5]' },
  { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80', alt: 'Cucina con travi', span: 'aspect-[4/3]' },
  { src: 'https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?auto=format&fit=crop&w=900&q=80', alt: 'Aia esterna', span: 'aspect-[4/3]' },
  { src: 'https://images.unsplash.com/photo-1522444690501-9ed10c1aae6f?auto=format&fit=crop&w=900&q=80', alt: 'Camera con vista', span: 'aspect-[4/3]' },
  { src: 'https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=900&q=80', alt: 'Dettaglio in pietra', span: 'aspect-[4/3]' },
]

export default function Gallery() {
  return (
    <section className="bg-calce-100 py-28 sm:py-36">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <SectionHeader
          eyebrow="Gli spazi"
          title="Lasciatevi guidare dalla luce."
          subtitle="Una selezione di scorci tra interni e cortile. Pietra, legno e tessuti naturali raccontano l'identità del luogo."
        />

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 auto-rows-[1fr]">
          {images.map((img, i) => (
            <Reveal
              key={img.src}
              delay={Math.min((i % 3) + 1, 3)}
              className={`overflow-hidden ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1200ms] hover:scale-105"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
