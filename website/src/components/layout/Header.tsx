import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Button, Container } from '../ui'

type NavItem = {
  id: string
  href: `#${string}`
  label: string
}

const PHONE_DISPLAY = '(401) 365-8336'
const PHONE_HREF = 'tel:+14013658336'

const navItems: NavItem[] = [
  { id: 'home', href: '#home', label: 'Home' },
  { id: 'services', href: '#services', label: 'Services' },
  { id: 'portfolio', href: '#portfolio', label: 'Portfolio' },
  { id: 'about', href: '#about', label: 'About' },
  { id: 'contact', href: '#contact', label: 'Contact' },
]

const joinClasses = (...values: Array<string | undefined>) => values.filter(Boolean).join(' ')

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(navItems[0].id)

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  useEffect(() => {
    const sectionElements = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null)

    if (sectionElements.length === 0) {
      return
    }

    const visibleSections = new Map<string, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id

          if (!entry.isIntersecting) {
            visibleSections.delete(sectionId)
            return
          }

          visibleSections.set(sectionId, entry.intersectionRatio)
        })

        if (visibleSections.size === 0) {
          return
        }

        let nextActiveSection = navItems[0].id
        let maxRatio = 0

        visibleSections.forEach((ratio, id) => {
          if (ratio <= maxRatio) {
            return
          }

          maxRatio = ratio
          nextActiveSection = id
        })

        setActiveSection(nextActiveSection)
      },
      {
        rootMargin: '-30% 0px -52% 0px',
        threshold: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 1],
      },
    )

    sectionElements.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const getDesktopNavLinkClasses = (isActive: boolean) =>
    joinClasses(
      'rounded-md px-4 py-2 text-sm font-normal transition-all duration-[150ms]',
      isActive ? 'bg-ink-50 text-ink-900' : 'text-ink-500 hover:bg-ink-50 hover:text-ink-900',
    )

  const getMobileNavLinkClasses = (isActive: boolean) =>
    joinClasses(
      'rounded-lg px-4 py-3 text-base font-normal no-underline transition-colors duration-[150ms]',
      isActive ? 'bg-ink-50 text-ink-900' : 'text-ink-700 hover:bg-ink-50 hover:text-ink-900',
    )

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header
      className={`sticky top-0 z-50 border-b border-transparent bg-canvas/95 backdrop-blur-sm transition-all duration-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isScrolled ? 'shadow-sm' : ''
      }`}
    >
      <Container>
        <div className="flex h-20 items-center justify-between gap-4">
          <a className="flex items-center gap-3 text-ink-900 no-underline" href="#home">
            <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-wine-600" />
            <span className="font-display text-xl font-semibold tracking-tight">RPB Painting</span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                aria-current={activeSection === item.id ? 'page' : undefined}
                className={getDesktopNavLinkClasses(activeSection === item.id)}
                href={item.href}
                key={item.href}
                onClick={() => setActiveSection(item.id)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button aria-label="Call RPB Painting" href={PHONE_HREF} variant="ghost">
              {PHONE_DISPLAY}
            </Button>
            <Button href="#contact" variant="primary">
              Get a Quote
            </Button>
          </div>

          <button
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 bg-surface text-ink-800 transition-colors duration-[150ms] hover:border-ink-900 lg:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            type="button"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      <div
        className={`fixed inset-0 z-40 flex lg:hidden ${
          isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        id="mobile-menu"
      >
        <button
          aria-label="Close mobile menu"
          className={`absolute inset-0 bg-ink-900/55 transition-opacity duration-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeMenu}
          type="button"
        />
        <div
          className={`relative ml-auto flex h-full w-full max-w-sm flex-col bg-surface px-6 pb-8 pt-24 transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav aria-label="Mobile" className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                aria-current={activeSection === item.id ? 'page' : undefined}
                className={getMobileNavLinkClasses(activeSection === item.id)}
                href={item.href}
                key={item.href}
                onClick={() => {
                  setActiveSection(item.id)
                  closeMenu()
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto space-y-3 pt-10">
            <Button className="w-full justify-center" href={PHONE_HREF} onClick={closeMenu} variant="ghost">
              {PHONE_DISPLAY}
            </Button>
            <Button className="w-full justify-center" href="#contact" onClick={closeMenu} variant="primary">
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
