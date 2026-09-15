import { motion } from 'framer-motion'
import PlaceholderImage from '../components/PlaceholderImage.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Seo from '../components/Seo.jsx'
import { timeline, site } from '../data/siteData.js'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
}

export default function About() {
  return (
    <>
      <Seo
        title="About Us | Zee Steel — Custom Steel Fabrication Since 2000"
        description="Zee Steel has 25+ years of experience in custom steel fabrication and architectural steel solutions, based in Ghaziabad and serving clients Pan India."
      />

      <section className="relative flex min-h-[50vh] items-end pt-20">
        <PlaceholderImage name="architectural-structure" label="Architectural steel structure" className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        <div className="container-content relative z-10 pb-16">
          <h1 className="max-w-xl text-4xl font-bold text-white md:text-5xl">
            Built on Experience. Driven by Craft.
          </h1>
          <p className="mt-4 max-w-lg text-mist/75">
            Zee Steel has been operating since {site.established}, bringing {site.experienceYears} years of
            experience in custom steel fabrication and project execution to every job we take on.
          </p>
        </div>
      </section>

      <section className="container-content grid gap-10 py-20 md:grid-cols-2">
        <motion.div {...fadeUp}>
          <h2 className="text-2xl font-semibold text-charcoal">Our Story</h2>
          <p className="mt-3 text-sm leading-relaxed text-steel">
            Founded in {site.established} in Ghaziabad, Uttar Pradesh, Zee Steel began with a focus on
            custom steel fabrication and has grown into a company trusted for architectural, commercial
            and industrial steelwork across India.
          </p>
        </motion.div>
        <motion.div {...fadeUp}>
          <h2 className="text-2xl font-semibold text-charcoal">Our Experience</h2>
          <p className="mt-3 text-sm leading-relaxed text-steel">
            With {site.experienceYears} years in the field, our team has handled everything from
            residential railings to mall installations and industrial fabrication, building a depth of
            practical, project-tested experience.
          </p>
        </motion.div>
        <motion.div {...fadeUp}>
          <h2 className="text-2xl font-semibold text-charcoal">Our Approach</h2>
          <p className="mt-3 text-sm leading-relaxed text-steel">
            Every project starts with understanding the requirement — its use, environment and
            specification — before we recommend a material and fabrication approach suited to it.
          </p>
        </motion.div>
        <motion.div {...fadeUp}>
          <h2 className="text-2xl font-semibold text-charcoal">Our Capabilities</h2>
          <p className="mt-3 text-sm leading-relaxed text-steel">
            Our capabilities span architectural and structural steel, industrial fabrication, commercial
            installations, decorative and sculptural work, and bespoke residential steel.
          </p>
        </motion.div>
        <motion.div {...fadeUp}>
          <h2 className="text-2xl font-semibold text-charcoal">Quality Commitment</h2>
          <p className="mt-3 text-sm leading-relaxed text-steel">
            We work with SS 304, SS 316, MS and other suitable materials, selected according to each
            project's requirements and intended application.
          </p>
        </motion.div>
        <motion.div {...fadeUp}>
          <h2 className="text-2xl font-semibold text-charcoal">Customisation</h2>
          <p className="mt-3 text-sm leading-relaxed text-steel">
            From luxury residential gates to large public sculptures, we fabricate to custom
            specifications rather than off-the-shelf designs.
          </p>
        </motion.div>
        <motion.div {...fadeUp} className="md:col-span-2">
          <h2 className="text-2xl font-semibold text-charcoal">Fabrication & Installation</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-steel">
            We support projects end-to-end — from fabrication and finishing through to on-site
            installation — coordinating closely with architects, contractors and site teams.
          </p>
        </motion.div>
      </section>

      <section className="bg-charcoal py-20">
        <div className="container-content">
          <motion.div {...fadeUp}>
            <SectionHeading light title="Our Journey" />
          </motion.div>
          <div className="mt-12 grid gap-6 border-l border-white/15 pl-6 sm:grid-cols-2 sm:border-l-0 sm:pl-0 lg:grid-cols-5">
            {timeline.map((t) => (
              <div key={t.title} className="sm:border-l sm:border-white/15 sm:pl-6 first:sm:border-l-0 first:sm:pl-0">
                <p className="text-lg font-semibold text-champagne">{t.year}</p>
                <p className="mt-2 text-sm text-mist/70">{t.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
