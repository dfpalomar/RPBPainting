import { testimonials } from '../../data/testimonials'
import { Container, SectionHeader } from '../ui'

const STARS = 5

export function Testimonials() {
  return (
    <section className="scroll-mt-28 py-20 sm:py-24" id="testimonials">
      <Container className="reveal-stagger">
        <SectionHeader
          className="mx-auto max-w-[760px] text-center"
          description="Feedback from homeowners and businesses across Brevard County."
          label="Testimonials"
          title="What Our Clients Say"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article className="rounded-xl bg-surface p-8 shadow-sm" key={testimonial.id}>
              <div className="mb-4 flex gap-[2px] text-lg text-brass-400" role="img" aria-label="5 out of 5 stars">
                {Array.from({ length: STARS }).map((_, index) => (
                  <span aria-hidden key={`${testimonial.id}-${index}`}>
                    ★
                  </span>
                ))}
              </div>

              <blockquote className="mb-6 font-display text-xl leading-snug font-normal italic text-ink-700">
                {testimonial.quote}
              </blockquote>

              <div>
                <p className="text-sm font-semibold text-ink-900">{testimonial.name}</p>
                <p className="text-xs font-normal text-ink-500">
                  {testimonial.role}, {testimonial.location}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
