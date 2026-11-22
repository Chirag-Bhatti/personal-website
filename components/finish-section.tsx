import { Mail } from 'lucide-react'
import { finishSectionContent } from '@/content/finish'
import { siteProfile } from '@/content/profile'
import { LinkButton } from '@/components/link-button'
import { headingId } from '@/components/section'

export function FinishSection() {
  return (
    <section id="finish" aria-labelledby={headingId('finish')}>
      <div className="chequered h-12 w-full opacity-90" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">{finishSectionContent.eyebrow}</p>
        <h2
          id={headingId('finish')}
          className="mt-3 max-w-3xl text-balance text-4xl font-semibold tracking-tight md:text-6xl"
        >
          {finishSectionContent.heading}
        </h2>
        <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          {finishSectionContent.introduction}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <LinkButton href={`mailto:${siteProfile.email}`} className="max-w-full">
            <Mail aria-hidden="true" />
            <span className="truncate">{siteProfile.email}</span>
          </LinkButton>
          {siteProfile.socialLinks.map((social) => (
            <LinkButton key={social.label} href={social.href} variant="outline">
              {social.label}
            </LinkButton>
          ))}
        </div>
      </div>
      <footer className="border-t">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6 font-mono text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {siteProfile.name}
          </p>
          <p>{finishSectionContent.closingLine}</p>
        </div>
      </footer>
    </section>
  )
}
