import SectionHeader from "./SectionHeader"
import TechnicalIcon from "./TechnicalIcon"

const TECHNOLOGY_ICONS = ["code", "mobile", "chip", "database", "sensor"]

function TechnologiesSection({ content }) {
  return (
    <section id="technologies" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={content.technologies.eyebrow}
          title={content.technologies.title}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content.technologies.groups.map((group, index) => (
            <article
              key={group.title}
              className="group rounded-3xl border border-sky-400/15 bg-slate-900/70 p-6 transition hover:-translate-y-1 hover:border-sky-400/40 hover:bg-slate-900"
            >
              <div className="mb-6 flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-300 ring-1 ring-sky-400/30">
                  <TechnicalIcon
                    name={TECHNOLOGY_ICONS[index] ?? "code"}
                    className="h-6 w-6"
                  />
                </span>

                <div>
                  <span className="text-xs font-bold text-sky-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-1 text-lg font-bold text-slate-50">
                    {group.title}
                  </h3>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-950/80 px-3 py-1 text-sm text-slate-300 ring-1 ring-slate-700 transition group-hover:ring-sky-400/30"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechnologiesSection