import SectionHeader from "./SectionHeader"
import TechnicalIcon from "./TechnicalIcon"

const SERVICE_ICONS = ["chip", "code", "mobile", "cloud"]

function ServicesSection({ content }) {
  return (
    <section id="services" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={content.services.eyebrow}
          title={content.services.title}
          description={content.services.description}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {content.services.items.map((service, index) => (
            <article
              key={service.title}
              className="group rounded-3xl border border-sky-400/15 bg-slate-900/70 p-6 shadow-2xl shadow-sky-950/20 transition hover:-translate-y-1 hover:border-sky-400/40 hover:bg-slate-900"
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-300 ring-1 ring-sky-400/30">
                  <TechnicalIcon
                    name={SERVICE_ICONS[index] ?? "chip"}
                    className="h-6 w-6"
                  />
                </span>

                <div className="flex flex-1 items-center gap-3">
                  <span className="h-px flex-1 bg-gradient-to-r from-sky-400/40 to-transparent" />
                  <span className="text-xs font-bold text-sky-400/80">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-50">
                {service.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-slate-400">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection