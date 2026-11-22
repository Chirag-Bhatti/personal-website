import type { ExperienceDate, ExperienceSignal } from '@/content/experience'

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

export function formatExperienceDuration(duration: { years: number; months: number }) {
  return {
    label: `${duration.years} yrs ${duration.months} mos`,
    iso: `P${duration.years}Y${duration.months}M`,
  }
}

export function formatExperienceDate(date: ExperienceDate) {
  if (date.month === undefined) {
    return { label: String(date.year), iso: String(date.year) }
  }

  const dateTime = new Date(Date.UTC(date.year, date.month - 1))
  return {
    label: dateTime.toLocaleDateString('en-GB', { month: 'short', year: 'numeric', timeZone: 'UTC' }),
    iso: `${date.year}-${String(date.month).padStart(2, '0')}`,
  }
}
