export default function PageHero({ eyebrow, title, subtitle, image }) {
  return (
    <section className="relative h-[72vh] min-h-[480px] w-full overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-granito-dark/30 via-granito-dark/30 to-granito-dark/70" />

      <div className="relative h-full max-w-7xl mx-auto px-6 sm:px-10 flex flex-col justify-end pb-20 sm:pb-28">
        {eyebrow && (
          <p className="text-xs tracking-[0.4em] uppercase text-calce/85 mb-5 reveal is-visible">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-5xl sm:text-7xl text-calce leading-[1.05] max-w-3xl reveal is-visible reveal-delay-1">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-xl text-calce/85 text-base sm:text-lg leading-relaxed reveal is-visible reveal-delay-2">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
