import { motion } from 'framer-motion'
import { MapPin, Calendar, Globe2 } from 'lucide-react'

import Button from './Button.jsx'
import { site } from '../data/siteData.js'

export default function Hero({ onOpenContact }) {
  return (
    <section className="relative flex min-h-[86vh] items-end overflow-hidden pt-20">
      <img
        src="/products/hero-gate.png"
        alt="Luxury custom steel gate"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />

      <div className="container-content relative z-10 pb-20 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-6xl">
            Crafted in Steel.<br />Built to Last.
          </h1>

          <p className="mt-5 text-lg font-medium text-champagne">
            Custom Steel Fabrication & Architectural Solutions
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-mist/75">
            From architectural railings and gates to large-scale sculptures, industrial fabrication
            and commercial installations — Zee Steel delivers customised steel solutions backed by
            25+ years of experience.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button to="/projects" variant="primary">
              Explore Our Work
            </Button>

            <Button onClick={onOpenContact} variant="outline">
              Get a Quote
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/15 pt-6 text-sm text-mist/70">
            <span className="flex items-center gap-2">
              <Calendar size={16} className="text-champagne" />
              Established {site.established}
            </span>

            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-champagne" />
              Ghaziabad, Uttar Pradesh
            </span>

            <span className="flex items-center gap-2">
              <Globe2 size={16} className="text-champagne" />
              {site.serviceArea}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
