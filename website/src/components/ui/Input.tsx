import type { InputHTMLAttributes } from 'react'

export type InputProps = InputHTMLAttributes<HTMLInputElement>

const inputClasses =
  'w-full font-body text-base px-5 py-4 border-[1.5px] border-ink-200 rounded-lg bg-surface text-ink-900 outline-none placeholder:text-ink-400 placeholder:font-light focus:border-wine-400 focus:shadow-[0_0_0_3px_var(--color-wine-100)] transition-[border-color,box-shadow] duration-[150ms] ease-linear'

const joinClasses = (...values: Array<string | undefined>) => values.filter(Boolean).join(' ')

export function Input({ className, ...props }: InputProps) {
  return <input className={joinClasses(inputClasses, className)} {...props} />
}
