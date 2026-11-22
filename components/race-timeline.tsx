import { career, type Role, type Sector, type Signal } from '@/lib/content'
import { Section, SectionHeader } from '@/components/section'
import { formatDuration, signalBg, signalText } from '@/lib/signals'
import { cn } from '@/lib/utils'

export function RaceTimeline() {
  return (
    <Section id="track">
      <SectionHeader sectionId="track" eyebrow="Experience / engineering journey" title="From the pit wall to the codebase.">
        From power-unit test benches and Formula&nbsp;1 race weekends to software platforms, the through-line is performance, reliability and finding the limit.
      </SectionHeader>

      <ol className="mt-16 flex flex-col">
        {career.map((sector) => (
          <SectorRow key={sector.number} sector={sector} />
        ))}
      </ol>
    </Section>
  )
}

function SectorRow({ sector }: { sector: Sector }) {
  return (
    <li className="grid gap-6 border-t py-10 md:grid-cols-[220px_1fr] md:gap-12">
      <div className="flex items-start gap-4 md:flex-col md:gap-3">
        <span
          className={cn('font-mono text-6xl font-semibold leading-none tabular-nums', signalText[sector.signal])}
          aria-hidden="true"
        >
          S{sector.number}
        </span>
        <div className="min-w-0">
          <h3 className="text-xl font-semibold">
            <span className="sr-only">Chapter {sector.number}: </span>
            {sector.name}
          </h3>
          <SectorDuration months={sector.durationMonths} />
        </div>
      </div>

      <div className="min-w-0">
        <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">{sector.summary}</p>
        {sector.roles.map((role) => (
          <RoleCard key={role.title} role={role} signal={sector.signal} />
        ))}
      </div>
    </li>
  )
}

function SectorDuration({ months }: { months: number | null }) {
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

  const duration = formatDuration(months)
  return (
    <p className={className}>
      <span className="sr-only">Sector duration: </span>
      <time dateTime={duration.iso} className="tabular-nums">
        {duration.label}
      </time>
    </p>
  )
}

function RoleCard({ role, signal }: { role: Role; signal: Signal }) {
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
      <ul className="mt-4 flex flex-col gap-2.5">
        {role.points.map((point) => (
          <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
            <span className={cn('mt-2.5 h-px w-3 shrink-0', signalBg[signal])} aria-hidden="true" />
            {point}
          </li>
        ))}
      </ul>
    </article>
  )
}
