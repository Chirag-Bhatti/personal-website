import { RaceChrome } from '@/components/race-chrome'
import { Hero } from '@/components/hero'
import { RaceTimeline } from '@/components/race-timeline'
import { Skills } from '@/components/skills'
import { Garage } from '@/components/garage'
import { Finish } from '@/components/finish'

export default function Page() {
  return (
    <>
      <RaceChrome />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <Skills />
        <RaceTimeline />
        <Garage />
        <Finish />
      </main>
    </>
  )
}
