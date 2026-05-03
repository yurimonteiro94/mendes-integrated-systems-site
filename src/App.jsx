import { useEffect, useState } from "react"
import AboutSection from "./components/AboutSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import ProcessSection from "./components/ProcessSection"
import ServicesSection from "./components/ServicesSection"
import SolutionsSection from "./components/SolutionsSection"
import TechnologiesSection from "./components/TechnologiesSection"
import { translations } from "./data/translations"

const DEFAULT_LANGUAGE = "pt"
const LANGUAGE_STORAGE_KEY = "mendesIntegratedSystemsLanguage"

function getInitialLanguage() {
  const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY)

  if (savedLanguage === "pt" || savedLanguage === "en") {
    return savedLanguage
  }

  return DEFAULT_LANGUAGE
}

function App() {
  const [language, setLanguage] = useState(getInitialLanguage)
  const content = translations[language]

  useEffect(() => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
  }, [language])

  useEffect(() => {
    document.documentElement.lang = content.meta.languageCode
    document.title = content.meta.title

    const metaDescription = document.querySelector('meta[name="description"]')
    const ogTitle = document.querySelector('meta[property="og:title"]')
    const ogDescription = document.querySelector('meta[property="og:description"]')
    const ogLocale = document.querySelector('meta[property="og:locale"]')
    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    const twitterDescription = document.querySelector(
      'meta[name="twitter:description"]',
    )

    if (metaDescription) {
      metaDescription.setAttribute("content", content.meta.description)
    }

    if (ogTitle) {
      ogTitle.setAttribute("content", content.meta.title)
    }

    if (ogDescription) {
      ogDescription.setAttribute("content", content.meta.socialDescription)
    }

    if (ogLocale) {
      ogLocale.setAttribute("content", content.meta.ogLocale)
    }

    if (twitterTitle) {
      twitterTitle.setAttribute("content", content.meta.title)
    }

    if (twitterDescription) {
      twitterDescription.setAttribute("content", content.meta.socialDescription)
    }
  }, [content])

  function toggleLanguage() {
    setLanguage((currentLanguage) => (currentLanguage === "pt" ? "en" : "pt"))
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <Header
        content={content}
        language={language}
        onToggleLanguage={toggleLanguage}
      />

      <HeroSection content={content} />
      <ServicesSection content={content} />
      <SolutionsSection content={content} />
      <TechnologiesSection content={content} />
      <AboutSection content={content} />
      <ProcessSection content={content} />
      <ContactSection content={content} />
      <Footer content={content} />
    </main>
  )
}

export default App