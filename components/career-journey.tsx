import Image from 'next/image'
import { Fragment } from 'react'
import { ArrowRight } from 'lucide-react'

const stages = ['Automotive', 'Formula 1', 'Software']

export function CareerJourney() {
  return (
    <figure className="relative isolate aspect-[4/3] overflow-hidden rounded-lg border border-border/70 bg-card shadow-2xl shadow-black/30">
      <Image
        src="/images/career-journey.png"
        alt="A sports coupe on a road, a Formula racing car on track, and a computer setup on a raised platform."
        fill
        priority
        sizes="(min-width: 1024px) 42vw, 100vw"
        className="object-cover"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/10"
        aria-hidden="true"
      />
      <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-1 px-4 pb-4 pt-12 font-mono text-[8px] uppercase tracking-[0.12em] text-foreground/75 sm:gap-2 sm:px-5 sm:pb-5 sm:text-[10px] sm:tracking-[0.16em]">
        {stages.map((stage, index) => (
          <Fragment key={stage}>
            <span className="whitespace-nowrap">{stage}</span>
            {index < stages.length - 1 && <ArrowRight className="size-3 shrink-0 text-accent" aria-hidden="true" />}
          </Fragment>
        ))}
      </figcaption>
    </figure>
  )
}
