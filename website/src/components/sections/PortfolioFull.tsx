import { useMemo, useState } from 'react'

import { filterCategories, projects, type ProjectCategory } from '../../data/projects'
import { Button, Container, FilterBar, GalleryItem, SectionHeader } from '../ui'

const INITIAL_VISIBLE_COUNT = 9

export function PortfolioFull() {
  const [activeFilter, setActiveFilter] = useState<'All' | ProjectCategory>('All')
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT)

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects
    }

    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  const visibleProjects = filteredProjects.slice(0, visibleCount)

  const canLoadMore = visibleCount < filteredProjects.length

  const handleFilterChange = (filter: 'All' | ProjectCategory) => {
    setActiveFilter(filter)
    setVisibleCount(INITIAL_VISIBLE_COUNT)
  }

  return (
    <section className="bg-canvas-warm py-20 sm:py-24" id="portfolio-full">
      <Container>
        <SectionHeader
          className="mx-auto max-w-[720px] text-center"
          description="Browse residential, commercial, exterior, and specialty work completed throughout Brevard County."
          label="Gallery"
          title="Project Portfolio"
        />

        <FilterBar activeFilter={activeFilter} filters={filterCategories} onFilterChange={handleFilterChange} />

        <div className="mb-12 columns-1 gap-4 md:columns-2 lg:columns-3">
          {visibleProjects.map((project) => (
            <GalleryItem key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center">
          <Button disabled={!canLoadMore} onClick={() => setVisibleCount((count) => count + 3)} variant="secondary">
            Load More
          </Button>
          <p className="mt-4 text-sm font-light text-ink-400">
            Showing {visibleProjects.length} of {filteredProjects.length} projects
          </p>
        </div>
      </Container>
    </section>
  )
}
