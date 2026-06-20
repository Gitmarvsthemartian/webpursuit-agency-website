import Image from 'next/image'
import { ArrowUpRight, TrendingUp } from 'lucide-react'
import type { Project } from '@/lib/site-data'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
      <div className="relative aspect-[16/11] overflow-hidden">
        <Image
          src={project.image || '/placeholder.svg'}
          alt={`${project.title} website project`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy-deep)] via-transparent to-transparent opacity-80" />
        <span className="absolute left-4 top-4 rounded-full border border-border glass-strong px-3 py-1 text-xs font-semibold text-primary">
          {project.category}
        </span>
        <span className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-primary text-primary-foreground opacity-0 transition-all duration-300 group-hover:opacity-100">
          <ArrowUpRight className="size-4" />
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-heading text-lg font-bold">{project.title}</h3>
          <span className="flex items-center gap-1 text-sm font-semibold text-primary">
            <TrendingUp className="size-4" />
            {project.result}
          </span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
