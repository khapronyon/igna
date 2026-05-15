import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const closeMenu = (setOpen) => () => setOpen(false)

const links = [
  { to: '/igna', label: 'Igna' },
  { to: '/dintorni', label: 'Dintorni' },
  { to: '/come-arrivare', label: 'Come arrivare' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isHome = location.pathname === '/'
  const transparent = isHome && !scrolled

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        transparent
          ? 'bg-transparent py-7'
          : 'bg-calce-50/85 backdrop-blur-md py-4 shadow-[0_1px_0_rgba(125,122,114,0.12)]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        <Link
          to="/"
          className={`font-display text-2xl tracking-wide transition-colors ${
            transparent ? 'text-calce' : 'text-granito-dark'
          }`}
        >
          Igna
          <span className={`ml-2 text-[0.65rem] tracking-[0.3em] uppercase align-middle ${
            transparent ? 'text-calce/80' : 'text-macchia'
          }`}>
            Country Retreat
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `text-xs tracking-[0.28em] uppercase transition-colors ${
                  transparent ? 'text-calce/90 hover:text-calce' : 'text-granito hover:text-macchia'
                } ${isActive ? (transparent ? 'text-calce' : 'text-macchia') : ''}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href="#contatti"
            className={`text-xs tracking-[0.28em] uppercase px-5 py-2.5 border transition-colors ${
              transparent
                ? 'border-calce/70 text-calce hover:bg-calce hover:text-macchia-dark'
                : 'border-macchia text-macchia hover:bg-macchia hover:text-calce'
            }`}
          >
            Prenota
          </a>
        </nav>

        <button
          type="button"
          aria-label="Apri menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 ${
            transparent ? 'text-calce' : 'text-granito-dark'
          }`}
        >
          <span className={`block w-6 h-px bg-current transition-transform ${open ? 'translate-y-[6px] rotate-45' : ''}`} />
          <span className={`block w-6 h-px bg-current transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-current transition-transform ${open ? '-translate-y-[6px] -rotate-45' : ''}`} />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } ${transparent ? 'bg-granito-dark/95' : 'bg-calce-50/95'} backdrop-blur-md`}
      >
        <nav className="px-6 py-8 flex flex-col gap-6">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={closeMenu(setOpen)}
              className={({ isActive }) =>
                `text-sm tracking-[0.28em] uppercase ${
                  transparent ? 'text-calce' : 'text-granito-dark'
                } ${isActive ? 'text-macchia' : ''}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href="#contatti"
            onClick={closeMenu(setOpen)}
            className={`text-sm tracking-[0.28em] uppercase ${
              transparent ? 'text-calce' : 'text-macchia'
            }`}
          >
            Prenota
          </a>
        </nav>
      </div>
    </header>
  )
}
