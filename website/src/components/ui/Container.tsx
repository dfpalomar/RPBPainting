import type { HTMLAttributes, ReactNode } from 'react'

type ContainerSize = 'default' | 'narrow' | 'wide'

export type ContainerProps = {
  children: ReactNode
  className?: string
  size?: ContainerSize
} & Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'className'>

const sizeClasses: Record<ContainerSize, string> = {
  default: 'max-w-[1200px]',
  narrow: 'max-w-[800px]',
  wide: 'max-w-[1440px]',
}

const joinClasses = (...values: Array<string | undefined>) => values.filter(Boolean).join(' ')

export function Container({ children, className, size = 'default', ...props }: ContainerProps) {
  return (
    <div className={joinClasses('mx-auto w-full px-6', sizeClasses[size], className)} {...props}>
      {children}
    </div>
  )
}
