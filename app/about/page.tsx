import type { Metadata } from 'next'
import Image from 'next/image'
import { Target, Heart, Zap, Shield } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { CtaSection } from '@/components/cta-section'
import { stats } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'About — WebPursuit',
  description:
    'WebPursuit is a conversion-focused web design agency helping small businesses and local service companies grow online.',
}

const values = [
  {
    icon: Target,
    title: 'Results First',
    description:
      'We measure success by your growth — more leads, more sales, more customers.',
  },
  {
    icon: Heart,
    title: 'Genuinely Invested',
    description:
      'Your business matters to us. We treat every project like it is our own.',
  },
  {
    icon: Zap,
    title: 'Speed & Quality',
    description:
      'We move fast without cutting corners, delivering polished work on time.',
  },
  {
    icon: Shield,
    title: 'Transparent',
    description:
      'No jargon, no surprises — just clear communication every step of the way.',
  },
]

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Us"
        title="A web partner obsessed with your growth"
        description="We are a team of designers, developers, and strategists who help small businesses compete and win online."
      />

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-3xl border border-border">
              <Image
                src="/images/team-collaborating.png"
                alt="The WebPursuit team collaborating on website designs"
                width={720}
                height={560}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy-deep)]/60 to-transparent" />
            </div>
            <div>
              <SectionHeading
                align="left"
                eyebrow="Our Story"
                title="Built to help local businesses thrive"
              />
              <div className="mt-5 space-y-4 text-pretty leading-relaxed text-muted-foreground">
                <p>
                  WebPursuit was founded on a simple belief: every business
                  deserves a website that actually works — one that loads fast,
                  looks professional, and turns visitors into customers.
                </p>
                <p>
                  Over the past decade we have partnered with contractors,
                  restaurants, retailers, clinics, and e-commerce brands to
                  build websites that drive real, measurable results. We blend
                  thoughtful design with clean development and proven SEO.
                </p>
                <p>
                  When you work with us, you are not just getting a website —
                  you are getting a long-term partner committed to your online
                  success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 rounded-3xl border border-primary/25 bg-[color:var(--navy)] p-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading text-3xl font-extrabold text-primary sm:text-4xl">
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

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Values"
            title="What we stand for"
            description="The principles that guide every project we take on."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="glass rounded-2xl p-7 transition-colors duration-300 hover:border-primary/40"
                >
                  <div className="grid size-12 place-items-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/20">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-bold">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <CtaSection />
    </main>
  )
}
