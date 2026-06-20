import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { ServiceCard } from '@/components/service-card'
import { ProcessSection } from '@/components/home/process-section'
import { CtaSection } from '@/components/cta-section'
import { services } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Services — WebPursuit',
  description:
    'Website design, WordPress development, e-commerce, maintenance, SEO, and speed optimization for small businesses and local service companies.',
}

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Services"
        title="Everything you need to win online"
        description="A full-service web partner for small businesses, contractors, local service companies, and e-commerce stores."
      />

      <section className="pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />
      <CtaSection />
    </main>
  )
}
