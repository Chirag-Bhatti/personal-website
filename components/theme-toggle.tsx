'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

const THEME_KEY = 'personal-website-theme'

type Theme = 'light' | 'dark'

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark')
  document.documentElement.style.colorScheme = theme
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(THEME_KEY)
    if (storedTheme === 'light' || storedTheme === 'dark') {
      setTheme(storedTheme)
      applyTheme(storedTheme)
    }
  }, [])

  function toggleTheme() {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    applyTheme(nextTheme)
    window.localStorage.setItem(THEME_KEY, nextTheme)
  }

  const nextTheme = theme === 'dark' ? 'light' : 'dark'
  const Icon = theme === 'dark' ? Sun : Moon

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${nextTheme} mode`}
      aria-pressed={theme === 'light'}
      title={`Switch to ${nextTheme} mode`}
      className="inline-flex size-9 shrink-0 items-center justify-center rounded-sm border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <Icon aria-hidden="true" className="size-4" />
      <span className="sr-only">{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>
    </button>
  )
}
