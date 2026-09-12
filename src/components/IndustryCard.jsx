import * as Icons from 'lucide-react'

export default function IndustryCard({ industry }) {
  const Icon = Icons[industry.icon] || Icons.Building
  return (
    <div className="flex items-center gap-3 rounded-md border border-black/10 bg-white px-4 py-4 transition-colors duration-300 hover:border-champagne">
      <Icon size={20} className="shrink-0 text-champagne" strokeWidth={1.6} />
      <span className="text-sm font-medium text-charcoal">{industry.name}</span>
    </div>
  )
}
