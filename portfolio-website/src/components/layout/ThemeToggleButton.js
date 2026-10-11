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
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      className="mr-5 flex text-2xl text-slate-900 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-500"
    >
      <BsFillMoonStarsFill />
    </button>
  )
}
