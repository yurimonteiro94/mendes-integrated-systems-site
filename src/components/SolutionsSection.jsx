import SectionHeader from "./SectionHeader"

function SolutionsSection({ content }) {
  return (
    <section id="solutions" className="bg-slate-900/40 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={content.solutions.eyebrow}
          title={content.solutions.title}
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {content.solutions.items.map((solution, index) => (
            <article
              key={solution}
              className="group rounded-2xl border border-slate-700/70 bg-slate-950/60 p-5 transition hover:-translate-y-1 hover:border-sky-400/40 hover:bg-slate-950"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-sky-400/10 text-xs font-bold text-sky-300 ring-1 ring-sky-400/20">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="h-px flex-1 bg-gradient-to-r from-sky-400/30 to-transparent" />
              </div>

              <p className="text-sm font-medium leading-6 text-slate-300">
                {solution}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SolutionsSection