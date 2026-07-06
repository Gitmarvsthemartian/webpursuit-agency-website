import Link from 'next/link'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export function Logo({ className }: { className?: string }) {
  return (
    <Link
  href="/"
  aria-label="WebPursuit home"
  className={cn('group inline-flex items-center gap-2.5', className)}
>
  <Image
    src="/logo.webp"
    alt="WebPursuit"
    width={50}
    height={50}
    className="h-9 w-9"
    priority
  />

  <span className="font-heading text-xl font-extrabold italic tracking-tight leading-none">
    <span className="text-foreground">WEB</span>
    <span className="text-primary">PURSUIT</span>
  </span>
</Link>
  )
}
