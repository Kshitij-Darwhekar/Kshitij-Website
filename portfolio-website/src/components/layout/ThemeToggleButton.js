'use client'

import { BsFillMoonStarsFill } from 'react-icons/bs'

export default function ThemeToggleButton() {
  const toggle = () => {
    const next = !document.documentElement.classList.contains('dark')
    document.documentElement.classList.toggle('dark', next)
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light')
    } catch (e) {}
  }

  return (
    <BsFillMoonStarsFill
      onClick={toggle}
      aria-label="Toggle color theme"
      role="button"
      className="cursor-pointer mr-5 text-2xl text-slate-900 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-500"
    />
  )
}
