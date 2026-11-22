export const toolsSectionContent = {
  eyebrow: 'Tools / 04 domains',
  heading: 'The tools behind the work.',
  introduction:
    'A working toolkit across the stack, from user-facing experiences to dependable production systems.',
}

export const confidenceLevels = {
  core: { label: 'Core strength', className: 'bg-accent' },
  comfortable: { label: 'Comfortable', className: 'bg-caution' },
  familiar: { label: 'Familiar', className: 'bg-muted-foreground' },
} as const

export const toolCategories = [
  {
    name: 'Frontend',
    descriptor: 'The interface layer',
    groups: [
      {
        name: 'Languages',
        items: [
          { name: 'TypeScript', confidence: 'core' },
          { name: 'HTML & CSS', confidence: 'comfortable' },
        ],
      },
      {
        name: 'Frameworks',
        items: [
          { name: 'React', confidence: 'core' },
          { name: 'Next.js', confidence: 'comfortable' },
        ],
      },
      {
        name: 'Tools',
        items: [
          { name: 'Tailwind CSS', confidence: 'comfortable' },
          { name: 'Accessibility', confidence: 'familiar' },
        ],
      },
    ],
  },
  {
    name: 'Backend',
    descriptor: 'Services & data',
    groups: [
      {
        name: 'Languages',
        items: [
          { name: 'Python', confidence: 'comfortable' },
          { name: 'SQL', confidence: 'comfortable' },
        ],
      },
      { name: 'Frameworks', items: [{ name: 'FastAPI', confidence: 'familiar' }] },
      {
        name: 'Tools',
        items: [
          { name: 'Node.js', confidence: 'comfortable' },
          { name: 'PostgreSQL', confidence: 'familiar' },
          { name: 'REST APIs', confidence: 'comfortable' },
        ],
      },
    ],
  },
  {
    name: 'Infrastructure',
    descriptor: 'Cloud & platforms',
    groups: [
      {
        name: 'Tools',
        items: [
          { name: 'AWS', confidence: 'comfortable' },
          { name: 'Docker', confidence: 'comfortable' },
          { name: 'Kubernetes', confidence: 'familiar' },
          { name: 'Terraform', confidence: 'familiar' },
          { name: 'Linux', confidence: 'comfortable' },
          { name: 'Git', confidence: 'core' },
        ],
      },
    ],
  },
  {
    name: 'DevOps / SRE',
    descriptor: 'Delivery & reliability',
    groups: [
      {
        name: 'Tools',
        items: [
          { name: 'CI/CD', confidence: 'comfortable' },
          { name: 'GitHub Actions', confidence: 'comfortable' },
          { name: 'Observability', confidence: 'familiar' },
          { name: 'Prometheus', confidence: 'familiar' },
          { name: 'Grafana', confidence: 'familiar' },
          { name: 'Incident response', confidence: 'comfortable' },
        ],
      },
    ],
  },
]
