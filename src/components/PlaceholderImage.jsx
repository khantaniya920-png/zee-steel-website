import { Image as ImageIcon } from 'lucide-react'

// Centralised placeholder visual used everywhere a real project photograph
// is not yet available. Swap it out per-image by dropping a real file into
// src/assets/images/<name>.jpg and rendering an <img> instead once ready —
// the `name` prop is the descriptive filename to use, kept consistent
// across the whole site so replacement is a single find-and-replace.
const PATTERNS = {
  a: 'linear-gradient(135deg, rgba(198,165,103,0.14) 0%, rgba(198,165,103,0) 45%)',
  b: 'linear-gradient(315deg, rgba(198,165,103,0.10) 0%, rgba(198,165,103,0) 50%)',
}

export default function PlaceholderImage({ name, label, className = '', variant = 'a' }) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-navy via-charcoal to-ink ${className}`}
      role="img"
      aria-label={label || name}
      data-image-slot={name}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundImage: PATTERNS[variant] }}
      />
      <svg className="absolute inset-0 h-full w-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={`brush-${name}`} width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
            <line x1="0" y1="0" x2="0" y2="14" stroke="white" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#brush-${name})`} />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-mist/70">
        <ImageIcon size={28} strokeWidth={1.5} />
        {label && (
          <span className="px-4 text-center text-xs font-medium tracking-wide text-mist/60">
            {label}
          </span>
        )}
      </div>
    </div>
  )
}
