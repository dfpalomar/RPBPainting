import type { ProjectCategory } from '../../data/projects'

type FilterValue = 'All' | ProjectCategory

export type FilterBarProps = {
  activeFilter: FilterValue
  className?: string
  filters: FilterValue[]
  onFilterChange: (filter: FilterValue) => void
}

const joinClasses = (...values: Array<string | undefined>) => values.filter(Boolean).join(' ')

export function FilterBar({ activeFilter, className, filters, onFilterChange }: FilterBarProps) {
  return (
    <div className={joinClasses('mb-10 flex flex-wrap items-center justify-center gap-2', className)}>
      {filters.map((filter) => {
        const isActive = filter === activeFilter

        return (
          <button
            className={joinClasses(
              'cursor-pointer rounded-full border-[1.5px] px-5 py-2 text-sm tracking-wide transition-all duration-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)]',
              isActive
                ? 'border-ink-200 bg-surface font-medium text-ink-900 shadow-xs'
                : 'border-transparent bg-transparent font-normal text-ink-500 hover:bg-ink-50 hover:text-ink-900',
            )}
            key={filter}
            onClick={() => onFilterChange(filter)}
            type="button"
          >
            {filter}
          </button>
        )
      })}
    </div>
  )
}
