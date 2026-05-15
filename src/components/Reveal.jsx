import useReveal from '../hooks/useReveal.js'

export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useReveal()
  const delayClass = delay >= 1 && delay <= 3 ? `reveal-delay-${delay}` : ''

  return (
    <Tag ref={ref} className={`reveal ${delayClass} ${className}`} {...rest}>
      {children}
    </Tag>
  )
}
