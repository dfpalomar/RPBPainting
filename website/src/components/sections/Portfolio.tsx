import { projects } from '../../data/projects'
import { Button, Container, GalleryItem, SectionHeader } from '../ui'

const featuredProjects = projects.filter((project) => project.isFeatured).slice(0, 1)
const sideProjects = projects.filter((project) => !project.isFeatured).slice(0, 2)

export function Portfolio() {
  const heroProject = featuredProjects[0]
    ? {
        ...featuredProjects[0],
        sizeClassName: 'h-full',
      }
    : undefined

  return (
    <section className="scroll-mt-28 py-20 sm:py-24" id="portfolio">
      <Container className="reveal-stagger">
        <SectionHeader
          description="Featured residential and commercial projects completed across Brevard County with premium workmanship and disciplined prep."
          label="Portfolio"
          title="Our Work"
        />

        <div className="mb-12 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {heroProject ? (
            <GalleryItem
              className="mb-0 h-[420px] overflow-hidden rounded-2xl lg:h-[480px]"
              forceOverlayVisible
              project={heroProject}
              showArrow={false}
            />
          ) : null}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {sideProjects.map((project) => (
              <GalleryItem className="mb-0 min-h-[232px]" key={project.id} project={project} showArrow={false} />
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button href="#before-after" variant="secondary">
            View Transformations
          </Button>
        </div>
      </Container>
    </section>
  )
}
