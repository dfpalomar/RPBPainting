import { BeforeAfterSlider, Container, SectionHeader } from '../ui'

type ComparisonItem = {
  afterBackgroundClassName: string
  description: string
  id: string
  title: string
}

const comparisons: ComparisonItem[] = [
  {
    id: 'melbourne-interior-refresh',
    title: 'Melbourne Interior Refresh',
    description: 'From dated walls to a bright, polished finish that opens up the entire living space.',
    afterBackgroundClassName: 'bg-canvas-warm',
  },
  {
    id: 'palm-bay-office-repaint',
    title: 'Palm Bay Office Repaint',
    description: 'A clean, modern palette upgrade designed for durability and daily commercial use.',
    afterBackgroundClassName: 'bg-navy-50',
  },
  {
    id: 'viera-exterior-update',
    title: 'Viera Exterior Update',
    description: 'Improved curb appeal with a crisp, even coat and a coordinated color finish.',
    afterBackgroundClassName: 'bg-stone-50',
  },
]

export function BeforeAfter() {
  return (
    <section className="scroll-mt-28 py-20 sm:py-24" id="before-after">
      <Container className="reveal-stagger">
        <SectionHeader
          className="mx-auto max-w-[760px] text-center"
          description="Drag to compare transformation results from darker, weathered surfaces to cleaner, premium finishes."
          label="Before & After"
          title="See The Difference"
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {comparisons.map((comparison) => (
            <article className="rounded-xl border border-ink-100 bg-surface p-4 shadow-sm sm:p-5" key={comparison.id}>
              <BeforeAfterSlider
                afterBackgroundClassName={comparison.afterBackgroundClassName}
                beforeBackgroundClassName="bg-ink-300"
              />
              <h3 className="mt-5 font-display text-2xl font-medium tracking-tight text-ink-900">{comparison.title}</h3>
              <p className="mt-2 text-sm leading-relaxed font-light text-ink-500">{comparison.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
