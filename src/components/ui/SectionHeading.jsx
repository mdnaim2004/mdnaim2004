function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-8 space-y-3 text-center md:text-left">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300">{eyebrow}</p>
      <h2 className="text-3xl font-semibold text-white md:text-4xl">{title}</h2>
      {description && <p className="max-w-2xl text-slate-300">{description}</p>}
    </div>
  )
}

export default SectionHeading
