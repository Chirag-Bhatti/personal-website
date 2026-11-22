import { experienceChapters, experienceSectionContent, type ExperienceChapter, type ExperienceRole, type ExperienceSignal } from '@/content/experience'
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

      <ol className="mt-12 grid gap-5">
        {experienceChapters.map((chapter) => (
          <ExperienceChapterCard key={chapter.number} chapter={chapter} />
        ))}
      </ol>
    </Section>
  )
}

function ExperienceChapterCard({ chapter }: { chapter: ExperienceChapter }) {
  const companies = [...new Set(chapter.roles.map((role) => role.company))]

  return (
    <li>
      <article className="rounded-xl border bg-card p-5 sm:p-7">
        <header className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
          <div className="min-w-0">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              <span className={chapterSignalText[chapter.signal]}>{String(chapter.number).padStart(2, '0')}</span>
              {' / Sector — '}
              {chapter.name}
            </p>
            <h3 className="mt-2 text-2xl font-semibold leading-tight sm:text-3xl">
              <span className="sr-only">{companies.length === 1 ? 'Company: ' : 'Companies: '}</span>
              {companies.join(' · ')}
            </h3>
          </div>
          <ExperienceChapterDuration chapter={chapter} />
        </header>

        <div className="mt-5">
          <p className="max-w-3xl text-pretty text-sm leading-relaxed text-muted-foreground">{chapter.summary}</p>
        </div>

        <ol className="mt-6 flex flex-col gap-6" aria-label={`${chapter.name} roles`}>
          {chapter.roles.map((role) => (
            <li key={`${role.title}-${role.start.year}`}>
              <ExperienceRole role={role} signal={chapter.signal} showCompany={companies.length > 1} />
            </li>
          ))}
        </ol>
      </article>
    </li>
  )
}

function ExperienceChapterDuration({ chapter }: { chapter: ExperienceChapter }) {
  const duration = formatExperienceDuration(chapter.duration)
  const start = formatExperienceDate(chapter.start)
  const end = chapter.end ? formatExperienceDate(chapter.end) : null

  return (
    <div className="flex flex-col gap-1 sm:items-end">
      <p className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
        <span className={cn('size-2 rounded-full', chapterSignalBackground[chapter.signal])} aria-hidden="true" />
        <span className="sr-only">Total time: </span>
        <time dateTime={duration.iso} className="tabular-nums">
          {duration.label}
        </time>
      </p>
      <p className="font-mono text-xs tabular-nums text-muted-foreground">
        <time dateTime={start.iso}>{start.label}</time>
        {' – '}
        {end ? <time dateTime={end.iso}>{end.label}</time> : 'Present'}
      </p>
    </div>
  )
}

function ExperienceRole({
  role,
  signal,
  showCompany,
}: {
  role: ExperienceRole
  signal: ExperienceSignal
  showCompany: boolean
}) {
  const start = formatExperienceDate(role.start)
  const end = role.end ? formatExperienceDate(role.end) : null

  return (
    <article className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-6">
      <div className="min-w-0">
        <h4 className="font-medium">{role.title}</h4>
        {showCompany ? <p className="mt-1 text-xs text-muted-foreground">{role.company}</p> : null}
        {role.highlights.length > 0 ? (
          <ul className="mt-3 flex flex-col gap-2.5">
            {role.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <span className={cn('mt-2.5 h-px w-3 shrink-0', chapterSignalBackground[signal])} aria-hidden="true" />
                {highlight}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <p className="font-mono text-xs tabular-nums text-muted-foreground sm:pt-1">
        <time dateTime={start.iso}>{start.label}</time>
        {' – '}
        {end ? <time dateTime={end.iso}>{end.label}</time> : 'Present'}
      </p>
    </article>
  )
}
