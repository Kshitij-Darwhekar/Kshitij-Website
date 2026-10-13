import RotatingTitle from './RotatingTitle'
import SocialLinks from '@/components/layout/SocialLinks'

export default function Hero() {
  return (
    <div className="relative flex min-h-screen items-center p-10">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-20 h-80 w-80 rounded-full bg-gradient-radial from-teal-400/40 to-transparent blur-3xl dark:from-teal-500/30" />
        <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-gradient-radial from-violet-400/30 to-transparent blur-3xl dark:from-violet-500/30" />
      </div>

      <div className="content-wrap glass-panel relative" style={{ padding: '40px' }}>
        <p className="section-eyebrow">Automation &amp; AI-Focused Engineer @ IBM</p>

        <h1 className="mt-4 text-4xl font-medium leading-tight text-slate-900 dark:text-slate-200 md:text-6xl">
          Automating enterprise workflows,
          <br />
          building{' '}
          <span className="bg-gradient-to-r from-teal-500 to-violet-500 bg-clip-text text-transparent">
            AI agents
          </span>
          .
        </h1>

        <div className="mt-4 min-h-[1.6em] font-mono text-lg text-gray-600 dark:text-slate-400 md:text-xl">
          <RotatingTitle />
        </div>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-800 dark:text-slate-400">
          Hey, I&apos;m <b className="text-slate-900 dark:text-slate-200">Kshitij</b> — I design and build enterprise
          RPA across finance, HR, cybersecurity and business operations, and own the reliability of a{' '}
          <span className="text-teal-500">95+ bot production footprint</span> across SAP and other enterprise apps.
          I&apos;ve since moved beyond rule-based automation into{' '}
          <span className="text-teal-500">Python-based AI agents</span> and intelligent, context-aware workflows. I
          write about it all on{' '}
          <a href="https://medium.com/@kshitijdarwhekar" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:text-teal-700">
            Medium
          </a>.
        </p>

        <SocialLinks className="mt-8 flex flex-row items-center gap-4 text-gray-600 dark:text-gray-400" />
      </div>
    </div>
  )
}
