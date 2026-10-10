import { experience } from '@/data/experience'

export default function Experience() {
  return (
    <section id="experience" className="p-10">
      <h2 className="text-5xl py-3 text-black dark:text-slate-400">Experience</h2>
      <div className="mt-6">
        {experience.map((job) => (
          <div key={job.role + job.org} className="mb-4">
            <h3 className="text-xl font-semibold text-teal-500 dark:text-teal-500 md:text-2xl lg:text-2xl">{job.role}</h3>
            <h3 className="text-md font-semibold py-1 md:text-lg lg:text-lg">
              <a
                className="text-slate-500 hover:text-teal-400 focus-visible:text-teal-500 dark:text-slate-400 dark:hover:text-teal-500"
                href={job.orgHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                {job.org}
              </a>
              <span className="text-gray-800 dark:text-slate-400"> ({job.period})</span>
            </h3>
            <div className="text-md text-gray-800 dark:text-slate-400 p-4 md:text-lg lg:text-lg">
              <ul style={{ listStyleType: 'disc' }} className="text-lg text-gray-800 dark:text-slate-400">
                {job.bullets.map((bullet, i) => (
                  <li key={i} className="py-1">
                    {bullet.lead && <span className="text-teal-500">{bullet.lead}</span>}
                    {bullet.lead ? ' — ' : ''}
                    {bullet.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
