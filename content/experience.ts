export type ExperienceSignal = 'red' | 'amber' | 'green'

export type ExperienceDate = {
  year: number
  month?: number
}

export type ExperienceRole = {
  title: string
  company: string
  start: ExperienceDate
  end: ExperienceDate | null
  highlights: string[]
}

export type ExperienceChapter = {
  number: 1 | 2 | 3
  signal: ExperienceSignal
  name: string
  start: ExperienceDate
  end: ExperienceDate | null
  duration: {
    years: number
    months: number
  }
  summary: string
  roles: ExperienceRole[]
}

export const experienceSectionContent = {
  eyebrow: 'Experience / engineering journey',
  heading: 'What does tuning engines and creating software have in common?',
  introduction:
    'I\'ve developed strong fundamentals and a systems mindset from thinking about how components work together. The goal whether it\'s been engines or software has always been the same - make it correct / performant / reliable / high quality.',
}

export const experienceChapters: ExperienceChapter[] = [
  {
    number: 1,
    signal: 'green',
    name: 'Software Engineering',
    start: { year: 2021 },
    end: null,
    duration: { years: 5, months: 0 },
    summary:
      'My current chapter: developing software for a range of public and private sector clients across frontend, backend, platform and devops / site reliability engineering.',
    roles: [
      {
        title: 'Lead Software Developer / Technical Consultant',
        company: 'Softwire',
        start: { year: 2026 },
        end: null,
        highlights: [],
      },
      {
        title: 'Senior Software Developer / Technical Consultant',
        company: 'Softwire',
        start: { year: 2024 },
        end: { year: 2026 },
        highlights: [
          'Gov UK One Login - Tech Lead in the Logging Tiger Team. Standardised log collection and processing in AWS / SIEM tool. Platformed the solution, devised the technical approach and delivered complex features',
        ],
      },
      {
        title: 'Software Developer / Technical Consultant',
        company: 'Softwire',
        start: { year: 2021 },
        end: { year: 2024 },
        highlights: [],
      },
    ],
  },
  {
    number: 2,
    signal: 'amber',
    name: 'Formula 1',
    start: { year: 2017 },
    end: { year: 2019 },
    duration: { years: 2, months: 5 },
    summary:
      'A high-performance chapter where milliseconds mattered: test, analyse, iterate and deliver under pressure.',
    roles: [
      {
        title: 'X1 Performance Development Engineer',
        company: 'Mercedes AMG High Performance Powertrains',
        start: { year: 2019 },
        end: { year: 2019 },
        highlights: [
          'Analysed trackside telemetry to optimise energy recovery and deployment strategies.',
          'Built Python tooling for lap simulation correlation used across the vehicle performance group.',
          'Worked on the pit wall and in the factory, delivering setup changes under hard deadlines.',
        ],
      },
      {
        title: 'Power Unit Validation Engineer',
        company: 'Mercedes AMG High Performance Powertrains',
        start: { year: 2017 },
        end: { year: 2018 },
        highlights: [
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
    start: { year: 2013 },
    end: { year: 2017 },
    duration: { years: 3, months: 5 },
    summary:
      'Where my engineering foundations were built: experimenting, diagnosing, testing and validating engine control systems for modern vehicles.',
    roles: [
      {
        title: 'Gasoline Engine Calibration Engineer',
        company: 'Automotive OEM',
        start: { year: 2015 },
        end: { year: 2017 },
        highlights: [
          'After completing the Graduate Programme, began specialisation in tuning engines for performance, economy and emissions',
          'Devised Design of Experiments to model and optimise engine performance and economy',
          'Diagnosed engine issues on the test bench and in the field',
          'Did the base calibration of a new 3-cylinder engine',
        ],
      },
      {
        title: 'Graduate Product Development Engineer',
        company: 'Jaguar Land Rover',
        start: { year: 2013 },
        end: { year: 2015 },
        highlights: [
          'Gain a breadth of experience across the business through a structure programme of rotations in different departments.',
          'Completed 3 month rotations in Engine Calibration, 1D engine modelling, Vehicle Performance / Economy / Drivability, Manufacturing and Global Public Relations',
        ],
      },
    ],
  },
]
