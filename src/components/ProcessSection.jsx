import SectionHeader from "./SectionHeader"

function ProcessSection({ content }) {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={content.process.eyebrow}
          title={content.process.title}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {content.process.steps.map((step, index) => (
            <article
              key={`${index}-${step.title}`}
              className="group relative overflow-hidden rounded-3xl border border-sky-400/15 bg-slate-900/70 p-6 transition hover:-translate-y-1 hover:border-sky-400/40 hover:bg-slate-900"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />

              <div className="flex items-start gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-400/10 text-sm font-bold text-sky-300 ring-1 ring-sky-400/30">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="text-lg font-bold text-slate-50">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {step.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection