import { SiteNavigation } from '@/components/site-navigation'
import { StartSection } from '@/components/start-section'
import { ToolsSection } from '@/components/tools-section'
import { ExperienceSection } from '@/components/experience-section'
import { ProjectsSection } from '@/components/projects-section'
import { FinishSection } from '@/components/finish-section'

export default function Page() {
  return (
    <>
      <SiteNavigation />
      <main
        id="main"
        tabIndex={-1}
        className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
      >
        <StartSection />
        <ToolsSection />
        <ExperienceSection />
        <ProjectsSection />
        <FinishSection />
      </main>
    </>
  )
}
