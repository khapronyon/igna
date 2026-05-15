import Reveal from './Reveal.jsx'

export default function SectionHeader({ eyebrow, title, subtitle, align = 'left' }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <Reveal as="p" className="text-xs tracking-[0.32em] uppercase text-macchia mb-5">
          {eyebrow}
        </Reveal>
      )}
      <Reveal as="h2" delay={1} className="font-display text-4xl sm:text-5xl text-granito-dark leading-[1.1]">
        {title}
      </Reveal>
      {subtitle && (
        <Reveal as="p" delay={2} className="mt-6 text-granito text-base sm:text-lg leading-relaxed">
          {subtitle}
        </Reveal>
      )}
    </div>
  )
}
