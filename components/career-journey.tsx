import Image from 'next/image'

const stages = ['Automotive', 'Formula 1', 'Software engineering']

export function CareerJourney() {
  return (
    <figure className="relative isolate aspect-[4/3] overflow-hidden rounded-lg border border-border/70 bg-card shadow-2xl shadow-black/30">
      <Image
        src="/images/career-journey.png"
        alt="A continuous visual journey from precision automotive engineering, through Formula 1, into software engineering."
        fill
        priority
        sizes="(min-width: 1024px) 42vw, 100vw"
        className="object-cover"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/10"
        aria-hidden="true"
      />
      <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 px-4 pb-4 pt-12 font-mono text-[9px] uppercase tracking-[0.16em] text-foreground/75 sm:px-5 sm:pb-5 sm:text-[10px]">
        {stages.map((stage, index) => (
          <span key={stage} className="flex min-w-0 items-center gap-2">
            {index > 0 && <span className="h-px w-3 shrink-0 bg-accent/70 sm:w-5" aria-hidden="true" />}
            <span className="truncate">{stage}</span>
          </span>
        ))}
      </figcaption>
    </figure>
  )
}
