import Link from 'next/link'
import { ArrowRight, Star, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { stats } from '@/lib/site-data'

const highlights = ['Custom Design', 'WordPress', 'SEO Optimized', 'Fast Support']

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-24 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-primary/15 blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(87,197,232,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(87,197,232,0.05)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border glass px-4 py-1.5 text-sm">
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="size-3.5 fill-primary text-primary"
                />
              ))}
            </span>
            <span className="text-muted-foreground">
              Trusted by 150+ growing businesses
            </span>
          </div>

          <h1 className="mt-6 text-balance font-heading text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            We Build Websites That{' '}
            <span className="text-gradient">Generate Leads</span> & Grow
            Businesses
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Custom websites, WordPress development, SEO optimization, and ongoing
            support — everything your business needs to win online.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-xl px-7 text-base font-semibold"
            >
              <Link href="/contact">
                Get Free Consultation
                <ArrowRight className="size-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-xl border-border bg-transparent px-7 text-base font-semibold hover:bg-secondary"
            >
              <Link href="/portfolio">View Portfolio</Link>
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check className="size-4 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-2xl p-6 text-center"
            >
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
  )
}
