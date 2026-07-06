'use client'

import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null)

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  function set(dark: boolean) {
    setIsDark(dark)
    document.documentElement.classList.toggle('dark', dark)
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light')
    } catch {}
  }

  return (
    <div className="font-mono text-xs text-ink-soft" aria-label="Color theme">
      [
      <button
        type="button"
        onClick={() => set(false)}
        aria-pressed={isDark === false}
        className={
          isDark === false
            ? 'text-accent underline underline-offset-2'
            : 'hover:text-ink'
        }
      >
        light
      </button>
      <span aria-hidden="true">|</span>
      <button
        type="button"
        onClick={() => set(true)}
        aria-pressed={isDark === true}
        className={
          isDark === true
            ? 'text-accent underline underline-offset-2'
            : 'hover:text-ink'
        }
      >
        dark
      </button>
      ]
    </div>
  )
}
