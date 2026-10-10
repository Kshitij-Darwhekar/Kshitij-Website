import ProjectCard from './ProjectCard'
import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <section className="p-10" id="projects">
      <div>
        <p className="section-eyebrow">05 · Portfolio</p>
        <h3 className="text-5xl py-2 mb-6 dark:text-slate-400">Portfolio</h3>
        <p className="max-w-4xl text-lg py-2 leading-8 text-grey-800 dark:text-slate-400 text-justify">
          My portfolio is a collection of work samples that reflect my experience in{' '}
          <span className="text-teal-500 hover:text-teal-700 dark:text-teal-500 dark:hover:text-teal-700">full-stack development</span>{' '}
          and{' '}
          <span className="text-teal-500 hover:text-teal-700 dark:text-teal-500 dark:hover:text-teal-700">machine learning</span>, including
          projects like{' '}
          <a className="text-teal-500 hover:text-teal-700 dark:text-teal-500 dark:hover:text-teal-700" href="https://github.com/Kshitij-Darwhekar/pizzeria-react-app">
            Pizzeria React App
          </a>
          ,{' '}
          <a className="text-teal-500 hover:text-teal-700 dark:text-teal-500 dark:hover:text-teal-700" href="https://github.com/WebDesgns/Flight-Management-System">
            FlySmart
          </a>
          , and{' '}
          <a className="text-teal-500 hover:text-teal-700 dark:text-teal-500 dark:hover:text-teal-700" href="https://github.com/Kshitij-Darwhekar/Intelligent-Traffic-Managment-System-Using-Computer-Vision">
            Intelligent Traffic Management System
          </a>
          , each reflecting a different stage of how my interests have evolved over time.
        </p>
        <p className="mx-auto py-2 text-lg leading-8 text-grey-800 dark:text-slate-400 text-justify">
          Through my portfolio, I aim to present the quality of my work and provide potential employers, clients, or
          collaborators with a comprehensive understanding of my capabilities and professional growth.
        </p>
      </div>

      <div className="grid gap-6 py-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
