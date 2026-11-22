import { Section, SectionHeader } from '@/components/section'

const toolsets = [
  {
    number: '01',
    name: 'Frontend',
    descriptor: 'The interface layer',
    tools: ['TypeScript', 'React', 'Next.js', 'HTML & CSS', 'Tailwind CSS', 'Accessibility'],
  },
  {
    number: '02',
    name: 'Backend',
    descriptor: 'Services & data',
    tools: ['Node.js', 'Python', 'PostgreSQL', 'REST APIs', 'FastAPI', 'SQL'],
  },
  {
    number: '03',
    name: 'Infrastructure',
    descriptor: 'Cloud & platforms',
    tools: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Linux', 'Git'],
  },
  {
    number: '04',
    name: 'DevOps / SRE',
    descriptor: 'Delivery & reliability',
    tools: ['CI/CD', 'GitHub Actions', 'Observability', 'Prometheus', 'Grafana', 'Incident response'],
  },
]

export function Skills() {
  return (
    <Section id="tools">
      <SectionHeader sectionId="tools" eyebrow="Tools / 04 domains" title="The tools behind the work.">
        A working toolkit across the stack, from user-facing experiences to dependable production systems.
      </SectionHeader>

      <ul className="mt-16 grid gap-4 sm:grid-cols-2">
        {toolsets.map((toolset) => (
          <li key={toolset.number}>
            <article className="group flex h-full flex-col rounded-lg border bg-card p-6 transition-colors hover:border-primary/50 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-xs tabular-nums text-accent">{toolset.number} / 04</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{toolset.descriptor}</span>
              </div>
              <h3 className="mt-8 text-xl font-semibold tracking-tight">{toolset.name}</h3>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${toolset.name} technologies`}>
                {toolset.tools.map((tool) => (
                  <li key={tool} className="rounded-sm border bg-background px-3 py-2 font-mono text-xs text-muted-foreground">
                    {tool}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  )
}
