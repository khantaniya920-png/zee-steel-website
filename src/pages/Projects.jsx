import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '../components/SectionHeading.jsx'
import Seo from '../components/Seo.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects, projectFilters } from '../data/projects.js'

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.category === active)),
    [active]
  )

  return (
    <>
      <Seo
        title="Our Projects | Zee Steel"
        description="A look at Zee Steel's steel fabrication work across residential, commercial, mall, industrial and public projects."
      />

      <section className="bg-charcoal pb-14 pt-32 text-center">
        <div className="container-content">
          <SectionHeading
            light
            align="center"
            title="Our Work"
            description="From premium residences to commercial spaces, industrial sites and large public installations."
          />
        </div>
      </section>

      <section className="container-content py-14">
        <div className="flex flex-wrap gap-2">
          {projectFilters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                active === f
                  ? 'border-champagne bg-champagne text-ink'
                  : 'border-black/15 text-charcoal hover:border-champagne'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-sm text-steel">No projects in this category yet — more projects coming soon.</p>
        )}
      </section>
    </>
  )
}
