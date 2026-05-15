import { Link } from 'react-router-dom'

export default function Button({
  children,
  onClick,
  to,
  href,
  variant = 'primary',
  type = 'button',
  className = '',
  ...rest
}) {
  const base =
    'inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm tracking-[0.18em] uppercase font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-calce-50'
  const variants = {
    primary:
      'bg-macchia text-calce hover:bg-macchia-dark focus-visible:ring-macchia',
    secondary:
      'bg-transparent text-calce border border-calce/70 hover:bg-calce/10 backdrop-blur-sm focus-visible:ring-calce',
    outline:
      'bg-transparent text-macchia-dark border border-macchia/60 hover:border-macchia hover:bg-macchia hover:text-calce focus-visible:ring-macchia',
    ghost:
      'bg-transparent text-granito-dark hover:text-macchia focus-visible:ring-macchia',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  )
}
