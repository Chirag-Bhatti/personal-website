import Image from 'next/image'
import { Fragment } from 'react'
import { ArrowRight } from 'lucide-react'

const stages = ['Automotive', 'Formula 1', 'Software']

export function CareerJourney() {
  return (
    <figure className="relative isolate aspect-[4/3] overflow-hidden rounded-lg border border-border/70 bg-card shadow-2xl shadow-black/30">
      <Image
        src="/images/career-journey.png"
        alt="A modern sports coupe on a road, an F1 car on track, and a modern desktop setup on a platform."
        fill
        priority
        sizes="(min-width: 1024px) 42vw, 100vw"
        className="object-cover"
      />
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1200 896"
        preserveAspectRatio="none"
      >
        <defs>
          <clipPath id="career-journey-code-screen">
            <rect x="0" y="0" width="220" height="140" rx="2" />
          </clipPath>
        </defs>
        <g transform="matrix(0.97 0.115 0 0.95 908 303)" clipPath="url(#career-journey-code-screen)">
          <rect width="220" height="140" fill="#0d151d" />
          <rect width="220" height="17" fill="#17232d" />
          <circle cx="8" cy="8.5" r="2" fill="#d28c78" />
          <circle cx="15" cy="8.5" r="2" fill="#d6bd75" />
          <circle cx="22" cy="8.5" r="2" fill="#73b99c" />
          <text x="32" y="11" fill="#8c9ba8" fontFamily="monospace" fontSize="6">portfolio.tsx</text>
          <rect x="0" y="17" width="18" height="123" fill="#111c25" />
          <text x="5" y="31" fill="#607180" fontFamily="monospace" fontSize="6">01</text>
          <text x="5" y="43" fill="#607180" fontFamily="monospace" fontSize="6">02</text>
          <text x="5" y="55" fill="#607180" fontFamily="monospace" fontSize="6">03</text>
          <text x="5" y="67" fill="#607180" fontFamily="monospace" fontSize="6">04</text>
          <text x="5" y="79" fill="#607180" fontFamily="monospace" fontSize="6">05</text>
          <text x="5" y="91" fill="#607180" fontFamily="monospace" fontSize="6">06</text>
          <text x="5" y="103" fill="#607180" fontFamily="monospace" fontSize="6">07</text>
          <text x="5" y="115" fill="#607180" fontFamily="monospace" fontSize="6">08</text>
          <text x="5" y="127" fill="#607180" fontFamily="monospace" fontSize="6">09</text>
          <text x="25" y="31" fontFamily="monospace" fontSize="7">
            <tspan fill="#c792ea">export</tspan><tspan fill="#cbd5df"> function </tspan><tspan fill="#82aaff">Portfolio</tspan><tspan fill="#cbd5df">() {'{'}</tspan>
          </text>
          <text x="25" y="43" fontFamily="monospace" fontSize="7">
            <tspan fill="#cbd5df">  </tspan><tspan fill="#c792ea">const</tspan><tspan fill="#cbd5df"> work = </tspan><tspan fill="#c3e88d">&quot;build with care&quot;</tspan>
          </text>
          <text x="25" y="55" fontFamily="monospace" fontSize="7">
            <tspan fill="#cbd5df">  </tspan><tspan fill="#c792ea">return</tspan><tspan fill="#cbd5df"> (</tspan>
          </text>
          <text x="25" y="67" fontFamily="monospace" fontSize="7">
            <tspan fill="#cbd5df">    &lt;</tspan><tspan fill="#f78c6c">main</tspan><tspan fill="#cbd5df">&gt;</tspan>
          </text>
          <text x="25" y="79" fontFamily="monospace" fontSize="7">
            <tspan fill="#cbd5df">      &lt;</tspan><tspan fill="#f78c6c">section</tspan><tspan fill="#cbd5df"> /&gt;</tspan>
          </text>
          <text x="25" y="91" fontFamily="monospace" fontSize="7">
            <tspan fill="#cbd5df">    &lt;/</tspan><tspan fill="#f78c6c">main</tspan><tspan fill="#cbd5df">&gt;</tspan>
          </text>
          <text x="25" y="103" fontFamily="monospace" fontSize="7">
            <tspan fill="#cbd5df">  )</tspan>
          </text>
          <text x="25" y="115" fontFamily="monospace" fontSize="7">
            <tspan fill="#cbd5df">{'}'}</tspan>
          </text>
        </g>
      </svg>
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/10"
        aria-hidden="true"
      />
      <figcaption className="absolute inset-x-0 bottom-0 grid grid-cols-[minmax(0,1fr)_0_minmax(0,1fr)_0_minmax(0,1fr)] items-end pb-4 pt-12 font-mono text-[8px] uppercase tracking-[0.12em] text-foreground/75 sm:pb-5 sm:text-[10px] sm:tracking-[0.16em]">
        {stages.map((stage, index) => (
          <Fragment key={stage}>
            <span className="justify-self-center whitespace-nowrap">{stage}</span>
            {index < stages.length - 1 && <ArrowRight className="size-3 shrink-0 -translate-x-1/2 text-accent" aria-hidden="true" />}
          </Fragment>
        ))}
      </figcaption>
    </figure>
  )
}
