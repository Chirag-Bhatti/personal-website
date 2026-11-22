export const toolsSectionContent = {
  eyebrow: 'Tech / 04 domains',
  heading: 'The technologies behind the work.',
  introduction:
    'I\'ve used a breadth of technologies across multiple software domains, and able to pick up new things quickly. Whatever the problem\'s required, I\'ve learnt it.',
}

export const confidenceLevels = {
  core: { label: 'Core skill', className: 'bg-accent' },
  comfortable: { label: 'Comfortable', className: 'bg-caution' },
  familiar: { label: 'Familiar', className: 'bg-muted-foreground' },
} as const

export const toolCategories = [
  {
    name: 'Frontend',
    descriptor: '',
    groups: [
      {
        name: 'Languages & Frameworks',
        items: [
          { name: 'TypeScript', confidence: 'core' },
          { name: 'HTML & CSS', confidence: 'comfortable' },
          { name: 'SASS', confidence: 'comfortable' },
          { name: 'Cypress', confidence: 'comfortable' },
          { name: 'React', confidence: 'familiar' },
          { name: 'Angular', confidence: 'familiar' },
        ],
      },
      {
        name: 'Components',
        items: [
          { name: 'Gov components', confidence: 'comfortable' },
          { name: 'Material UI', confidence: 'familiar' },
          { name: 'Angular Material', confidence: 'familiar' },
          { name: 'styled-components', confidence: 'familiar' },
        ],
      },
      {
        name: 'Tools',
        items: [
          { name: 'Node.js', confidence: 'core' },
          { name: 'Browser dev tools', confidence: 'core' },
          { name: 'Nunjucks', confidence: 'comfortable' },
          { name: 'BrowserStack', confidence: 'comfortable' },
          { name: 'Figma', confidence: 'familiar' },
          { name: 'Contentstack', confidence: 'familiar' },
          { name: 'Gatsby', confidence: 'familiar' },
        ],
      },
    ],
  },
  {
    name: 'Backend',
    descriptor: '',
    groups: [
      {
        name: 'Languages & Frameworks',
        items: [
          { name: 'Java', confidence: 'core' },
          { name: 'Typescript', confidence: 'core' },
          { name: 'Python', confidence: 'comfortable' },
          { name: 'C#', confidence: 'familiar' },
          { name: 'Spring', confidence: 'familiar' },
          { name: 'Fastify', confidence: 'familiar' },
          { name: 'FastAPI', confidence: 'familiar' },
          { name: '.NET', confidence: 'familiar' },
          { name: 'Pydantic', confidence: 'familiar' },
        ],
      },
      { name: 'Databases', 
        items: [
          { name: 'PostgreSQL', confidence: 'comfortable' },
          { name: 'DynamoDB', confidence: 'comfortable' },
        ] 
      },
      {
        name: 'Tools',
        items: [
          { name: 'Node.js', confidence: 'core' },
          { name: 'Postman', confidence: 'core' },
          { name: 'Swagger', confidence: 'comfortable' },
        ],
      },
    ],
  },
  {
    name: 'Infrastructure',
    descriptor: '',
    groups: [
      {
        name: 'Infrastructure as Code',
        items: [
          { name: 'Terraform', confidence: 'core' },
          { name: 'Cloudformation', confidence: 'comfortable' },
        ],
      },
      {
        name: 'Platforms',
        items: [
          { name: 'AWS', confidence: 'core' },
        ],
      }
    ],
  },
  {
    name: 'DevOps / SRE',
    descriptor: '',
    groups: [
      {
        name: 'Tools',
        items: [
          { name: 'Docker', confidence: 'core' },
          { name: 'CI/CD', confidence: 'core' },
          { name: 'Git', confidence: 'core' },
          { name: 'Cribl', confidence: 'comfortable' },
          { name: 'Paketo', confidence: 'comfortable' },
          { name: 'Splunk', confidence: 'familiar' },
          { name: 'Bash scripting', confidence: 'familiar' },
        ],
      },
    ],
  },
]
