'use client'

import { useState } from 'react'
import { navLinks } from '@/data/navLinks'

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <div className="lg:hidden md:hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle navigation menu"
        aria-expanded={open}
        className="flex flex-col gap-1.5 p-2"
      >
        <span className={`block h-0.5 w-6 bg-slate-900 dark:bg-slate-400 transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
        <span className={`block h-0.5 w-6 bg-slate-900 dark:bg-slate-400 transition-opacity ${open ? 'opacity-0' : ''}`} />
        <span className={`block h-0.5 w-6 bg-slate-900 dark:bg-slate-400 transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
      </button>

      {open && (
        <ul className="absolute left-0 right-0 top-full z-50 flex flex-col items-center gap-4 border-b border-slate-400/10 bg-slate-200/95 py-6 shadow-lg backdrop-blur-md dark:border-slate-700/40 dark:bg-slate-900/95">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)} className="font-mono text-lg hover:text-teal-500">
                <span className="text-teal-500">//</span>{link.label.toLowerCase()}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
