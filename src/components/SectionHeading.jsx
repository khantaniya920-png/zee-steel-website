export default function SectionHeading({
  title,
  description,
  align = 'left',
  light = false,
}) {
  return (
    <div
      className={`max-w-2xl ${
        align === 'center' ? 'mx-auto text-center' : ''
      }`}
    >
      <h2
        className={`text-[1.75rem] font-semibold leading-[1.15] tracking-[-0.025em] sm:text-3xl md:text-[2.15rem] ${
          light ? 'text-white' : 'text-charcoal'
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-3 max-w-xl text-[15px] leading-7 ${
            light ? 'text-mist/70' : 'text-steel'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}