import { useOutletContext } from 'react-router-dom'
import { motion } from 'framer-motion'
import Hero from '../components/Hero.jsx'
import TrustStrip from '../components/TrustStrip.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import MaterialCard from '../components/MaterialCard.jsx'
import IndustryCard from '../components/IndustryCard.jsx'
import Button from '../components/Button.jsx'
import * as Icons from 'lucide-react'
import { projects } from '../data/projects.js'
import {
  whyZeeSteel,
  materials,
  industries,
  projectExperience,
  site,
} from '../data/siteData.js'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: {
    duration: 0.6,
    ease: [0.22, 1, 0.36, 1],
  },
}

export default function Home() {
  const { openContact } = useOutletContext()

  const featuredImageNames = [
    'Lux_Gate1',
    'Lux_Gate2',
    'Mall_Kids_Zone',
    'Industrial_Fab',
    'Tank1',
    'SCL1',
    'Arc1',
    'Arc2',
  ]

  const featured = featuredImageNames
    .map((image) => projects.find((project) => project.image === image))
    .filter(Boolean)

  return (
    <>
      {/* Hero */}
      <Hero onOpenContact={openContact} />

      {/* Trust Strip */}
      <TrustStrip />

      {/* Featured Work */}
      <section className="bg-white py-24">
        <div className="container-content">
          <motion.div
            {...fadeUp}
            className="flex flex-wrap items-end justify-between gap-4"
          >
            <SectionHeading
              title="Selected Work"
              description="A look at the range of steel fabrication and installation work we take on."
            />

            <Button to="/projects" variant="outlineDark">
              View All Projects
            </Button>
          </motion.div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p, i) => (
              <motion.div
                key={p.title + i}
                {...fadeUp}
                transition={{
                  ...fadeUp.transition,
                  delay: i * 0.04,
                }}
              >
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Zee Steel */}
      <section className="container-content py-24">
        <motion.div {...fadeUp}>
          <SectionHeading title="Experience That Shows in Every Detail" />
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyZeeSteel.map((item, i) => {
            const Icon = Icons[item.icon] || Icons.Award

            return (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{
                  ...fadeUp.transition,
                  delay: i * 0.05,
                }}
                className="rounded-md border border-black/10 bg-white p-6"
              >
                <Icon
                  size={22}
                  className="text-champagne"
                  strokeWidth={1.6}
                />

                <h3 className="mt-4 text-base font-semibold text-charcoal">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-steel">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Materials */}
      <section className="bg-charcoal py-24">
        <div className="container-content">
          <motion.div {...fadeUp}>
            <SectionHeading
              light
              title="Materials Built for the Application"
            />
          </motion.div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {materials.map((m) => (
              <MaterialCard
                key={m.name}
                material={m}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="container-content py-24">
        <motion.div {...fadeUp}>
          <SectionHeading title="Built for Homes. Trusted for Large Projects." />
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind) => (
            <IndustryCard
              key={ind.name}
              industry={ind}
            />
          ))}
        </div>
      </section>

      {/* Project Experience */}
      <section className="bg-white py-24">
        <div className="container-content">
          <motion.div {...fadeUp}>
            <SectionHeading title="Selected Project Experience" />
          </motion.div>

          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-steel">
                Named Projects
              </p>

              <ul className="mt-3 space-y-2">
                {projectExperience.named.map((n) => (
                  <li
                    key={n}
                    className="rounded-sm border border-black/10 px-4 py-3 text-sm font-medium text-charcoal"
                  >
                    {n}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-steel">
                Project Categories
              </p>

              <ul className="mt-3 space-y-2">
                {projectExperience.categories.map((c) => (
                  <li
                    key={c}
                    className="rounded-sm border border-black/10 px-4 py-3 text-sm font-medium text-charcoal"
                  >
                    {c}
                  </li>
                ))}
              </ul>

              <p className="mt-3 text-xs italic text-steel">
                More Projects Coming Soon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-24 text-center">
        <div className="container-content">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Have a Steel Project in Mind?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-mist/70">
              Tell us what you're looking to build. Our team can discuss your
              requirements and provide a customised fabrication solution.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                onClick={openContact}
                variant="primary"
              >
                Get a Quote
              </Button>

              <Button
                href={site.phoneHref}
                variant="outline"
              >
                Call Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-24">
        <div className="container-content text-center">
          <p className="text-lg font-semibold text-charcoal">
            {site.name}
          </p>

          <p className="mt-2 text-sm text-steel">
            {site.address.line1}
            <br />
            {site.address.line2}
            <br />
            {site.address.country}
          </p>

          <p className="mt-4 text-sm text-charcoal">
            <a
              href={site.phoneHref}
              className="hover:text-champagne"
            >
              {site.phone}
            </a>

            {'  ·  '}

            <a
              href={site.emailHref}
              className="hover:text-champagne"
            >
              {site.email}
            </a>
          </p>

          <p className="mt-3 text-xs uppercase tracking-wide text-champagne">
            Serving Clients Across India
          </p>
        </div>
      </section>
    </>
  )
}