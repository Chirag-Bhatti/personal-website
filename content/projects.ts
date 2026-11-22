export type PortfolioProject = {
  name: string
  category: string
  description: string
  technologies: string[]
  href?: string
}

export const projectsSectionContent = {
  eyebrow: 'Projects / built at race pace',
  heading: 'Engineering beyond the finish line.',
  introduction:
    'Selected software projects shaped by race engineering: turning telemetry into insight, reducing friction and building systems that hold up under pressure.',
}

export const portfolioProjects: PortfolioProject[] = [
  {
    name: 'Telemetry Dashboard',
    category: 'Data / Real-time',
    description: 'A live dashboard that streams and visualises simulated car telemetry with sub-100ms latency.',
    technologies: ['Next.js', 'WebSockets', 'PostgreSQL'],
  },
  {
    name: 'Lap Sim API',
    category: 'Backend / Python',
    description: 'A point-mass lap time simulator exposed as an API, reworked from my F1 analysis tooling.',
    technologies: ['Python', 'FastAPI', 'NumPy'],
  },
  {
    name: 'Pit Stop Planner',
    category: 'Product / Full-stack',
    description: 'A strategy tool for modelling tyre degradation and pit windows for amateur racing series.',
    technologies: ['TypeScript', 'React', 'Node.js'],
  },
]
