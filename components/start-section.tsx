import { ArrowDown } from 'lucide-react'
import { heroStats, startContent } from '@/content/start'
import { siteProfile } from '@/content/profile'
import { CareerJourney } from '@/components/career-journey'
import { LinkButton } from '@/components/link-button'
import { StartLights } from '@/components/start-lights'
import { cn } from '@/lib/utils'

export function StartSection() {
  return (
    <section id="start" aria-labelledby="start-heading" className="relative overflow-hidden pt-28">
      <div className="hero-pattern pointer-events-none absolute inset-y-0 right-0 w-full lg:w-3/5" aria-hidden="true" />
      <div
        className="pointer-events-none absolute top-24 -right-32 size-[28rem] rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div className="min-w-0">
          <StartLights />
          <div className="lights-out-reveal mt-8">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-caution">{startContent.eyebrow}</p>
            <h1
              id="start-heading"
              className="mt-4 text-balance text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl"
            >
              {startContent.heading}
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {startContent.introBeforeName}
              <span className="text-foreground">{siteProfile.name}</span>
              {startContent.introAfterName}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <LinkButton href="#tech">
                {startContent.exploreLabel}
                <ArrowDown aria-hidden="true" />
              </LinkButton>
              <LinkButton href="#finish" variant="outline">
                {startContent.contactLabel}
              </LinkButton>
            </div>
          </div>
        </div>

        <div className="lights-out-reveal relative min-w-0">
          <CareerJourney />
        </div>
      </div>

      <HeroStats />
    </section>
  )
}

function HeroStats() {
  return (
    <dl className="relative mx-auto grid max-w-6xl grid-cols-2 border-y bg-background/60 backdrop-blur-sm md:grid-cols-4">
      {heroStats.map((stat, index) => (
        <div key={stat.label} className={cn('px-6 py-6', index > 0 && 'md:border-l', index % 2 === 1 && 'border-l')}>
          <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{stat.label}</dt>
          <dd className="mt-2 flex items-baseline gap-1.5">
            <span className="font-mono text-3xl font-semibold tabular-nums">{stat.value}</span>
            <span className="text-xs text-muted-foreground">{stat.unit}</span>
          </dd>
        </div>
      ))}
    </dl>
  )
}
