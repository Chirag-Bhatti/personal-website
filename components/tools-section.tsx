import { confidenceLevels, toolsSectionContent, toolCategories } from '@/content/tools'
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

      <div className="mt-10 flex flex-col gap-4 border-y py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs text-muted-foreground">{toolsSectionContent.confidenceNote}</p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Confidence level key">
          {Object.entries(confidenceLevels).map(([key, level]) => (
            <li key={key} className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              <span aria-hidden="true" className={level.className}>{level.marker}</span>
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
                          <li key={item.name} className="flex flex-wrap items-center gap-x-3 gap-y-1 rounded-sm border bg-background px-3 py-2 font-mono text-xs text-muted-foreground">
                            <span>{item.name}</span>
                            <span className="inline-flex items-center gap-1.5 text-[9px] uppercase tracking-wider" aria-label={`${level.label} confidence`}>
                              <span aria-hidden="true" className={level.className}>{level.marker}</span>
                              {level.label}
                            </span>
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
