import { skillUnit, type SkillsComponent } from '@/lib/content'
import { Section, SectionHeader } from '@/components/section'
import { cn } from '@/lib/utils'

const SEGMENTS = 20
const SEGMENT_INDICES = Array.from({ length: SEGMENTS }, (_, i) => i)

function segmentColor(index: number) {
  if (index >= SEGMENTS - 4) return 'bg-primary'
  if (index >= SEGMENTS - 9) return 'bg-caution'
  return 'bg-accent'
}

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeader sectionId="skills" eyebrow="Skills" title="A hybrid engineer.">
        Like a modern engine, my skill set is a hybrid of different areas.
      </SectionHeader>

      <ul className="mt-16 grid gap-4 lg:grid-cols-3">
        {skillUnit.map((component) => (
          <li key={component.code} className="flex">
            <SkillsCard component={component} />
          </li>
        ))}
      </ul>
    </Section>
  )
}

function SkillsCard({ component }: { component: SkillsComponent }) {
  return (
    <article className="flex w-full flex-col rounded-lg border bg-card p-6">
      <div className="flex items-center justify-between">
        <span className="rounded-sm bg-secondary px-2 py-1 font-mono text-xs font-semibold tracking-wider" translate="no">
          {component.code}
        </span>
        <span className="font-mono text-xs tabular-nums text-muted-foreground">{component.charge}% SOC</span>
      </div>
      <h3 className="mt-6 text-lg font-semibold">{component.name}</h3>
      <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">{component.description}</p>

      <ChargeMeter label={`${component.name} proficiency`} value={component.charge} />

      <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${component.name} skills`}>
        {component.skills.map((skill) => (
          <li key={skill} className="rounded-sm border px-2.5 py-1 text-xs text-muted-foreground">
            {skill}
          </li>
        ))}
      </ul>
    </article>
  )
}

function ChargeMeter({ label, value }: { label: string; value: number }) {
  const lit = Math.round((value / 100) * SEGMENTS)
  return (
    <div
      className="mt-6 flex gap-1"
      role="meter"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
    >
      {SEGMENT_INDICES.map((i) => (
        <span key={i} className={cn('h-6 flex-1 rounded-[2px]', i < lit ? segmentColor(i) : 'bg-secondary')} />
      ))}
    </div>
  )
}
