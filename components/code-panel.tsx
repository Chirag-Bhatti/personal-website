import { startContent } from '@/content/start'
import { siteProfile } from '@/content/profile'

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
  const codePanel = startContent.codePanel

  return (
    <figure className="relative overflow-hidden rounded-lg border bg-card/80 shadow-2xl shadow-black/40 backdrop-blur">
      <div className="flex items-center justify-between border-b px-4 py-3">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-primary" />
          <span className="size-2.5 rounded-full bg-caution" />
          <span className="size-2.5 rounded-full bg-accent" />
        </div>
        <span className="font-mono text-[11px] text-muted-foreground" translate="no">
          {codePanel.filename}
        </span>
        <span className="w-10" aria-hidden="true" />
      </div>

      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7" translate="no">
        <code>
          <Comment>{codePanel.comment}</Comment>
          {'\n'}
          <Keyword>const</Keyword> engineer = <Keyword>new</Keyword> <Fn>{codePanel.constructorName}</Fn>({'{'}
          {'\n  '}name: <Str>{siteProfile.name}</Str>,{'\n  '}from: [
            {codePanel.disciplines.map((discipline, index) => (
              <span key={discipline}>
                {index > 0 ? ', ' : null}
                <Str>{discipline}</Str>
              </span>
            ))}
          ],
          {'\n  '}to: <Str>{codePanel.destination}</Str>,{'\n  '}aspects: [
            {codePanel.aspects.map((aspect, index) => (
              <span key={aspect}>
                {index > 0 ? ', ' : null}
                <Str>{aspect}</Str>
              </span>
            ))}
          ],{'\n'}
          {'})'}
          {'\n\n'}
          <Keyword>await</Keyword> engineer.<Fn>{codePanel.methodName}</Fn>()
          {'\n'}
        </code>
      </pre>

      <figcaption className="flex items-center justify-between border-t px-5 py-3 font-mono text-[11px] text-muted-foreground">
        <span>
          Based in {siteProfile.location}
        </span>
        <span className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
          {codePanel.availability}
        </span>
      </figcaption>
    </figure>
  )
}
