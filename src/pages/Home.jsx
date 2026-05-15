import Button from '../components/Button.jsx'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
          igna
        </h1>
        <p className="mt-4 text-slate-600">
          React + Vite + Tailwind CSS. Pronto al deploy su Netlify.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Button onClick={() => window.open('https://vite.dev', '_blank')}>
            Vite
          </Button>
          <Button variant="secondary" onClick={() => window.open('https://tailwindcss.com', '_blank')}>
            Tailwind
          </Button>
        </div>
      </div>
    </main>
  )
}
