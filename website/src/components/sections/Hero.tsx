import { useEffect, useState } from 'react'

import { Button, Container } from '../ui'

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timerId = window.setTimeout(() => {
      setIsVisible(true)
    }, 40)

    return () => window.clearTimeout(timerId)
  }, [])

  return (
    <section className="relative overflow-hidden scroll-mt-28 py-16 sm:py-20" id="home">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[460px] w-[460px] -translate-x-[72%] rounded-full bg-[radial-gradient(circle,_rgba(248,228,231,0.5)_0%,_rgba(248,228,231,0.2)_45%,_transparent_76%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[500px] w-[500px] -translate-x-[8%] rounded-full bg-[radial-gradient(circle,_rgba(245,239,224,0.45)_0%,_rgba(245,239,224,0.18)_45%,_transparent_76%)]"
      />

      <Container className="reveal-stagger">
        <div
          className={`mx-auto flex max-w-[860px] flex-col items-center text-center transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
          }`}
        >
          <p className="mb-8 inline-flex items-center rounded-full bg-wine-50 px-5 py-2 text-sm font-medium tracking-wide text-wine-700">
            ✦ Serving Brevard County Since 2012
          </p>

          <h1 className="font-display text-[clamp(2.25rem,8vw,3.75rem)] leading-tight font-medium tracking-tight text-ink-900">
            Residential and Commercial Painting Done <em className="italic">Right</em>
          </h1>

          <p className="mt-6 max-w-[520px] text-lg leading-relaxed font-light text-ink-500">
            RPB Painting delivers premium interior and exterior finishes for homes and businesses
            across Brevard County.
          </p>

          <div className="mt-10 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row sm:justify-center">
            <Button href="#contact" size="lg" variant="accent">
              Get a Free Quote
            </Button>
            <Button href="#portfolio" size="lg" variant="secondary">
              See Our Work
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
