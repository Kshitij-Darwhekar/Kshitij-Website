import { certificationGroups, linkedinUrl, credlyUrl } from '@/data/certifications'

export default function Certifications() {
  return (
    <div id="certifications" className="p-10">
      <p className="section-eyebrow">04 · Certifications</p>
      <h1 className="text-5xl py-3 text-black dark:text-slate-400">Certifications</h1>
      <p className="max-w-3xl text-lg py-2 text-gray-800 dark:text-slate-400">
        Backing it up with coursework.{' '}
        <a href={credlyUrl} target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:text-teal-700">
          View verified badges on Credly ↗
        </a>
      </p>

      <div className="grid gap-6 py-10 md:grid-cols-2">
        {certificationGroups.map((group) => (
          <div key={group.title} className="glass-card">
            <h3 className="text-xl font-semibold text-teal-500">{group.title}</h3>
            <ul className="mt-4 flex flex-col gap-2">
              {group.items.map((item) => (
                <li key={item.name} className="text-sm text-gray-800 dark:text-slate-400">
                  <span className="font-medium text-slate-900 dark:text-slate-200">{item.name}</span>{' '}
                  <span className="font-mono text-xs text-gray-500 dark:text-slate-500">— {item.issuer}</span>
                </li>
              ))}
            </ul>
            {group.note && (
              <p className="mt-3 text-xs text-gray-600 dark:text-slate-500">{group.note}</p>
            )}
          </div>
        ))}
      </div>

      <p className="max-w-3xl text-sm text-gray-600 dark:text-slate-500">
        Plus ~50 more courses and certifications across O&apos;Reilly, DataCamp, NPTEL, Coursera, Microsoft, and Oracle
        — the full list of ~69 lives on{' '}
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:text-teal-700">
          LinkedIn
        </a>
        , with verified digital badges on{' '}
        <a href={credlyUrl} target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:text-teal-700">
          Credly
        </a>.
      </p>
    </div>
  )
}
