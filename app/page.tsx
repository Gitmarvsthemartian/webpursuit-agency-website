import { Hero } from '@/components/home/hero'
import { ServicesSection } from '@/components/home/services-section'
import { WhyChooseSection } from '@/components/home/why-choose-section'
import { ProjectsSection } from '@/components/home/projects-section'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { ProcessSection } from '@/components/home/process-section'
import { CtaSection } from '@/components/cta-section'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <WhyChooseSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ProcessSection />
      <CtaSection />
    </main>
  )
}
