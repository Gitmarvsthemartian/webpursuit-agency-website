import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="WebPursuit home"
      className={cn('group inline-flex items-center gap-2.5', className)}
    >
      <span
        aria-hidden="true"
        className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground font-heading text-lg font-extrabold italic leading-none transition-transform duration-300 group-hover:-translate-y-0.5"
      >
        W
      </span>
      <span className="font-heading text-xl font-extrabold italic tracking-tight leading-none">
        <span className="text-foreground">WEB</span>
        <span className="text-primary">PURSUIT</span>
      </span>
    </Link>
  )
}
