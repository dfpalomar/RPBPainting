import { ArrowUpRight } from 'lucide-react'

import type { Project } from '../../data/projects'

export type GalleryItemProps = {
  className?: string
  forceOverlayVisible?: boolean
  project: Project
  showArrow?: boolean
}

const joinClasses = (...values: Array<string | undefined | false>) => values.filter(Boolean).join(' ')

export function GalleryItem({
  className,
  forceOverlayVisible = false,
  project,
  showArrow = true,
}: GalleryItemProps) {
  return (
    <article
      className={joinClasses(
        'group relative mb-4 break-inside-avoid overflow-hidden rounded-xl transition-transform duration-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.015]',
        className,
      )}
    >
      <div className={joinClasses('w-full rounded-xl', project.sizeClassName, project.colorClassName)} />

      <div
        className={joinClasses(
          'absolute inset-0 flex flex-col justify-end rounded-xl bg-[linear-gradient(0deg,rgba(26,26,26,0.75)_0%,rgba(26,26,26,0.15)_40%,transparent_100%)] p-6 transition-opacity duration-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)]',
          forceOverlayVisible ? 'opacity-100' : 'opacity-0 group-hover:opacity-100',
        )}
      >
        {showArrow ? (
          <span className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition-all duration-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-rotate-45 group-hover:bg-white group-hover:text-ink-900">
            <ArrowUpRight size={16} strokeWidth={2} />
          </span>
        ) : null}

        <span className="mb-2 inline-flex w-fit rounded-full bg-white/15 px-3 py-1 text-xs font-medium tracking-wide text-white backdrop-blur-md">
          {project.category}
        </span>
        <h3 className="mb-1 font-display text-xl font-semibold text-white">{project.title}</h3>
        <p className="text-sm font-light text-white/70">
          {project.location} · {project.type}
        </p>
      </div>
    </article>
  )
}
