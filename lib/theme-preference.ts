export const THEME_STORAGE_KEY = 'personal-website-theme:v1'
export const LEGACY_THEME_STORAGE_KEY = 'personal-website-theme'
export const THEME_COLORS = { light: '#f7f5f1', dark: '#0c0806' } as const

export const THEME_INITIALIZATION_SCRIPT = `
  try {
    const currentKey = ${JSON.stringify(THEME_STORAGE_KEY)}
    const legacyKey = ${JSON.stringify(LEGACY_THEME_STORAGE_KEY)}
    const savedTheme = localStorage.getItem(currentKey) ?? localStorage.getItem(legacyKey)

    if (savedTheme === 'light' || savedTheme === 'dark') {
      const root = document.documentElement
      root.classList.toggle('dark', savedTheme === 'dark')
      root.style.colorScheme = savedTheme
      document.querySelector('meta[name="theme-color"]')?.setAttribute(
        'content',
        savedTheme === 'dark' ? ${JSON.stringify(THEME_COLORS.dark)} : ${JSON.stringify(THEME_COLORS.light)},
      )

      if (!localStorage.getItem(currentKey)) localStorage.setItem(currentKey, savedTheme)
    }
  } catch {}
`
