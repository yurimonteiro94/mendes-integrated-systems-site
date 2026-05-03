import { useState } from "react"
import { siteConfig } from "../data/siteConfig"
import { getContactInfo } from "../services/contactService"
import TechnicalIcon from "./TechnicalIcon"

const CONTACT_ITEM_ICONS = ["tools", "prototype", "chip", "cloud"]

function ContactSection({ content }) {
  const [loadingContactType, setLoadingContactType] = useState(null)
  const [errorMessage, setErrorMessage] = useState("")
  const [revealedEmail, setRevealedEmail] = useState("")

  async function handleContactClick(contactType) {
    try {
      setErrorMessage("")
      setLoadingContactType(contactType)

      const contactInfo = await getContactInfo()

      if (contactType === "email" && contactInfo.email) {
        setRevealedEmail(contactInfo.email)

        try {
          await navigator.clipboard.writeText(contactInfo.email)
        } catch {
          // Clipboard access may be blocked by the browser.
        }

        window.location.href = `mailto:${contactInfo.email}`
        return
      }

      if (contactType === "linkedin" && contactInfo.linkedinUrl) {
        window.open(contactInfo.linkedinUrl, "_blank", "noreferrer")
        return
      }

      if (contactType === "whatsapp" && contactInfo.whatsappUrl) {
        window.open(contactInfo.whatsappUrl, "_blank", "noreferrer")
        return
      }

      throw new Error("Contact option is not available.")
    } catch (error) {
      console.error(error)
      setErrorMessage(content.contact.errorMessage)
    } finally {
      setLoadingContactType(null)
    }
  }

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-sky-400/20 bg-slate-900 p-8 shadow-2xl shadow-sky-950/30 md:p-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
            {content.contact.eyebrow}
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-50 md:text-5xl">
            {content.contact.title}
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {content.contact.description}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => handleContactClick("email")}
              disabled={loadingContactType !== null}
              className="rounded-full bg-sky-400 px-7 py-3 text-center text-sm font-bold text-slate-950 transition hover:bg-sky-300 disabled:cursor-wait disabled:opacity-70"
            >
              {loadingContactType === "email"
                ? content.contact.loadingButton
                : content.contact.emailButton}
            </button>

            <button
              type="button"
              onClick={() => handleContactClick("linkedin")}
              disabled={loadingContactType !== null}
              className="rounded-full border border-sky-400/30 px-7 py-3 text-center text-sm font-bold text-sky-300 transition hover:border-sky-300 hover:bg-sky-400/10 disabled:cursor-wait disabled:opacity-70"
            >
              {loadingContactType === "linkedin"
                ? content.contact.loadingButton
                : content.contact.linkedinButton}
            </button>

            <button
              type="button"
              onClick={() => handleContactClick("whatsapp")}
              disabled={loadingContactType !== null}
              className="rounded-full border border-sky-400/30 px-7 py-3 text-center text-sm font-bold text-sky-300 transition hover:border-sky-300 hover:bg-sky-400/10 disabled:cursor-wait disabled:opacity-70"
            >
              {loadingContactType === "whatsapp"
                ? content.contact.loadingButton
                : content.contact.whatsappButton}
            </button>
          </div>

          {revealedEmail ? (
            <div className="mt-6 rounded-2xl border border-sky-400/20 bg-slate-950/70 p-4">
              <p className="text-sm font-semibold text-sky-300">
                {content.contact.emailFallbackLabel}
              </p>

              <a
                href={`mailto:${revealedEmail}`}
                className="mt-2 block break-all text-sm font-medium text-slate-200 hover:text-sky-300"
              >
                {revealedEmail}
              </a>
            </div>
          ) : null}

          {errorMessage ? (
            <p className="mt-5 text-sm font-medium text-red-300">
              {errorMessage}
            </p>
          ) : null}
        </div>

        <div className="rounded-3xl border border-sky-400/15 bg-slate-950/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
            {siteConfig.brandName}
          </p>

          <div className="mt-6 space-y-3">
            {content.contact.items.map((item, index) => (
              <div
                key={`${index}-${item}`}
                className="flex items-center gap-3 rounded-2xl border border-slate-700/70 bg-slate-900/70 p-4"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-400/10 text-sky-300 ring-1 ring-sky-400/20">
                  <TechnicalIcon
                    name={CONTACT_ITEM_ICONS[index] ?? "tools"}
                    className="h-5 w-5"
                  />
                </span>

                <p className="text-sm font-medium text-slate-300">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection