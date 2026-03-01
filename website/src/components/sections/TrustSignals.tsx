import { Award, BadgeCheck, Paintbrush, Shield, ShieldCheck } from 'lucide-react'

import { Container } from '../ui'

type TrustSignal = {
  icon: typeof Award
  label: string
}

const trustSignals: TrustSignal[] = [
  { icon: BadgeCheck, label: 'Licensed Contractor' },
  { icon: ShieldCheck, label: 'Insured' },
  { icon: Award, label: '13+ Years' },
  { icon: Paintbrush, label: 'Premium Paints' },
  { icon: Shield, label: '5-Star Rated' },
]

export function TrustSignals() {
  return (
    <section className="scroll-mt-28 bg-canvas-warm py-20 sm:py-24" id="trust-signals">
      <Container className="reveal-stagger">
        <div className="rounded-2xl border border-ink-100 bg-surface p-6 shadow-sm sm:p-8">
          <p className="mb-5 text-xs font-semibold tracking-widest text-ink-400 uppercase">Trusted by Brevard County</p>

          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {trustSignals.map((signal) => {
              const Icon = signal.icon

              return (
                <li
                  className="inline-flex items-center gap-3 rounded-full border border-ink-100 bg-canvas px-4 py-3 text-sm font-medium text-ink-700"
                  key={signal.label}
                >
                  <Icon aria-hidden className="h-4 w-4 text-wine-600" />
                  <span>{signal.label}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </Container>
    </section>
  )
}
