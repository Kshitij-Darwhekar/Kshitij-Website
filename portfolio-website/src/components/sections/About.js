import Image from 'next/image'
import kshitij from '../../../public/Kshitij_Formal.jpg'

export default function About() {
  return (
    <div className="text-center p-10" id="about">
      <p className="section-eyebrow justify-center">01 · About</p>

      <div className="flex items-center justify-center text-center mx-auto overflow-hidden">
        <div className="relative mt-4 mb-4 mx-auto bg-gradient-to-br from-teal-500 to-violet-500 rounded-full w-64 h-64 overflow-hidden md:h-80 md:w-80">
          <Image
            src={kshitij}
            fill
            alt="Kshitij Darwhekar"
            style={{ objectFit: 'cover', objectPosition: 'top center' }}
            sizes="(min-width: 768px) 320px, 256px"
            priority
          />
        </div>
      </div>

      <h2 className="text-4xl py-3 text-black dark:text-slate-200 md:text-5xl">
        From a summer-break website
        <br />
        to automation, data &amp; agents.
      </h2>

      <div className="glass-panel mx-auto flex max-w-4xl flex-col gap-5 p-8 text-left md:p-10">
        <p className="text-lg leading-8 text-gray-800 dark:text-slate-400 md:text-xl">
          Back in high school, after finishing my 12th grade and looking for something to do during a long summer
          break, I decided to try my hand at building a website. That project sparked a passion for building things
          that work that has only grown stronger since.
        </p>

        <p className="text-lg leading-8 text-gray-800 dark:text-slate-400 md:text-xl">
          I&apos;m an <span className="text-teal-500">Automation &amp; AI-focused engineer</span> with 3 years at IBM.
          I started out using <span className="text-teal-500">Celonis process mining</span> to uncover where
          enterprise processes were breaking down, then moved into <span className="text-teal-500">RPA
          development</span> — building 15+ bots end-to-end, shipping dozens of change requests across the existing
          portfolio, and now owning the reliability of a 95+ bot production footprint across{' '}
          <span className="text-teal-500">SAP</span> and other enterprise systems, spanning finance, HR, cybersecurity,
          and business operations.
        </p>

        <p className="text-lg leading-8 text-gray-800 dark:text-slate-400 md:text-xl">
          Lately that&apos;s evolved into AI-driven automation:{' '}
          <span className="text-teal-500">Python-based automations, AI agents, and intelligent workflows</span> that
          don&apos;t just execute predefined steps but understand context and make decisions.
        </p>

        <p className="text-lg leading-8 text-gray-800 dark:text-slate-400 md:text-xl">
          Off-screen: cricket, music, movies and the odd sitcom binge, and lately trying to walk more and eat
          healthier. I&apos;m also not-so-secretly into <span className="text-teal-500">photography</span> — nothing
          professional, just a habit of pulling out my phone wherever I&apos;m traveling to shoot trees, skies,
          buildings, whatever catches my eye. Some of it ends up on{' '}
          <a href="https://unsplash.com/@kshitijd" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:text-teal-700">
            Unsplash
          </a>.
        </p>

        <p className="text-lg leading-8 text-gray-800 dark:text-slate-400 md:text-xl">
          Thanks for stopping by to learn a bit about me. Let&apos;s connect and create something amazing together!
        </p>
      </div>
    </div>
  )
}
