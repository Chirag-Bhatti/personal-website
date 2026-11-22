export type ExperienceSignal = 'red' | 'amber' | 'green'

export type ExperienceDate = {
  year: number
  month?: number
}

export type ExperienceRole = {
  title: string
  start: ExperienceDate
  end: ExperienceDate | null
  highlights: string[]
}

export type ExperienceCompany = {
  name: string
  sector: string
  signal: ExperienceSignal
  start: ExperienceDate
  end: ExperienceDate | null
  duration: {
    years: number
    months: number
  }
  roles: ExperienceRole[]
}

export const experienceSectionContent = {
  eyebrow: 'Experience / engineering journey',
  heading: 'What does tuning engines and creating software have in common?',
  introduction:
    'I\'ve developed strong fundamentals and a systems mindset from thinking about how components work together. The goal whether it\'s been engines or software has always been the same - make it correct / performant / reliable / high quality.',
}

export const experienceCompanies: ExperienceCompany[] = [
  {
    name: 'Softwire',
    sector: 'Software Engineering',
    signal: 'green',
    start: { year: 2021, month: 1 },
    end: null,
    duration: { years: 5, months: 0 },
    roles: [
      {
        title: 'Lead Software Developer / Technical Consultant',
        start: { year: 2026 },
        end: null,
        highlights: [],
      },
      {
        title: 'Senior Software Developer / Technical Consultant',
        start: { year: 2024 },
        end: { year: 2026 },
        highlights: [
          'Gov UK One Login - Tech Lead in the Logging Tiger Team. Standardised log collection and processing in AWS / SIEM tool. Platformed the solution, devised the technical approach and delivered complex features',
        ],
      },
      {
        title: 'Software Developer / Technical Consultant',
        start: { year: 2021 },
        end: { year: 2024 },
        highlights: [],
      },
    ],
  },
  {
    name: 'Mercedes AMG High Performance Powertrains',
    sector: 'Formula 1',
    signal: 'amber',
    start: { year: 2017, month: 1 },
    end: { year: 2019, month: 6 },
    duration: { years: 2, months: 5 },
    roles: [
      {
        title: 'X1 Performance Development Engineer',
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
    name: 'Jaguar Land Rover',
    sector: 'Automotive',
    signal: 'red',
    start: { year: 2013, month: 1 },
    end: { year: 2017, month: 1 },
    duration: { years: 4, months: 0 },
    roles: [
      {
        title: 'Graduate Product Development Engineer',
        start: { year: 2013 },
        end: { year: 2015 },
        highlights: [
          'Gain a breadth of experience across the business through a structure programme of rotations in different departments.',
          'Completed 3 month rotations in Engine Calibration, 1D engine modelling, Vehicle Performance / Economy / Drivability, Manufacturing and Global Public Relations',
        ],
      },
      {
        title: 'Gasoline Engine Calibration Engineer',
        start: { year: 2015 },
        end: { year: 2017 },
        highlights: [
          'After completing the Graduate Programme, began specialisation in tuning engines for performance, economy and emissions',
          'Devised Design of Experiments to model and optimise engine performance and economy',
          'Diagnosed engine issues on the test bench and in the field',
          'Did the base calibration of a new 3-cylinder engine',
        ],
      },
    ],
  },
]
