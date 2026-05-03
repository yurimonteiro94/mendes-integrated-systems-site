import { siteConfig } from "../data/siteConfig"

function Header({ content, language, onToggleLanguage }) {
  return (
    <header className="sticky top-0 z-50 border-b border-sky-400/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <a
          href="#home"
          className="text-sm font-bold uppercase tracking-[0.25em] text-slate-50"
        >
          <span className="hidden sm:inline">{siteConfig.brandName}</span>
          <span className="sm:hidden">MENDES I.S.</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 lg:flex">
          <a className="transition hover:text-sky-400" href="#services">
            {content.navigation.services}
          </a>

          <a className="transition hover:text-sky-400" href="#solutions">
            {content.navigation.solutions}
          </a>

          <a className="transition hover:text-sky-400" href="#technologies">
            {content.navigation.technologies}
          </a>

          <a className="transition hover:text-sky-400" href="#about">
            {content.navigation.about}
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleLanguage}
            className="rounded-full border border-sky-400/30 px-4 py-2 text-sm font-semibold text-sky-300 transition hover:border-sky-300 hover:bg-sky-400/10"
          >
            {language === "pt" ? "EN" : "PT"}
          </button>

          <a
            href="#contact"
            className="hidden rounded-full bg-sky-400 px-5 py-2 text-sm font-bold text-slate-950 transition hover:bg-sky-300 sm:inline-flex"
          >
            {content.navigation.contact}
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header