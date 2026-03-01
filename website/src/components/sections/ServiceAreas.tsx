import { MapPin, Phone } from 'lucide-react'

import { Button, Container, SectionHeader } from '../ui'

type ServiceCity = {
  name: string
  note: string
}

const serviceCities: ServiceCity[] = [
  { name: 'Melbourne', note: 'Brevard County' },
  { name: 'Palm Bay', note: 'Brevard County' },
  { name: 'Viera', note: 'Brevard County' },
  { name: 'Surrounding Areas', note: 'Across Brevard County' },
]

export function ServiceAreas() {
  return (
    <section className="scroll-mt-28 py-20 sm:py-24" id="service-areas">
      <Container className="reveal-stagger">
        <SectionHeader
          className="mx-auto max-w-[760px] text-center"
          description="From Melbourne to Palm Bay and Viera, RPB Painting LLC serves homes and businesses throughout the Space Coast."
          label="Service Areas"
          title="Areas We Serve"
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="overflow-hidden rounded-2xl border border-navy-100 bg-surface shadow-sm">
            <div className="border-b border-navy-100 bg-navy-50 px-6 py-5 sm:px-8">
              <p className="text-xs font-semibold tracking-widest text-navy-700 uppercase">Coverage</p>
              <p className="mt-1 font-display text-2xl leading-snug font-medium tracking-tight text-navy-900">
                Serving All of Brevard County
              </p>
            </div>

            <div className="px-6 py-6 sm:px-8 sm:py-8">
              <div className="relative mx-auto max-w-[430px] rounded-xl border border-navy-100 bg-canvas-warm p-6">
                <svg
                  aria-hidden
                  className="h-auto w-full text-navy-500"
                  fill="none"
                  viewBox="0 0 420 220"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M104 26L157 22L184 44L238 39L269 60L296 103L315 128L303 152L321 176L292 196L241 188L217 202L169 197L147 181L123 173L114 144L86 124L100 96L82 71L104 26Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                  />
                </svg>

                <span className="absolute top-[31%] left-[33%] inline-flex h-3 w-3 rounded-full bg-wine-600" />
                <span className="absolute top-[53%] left-[37%] inline-flex h-3 w-3 rounded-full bg-wine-600" />
                <span className="absolute top-[25%] left-[47%] inline-flex h-3 w-3 rounded-full bg-wine-600" />

                <div className="pointer-events-none absolute top-[26%] left-[37%] rounded-full bg-surface px-2 py-1 text-xs font-medium text-ink-600 shadow-xs">
                  Melbourne
                </div>
                <div className="pointer-events-none absolute top-[58%] left-[42%] rounded-full bg-surface px-2 py-1 text-xs font-medium text-ink-600 shadow-xs">
                  Palm Bay
                </div>
                <div className="pointer-events-none absolute top-[18%] left-[51%] rounded-full bg-surface px-2 py-1 text-xs font-medium text-ink-600 shadow-xs">
                  Viera
                </div>
              </div>
            </div>
          </article>

          <div className="space-y-6">
            <article className="rounded-xl border border-ink-100 bg-surface p-6 shadow-sm sm:p-8">
              <h3 className="mb-5 font-display text-2xl font-medium tracking-tight text-ink-900">
                Space Coast Service Areas
              </h3>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {serviceCities.map((city) => (
                  <li className="rounded-lg border border-ink-100 bg-canvas px-4 py-3" key={city.name}>
                    <p className="inline-flex items-center gap-2 text-sm font-semibold text-ink-900">
                      <MapPin className="h-4 w-4 text-wine-600" />
                      {city.name}
                    </p>
                    <p className="mt-1 text-xs font-medium text-ink-500">{city.note}</p>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-xl border border-wine-100 bg-wine-50 p-6 shadow-sm sm:p-8">
              <p className="text-sm font-medium text-wine-700">Not sure if we serve your area? Call us!</p>
              <a
                className="mt-2 inline-flex items-center gap-2 font-display text-2xl font-medium tracking-tight text-wine-800 no-underline hover:text-wine-700"
                href="tel:+14013658336"
              >
                <Phone className="h-5 w-5" />
                (401) 365-8336
              </a>

              <div className="mt-5">
                <Button href="tel:+14013658336" variant="accent">
                  Call Now
                </Button>
              </div>
            </article>
          </div>
        </div>
      </Container>
    </section>
  )
}
