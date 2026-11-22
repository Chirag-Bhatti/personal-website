export const profile = {
  name: 'Chirag Bhatti',
  initials: 'CB',
  role: 'Software Engineer',
  location: 'UK',
  email: 'cs.chiragb@gmail.com',
  socials: [
    { label: 'GitHub', href: 'https://github.com/Chirag-Bhatti/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/chiragbhatti/' },
    { label: 'CV (PDF)', href: '#' },
  ],
}

export const sections = [
  { id: 'start', label: 'Start', sector: 'Start' },
  { id: 'tools', label: 'Tools', sector: 'Tools' },
  { id: 'track', label: 'Experience', sector: 'Experience' },
  { id: 'garage', label: 'Projects', sector: 'Projects' },
  { id: 'finish', label: 'Finish', sector: 'Finish' },
] as const

export type SectionId = (typeof sections)[number]['id']

export type Signal = 'red' | 'amber' | 'green'

export type Role = {
  title: string
  company: string
  start: number
  end: number | null
  points: string[]
}

export type Sector = {
  number: 1 | 2 | 3
  signal: Signal
  name: string
  durationMonths: number | null
  summary: string
  roles: Role[]
}

export const career: Sector[] = [
  {
    number: 1,
    signal: 'green',
    name: 'Software Engineering',
    durationMonths: null,
    summary:
      'My current chapter: bringing the same engineering mindset to frontend, backend, platform and site reliability engineering.',
    roles: [
      {
        title: 'Lead Software Developer / Technical Consultant',
        company: 'Softwire',
        start: 2026,
        end: null,
        points: [
          'GOV.UK One Login - Signals Exhange: Tasked with sorting SRE, starting out with'
        ],
      },
      {
        title: 'Senior Software Developer / Technical Consultant',
        company: 'Softwire',
        start: 2024,
        end: 2026,
        points: [
          'Gov UK One Login - Tech Lead in the Logging Tiger Team. Standardised log collection and processing in AWS / SIEM tool. Platformed the solution, devised the technical approach and delivered complex features',
          'Internal App -',
          'David-Lloyd Leisure - ',
          'Greenflag - ',
          'Baringa - ',
          'Gov UK - ',
        ],
      },
      {
        title: 'Software Developer / Technical Consultant',
        company: 'Softwire',
        start: 2021,
        end: 2024,
        points: [
          'Gov UK - ',
          'Royal Sun Alliance - ',
        ],
      },
    ],
  },
  {
    number: 2,
    signal: 'amber',
    name: 'Formula 1',
    durationMonths: 29,
    summary:
      'A high-performance chapter where milliseconds mattered: test, analyse, iterate and deliver under pressure.',
    roles: [
      {
        title: 'X1 Performance Development Engineer',
        company: 'Mercedes AMG High Performance Powertrains',
        start: 2019,
        end: 2019,
        points: [
          'Analysed trackside telemetry to optimise energy recovery and deployment strategies.',
          'Built Python tooling for lap simulation correlation used across the vehicle performance group.',
          'Worked on the pit wall and in the factory, delivering setup changes under hard deadlines.',
        ],
      },
      {
        title: 'Power Unit Validation Engineer',
        company: 'Mercedes AMG High Performance Powertrains',
        start: 2017,
        end: 2018,
        points: [
          'Run track simulations on test bench, assess performance and reliability, and validate against track data.',
          'Support race day telemetry and data analysis, diagnose issues, make decisions under extreme time pressure',
          'Devise tools and code to make test set up quicker and more reliable',
        ],
      },
    ],
  },
  {
    number: 3,
    signal: 'red',
    name: 'Automotive',
    durationMonths: 41,
    summary:
      'Where my engineering foundations were built: experimenting, diagnosing, testing and validating engine control systems for modern vehicles.',
    roles: [
      {
        title: 'Gasoline Engine Calibration Engineer',
        company: 'Automotive OEM',
        start: 2015,
        end: 2017,
        points: [
          'After completing the Graduate Programme, began specialisation in tuning engines for performance, economy and emissions',
          'Devised Design of Experiments to model and optimise engine performance and economy',
          'Diagnosed engine issues on the test bench and in the field',
          'Did the base calibration of a new 3-cylinder engine',
        ],
      },
      {
        title: 'Graduate Product Development Engineer',
        company: 'Jaguar Land Rover',
        start: 2013,
        end: 2015,
        points: [
          'Gain a breadth of experience across the business through a structure programme of rotations in different departments.',
          'Completed 3 month rotations in Engine Calibration, 1D engine modelling, Vehicle Performance / Economy / Drivability, Manufacturing and Global Public Relations',
        ],
      },
    ],
  },
]

export type SkillsComponent = {
  code: string
  name: string
  description: string
  charge: number
  skills: string[]
}

export const skillUnit: SkillsComponent[] = [
  {
    code: 'ICE',
    name: 'Engineering Fundamentals',
    description: 'The combustion core. Years of mechanical engineering that still drive how I approach problems.',
    charge: 92,
    skills: ['Systems thinking', 'Root-cause analysis', 'Simulation', 'Test & validation', 'MATLAB'],
  },
  {
    code: 'MGU-K',
    name: 'Energy Recovery',
    description: 'Harvesting experience from motorsport and converting it into software delivery.',
    charge: 85,
    skills: ['Data analysis', 'Telemetry', 'Performance tuning', 'Working under pressure'],
  },
  {
    code: 'ES',
    name: 'Software Stack',
    description: 'The energy store. A growing, rapidly charging set of modern engineering tools.',
    charge: 78,
    skills: ['TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'Docker'],
  },
]

export type Project = {
  name: string
  tag: string
  description: string
  stack: string[]
  href: string
}

export const projects: Project[] = [
  {
    name: 'Telemetry Dashboard',
    tag: 'Data / Real-time',
    description: 'A live dashboard that streams and visualises simulated car telemetry with sub-100ms latency.',
    stack: ['Next.js', 'WebSockets', 'PostgreSQL'],
    href: '#',
  },
  {
    name: 'Lap Sim API',
    tag: 'Backend / Python',
    description: 'A point-mass lap time simulator exposed as an API, reworked from my F1 analysis tooling.',
    stack: ['Python', 'FastAPI', 'NumPy'],
    href: '#',
  },
  {
    name: 'Pit Stop Planner',
    tag: 'Product / Full-stack',
    description: 'A strategy tool for modelling tyre degradation and pit windows for amateur racing series.',
    stack: ['TypeScript', 'React', 'Node.js'],
    href: '#',
  },
]

export const telemetry = [
  { label: 'Automotive', value: '3+', unit: 'yrs' },
  { label: 'Formula 1', value: '2+', unit: 'yrs' },
  { label: 'Software', value: '5+', unit: 'yrs' },
  { label: 'Status', value: 'Open', unit: 'to roles' },
]
