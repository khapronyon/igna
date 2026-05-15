export default function Button({ children, onClick, variant = 'primary', type = 'button', className = '' }) {
  const base = 'inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'
  const variants = {
    primary: 'bg-slate-900 text-white hover:bg-slate-800 focus-visible:ring-slate-900',
    secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200 focus-visible:ring-slate-400',
  }

  return (
    <button type={type} onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  )
}
