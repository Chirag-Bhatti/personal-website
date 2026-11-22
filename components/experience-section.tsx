import { experienceChapters, experienceSectionContent, type ExperienceChapter, type ExperienceRole, type ExperienceSignal } from '@/content/experience'
import { Section, SectionHeader } from '@/components/section'
import { chapterSignalBackground, chapterSignalText, formatExperienceDuration } from '@/lib/experience-display'
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
      <article className="overflow-hidden rounded-xl border bg-card">
        <div className="grid gap-5 p-5 sm:p-7 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
          <div className="flex items-start gap-4">
            <span
              className={cn('font-mono text-4xl font-semibold leading-none tabular-nums', chapterSignalText[chapter.signal])}
              aria-hidden="true"
            >
              0{chapter.number}
            </span>
            <div className="min-w-0">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Sector</p>
              <h3 className="mt-1 text-xl font-semibold sm:text-2xl">{chapter.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                <span className="sr-only">{companies.length === 1 ? 'Company: ' : 'Companies: '}</span>
                {companies.join(' · ')}
              </p>
            </div>
          </div>
          <ExperienceChapterDuration chapter={chapter} />
        </div>

        <div className="border-t px-5 py-5 sm:px-7">
          <p className="max-w-3xl text-pretty text-sm leading-relaxed text-muted-foreground">{chapter.summary}</p>
        </div>

        <ol className="border-t px-5 sm:px-7" aria-label={`${chapter.name} roles`}>
          {chapter.roles.map((role, index) => (
            <li key={`${role.title}-${role.start}`} className={cn(index > 0 && 'border-t')}>
              <ExperienceRole role={role} signal={chapter.signal} />
            </li>
          ))}
        </ol>
      </article>
    </li>
  )
}

function ExperienceChapterDuration({ chapter }: { chapter: ExperienceChapter }) {
  if (chapter.durationMonths === null) {
    const firstRoleYear = Math.min(...chapter.roles.map((role) => role.start))
    const years = new Date().getFullYear() - firstRoleYear

    return (
      <p className="flex items-center gap-2 rounded-full border px-3 py-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
        <span className="relative flex size-2" aria-hidden="true">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75 motion-reduce:animate-none" />
          <span className="relative inline-flex size-2 rounded-full bg-accent" />
        </span>
        <span className="sr-only">Total time: </span>
        {years}+ years · Present
      </p>
    )
  }

  const duration = formatExperienceDuration(chapter.durationMonths)
  return (
    <p className="flex items-center gap-2 rounded-full border px-3 py-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
      <span className={cn('size-2 rounded-full', chapterSignalBackground[chapter.signal])} aria-hidden="true" />
      <span className="sr-only">Total time: </span>
      <time dateTime={duration.iso} className="tabular-nums">
        {duration.label}
      </time>
    </p>
  )
}

function ExperienceRole({ role, signal }: { role: ExperienceRole; signal: ExperienceSignal }) {
  return (
    <article className="grid gap-3 py-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-6">
      <div className="min-w-0">
        <h4 className="font-medium">{role.title}</h4>
        {role.highlights.length > 0 ? (
          <div className="mt-3">
            <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Highlights &amp; impact</p>
            <ul className="flex flex-col gap-2.5">
              {role.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className={cn('mt-2.5 h-px w-3 shrink-0', chapterSignalBackground[signal])} aria-hidden="true" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
      <p className="font-mono text-xs tabular-nums text-muted-foreground sm:pt-1">
        <time dateTime={String(role.start)}>{role.start}</time>
        {' – '}
        {role.end === null ? 'Present' : <time dateTime={String(role.end)}>{role.end}</time>}
      </p>
    </article>
  )
}
