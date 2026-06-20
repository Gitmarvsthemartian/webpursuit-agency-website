import { SectionHeading } from '@/components/section-heading'
import { whyChoose } from '@/lib/site-data'

export function WhyChooseSection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[140px]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="The advantage of working with WebPursuit"
          description="We obsess over the details that turn a website into a real growth engine for your business."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className={`glass rounded-2xl p-7 transition-colors duration-300 hover:border-primary/40 ${
                  i === 0 ? 'lg:col-span-1' : ''
                }`}
              >
                <div className="grid size-12 place-items-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/20">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
