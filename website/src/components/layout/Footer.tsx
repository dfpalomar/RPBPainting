import { Container } from '../ui'

const PHONE_DISPLAY = '(401) 365-8336'
const PHONE_HREF = 'tel:+14013658336'
const ADDRESS = '1741 Guava Ave, Melbourne, FL 32935'
const HOURS = 'Monday - Friday: 8:00 AM - 5:00 PM'

const serviceLinks = [
  { href: '#services', label: 'Residential Painting' },
  { href: '#services', label: 'Commercial Painting' },
  { href: '#services', label: 'Specialty Finishes' },
  { href: '#services', label: 'Power Washing' },
]

const companyLinks = [
  { href: '#about', label: 'About RPB Painting' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Get a Quote' },
  { href: '#contact', label: 'Contact' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-20 bg-ink-900 text-white sm:mt-24">
      <Container>
        <div className="grid gap-10 py-12 sm:py-16 md:grid-cols-2 xl:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <div className="mb-4 flex items-center gap-3 font-display text-2xl font-semibold">
              <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-wine-600" />
              RPB Painting
            </div>
            <p className="max-w-[28ch] text-sm leading-relaxed font-light text-ink-400">
              Professional painting services for exterior and interior spaces, commercial or
              residential. Licensed contractor serving Brevard County since 2012.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-semibold tracking-widest text-ink-400 uppercase">
              Services
            </h2>
            <ul className="space-y-1.5">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <a
                    className="text-sm font-light text-ink-300 no-underline transition-colors duration-[150ms] hover:text-white"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-semibold tracking-widest text-ink-400 uppercase">
              Company
            </h2>
            <ul className="space-y-1.5">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <a
                    className="text-sm font-light text-ink-300 no-underline transition-colors duration-[150ms] hover:text-white"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-semibold tracking-widest text-ink-400 uppercase">
              Contact
            </h2>
            <ul className="space-y-2">
              <li>
                <a
                  className="text-sm font-light text-ink-300 no-underline transition-colors duration-[150ms] hover:text-white"
                  href={PHONE_HREF}
                >
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <p className="text-sm leading-relaxed font-light text-ink-300">{ADDRESS}</p>
              </li>
              <li>
                <p className="text-sm leading-relaxed font-light text-ink-300">{HOURS}</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ink-700 py-5">
          <p className="text-sm font-light text-ink-400">
            © {year} RPB Painting LLC. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
