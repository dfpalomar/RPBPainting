import { Button, Container, SectionHeader } from '../ui'

type AboutStat = {
  label: string
  value: string
}

const stats: AboutStat[] = [
  { value: '13+ Years Experience', label: 'Since 2012' },
  { value: 'Licensed & Insured', label: 'Florida Contractor' },
  { value: 'Brevard County', label: 'Space Coast Coverage' },
]

const approachPoints = [
  'Professional interior and exterior painting for residential and commercial properties.',
  'Solutions tailored to each client with high-quality work at competitive prices.',
  'A careful process that gives every home and business the attention it deserves.',
]

export function About() {
  return (
    <section className="scroll-mt-28 py-20 sm:py-24" id="about">
      <Container className="reveal-stagger">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div>
            <SectionHeader
              description="Founded in 2012, RPB Painting LLC is led by owner and president Riveiro Palomar, serving homeowners and businesses across Brevard County."
              label="About"
              title="Built on Craft and Consistency"
            />

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div className="rounded-lg border border-ink-100 bg-surface px-4 py-3 shadow-xs" key={stat.value}>
                  <p className="text-sm font-semibold text-ink-900">{stat.value}</p>
                  <p className="text-xs font-medium tracking-wide text-ink-500 uppercase">{stat.label}</p>
                </div>
              ))}
            </div>

            <ul className="mt-8 space-y-3">
              {approachPoints.map((point) => (
                <li className="flex items-start gap-3 text-sm leading-relaxed font-light text-ink-600" key={point}>
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-wine-600" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button href="#contact" variant="secondary">
                Meet the Team
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-ink-100 bg-navy-100 p-6 shadow-sm">
            <div className="flex h-full min-h-[320px] flex-col justify-end rounded-xl border border-navy-200 p-6">
              <p className="mb-2 text-xs font-semibold tracking-widest text-navy-700 uppercase">Team Portrait</p>
              <p className="font-display text-2xl leading-snug font-medium tracking-tight text-navy-900">
                RPB Painting LLC
              </p>
              <p className="mt-2 max-w-[32ch] text-sm leading-relaxed font-light text-navy-700">
                Placeholder image area for owner or team photography.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
