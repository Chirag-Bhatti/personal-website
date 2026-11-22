import { ArrowDown } from 'lucide-react'
import { profile, telemetry } from '@/lib/content'
import { CodePanel } from '@/components/code-panel'
import { LinkButton } from '@/components/link-button'
import { StartLights } from '@/components/start-lights'
import { cn } from '@/lib/utils'

export function Hero() {
  return (
    <section id="start" aria-labelledby="grid-heading" className="relative overflow-hidden pt-28">
      <div className="hero-pattern pointer-events-none absolute inset-y-0 right-0 w-full lg:w-3/5" aria-hidden="true" />
      <div
        className="pointer-events-none absolute top-24 -right-32 size-[28rem] rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div className="min-w-0">
          <StartLights />
          <div className="lights-out-reveal mt-8">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-caution">Away we go.</p>
            <h1
              id="grid-heading"
              className="mt-4 text-balance text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl"
            >
              From developing engines to software.
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {'I’m '}
              <span className="text-foreground">{profile.name}</span>, a lead software engineer with over 5 years experience.
              I career-switched from Automotive and Formula&nbsp;1 where I developed high-tech engines. 
              I now build software with the same obsession for quality, reliability and performance.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <LinkButton href="#tools">
                Explore
                <ArrowDown aria-hidden="true" />
              </LinkButton>
              <LinkButton href="#finish" variant="outline">
                Get in Touch
              </LinkButton>
            </div>
          </div>
        </div>

        <div className="lights-out-reveal relative min-w-0">
          <CodePanel />
        </div>
      </div>

      <Telemetry />
    </section>
  )
}

function Telemetry() {
  return (
    <dl className="relative mx-auto grid max-w-6xl grid-cols-2 border-y bg-background/60 backdrop-blur-sm md:grid-cols-4">
      {telemetry.map((t, i) => (
        <div key={t.label} className={cn('px-6 py-6', i > 0 && 'md:border-l', i % 2 === 1 && 'border-l')}>
          <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{t.label}</dt>
          <dd className="mt-2 flex items-baseline gap-1.5">
            <span className="font-mono text-3xl font-semibold tabular-nums">{t.value}</span>
            <span className="text-xs text-muted-foreground">{t.unit}</span>
          </dd>
        </div>
      ))}
    </dl>
  )
}
