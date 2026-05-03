function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold tracking-[0.3em] text-sky-400 uppercase">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-3xl font-bold text-slate-50 md:text-5xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-6 text-lg leading-8 text-slate-300">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeader