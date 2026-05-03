import CircuitPattern from "./CircuitPattern"
import TechnicalIcon from "./TechnicalIcon"

const SERVICE_ICONS = ["chip", "code", "mobile", "cloud"]

function HeroSection({ content }) {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 py-24 md:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.24),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.2),transparent_34%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(56,189,248,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-sky-400/10 blur-3xl" />

      <CircuitPattern className="pointer-events-none absolute -left-24 top-8 hidden h-[360px] w-[520px] text-sky-400/20 lg:block" />
      <CircuitPattern className="pointer-events-none absolute -right-40 bottom-0 hidden h-[300px] w-[440px] rotate-180 text-blue-500/10 xl:block" />

      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-sky-400">
            {content.hero.eyebrow}
          </p>

          <h1 className="max-w-5xl text-4xl font-bold tracking-tight text-slate-50 md:text-6xl lg:text-7xl">
            {content.hero.title}
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            {content.hero.subtitle}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-sky-400 px-7 py-3 text-center text-sm font-bold text-slate-950 transition hover:bg-sky-300"
            >
              {content.hero.primaryButton}
            </a>

            <a
              href="#services"
              className="rounded-full border border-sky-400/30 px-7 py-3 text-center text-sm font-bold text-sky-300 transition hover:border-sky-300 hover:bg-sky-400/10"
            >
              {content.hero.secondaryButton}
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-sky-400/10 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-sky-400/20 bg-slate-950/80 p-6 shadow-2xl shadow-sky-950/40 backdrop-blur">
            <CircuitPattern className="pointer-events-none absolute -right-28 -top-20 h-64 w-96 text-sky-400/10" />

            <div className="relative mb-6 flex items-center justify-between border-b border-sky-400/10 pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-400">
                  {content.hero.panelEyebrow}
                </p>

                <p className="mt-2 text-xl font-bold text-slate-50">
                  {content.hero.panelTitle}
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-400/30 bg-sky-400/10 text-sky-300">
                <TechnicalIcon name="chip" className="h-6 w-6" />
              </div>
            </div>

            <div className="relative space-y-4">
              {content.services.items.map((service, index) => (
                <div
                  key={service.title}
                  className="group rounded-2xl border border-slate-700/70 bg-slate-900/70 p-4 transition hover:border-sky-400/40 hover:bg-slate-900"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-400/10 text-sky-300 ring-1 ring-sky-400/20">
                      <TechnicalIcon
                        name={SERVICE_ICONS[index] ?? "chip"}
                        className="h-5 w-5"
                      />
                    </span>

                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="font-bold text-slate-50">
                          {service.title}
                        </h3>

                        <span className="text-xs font-bold text-sky-400/70">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <p className="mt-1 line-clamp-2 text-sm leading-6 text-slate-400">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative mt-6 rounded-2xl border border-sky-400/20 bg-sky-400/10 p-4">
              <p className="text-sm font-medium leading-6 text-sky-100">
                {content.hero.panelTagline}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection