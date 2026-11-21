import { Mail } from 'lucide-react'
import { profile } from '@/lib/content'
import { LinkButton } from '@/components/link-button'
import { headingId } from '@/components/section'

export function Finish() {
  return (
    <section id="finish" aria-labelledby={headingId('finish')}>
      <div className="chequered h-12 w-full opacity-90" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Chequered flag</p>
        <h2
          id={headingId('finish')}
          className="mt-3 max-w-3xl text-balance text-4xl font-semibold tracking-tight md:text-6xl"
        >
          {'Let’s build something fast together.'}
        </h2>
        <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          {
            'I’m open to software engineering roles, especially where engineering, data, and performance meet. Motorsport and automotive tech a bonus.'
          }
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <LinkButton href={`mailto:${profile.email}`} className="max-w-full">
            <Mail aria-hidden="true" />
            <span className="truncate">{profile.email}</span>
          </LinkButton>
          {profile.socials.map((social) => (
            <LinkButton key={social.label} href={social.href} variant="outline">
              {social.label}
            </LinkButton>
          ))}
        </div>
      </div>
      <footer className="border-t">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6 font-mono text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p>Lap complete. Box, box.</p>
        </div>
      </footer>
    </section>
  )
}
