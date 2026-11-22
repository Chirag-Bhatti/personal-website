'use client'

import { useImperativeHandle, useRef } from 'react'
import { pageSections, type PageSectionId } from '@/content/navigation'
import { siteProfile } from '@/content/profile'
import { useActivePageSection, usePageScrollProgress } from '@/hooks/use-page-progress'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '@/components/theme-toggle'

const sectionIds = pageSections.map((section) => section.id)

const CIRCUIT_PATH =
  'M40 120H150C175 120 185 105 180 85L170 50C166 35 150 30 140 40L115 65C108 72 96 72 92 62L80 30C75 15 55 12 45 25L22 70C12 92 20 120 40 120Z'

export function SiteNavigation() {
  const activeId = useActivePageSection(sectionIds)
  const barRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const percentRef = useRef<HTMLSpanElement>(null)
  const trackRef = useRef<ProgressTrackHandle>(null)

  usePageScrollProgress((progress) => {
    const percent = Math.round(progress * 100)
    if (barRef.current) barRef.current.style.width = `${progress * 100}%`
    if (progressRef.current) {
      progressRef.current.setAttribute('aria-valuenow', String(percent))
      progressRef.current.setAttribute('aria-valuetext', `${percent}% complete`)
    }
    if (percentRef.current) percentRef.current.textContent = `${String(percent).padStart(3, '0')}%`
    trackRef.current?.setProgress(progress)
  })

  const activeSection = pageSections.find((section) => section.id === activeId) ?? pageSections[0]

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-2 px-6 sm:gap-6">
          <a
            href="#start"
            className="flex items-center gap-3 rounded-sm font-mono text-sm tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            <span
              className="flex size-7 items-center justify-center rounded-sm bg-primary text-xs font-semibold text-primary-foreground"
              aria-hidden="true"
            >
              {siteProfile.initials}
            </span>
            <span className="sr-only sm:not-sr-only">{siteProfile.name}</span>
          </a>
          <div className="flex items-center gap-2">
            <SectionNavigation activeId={activeId} />
            <ThemeToggle />
          </div>
        </div>
        <div className="border-t">
          <div className="mx-auto flex h-12 max-w-6xl items-center gap-3 px-6">
            <div className="w-24 shrink-0 overflow-hidden font-mono text-[10px] uppercase tracking-widest text-foreground sm:w-32">
              <span className="block truncate whitespace-nowrap">{activeSection.label}</span>
            </div>
            <div className="flex min-w-0 flex-1 items-center gap-2">
              <div
                ref={progressRef}
                role="progressbar"
                aria-label={`Page progress through ${activeSection.label}`}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={0}
                aria-valuetext="0% complete"
                className="h-1.5 min-w-8 flex-1 overflow-hidden rounded-full bg-secondary"
              >
                <div ref={barRef} className="h-full rounded-full bg-primary" style={{ width: '0%' }} />
              </div>
              <span ref={percentRef} className="w-9 shrink-0 text-right font-mono text-[10px] tabular-nums text-muted-foreground">
                000%
              </span>
            </div>
            <ProgressTrack ref={trackRef} />
          </div>
        </div>
      </header>
    </>
  )
}

function SectionNavigation({ activeId }: { activeId: PageSectionId }) {
  return (
    <nav aria-label="Sections">
      <ul className="flex items-center gap-1">
        {pageSections.map((section, index) => {
          const isActive = activeId === section.id
          return (
            <li key={section.id} className={cn(index === 0 && 'hidden md:block')}>
              <a
                href={`#${section.id}`}
                aria-current={isActive ? 'location' : undefined}
                className={cn(
                  'block rounded-sm px-1 py-1.5 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring sm:px-2.5',
                  isActive && 'text-foreground',
                )}
              >
                {section.label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

type ProgressTrackHandle = { setProgress: (progress: number) => void }

function ProgressTrack({ ref }: { ref: React.Ref<ProgressTrackHandle> }) {
  const pathRef = useRef<SVGPathElement>(null)
  const carRef = useRef<SVGGElement>(null)
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
      },
    }),
    [],
  )

  return (
    <svg viewBox="0 0 200 140" className="h-9 w-14 shrink-0 translate-x-3.5 sm:h-10 sm:w-16 sm:translate-x-2" aria-hidden="true">
      <path d={CIRCUIT_PATH} fill="none" stroke="var(--secondary)" strokeWidth="8" strokeLinejoin="round" />
      <path
        ref={pathRef}
        d={CIRCUIT_PATH}
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
  )
}
