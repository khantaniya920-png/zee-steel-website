import PlaceholderImage from './PlaceholderImage.jsx'

export default function ProjectCard({ project }) {
  return (
    <div className="group overflow-hidden rounded-md bg-white">
      <div className="relative">
        <PlaceholderImage
          name={project.image}
          label={project.title}
          className="aspect-[4/3] transition-transform duration-500 ease-smooth group-hover:scale-[1.03]"
        />
        {!project.verified && (
          <span className="absolute left-3 top-3 rounded-sm bg-ink/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-mist/80">
            Example
          </span>
        )}
      </div>
      <div className="p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-champagne">{project.category}</p>
        <h3 className="mt-1 text-base font-semibold text-charcoal">{project.title}</h3>
        <p className="mt-1 text-sm text-steel">{project.location}</p>
      </div>
    </div>
  )
}
