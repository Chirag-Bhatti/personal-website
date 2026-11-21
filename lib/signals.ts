import type { Signal } from '@/lib/content'

export const signalText: Record<Signal, string> = {
  red: 'text-primary',
  amber: 'text-caution',
  green: 'text-accent',
}

export const signalBg: Record<Signal, string> = {
  red: 'bg-primary',
  amber: 'bg-caution',
  green: 'bg-accent',
}

export function formatDuration(months: number) {
  const years = Math.floor(months / 12)
  const rest = months % 12
  return {
    label: `${years}Y ${String(rest).padStart(2, '0')}M`,
    iso: `P${years}Y${rest}M`,
  }
}
