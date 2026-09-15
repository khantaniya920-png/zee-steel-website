export default function SectionHeading({ title, description, align = 'left', light = false }) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <h2 className={`text-3xl md:text-4xl font-semibold tracking-tight ${light ? 'text-white' : 'text-charcoal'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${light ? 'text-mist/70' : 'text-steel'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
