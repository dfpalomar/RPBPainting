import type { AnchorHTMLAttributes, ButtonHTMLAttributes, MouseEventHandler, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'ghost' | 'pill'
type ButtonSize = 'default' | 'lg'

type ButtonBaseProps = {
  children: ReactNode
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
  size?: ButtonSize
  variant?: ButtonVariant
}

type ButtonAsButtonProps = ButtonBaseProps & {
  href?: undefined
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className' | 'onClick' | 'type'>

type ButtonAsAnchorProps = ButtonBaseProps & {
  href: string
  type?: never
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'className' | 'href' | 'onClick' | 'type'>

export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps

const baseClasses =
  'inline-flex items-center justify-center gap-2 font-body font-medium tracking-wide whitespace-nowrap no-underline cursor-pointer transition-all duration-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)]'

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'border-0 bg-ink-900 text-white px-8 py-4 rounded-full text-sm hover:bg-ink-700 hover:-translate-y-px hover:shadow-md',
  secondary:
    'bg-transparent text-ink-900 px-8 py-4 rounded-full text-sm border-[1.5px] border-ink-200 hover:border-ink-900 hover:-translate-y-px',
  accent:
    'border-0 bg-wine-600 text-white px-8 py-4 rounded-full text-sm hover:bg-wine-700 hover:-translate-y-px hover:shadow-glow-coral',
  ghost:
    'border-0 bg-transparent text-ink-700 px-5 py-3 rounded-md text-sm hover:bg-ink-50 hover:text-ink-900',
  pill: 'border-0 bg-wine-50 text-wine-700 px-5 py-2 rounded-full text-sm font-medium hover:bg-wine-100',
}

const sizeClasses: Record<ButtonSize, string> = {
  default: '',
  lg: 'px-10 py-5 text-base',
}

const joinClasses = (...values: Array<string | undefined>) => values.filter(Boolean).join(' ')

export function Button(props: ButtonProps) {
  const {
    children,
    className,
    href,
    onClick,
    size = 'default',
    variant = 'primary',
    ...rest
  } = props

  const classes = joinClasses(baseClasses, variantClasses[variant], sizeClasses[size], className)

  if (href) {
    const { ...anchorProps } = rest as Omit<ButtonAsAnchorProps, keyof ButtonBaseProps | 'href'>

    return (
      <a className={classes} href={href} onClick={onClick} {...anchorProps}>
        {children}
      </a>
    )
  }

  const { type = 'button', ...buttonProps } = rest as Omit<ButtonAsButtonProps, keyof ButtonBaseProps | 'href'>

  return (
    <button className={classes} onClick={onClick} type={type} {...buttonProps}>
      {children}
    </button>
  )
}
