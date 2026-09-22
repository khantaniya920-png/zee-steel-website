import PlaceholderImage from './PlaceholderImage.jsx'

import SCL1 from '../assets/images/SCL1.jpeg'
import SCL2 from '../assets/images/SCL2.png'
import SCL3 from '../assets/images/SCL3.jpeg'
import SCL4 from '../assets/images/SCL4.jpeg'
import Arc1 from '../assets/images/Arc1.png'
import Arc2 from '../assets/images/Arc2.png'
import Arc3 from '../assets/images/Arc3.png'
import Arc4 from '../assets/images/Arc4.png'

const projectImages = {
  SCL1,
  SCL2,
  SCL3,
  SCL4,
  Arc1,
  Arc2,
  Arc3,
  Arc4,
}

export default function ProjectCard({ project }) {
  const realImage = projectImages[project.image]

  return (
    <div className="group overflow-hidden rounded-md bg-white">
      <div className="relative">
        {realImage ? (
          <img
            src={realImage}
            alt={project.title}
            className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-smooth group-hover:scale-[1.03]"
          />
        ) : (
          <PlaceholderImage
            name={project.image}
            label={project.title}
            className="aspect-[4/3] transition-transform duration-500 ease-smooth group-hover:scale-[1.03]"
          />
        )}

        {!project.verified && (
          <span className="absolute left-3 top-3 rounded-sm bg-ink/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-mist/80">
            Example
          </span>
        )}
      </div>

      <div className="p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-champagne">
          {project.category}
        </p>
        <h3 className="mt-1 text-base font-semibold text-charcoal">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-steel">{project.location}</p>
      </div>
    </div>
  )
}