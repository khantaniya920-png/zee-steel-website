import { Link } from 'react-router-dom'

const VARIANTS = {
  primary: 'bg-champagne text-ink hover:bg-champagneLight',
  dark: 'bg-charcoal text-white hover:bg-ink',
  outline: 'border border-white/30 text-white hover:border-champagne hover:text-champagne',
  outlineDark: 'border border-charcoal/25 text-charcoal hover:border-champagne hover:text-champagne',
}

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
  ...rest
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-semibold transition-colors duration-300 ease-smooth ${VARIANTS[variant]} ${className}`

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
