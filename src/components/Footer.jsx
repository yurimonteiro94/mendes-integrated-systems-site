import { siteConfig } from "../data/siteConfig"

function Footer({ content }) {
  return (
    <footer className="border-t border-sky-400/10 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p className="font-semibold text-slate-300">
          {siteConfig.brandName}
        </p>

        <p>{content.footer.text}</p>
      </div>
    </footer>
  )
}

export default Footer