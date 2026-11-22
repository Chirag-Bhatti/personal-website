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
              <div className="mt-6 flex flex-col gap-5">
                {category.groups.map((group) => (
                  <section key={group.name} aria-label={`${category.name} ${group.name}`}>
                    <h4 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {group.name}
                    </h4>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <li key={item} className="rounded-sm border bg-background px-3 py-2 font-mono text-xs text-muted-foreground">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  )
}
