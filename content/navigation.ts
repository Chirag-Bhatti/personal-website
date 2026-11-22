export const pageSections = [
  { id: 'start', label: 'Start' },
  { id: 'tech', label: 'Tech' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'finish', label: 'Finish' },
] as const

export type PageSectionId = (typeof pageSections)[number]['id']
