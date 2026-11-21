'use client'

import { useImperativeHandle, useRef } from 'react'
import { profile, sections, type SectionId } from '@/lib/content'
import { useActiveSection, useScrollProgress } from '@/hooks/use-race-progress'
import { cn } from '@/lib/utils'

const sectionIds = sections.map((s) => s.id)

const TRACK_PATH =
  'M40 120H150C175 120 185 105 180 85L170 50C166 35 150 30 140 40L115 65C108 72 96 72 92 62L80 30C75 15 55 12 45 25L22 70C12 92 20 120 40 120Z'

export function RaceChrome() {
  const activeId = useActiveSection(sectionIds)
  const barRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<TrackMapHandle>(null)

  useScrollProgress((progress) => {
    if (barRef.current) barRef.current.style.transform = `scaleX(${progress})`
    trackRef.current?.setProgress(progress)
  })

  const active = sections.find((s) => s.id === activeId) ?? sections[0]

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-6 px-6">
          <a
            href="#start"
            className="flex items-center gap-3 rounded-sm font-mono text-sm tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            <span
              className="flex size-7 items-center justify-center rounded-sm bg-primary text-xs font-semibold text-primary-foreground"
              aria-hidden="true"
            >
              {profile.initials}
            </span>
            <span className="sr-only sm:not-sr-only">{profile.name}</span>
          </a>
          <SectionNav activeId={activeId} />
        </div>
        <div className="h-0.5 w-full bg-secondary" aria-hidden="true">
          <div ref={barRef} className="h-full origin-left scale-x-0 bg-primary" />
        </div>
      </header>

      <TrackMap ref={trackRef} sector={active.sector} label={active.label} />
    </>
  )
}

function SectionNav({ activeId }: { activeId: SectionId }) {
  return (
    <nav aria-label="Sections">
      <ul className="flex items-center gap-1">
        {sections.map((s, i) => {
          const isActive = activeId === s.id
          return (
            <li key={s.id} className={cn(i === 0 && 'hidden md:block')}>
              <a
                href={`#${s.id}`}
                aria-current={isActive ? 'location' : undefined}
                className={cn(
                  'block rounded-sm px-2.5 py-1.5 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring',
                  isActive && 'text-foreground',
                )}
              >
                {s.label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

type TrackMapHandle = { setProgress: (progress: number) => void }

function TrackMap({
  ref,
  sector,
  label,
}: {
  ref: React.Ref<TrackMapHandle>
  sector: string
  label: string
}) {
  const pathRef = useRef<SVGPathElement>(null)
  const carRef = useRef<SVGGElement>(null)
  const percentRef = useRef<HTMLSpanElement>(null)
  const lengthRef = useRef(0)

  useImperativeHandle(
    ref,
    () => ({
      setProgress(progress) {
        const path = pathRef.current
        if (!path) return
        if (!lengthRef.current) lengthRef.current = path.getTotalLength()
        path.style.strokeDashoffset = String(1 - progress)
        const point = path.getPointAtLength(lengthRef.current * progress)
        carRef.current?.setAttribute('transform', `translate(${point.x.toFixed(1)} ${point.y.toFixed(1)})`)
        if (percentRef.current) {
          percentRef.current.textContent = `${String(Math.round(progress * 100)).padStart(3, '0')}%`
        }
      },
    }),
    [],
  )

  return (
    <aside
      aria-label="Race progress"
      className="fixed right-6 bottom-6 z-40 hidden w-56 rounded-lg border bg-card/90 p-4 shadow-2xl backdrop-blur-md lg:block"
    >
      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        <span>Lap 1/1</span>
        <span ref={percentRef} className="text-foreground tabular-nums">
          000%
        </span>
      </div>
      <svg viewBox="0 0 200 140" className="mt-3 h-auto w-full" aria-hidden="true">
        <path d={TRACK_PATH} fill="none" stroke="var(--secondary)" strokeWidth="8" strokeLinejoin="round" />
        <path
          ref={pathRef}
          d={TRACK_PATH}
          pathLength={1}
          fill="none"
          stroke="var(--primary)"
          strokeWidth="3"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeDasharray="1"
          strokeDashoffset="1"
        />
        <line x1="40" y1="113" x2="40" y2="127" stroke="var(--foreground)" strokeWidth="2" />
        <g ref={carRef} transform="translate(40 120)">
          <circle r="9" fill="var(--accent)" opacity="0.2" />
          <circle r="4.5" fill="var(--accent)" />
        </g>
      </svg>
      <div className="mt-3 border-t pt-3">
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{sector}</p>
        <p className="text-sm font-medium">{label}</p>
      </div>
    </aside>
  )
}
