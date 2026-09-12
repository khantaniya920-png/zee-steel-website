import * as Icons from 'lucide-react'
import { trustStrip } from '../data/siteData.js'

export default function TrustStrip() {
  return (
    <div className="border-y border-black/5 bg-white">
      <div className="container-content grid grid-cols-2 gap-6 py-8 md:grid-cols-5 md:gap-4">
        {trustStrip.map((item) => {
          const Icon = Icons[item.icon] || Icons.Award
          return (
            <div key={item.label} className="flex flex-col items-center gap-2 text-center">
              <Icon size={22} className="text-champagne" strokeWidth={1.6} />
              <p className="text-xs font-medium leading-snug text-charcoal/80">{item.label}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
