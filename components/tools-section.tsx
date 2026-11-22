import { toolsSectionContent, toolCategories } from '@/content/tools'
import { Section, SectionHeader } from '@/components/section'

export function ToolsSection() {
  return (
    <Section id="tools">
      <SectionHeader
        sectionId="tools"
        eyebrow={toolsSectionContent.eyebrow}
        title={toolsSectionContent.heading}
      >
        {toolsSectionContent.introduction}
      </SectionHeader>

      <ul className="mt-16 grid gap-4 sm:grid-cols-2">
        {toolCategories.map((category, index) => (
          <li key={category.name}>
            <article className="group flex h-full flex-col rounded-lg border bg-card p-6 transition-colors hover:border-primary/50 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-xs tabular-nums text-accent">
                  {String(index + 1).padStart(2, '0')} / {String(toolCategories.length).padStart(2, '0')}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{category.descriptor}</span>
              </div>
              <h3 className="mt-8 text-xl font-semibold tracking-tight">{category.name}</h3>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${category.name} technologies`}>
                {category.tools.map((tool) => (
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
