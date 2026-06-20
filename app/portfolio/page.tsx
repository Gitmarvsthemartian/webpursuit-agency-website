import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { ProjectCard } from '@/components/project-card'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { CtaSection } from '@/components/cta-section'
import { projects, stats } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Portfolio — WebPursuit',
  description:
    'Explore websites we have designed and built for small businesses, contractors, restaurants, healthcare, fitness, and e-commerce brands.',
}

export default function PortfolioPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Work"
        title="Projects that move the needle"
        description="Real websites for real businesses — each one designed to look great and drive measurable growth."
      />

      <section className="pb-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 rounded-2xl border border-border glass p-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading text-2xl font-extrabold text-primary sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CtaSection />
    </main>
  )
}
