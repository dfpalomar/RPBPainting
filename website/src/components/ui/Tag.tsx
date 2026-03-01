import type { HTMLAttributes, ReactNode } from 'react'

type TagVariant = 'coral' | 'teal' | 'lavender' | 'ochre' | 'sage' | 'sky'

export type TagProps = {
  children: ReactNode
  className?: string
  variant?: TagVariant
} & Omit<HTMLAttributes<HTMLSpanElement>, 'children' | 'className'>

const baseClasses = 'inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium tracking-wide'

const variantClasses: Record<TagVariant, string> = {
  coral: 'bg-wine-100 text-wine-700',
  teal: 'bg-navy-100 text-navy-700',
  lavender: 'bg-slate-100 text-slate-700',
  ochre: 'bg-brass-100 text-brass-700',
  sage: 'bg-forest-100 text-forest-700',
  sky: 'bg-stone-100 text-stone-700',
}

const joinClasses = (...values: Array<string | undefined>) => values.filter(Boolean).join(' ')

export function Tag({ children, className, variant = 'coral', ...props }: TagProps) {
  return (
    <span className={joinClasses(baseClasses, variantClasses[variant], className)} {...props}>
      {children}
    </span>
  )
}
