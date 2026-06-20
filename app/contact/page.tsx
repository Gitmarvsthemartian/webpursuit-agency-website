import type { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock, Calendar } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Contact — WebPursuit',
  description:
    'Get a free consultation. Tell us about your project and we will show you how to grow your business online.',
}

const contactDetails = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'hello@webpursuit.com',
    href: 'mailto:hello@webpursuit.com',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '(800) 555-1234',
    href: 'tel:+18005551234',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Serving businesses nationwide',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon–Fri, 9am – 6pm EST',
  },
]

const reasons = [
  'Free, no-obligation consultation',
  'Response within one business day',
  'Custom strategy for your business',
  'Transparent, upfront pricing',
]

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Let's build something that grows your business"
        description="Tell us about your project and goals. We'll get back to you with a free consultation and a clear plan forward."
      />

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <h2 className="font-heading text-2xl font-bold">
                Get your free consultation
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Whether you need a brand-new website or want to improve an
                existing one, we're here to help you succeed online.
              </p>

              <ul className="mt-6 space-y-3">
                {reasons.map((reason) => (
                  <li
                    key={reason}
                    className="flex items-center gap-3 text-sm text-foreground"
                  >
                    <span className="grid size-6 place-items-center rounded-full bg-primary/15 text-primary">
                      <Calendar className="size-3.5" />
                    </span>
                    {reason}
                  </li>
                ))}
              </ul>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {contactDetails.map((detail) => {
                  const Icon = detail.icon
                  const content = (
                    <>
                      <div className="grid size-10 place-items-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/20">
                        <Icon className="size-5" />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wider text-muted-foreground">
                          {detail.label}
                        </div>
                        <div className="mt-0.5 text-sm font-medium text-foreground">
                          {detail.value}
                        </div>
                      </div>
                    </>
                  )
                  return (
                    <div
                      key={detail.label}
                      className="rounded-2xl border border-border glass p-4"
                    >
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="flex items-center gap-3 transition-colors hover:text-primary"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="flex items-center gap-3">{content}</div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}
