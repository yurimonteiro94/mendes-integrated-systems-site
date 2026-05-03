import profileImage from "../assets/yuri-profile.png"
import { siteConfig } from "../data/siteConfig"

function AboutSection({ content }) {
  return (
    <section id="about" className="bg-slate-900/40 px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-sky-400/10 blur-2xl" />

          <div className="relative overflow-hidden rounded-3xl border border-sky-400/20 bg-slate-950 p-8">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(56,189,248,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.05)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />

            <div className="relative">
              <div className="mb-7 overflow-hidden rounded-3xl border border-sky-400/20 bg-slate-900">
                <img
                  src={profileImage}
                  alt="Yuri Barbosa Mendes Monteiro"
                  className="h-80 w-full object-cover object-center"
                />
              </div>

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
                {siteConfig.brandName}
              </p>

              <p className="mt-6 text-3xl font-bold text-slate-50 md:text-4xl">
                {content.about.cardLineOne}
                <span className="block text-sky-400">
                  {content.about.cardLineTwo}
                </span>
              </p>

              <div className="mt-8 grid gap-3">
                <div className="rounded-2xl border border-sky-400/10 bg-slate-900/70 p-4">
                  <p className="text-sm font-semibold text-slate-200">
                    Hardware + Firmware
                  </p>
                </div>

                <div className="rounded-2xl border border-sky-400/10 bg-slate-900/70 p-4">
                  <p className="text-sm font-semibold text-slate-200">
                    Software + Cloud
                  </p>
                </div>

                <div className="rounded-2xl border border-sky-400/10 bg-slate-900/70 p-4">
                  <p className="text-sm font-semibold text-slate-200">
                    Mobile + Web Integration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
            {content.about.eyebrow}
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-50 md:text-5xl">
            {content.about.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            {content.about.description}
          </p>

          <div className="mt-8 rounded-3xl border border-sky-400/15 bg-slate-950/70 p-6">
            <p className="text-sm leading-7 text-slate-400">
              {content.about.extraDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection