import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-granito-dark text-calce/85">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-20 grid grid-cols-2 md:grid-cols-4 gap-12">

        {/* Logo + payoff — centrati su mobile, intera larghezza */}
        <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src={`${import.meta.env.BASE_URL}images/Igna/logo.png`}
            alt="Igna Country Retreat"
            className="h-16 w-auto mb-6"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
          <p className="text-sm leading-relaxed text-calce/70 max-w-xs">
            Un rifugio nella campagna gallurese, tra mare cristallino e macchia mediterranea.
          </p>
        </div>

        {/* Naviga — intera larghezza su mobile */}
        <div className="col-span-2 md:col-span-1 text-center md:text-left">
          <p className="text-xs tracking-[0.32em] uppercase text-calce/60 mb-5">Naviga</p>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-calce transition-colors">Home</Link></li>
            <li><Link to="/igna" className="hover:text-calce transition-colors">Igna</Link></li>
            <li><Link to="/dintorni" className="hover:text-calce transition-colors">Dintorni</Link></li>
            <li><Link to="/come-arrivare" className="hover:text-calce transition-colors">Come arrivare</Link></li>
            <li><a href="#contatti" className="hover:text-calce transition-colors">Prenota</a></li>
          </ul>
        </div>

        {/* Dove siamo — colonna sinistra su mobile */}
        <div className="col-span-1 md:col-span-1 text-left">
          <p className="text-xs tracking-[0.32em] uppercase text-calce/60 mb-5">Dove siamo</p>
          <address className="not-italic text-sm leading-relaxed text-calce/80 space-y-2">
            <p>Suldarana</p>
            <p>Sant'Antonio di Gallura</p>
            <p>Sardegna, Italia</p>
          </address>
        </div>

        {/* Contatti — colonna destra su mobile */}
        <div className="col-span-1 md:col-span-1 text-left">
          <p className="text-xs tracking-[0.32em] uppercase text-calce/60 mb-5">Contatti</p>
          <div className="flex flex-col gap-3 text-xs tracking-[0.28em] uppercase">
            <a href="#" aria-label="Instagram" className="hover:text-calce transition-colors">Instagram</a>
            <a href="#" aria-label="Facebook" className="hover:text-calce transition-colors">Facebook</a>
          </div>
        </div>

      </div>

      <div className="border-t border-calce/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-6 flex flex-col sm:flex-row gap-2 sm:justify-between items-center text-xs text-calce/50">
          <p>© {new Date().getFullYear()} Igna Country Retreat</p>
          <p className="tracking-wider">Gallura · Sardegna</p>
        </div>
      </div>
    </footer>
  )
}
