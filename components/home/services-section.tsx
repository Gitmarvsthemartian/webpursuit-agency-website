import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { ServiceCard } from '@/components/service-card'
import { Button } from '@/components/ui/button'
import { services } from '@/lib/site-data'

export function ServicesSection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Services built to grow your business"
          description="From design to launch and beyond, we handle everything your business needs to succeed online."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-xl border-border bg-transparent font-semibold hover:bg-secondary"
          >
            <Link href="/services">
              Explore All Services
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
