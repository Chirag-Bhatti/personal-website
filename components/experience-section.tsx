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

      <ol className="mt-16 flex flex-col">
        {experienceChapters.map((chapter) => (
          <ExperienceChapterCard key={chapter.number} chapter={chapter} />
        ))}
      </ol>
    </Section>
  )
}

function ExperienceChapterCard({ chapter }: { chapter: ExperienceChapter }) {
  return (
    <li className="grid gap-6 border-t py-10 md:grid-cols-[220px_1fr] md:gap-12">
      <div className="flex items-start gap-4 md:flex-col md:gap-3">
        <span
          className={cn('font-mono text-6xl font-semibold leading-none tabular-nums', chapterSignalText[chapter.signal])}
          aria-hidden="true"
        >
          S{chapter.number}
        </span>
        <div className="min-w-0">
          <h3 className="text-xl font-semibold">
            <span className="sr-only">Chapter {chapter.number}: </span>
            {chapter.name}
          </h3>
          <ExperienceChapterDuration months={chapter.durationMonths} />
        </div>
      </div>

      <div className="min-w-0">
        <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">{chapter.summary}</p>
        {chapter.roles.map((role) => (
          <ExperienceRoleCard key={role.title} role={role} signal={chapter.signal} />
        ))}
      </div>
    </li>
  )
}

function ExperienceChapterDuration({ months }: { months: number | null }) {
  const className = 'mt-1 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground'

  if (months === null) {
    return (
      <p className={className}>
        <span className="relative flex size-2" aria-hidden="true">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75 motion-reduce:animate-none" />
          <span className="relative inline-flex size-2 rounded-full bg-accent" />
        </span>
        Live
      </p>
    )
  }

  const duration = formatExperienceDuration(months)
  return (
    <p className={className}>
      <span className="sr-only">Chapter duration: </span>
      <time dateTime={duration.iso} className="tabular-nums">
        {duration.label}
      </time>
    </p>
  )
}

function ExperienceRoleCard({ role, signal }: { role: ExperienceRole; signal: ExperienceSignal }) {
  return (
    <article className="mt-6 rounded-lg border bg-card p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h4 className="min-w-0 font-medium">
          {role.title} <span className="text-muted-foreground">· {role.company}</span>
        </h4>
        <p className="font-mono text-xs tabular-nums text-muted-foreground">
          <time dateTime={String(role.start)}>{role.start}</time>
          {' – '}
          {role.end === null ? 'Present' : <time dateTime={String(role.end)}>{role.end}</time>}
        </p>
      </div>
      {role.highlights.length > 0 ? (
        <ul className="mt-4 flex flex-col gap-2.5">
          {role.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
              <span className={cn('mt-2.5 h-px w-3 shrink-0', chapterSignalBackground[signal])} aria-hidden="true" />
              {highlight}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  )
}
