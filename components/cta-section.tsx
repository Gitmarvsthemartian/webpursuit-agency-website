import Link from 'next/link'
import { ArrowRight, PhoneCall } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CtaSection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-primary/25 bg-[color:var(--navy)] px-6 py-16 text-center sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute -top-20 left-1/2 h-[360px] w-[700px] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(87,197,232,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(87,197,232,0.06)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
          </div>
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-balance font-heading text-3xl font-extrabold tracking-tight sm:text-5xl">
              Ready to grow your business online?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Let's build a website that works as hard as you do. Book your free,
              no-obligation consultation today.
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
                <a href="tel:+18005551234">
                  <PhoneCall className="size-5" />
                  (+63) 9976691021
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
