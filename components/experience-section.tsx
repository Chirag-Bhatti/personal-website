import { experienceCompanies, experienceSectionContent, type ExperienceCompany, type ExperienceRole } from '@/content/experience'
import { Section, SectionHeader } from '@/components/section'
import {
  chapterSignalBackground,
  chapterSignalText,
  formatExperienceDate,
  formatExperienceDuration,
} from '@/lib/experience-display'
import { cn } from '@/lib/utils'

export function ExperienceSection() {
  return (
    <Section id="experience">
      <SectionHeader
        sectionId="experience"
        eyebrow={experienceSectionContent.eyebrow}
        title={experienceSectionContent.heading}
      >
        {experienceSectionContent.introduction}
      </SectionHeader>

      <ol className="mt-12 flex flex-col gap-8 sm:mt-16 sm:gap-10">
        {experienceCompanies.map((company, index) => (
          <li key={company.name}>
            <ExperienceCompanyCard company={company} index={index + 1} />
          </li>
        ))}
      </ol>
    </Section>
  )
}

function ExperienceCompanyCard({ company, index }: { company: ExperienceCompany; index: number }) {
  const start = formatExperienceDate(company.start)
  const end = company.end ? formatExperienceDate(company.end) : null
  const duration = formatExperienceDuration(company.duration)

  return (
    <article className="rounded-lg border bg-card p-5 sm:p-7">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
        <div className="min-w-0">
          <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em]">
            <span className="tabular-nums text-muted-foreground" aria-hidden="true">
              {String(index).padStart(2, '0')} /
            </span>
            <span className={chapterSignalText[company.signal]}>{company.sector}</span>
          </p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight">{company.name}</h3>
        </div>
        <div className="flex shrink-0 flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs text-muted-foreground sm:justify-end">
          <p className="tabular-nums">
            <time dateTime={start.iso}>{start.label}</time>
            {' - '}
            {end ? <time dateTime={end.iso}>{end.label}</time> : 'Present'}
          </p>
          <span className={cn('size-1.5 -translate-y-px rounded-full', chapterSignalBackground[company.signal])} aria-hidden="true" />
          <p>
            <time dateTime={duration.iso}>{duration.label}</time>
          </p>
        </div>
      </header>

      <ol className="mt-4 flex flex-col gap-2 border-t pt-4" aria-label={`${company.name} roles`}>
        {company.roles.map((role) => (
          <li key={`${role.title}-${role.start.year}`}>
            <ExperienceRole role={role} />
          </li>
        ))}
      </ol>
      <div className="mt-4 border-t pt-4">
        <h4 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Overview</h4>
        <ul className="mt-3 flex flex-col gap-2.5">
          {company.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
              <span
                className={cn('mt-2.5 h-px w-3 shrink-0', chapterSignalBackground[company.signal])}
                aria-hidden="true"
              />
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

function ExperienceRole({ role }: { role: ExperienceRole }) {
  const start = formatExperienceDate(role.start)
  const end = role.end ? formatExperienceDate(role.end) : null

  return (
    <div className="grid gap-2 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-6">
      <h4 className="font-medium">{role.title}</h4>
      <p className="font-mono text-xs tabular-nums text-muted-foreground sm:pt-1">
        <time dateTime={start.iso}>{start.label}</time>
        {' – '}
        {end ? <time dateTime={end.iso}>{end.label}</time> : 'Present'}
      </p>
    </div>
  )
}
