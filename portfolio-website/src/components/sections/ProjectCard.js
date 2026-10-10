import Image from 'next/image'

export default function ProjectCard({ project }) {
  return (
    <div className="glass-card flex flex-col gap-4">
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
          className="object-cover transition-opacity duration-300 group-hover:opacity-80"
          alt={project.alt}
          title={project.title}
        />
      </a>

      <h2 className="text-lg text-slate-800 hover:text-teal-500 dark:text-slate-200 dark:hover:text-teal-500">
        <a href={project.href} target="_blank" rel="noopener noreferrer">{project.title}</a>
      </h2>

      {project.tags && (
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-teal-500/10 px-2 py-1 font-mono text-xs text-teal-500"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
