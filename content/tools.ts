export const toolsSectionContent = {
  eyebrow: 'Tools / 04 domains',
  heading: 'The tools behind the work.',
  introduction:
    'A working toolkit across the stack, from user-facing experiences to dependable production systems.',
}

export const toolCategories = [
  {
    name: 'Frontend',
    descriptor: 'The interface layer',
    groups: [
      { name: 'Languages', items: ['TypeScript', 'HTML & CSS'] },
      { name: 'Frameworks', items: ['React', 'Next.js'] },
      { name: 'Tools', items: ['Tailwind CSS', 'Accessibility'] },
    ],
  },
  {
    name: 'Backend',
    descriptor: 'Services & data',
    groups: [
      { name: 'Languages', items: ['Python', 'SQL'] },
      { name: 'Frameworks', items: ['FastAPI'] },
      { name: 'Tools', items: ['Node.js', 'PostgreSQL', 'REST APIs'] },
    ],
  },
  {
    name: 'Infrastructure',
    descriptor: 'Cloud & platforms',
    groups: [
      { name: 'Tools', items: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Linux', 'Git'] },
    ],
  },
  {
    name: 'DevOps / SRE',
    descriptor: 'Delivery & reliability',
    groups: [
      { name: 'Tools', items: ['CI/CD', 'GitHub Actions', 'Observability', 'Prometheus', 'Grafana', 'Incident response'] },
    ],
  },
]
