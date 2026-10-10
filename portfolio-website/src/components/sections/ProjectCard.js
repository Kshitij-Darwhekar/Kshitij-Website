import Image from 'next/image'

export default function ProjectCard({ project }) {
  return (
    <div className="basis-1/3 flex-1 transition-transform duration-200 hover:-translate-y-1">
      <h2 className="text-xl text-slate-800 dark:text-slate-200 hover:text-teal-500 dark:hover:text-teal-500 py-4 md:text-2xl lg:text-2xl">
        <a href={project.href} target="_blank" rel="noopener noreferrer">{project.title}</a>
      </h2>
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block aspect-[16/10] overflow-hidden rounded-lg"
      >
        <Image
          src={project.image}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition-opacity duration-300 group-hover:opacity-50"
          alt={project.alt}
          title={project.title}
        />
        <p className="absolute inset-0 flex items-center justify-center text-slate-200 opacity-0 transition-opacity duration-150 group-hover:opacity-100">
          Click to check out GitHub repo
        </p>
      </a>
    </div>
  )
}
