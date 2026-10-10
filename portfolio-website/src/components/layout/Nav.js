import ThemeToggleButton from './ThemeToggleButton'
import MobileNav from './MobileNav'
import { navLinks } from '@/data/navLinks'

export default function Nav() {
  return (
    <nav className="relative p-10 mb-12 flex justify-between items-center dark:text-slate-400">
      <h1 className="text-xl py-4 font-dancing hover:text-teal-500 dark:text-slate-400">
        <a href="https://mr.wikipedia.org/wiki/%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%BF%E0%A4%A4%E0%A4%BF%E0%A4%9C" className="hover:text-teal-500">
          Hi, I&apos;m Kshitij
        </a>
      </h1>

      <ul className="hidden lg:flex md:flex items-center justify-center flex-row px-2 py-4 lg:gap-4 md:gap-4">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="hover:text-teal-500 text-lg">{link.label}</a>
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
            <div className="pt-1">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 mx-4 overflow-hidden text-sm font-medium text-slate-900 rounded-lg group bg-gradient-to-br from-teal-700 to-teal-500 group-hover:from-teal-500 group-hover:to-teal-500 hover:text-slate-200 dark:text-slate-200 focus:ring-4 focus:outline-none focus:ring-teal-200 dark:focus:ring-teal-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 dark:text-slate-200 bg-slate-200 dark:bg-slate-900 rounded-md group-hover:bg-opacity-0">
                  Resume
                </span>
              </button>
            </div>
          </a>
        </li>
        <li>
          <MobileNav />
        </li>
      </ul>
    </nav>
  )
}
