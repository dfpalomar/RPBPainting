import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

import { faqItems } from '../../data/faq'
import { Container, SectionHeader } from '../ui'

const joinClasses = (...values: Array<string | undefined>) => values.filter(Boolean).join(' ')

export function FAQ() {
  const [openItemId, setOpenItemId] = useState<string | null>(faqItems[0]?.id ?? null)

  return (
    <section className="scroll-mt-28 py-20 sm:py-24" id="faq">
      <Container className="reveal-stagger" size="narrow">
        <SectionHeader
          className="mx-auto text-center"
          description="Answers to common questions about process, planning, timelines, and service details."
          label="FAQ"
          title="Frequently Asked Questions"
        />

        <div className="space-y-3">
          {faqItems.map((item) => {
            const isOpen = openItemId === item.id
            const panelId = `${item.id}-panel`

            return (
              <article className="rounded-xl border border-ink-100 bg-surface shadow-sm" key={item.id}>
                <h3>
                  <button
                    aria-controls={panelId}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-7"
                    onClick={() => setOpenItemId((previous) => (previous === item.id ? null : item.id))}
                    type="button"
                  >
                    <span className="font-display text-xl leading-snug font-medium tracking-tight text-ink-900">
                      {item.question}
                    </span>
                    <ChevronDown
                      aria-hidden
                      className={joinClasses(
                        'h-5 w-5 flex-shrink-0 text-ink-500 transition-transform duration-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)]',
                        isOpen ? 'rotate-180' : undefined,
                      )}
                    />
                  </button>
                </h3>

                <div
                  className={joinClasses(
                    'grid overflow-hidden transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]',
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                  )}
                  id={panelId}
                >
                  <div className="min-h-0">
                    <p className="border-t border-ink-100 px-6 py-5 text-sm leading-relaxed font-light text-ink-600 sm:px-7">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
