import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { ProjectCard } from '@/components/project-card'
import { Button } from '@/components/ui/button'
import { projects } from '@/lib/site-data'

export function ProjectsSection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Recent Projects"
          title="Work that delivers real results"
          description="A look at some of the businesses we have helped grow with high-performing websites."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 6).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-xl border-border bg-transparent font-semibold hover:bg-secondary"
          >
            <Link href="/portfolio">
              View Full Portfolio
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
