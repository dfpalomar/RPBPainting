import { useState } from 'react'

import { Container, SectionHeader } from '../ui'

type ServiceCard = {
  description: string
  icon: string
  iconClassName: string
  linkClassName: string
  title: string
  topBorderClassName: string
}

type ServiceGroup = {
  services: string[]
  title: string
}

const serviceCards: ServiceCard[] = [
  {
    title: 'Residential',
    icon: '🏠',
    description:
      'Interior and exterior painting, custom painting, wallpaper hanging, and wallpaper removal for homes of every size.',
    topBorderClassName: 'bg-wine-600',
    iconClassName: 'bg-wine-50',
    linkClassName: 'group-hover:text-wine-600',
  },
  {
    title: 'Commercial',
    icon: '🏢',
    description:
      'Commercial interior and exterior painting for offices, retail spaces, and large venues with minimal disruption to operations.',
    topBorderClassName: 'bg-navy-700',
    iconClassName: 'bg-navy-50',
    linkClassName: 'group-hover:text-navy-600',
  },
  {
    title: 'Specialty',
    icon: '🎨',
    description:
      'Faux finishes, decorative techniques, and texturing including knockdown, orange peel, and popcorn finishes.',
    topBorderClassName: 'bg-brass-500',
    iconClassName: 'bg-brass-50',
    linkClassName: 'group-hover:text-brass-600',
  },
]

const fullServiceList: ServiceGroup[] = [
  {
    title: 'Residential Services',
    services: [
      'Interior painting',
      'Exterior painting',
      'Custom painting',
      'Faux finishes (multiple techniques)',
      'Knockdown texture',
      'Orange peel texture',
      'Popcorn texture',
      'Wallpaper hanging',
      'Wallpaper removal',
      'Power washing / power cleaning',
    ],
  },
  {
    title: 'Commercial Services',
    services: ['Commercial painting (interior and exterior)'],
  },
  {
    title: 'Additional Services',
    services: [
      'Drywall repairs',
      'Abrasive floor coating (anti-slip)',
      'Cleaning services',
      'Wall covering',
    ],
  },
]

const joinClasses = (...values: Array<string | undefined>) => values.filter(Boolean).join(' ')

export function Services() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className="scroll-mt-28 py-20 sm:py-24" id="services">
      <Container className="reveal-stagger">
        <SectionHeader
          description="Residential, commercial, and specialty painting services delivered with premium materials and disciplined execution across Brevard County."
          label="Services"
          title="Our Services"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {serviceCards.map((card) => (
            <article
              className="group relative overflow-hidden rounded-xl bg-surface p-8 shadow-sm transition-all duration-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-xl"
              key={card.title}
            >
              <div
                aria-hidden
                className={joinClasses(
                  'absolute inset-x-0 top-0 h-1 opacity-0 transition-opacity duration-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100',
                  card.topBorderClassName,
                )}
              />

              <div
                className={joinClasses(
                  'mb-5 flex h-12 w-12 items-center justify-center rounded-lg text-2xl',
                  card.iconClassName,
                )}
              >
                <span aria-hidden>{card.icon}</span>
              </div>

              <h3 className="mb-2 font-display text-xl font-semibold text-ink-900">{card.title}</h3>
              <p className="text-sm leading-relaxed font-light text-ink-500">{card.description}</p>

              <a
                className={joinClasses(
                  'mt-5 inline-flex items-center gap-2 text-sm font-medium text-ink-700 no-underline transition-all duration-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:gap-3',
                  card.linkClassName,
                )}
                href="#contact"
              >
                Learn more <span aria-hidden>→</span>
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-ink-100 bg-surface p-6 shadow-sm sm:p-8">
          <button
            aria-controls="full-service-list"
            aria-expanded={isExpanded}
            className="flex w-full items-center justify-between gap-4 text-left"
            onClick={() => setIsExpanded((previous) => !previous)}
            type="button"
          >
            <span className="font-display text-2xl font-medium tracking-tight text-ink-900">Full Service List</span>
            <span
              aria-hidden
              className={joinClasses(
                'rounded-full border border-ink-200 px-3 py-1 text-sm font-medium text-ink-600 transition-transform duration-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)]',
                isExpanded ? 'rotate-180' : undefined,
              )}
            >
              ↓
            </span>
          </button>

          <div
            className={joinClasses(
              'grid overflow-hidden transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]',
              isExpanded ? 'mt-6 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
            )}
            id="full-service-list"
          >
            <div className="min-h-0">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {fullServiceList.map((group) => (
                  <div key={group.title}>
                    <h4 className="mb-3 font-display text-xl font-medium text-ink-900">{group.title}</h4>
                    <ul className="space-y-2 text-sm leading-relaxed font-light text-ink-600">
                      {group.services.map((service) => (
                        <li className="flex items-start gap-2" key={service}>
                          <span className="mt-1 text-wine-600" aria-hidden>
                            •
                          </span>
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <p className="text-sm font-medium tracking-wide text-ink-500 uppercase">Premium Paint Brands</p>
          <span className="inline-flex items-center rounded-full bg-wine-50 px-4 py-2 text-sm font-medium text-wine-700">
            Sherwin-Williams
          </span>
          <span className="inline-flex items-center rounded-full bg-navy-50 px-4 py-2 text-sm font-medium text-navy-700">
            Benjamin Moore
          </span>
        </div>
      </Container>
    </section>
  )
}
