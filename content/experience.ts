export type ExperienceSignal = 'red' | 'amber' | 'green'

export type ExperienceDate = {
  year: number
  month?: number
}

export type ExperienceRole = {
  title: string
  start: ExperienceDate
  end: ExperienceDate | null
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
  description: string
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
    description:
      'On GOV.UK One Login, led the Logging Tiger Team, standardising log collection and processing in AWS and SIEM. Defined the technical approach, platformed the solution, and delivered complex features.',
    roles: [
      {
        title: 'Lead Software Developer / Technical Consultant',
        start: { year: 2026 },
        end: null,
      },
      {
        title: 'Senior Software Developer / Technical Consultant',
        start: { year: 2024 },
        end: { year: 2026 },
      },
      {
        title: 'Software Developer / Technical Consultant',
        start: { year: 2021 },
        end: { year: 2024 },
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
    description:
      'Analysed trackside telemetry to optimise energy recovery and deployment, and built Python tools for lap-simulation correlation. Supported test-bench simulations and reliability validation, race-day telemetry and data analysis, and setup decisions at the pit wall and in the factory.',
    roles: [
      {
        title: 'X1 Performance Development Engineer',
        start: { year: 2019 },
        end: { year: 2019 },
      },
      {
        title: 'Power Unit Validation Engineer',
        start: { year: 2017 },
        end: { year: 2018 },
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
    description:
      'Completed graduate rotations in engine calibration, 1D engine modelling, vehicle performance, economy and drivability, manufacturing, and global public relations. Later specialised in gasoline engine calibration, tuning for performance, economy and emissions, designing experiments to optimise engine performance, diagnosing issues, and calibrating a new 3-cylinder engine.',
    roles: [
      {
        title: 'Graduate Product Development Engineer',
        start: { year: 2013 },
        end: { year: 2015 },
      },
      {
        title: 'Gasoline Engine Calibration Engineer',
        start: { year: 2015 },
        end: { year: 2017 },
      },
    ],
  },
]
