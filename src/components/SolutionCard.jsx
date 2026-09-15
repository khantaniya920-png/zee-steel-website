import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PlaceholderImage from './PlaceholderImage.jsx'

export default function SolutionCard({ solution }) {
  return (
    <Link
      to={`/solutions#${solution.slug}`}
      className="group block overflow-hidden rounded-md bg-white transition-shadow duration-300 ease-smooth hover:shadow-xl hover:shadow-black/10"
    >
      <PlaceholderImage
        name={solution.image}
        label={solution.title}
        className="aspect-[4/3] transition-transform duration-500 ease-smooth group-hover:scale-[1.03]"
      />
      <div className="p-5">
        <h3 className="text-base font-semibold text-charcoal">{solution.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-steel">{solution.shortDescription}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-champagne">
          Explore <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}
