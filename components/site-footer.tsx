import Link from 'next/link'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import { Logo } from '@/components/logo'

const columns = [
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About Us' },
      { href: '/portfolio', label: 'Portfolio' },
      { href: '/services', label: 'Services' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { href: '/services', label: 'Website Design' },
      { href: '/services', label: 'WordPress Development' },
      { href: '/services', label: 'E-Commerce' },
      { href: '/services', label: 'SEO Optimization' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-border bg-[color:var(--navy-deep)]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              We build fast, beautiful, conversion-focused websites that help
              small businesses and local service companies generate more leads
              and grow online.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <a
                href="mailto:hello@webpursuit.com"
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="size-4 text-primary" />
                hello@webpursuit.com
              </a>
              <a
                href="tel:+18005551234"
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
              >
                <Phone className="size-4 text-primary" />
                (800) 555-1234
              </a>
              <p className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="size-4 text-primary" />
                Serving businesses nationwide
              </p>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link, i) => (
                  <li key={`${link.label}-${i}`}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
              Get Started
            </h3>
            <p className="mt-5 text-sm text-muted-foreground">
              Ready to grow your business online?
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Free Consultation
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} WebPursuit. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/" className="transition-colors hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
