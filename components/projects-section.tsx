import { ArrowUpRight } from 'lucide-react'
import { portfolioProjects, projectsSectionContent, type PortfolioProject } from '@/content/projects'
import { Section, SectionHeader } from '@/components/section'
import { cn } from '@/lib/utils'

export function ProjectsSection() {
  return (
    <Section id="projects">
      <SectionHeader
        sectionId="projects"
        eyebrow={projectsSectionContent.eyebrow}
        title={projectsSectionContent.heading}
      >
        {projectsSectionContent.introduction}
      </SectionHeader>

      <ul className="mt-16 grid gap-px overflow-hidden rounded-lg border bg-border md:grid-cols-3">
        {portfolioProjects.map((project, index) => (
          <li key={project.name} className="bg-background">
            <ProjectCard project={project} carNumber={index + 1} />
          </li>
        ))}
      </ul>
    </Section>
  )
}

function ProjectCard({ project, carNumber }: { project: PortfolioProject; carNumber: number }) {
  const isExternal = project.href?.startsWith('http')
  const card = (
    <article className={cn('flex h-full flex-col p-6', project.href && 'transition-colors hover:bg-card')}>
      <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
        <span className="tabular-nums">CAR {String(carNumber).padStart(2, '0')}</span>
        {project.href ? (
          <ArrowUpRight
            className="size-4 transition-[translate,color] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary motion-reduce:transition-none"
            aria-hidden="true"
          />
        ) : null}
      </div>
      <p className="mt-10 font-mono text-[10px] uppercase tracking-widest text-accent">{project.category}</p>
      <h3 className="mt-2 text-xl font-semibold">{project.name}</h3>
      <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">{project.description}</p>
      <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${project.name} technologies`} translate="no">
        {project.technologies.map((technology) => (
          <li key={technology} className="rounded-sm border bg-background px-3 py-2 font-mono text-xs text-muted-foreground">
            {technology}
          </li>
        ))}
      </ul>
    </article>
  )

  if (!project.href) return card

  return (
    <a
      href={project.href}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : null)}
      className="group block h-full rounded-sm focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring"
    >
      {card}
    </a>
  )
}
