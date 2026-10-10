import { skillGroups, processMining, alsoWorkedWith } from '@/data/skills'

export default function Skills() {
  return (
    <div id="skills" className="p-10">
      <h1 className="text-5xl py-3 text-black dark:text-slate-400">My Skills</h1>
      <p className="text-lg py-2 text-gray-800 dark:text-slate-400 max-w-3xl">
        What I actually work with day to day.
      </p>

      <div className="grid gap-6 py-10 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.title} className="rounded-xl border border-teal-500/30 p-6">
            <h3 className="text-xl font-semibold text-teal-500">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.chips.map((chip) => (
                <span
                  key={chip.label}
                  className={`text-sm px-3 py-1.5 rounded-full border ${
                    chip.primary
                      ? 'border-teal-500 text-slate-900 dark:text-slate-200'
                      : 'border-slate-400/40 text-gray-800 dark:text-slate-400'
                  }`}
                >
                  {chip.label}
                </span>
              ))}
            </div>
          </div>
        ))}

        <div className="rounded-xl border border-dashed border-slate-400/40 p-6">
          <h3 className="text-xl font-semibold text-teal-500">{processMining.title}</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="text-sm px-3 py-1.5 rounded-full border border-dashed border-slate-400/40 text-gray-800 dark:text-slate-400">
              {processMining.chip}
            </span>
          </div>
          <p className="mt-3 text-xs font-mono text-gray-500 dark:text-slate-500">{processMining.note}</p>
        </div>
      </div>

      <p className="max-w-3xl text-sm text-gray-600 dark:text-slate-500">
        Also worked with: <span className="text-gray-800 dark:text-slate-300">{alsoWorkedWith.join(' · ')}</span> — from
        earlier full-stack and academic projects.
      </p>
    </div>
  )
}
