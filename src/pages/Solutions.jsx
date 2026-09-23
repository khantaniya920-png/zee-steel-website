import { useOutletContext } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

import SectionHeading from '../components/SectionHeading.jsx'
import Seo from '../components/Seo.jsx'
import Button from '../components/Button.jsx'

import { solutions } from '../data/solutions.js'

import Arc1 from '../assets/images/Arc1.png'
import Arc3 from '../assets/images/Arc3.png'
import Tank1 from '../assets/images/Tank1.png'
import Mall3 from '../assets/images/Mall3.png'
import SCL1 from '../assets/images/SCL1.jpeg'
import LuxGate1 from '../assets/images/Lux_Gate1.png'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: {
    duration: 0.6,
    ease: [0.22, 1, 0.36, 1],
  },
}

const solutionImages = {
  'architectural-structural': Arc1,
  'building-roofing-cladding': Arc3,
  'industrial-steel': Tank1,
  'commercial-mall': Mall3,
  'sculptures-decorative': SCL1,
  'custom-luxury': LuxGate1,
}

export default function Solutions() {
  const { openContact } = useOutletContext()

  return (
    <>
      <Seo
        title="Steel Fabrication Solutions | Zee Steel"
        description="Architectural steel, industrial fabrication, commercial installations, sculptures and custom luxury steelwork from Zee Steel, Ghaziabad."
      />

      {/* Page Header */}
      <section className="bg-charcoal pb-16 pt-32 text-center">
        <div className="container-content">
          <SectionHeading
            light
            align="center"
            title="Steel Solutions, Engineered for the Application"
            description="Six focused categories covering architectural, industrial, commercial, decorative and residential steel fabrication."
          />
        </div>
      </section>

      {/* Solutions */}
      {solutions.map((s, i) => {
        const realImage = solutionImages[s.slug]

        return (
          <section
            key={s.slug}
            id={s.slug}
            className={`scroll-mt-24 py-20 ${
              i % 2 ? 'bg-white' : ''
            }`}
          >
            <div
              className={`container-content grid items-center gap-10 lg:grid-cols-2 ${
                i % 2
                  ? 'lg:[&>*:first-child]:order-2'
                  : ''
              }`}
            >
              {/* Real Project Image */}
              <motion.div {...fadeUp}>
                <div className="aspect-[4/3] overflow-hidden rounded-md">
                  <img
                    src={realImage}
                    alt={s.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
              </motion.div>

              {/* Solution Information */}
              <motion.div {...fadeUp}>
                <h2 className="text-2xl font-semibold text-charcoal md:text-3xl">
                  {s.title}
                </h2>

                <p className="mt-4 text-sm leading-relaxed text-steel">
                  {s.description}
                </p>

                <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-champagne">
                  Products & Services
                </p>

                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {s.products.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2 text-sm text-charcoal"
                    >
                      <Check
                        size={15}
                        className="mt-0.5 shrink-0 text-champagne"
                      />
                      {p}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-champagne">
                  Applications
                </p>

                <p className="mt-2 text-sm text-steel">
                  {s.applications.join('  ·  ')}
                </p>

                <div className="mt-7">
                  <Button
                    onClick={openContact}
                    variant="dark"
                  >
                    Discuss Your Requirement
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        )
      })}
    </>
  )
}