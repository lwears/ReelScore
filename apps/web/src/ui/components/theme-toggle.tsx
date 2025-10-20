'use client'

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { useTheme } from '@web/lib/contexts/theme-provider'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleClick = () => {
    toggleTheme()
  }

  if (!mounted) {
    return (
      <button
        className="rounded-md p-2 transition-colors hover:bg-primary-hover"
        aria-label="Toggle theme"
        type="button"
        disabled
      >
        <div className="size-5" />
      </button>
    )
  }

  return (
    <button
      onClick={handleClick}
      className="rounded-md p-2 transition-colors hover:bg-primary-hover"
      aria-label="Toggle theme"
      type="button"
    >
      {theme === 'light' ? (
        <MoonIcon className="size-5 text-white" />
      ) : (
        <SunIcon className="size-5 text-white" />
      )}
    </button>
  )
}
