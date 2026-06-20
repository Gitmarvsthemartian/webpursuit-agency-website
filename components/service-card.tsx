import { Check } from 'lucide-react'
import type { Service } from '@/lib/site-data'

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border glass p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
      <div
        aria-hidden="true"
        className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-0"
      />
      <div className="relative">
        <div className="grid size-12 place-items-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/20 transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon className="size-6" />
        </div>
        <h3 className="mt-5 font-heading text-xl font-bold">{service.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {service.description}
        </p>
        <ul className="mt-5 grid grid-cols-2 gap-2">
          {service.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-1.5 text-xs text-muted-foreground"
            >
              <Check className="size-3.5 shrink-0 text-primary" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
