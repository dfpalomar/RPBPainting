import type { HTMLAttributes, ReactNode } from 'react'

export type SectionHeaderProps = {
  className?: string
  description?: ReactNode
  label: ReactNode
  title: ReactNode
} & Omit<HTMLAttributes<HTMLDivElement>, 'className'>

const joinClasses = (...values: Array<string | undefined>) => values.filter(Boolean).join(' ')

export function SectionHeader({ className, description, label, title, ...props }: SectionHeaderProps) {
  return (
    <div className={joinClasses(className)} {...props}>
      <p className="mb-3 text-xs font-semibold tracking-widest text-ink-400 uppercase">{label}</p>
      <h2 className="mb-3 font-display text-4xl font-medium tracking-tight text-ink-900">{title}</h2>
      {description ? (
        <p className="mb-12 max-w-[640px] font-body text-lg leading-relaxed font-light text-ink-500">{description}</p>
      ) : null}
    </div>
  )
}
