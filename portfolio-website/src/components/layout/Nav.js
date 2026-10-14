import ThemeToggleButton from './ThemeToggleButton'
import MobileNav from './MobileNav'
import { navLinks } from '@/data/navLinks'

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-400/10 bg-slate-200/90 px-6 py-4 dark:border-slate-700/40 dark:bg-slate-900/90 dark:text-slate-400 md:px-10">
      <div className="content-wrap flex items-center justify-between gap-4">
        <h1 className="text-xl font-mono font-semibold text-slate-900 hover:text-teal-500 dark:text-slate-200">
          <a href="#" className="hover:text-teal-500">
            <span className="text-teal-500">~/</span>kshit<span className="blink-cursor text-teal-500">_</span>
          </a>
        </h1>

        <ul className="hidden lg:flex md:flex items-center justify-center flex-row gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="font-mono text-base text-slate-700 hover:text-teal-500 dark:text-slate-400 dark:hover:text-teal-500">
                <span className="text-teal-500">//</span>{link.label.toLowerCase()}
              </a>
            </li>
          ))}
        </ul>

        <ul className="flex items-center justify-end">
          <li>
            <ThemeToggleButton />
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1SdDB0Xt4q9rrInaFspWdUGcc-_tmMUSZ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="group relative ml-4 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-teal-700 to-teal-500 p-0.5 text-sm font-medium text-slate-900 transition-transform duration-200 hover:-translate-y-0.5 hover:text-slate-200 focus:outline-none focus:ring-4 focus:ring-teal-200 dark:text-slate-200 dark:focus:ring-teal-800">
                <span className="relative rounded-md bg-slate-200 px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-slate-900 dark:text-slate-200">
                  Résumé
                </span>
              </button>
            </a>
          </li>
          <li>
            <MobileNav />
          </li>
        </ul>
      </div>
    </nav>
  )
}
