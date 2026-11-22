import { ArrowUpRight } from 'lucide-react'
import { projects, type Project } from '@/lib/content'
import { Section, SectionHeader } from '@/components/section'

export function Garage() {
  return (
    <Section id="garage">
      <SectionHeader sectionId="garage" eyebrow="Projects / built at race pace" title="Engineering beyond the finish line.">
        Selected software projects shaped by race engineering: turning telemetry into insight, reducing friction and building systems that hold up under pressure.
      </SectionHeader>

      <ul className="mt-16 grid gap-px overflow-hidden rounded-lg border bg-border md:grid-cols-3">
        {projects.map((project, i) => (
          <li key={project.name} className="bg-background">
            <ProjectCard project={project} carNumber={i + 1} />
          </li>
        ))}
      </ul>
    </Section>
  )
}

function ProjectCard({ project, carNumber }: { project: Project; carNumber: number }) {
  return (
    <a
      href={project.href}
      className="group flex h-full flex-col p-6 transition-colors hover:bg-card focus-visible:bg-card focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring"
    >
      <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
        <span className="tabular-nums">CAR {String(carNumber).padStart(2, '0')}</span>
        <ArrowUpRight
          className="size-4 transition-[translate,color] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary motion-reduce:transition-none"
          aria-hidden="true"
        />
      </div>
      <p className="mt-10 font-mono text-[10px] uppercase tracking-widest text-accent">{project.tag}</p>
      <h3 className="mt-2 text-xl font-semibold">{project.name}</h3>
      <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">{project.description}</p>
      <p className="mt-6 font-mono text-xs text-muted-foreground" translate="no">
        {project.stack.join(' / ')}
      </p>
    </a>
  )
}
