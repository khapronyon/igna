import { useEffect, useState } from 'react'

// Sostituisci con: import logo from '../assets/igna_logo_transparent.png'
// quando aggiungi il file in src/assets/
const logo = `${import.meta.env.BASE_URL}images/Igna/logo.png`

export default function SplashScreen() {
  const [phase, setPhase] = useState('in') // 'in' | 'out' | 'done'

  useEffect(() => {
    if (sessionStorage.getItem('splash_shown')) {
      setPhase('done')
      return
    }

    const fadeInEnd = setTimeout(() => {
      setPhase('out')
      const fadeOutEnd = setTimeout(() => {
        setPhase('done')
        sessionStorage.setItem('splash_shown', '1')
      }, 200)
      return () => clearTimeout(fadeOutEnd)
    }, 600) // 400ms fade-in + 200ms pausa

    return () => clearTimeout(fadeInEnd)
  }, [])

  if (phase === 'done') return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
      style={{
        opacity: phase === 'in' ? 1 : 0,
        transition: phase === 'in'
          ? 'opacity 400ms ease-out'
          : 'opacity 200ms ease-in',
        pointerEvents: 'none',
      }}
    >
      <img
        src={logo}
        alt="Igna Country Retreat"
        style={{
          width: 160,
          opacity: phase === 'in' ? 1 : 0,
          transition: 'opacity 400ms ease-out',
        }}
      />
    </div>
  )
}
