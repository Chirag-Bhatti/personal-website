import { cn } from '@/lib/utils'

export function headingId(sectionId: string) {
  return `${sectionId}-heading`
}

export function Section({
  id,
  className,
  children,
}: {
  id: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} aria-labelledby={headingId(id)} className={cn('border-b', className)}>
      <div className="mx-auto max-w-6xl px-6 py-24">{children}</div>
    </section>
  )
}

export function SectionHeader({
  sectionId,
  eyebrow,
  title,
  children,
}: {
  sectionId: string
  eyebrow: string
  title: string
  children?: React.ReactNode
}) {
  return (
    <header className="max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
      <h2 id={headingId(sectionId)} className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
        {title}
      </h2>
      {children ? <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{children}</p> : null}
    </header>
  )
}
