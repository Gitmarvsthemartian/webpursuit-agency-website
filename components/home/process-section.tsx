import { SectionHeading } from '@/components/section-heading'
import { processSteps } from '@/lib/site-data'

export function ProcessSection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Process"
          title="A proven path from idea to results"
          description="A clear, collaborative process that keeps you informed and your project on track."
        />
        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block"
          />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {processSteps.map((step) => (
              <li key={step.step} className="relative text-center lg:text-left">
                <div className="mx-auto grid size-14 place-items-center rounded-2xl bg-card font-heading text-lg font-extrabold text-primary ring-1 ring-primary/25 lg:mx-0">
                  {step.step}
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
