import RotatingTitle from './RotatingTitle'
import SocialLinks from '@/components/layout/SocialLinks'

export default function Hero() {
  return (
    <div className="text-center p-10">
      <div className="flex flex-col items-center justify-center gap-y-5">
        <h2 className="text-6xl text-slate-900 font-medium dark:text-slate-400 md:text-7xl lg:text-8xl text-center">
          Hi I&apos;m <span className="text-teal-500 dark:text-teal-500">Kshitij</span>{' '}
          <span className="text-teal-500 dark:text-teal-500 p-4 md:p-0 lg:p-0">Darwhekar</span>
        </h2>
        <h2 className="text-3xl py-5 px-3 text-teal-500/75 font-medium dark:text-teal-500/75 md:text-5xl lg:text-5xl text-center">
          <RotatingTitle />
        </h2>
      </div>

      <p className="text-lg py-5 font-burton text-center leading-8 text-gray-800 dark:text-slate-400 md:text-xl max-w-10xl mx-auto">
        Hey there! I&apos;m an <span className="text-teal-500">Automation &amp; AI-focused engineer @ IBM</span>, designing
        and building enterprise RPA across finance, supply chain and business operations, and owning the reliability of a{' '}
        <span className="text-teal-500">98-bot production footprint</span> across SAP and other enterprise apps.
        I&apos;ve since moved beyond rule-based automation into <span className="text-teal-500">Python-based AI agents</span>{' '}
        and intelligent, context-aware workflows.
        <br />
        Explore my{' '}
        <span className="text-teal-500">
          <a href="https://github.com/Kshitij-Darwhekar" className="hover:text-teal-700">projects</a>
        </span>{' '}
        to see what I&apos;ve been building, and check out my tech blogs on{' '}
        <span className="text-teal-500">
          <a href="https://medium.com/@kshitijdarwhekar" className="hover:text-teal-700">Medium</a>
        </span>.
      </p>

      <SocialLinks className="py-4 mb-40 text-5xl flex justify-center flex-row items-center gap-10 text-gray-600 dark:text-gray-400" />
    </div>
  )
}
