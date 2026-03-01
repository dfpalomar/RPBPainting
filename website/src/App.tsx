import { useEffect } from 'react'

import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { MobileCallButton } from './components/layout/MobileCallButton'
import { About } from './components/sections/About'
import { BeforeAfter } from './components/sections/BeforeAfter'
import { Contact } from './components/sections/Contact'
import { FAQ } from './components/sections/FAQ'
import { Hero } from './components/sections/Hero'
import { Portfolio } from './components/sections/Portfolio'
import { ServiceAreas } from './components/sections/ServiceAreas'
import { Services } from './components/sections/Services'
import { Testimonials } from './components/sections/Testimonials'
import { TrustSignals } from './components/sections/TrustSignals'

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('main section[id]')

    if (sections.length === 0) {
      return
    }

    const observer = new IntersectionObserver(
      (entries, intersectionObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          entry.target.classList.add('is-revealed')
          intersectionObserver.unobserve(entry.target)
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -12% 0px',
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-canvas font-body text-ink-900">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header />

      <main aria-label="Main content" id="main-content" tabIndex={-1}>
        <Hero />
        <Services />
        <Portfolio />
        <BeforeAfter />
        <Testimonials />
        <About />
        <ServiceAreas />
        <TrustSignals />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <MobileCallButton />
    </div>
  )
}

export default App
