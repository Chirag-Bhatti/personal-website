import type { ExperienceSignal } from '@/content/experience'

export const chapterSignalText: Record<ExperienceSignal, string> = {
  red: 'text-primary',
  amber: 'text-caution',
  green: 'text-accent',
}

export const chapterSignalBackground: Record<ExperienceSignal, string> = {
  red: 'bg-primary',
  amber: 'bg-caution',
  green: 'bg-accent',
}

export function formatExperienceDuration(months: number) {
  const years = Math.floor(months / 12)
  const rest = months % 12
  return {
    label: `${years}Y ${String(rest).padStart(2, '0')}M`,
    iso: `P${years}Y${rest}M`,
  }
}
