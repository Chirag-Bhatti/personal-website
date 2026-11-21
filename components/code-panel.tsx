import { profile } from '@/lib/content'

function Str({ children }: { children: string }) {
  return <span className="text-accent">{`"${children}"`}</span>
}

function Keyword({ children }: { children: string }) {
  return <span className="text-primary">{children}</span>
}

function Fn({ children }: { children: string }) {
  return <span className="text-caution">{children}</span>
}

function Comment({ children }: { children: string }) {
  return <span className="text-muted-foreground">{children}</span>
}

export function CodePanel() {
  return (
    <figure className="relative overflow-hidden rounded-lg border bg-card/80 shadow-2xl shadow-black/40 backdrop-blur">
      <div className="flex items-center justify-between border-b px-4 py-3">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-primary" />
          <span className="size-2.5 rounded-full bg-caution" />
          <span className="size-2.5 rounded-full bg-accent" />
        </div>
        <span className="font-mono text-[11px] text-muted-foreground" translate="no">
          career.ts
        </span>
        <span className="w-10" aria-hidden="true" />
      </div>

      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7" translate="no">
        <code>
          <Comment>{'// engines → software'}</Comment>
          {'\n'}
          <Keyword>const</Keyword> engineer = <Keyword>new</Keyword> <Fn>SoftwareEngineer</Fn>({'{'}
          {'\n  '}name: <Str>{profile.name}</Str>,{'\n  '}from: [<Str>Automotive</Str>, <Str>Formula 1</Str>],
          {'\n  '}to: <Str>Software Engineering</Str>,{'\n  '}aspects: [<Str>Frontend</Str>, <Str>Backend</Str>,{' '}
          <Str>Infra</Str>, <Str>SRE</Str>],{'\n'}
          {'})'}
          {'\n\n'}
          <Keyword>await</Keyword> engineer.<Fn>createSoftware</Fn>()
          {'\n'}
        </code>
      </pre>

      <figcaption className="flex items-center justify-between border-t px-5 py-3 font-mono text-[11px] text-muted-foreground">
        <span>
          Based in {profile.location}
        </span>
        <span className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
          Open to roles 
        </span>
      </figcaption>
    </figure>
  )
}
