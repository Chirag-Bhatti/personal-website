import { confidenceLevels, toolsSectionContent, toolCategories } from '@/content/tools'
import { Section, SectionHeader } from '@/components/section'

export function ToolsSection() {
  return (
    <Section id="tech">
      <SectionHeader
        sectionId="tech"
        eyebrow={toolsSectionContent.eyebrow}
        title={toolsSectionContent.heading}
      >
        {toolsSectionContent.introduction}
      </SectionHeader>

      <div className="mt-10 flex flex-col gap-4 border-y py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Confidence levels</p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Confidence level key">
          {Object.entries(confidenceLevels).map(([key, level]) => (
            <li key={key} className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              <span aria-hidden="true" className={`size-2 rounded-full ${level.className}`} />
              {level.label}
            </li>
          ))}
        </ul>
      </div>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
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
                      {group.items.map((item) => {
                        const level = confidenceLevels[item.confidence as keyof typeof confidenceLevels]

                        return (
                          <li key={item.name} aria-label={`${item.name}, ${level.label} confidence`} className="flex items-center gap-3 rounded-sm border bg-background px-3 py-2 font-mono text-xs text-muted-foreground">
                            <span>{item.name}</span>
                            <span aria-hidden="true" className={`size-2 shrink-0 rounded-full ${level.className}`} />
                          </li>
                        )
                      })}
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
