import { experience } from '@/data/experience'

export default function Experience() {
  return (
    <section id="experience" className="p-10">
      <div className="content-wrap">
        <p className="section-eyebrow">02 · Experience</p>
        <h2 className="text-4xl py-3 text-black dark:text-slate-200 md:text-5xl">Where I&apos;ve worked.</h2>

        <div className="glass-panel mt-10" style={{ padding: '36px' }}>
          <div className="timeline max-w-4xl">
            {experience.map((job, index) => (
              <div key={job.role + job.org} className="relative mb-10 last:mb-0">
                <span
                  className={`timeline-dot ring-4 ${
                    index === 0 ? 'bg-teal-500 ring-teal-500/20' : 'bg-violet-500 ring-violet-500/20'
                  }`}
                />
                <h3 className={`text-xl font-semibold md:text-2xl ${index === 0 ? 'text-teal-500' : 'text-violet-500'}`}>
                  {job.role}
                </h3>
                <h3 className="text-md font-semibold py-1 md:text-lg">
                  <a
                    className="text-slate-500 hover:text-teal-400 focus-visible:text-teal-500 dark:text-slate-400 dark:hover:text-teal-500"
                    href={job.orgHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {job.org}
                  </a>
                  <span className="font-mono text-sm text-gray-800 dark:text-slate-400"> {job.period}</span>
                </h3>
                <ul className="mt-3 flex flex-col gap-2 text-md text-gray-800 dark:text-slate-400 md:text-lg">
                  {job.bullets.map((bullet, i) => (
                    <li key={i} className="list-disc marker:text-teal-500/50 ml-5">
                      {bullet.lead && <span className="text-teal-500">{bullet.lead}</span>}
                      {bullet.lead ? ' — ' : ''}
                      {bullet.text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
