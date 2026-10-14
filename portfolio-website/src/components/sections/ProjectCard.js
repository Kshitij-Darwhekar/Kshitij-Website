import Image from 'next/image'

export default function ProjectCard({ project }) {
  return (
    <div className="glass-card flex flex-col gap-4">
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block overflow-hidden rounded-lg border border-slate-400/20 dark:border-slate-700/50"
      >
        <div className="flex items-center gap-1.5 bg-slate-300/40 px-2.5 py-1.5 dark:bg-slate-800">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]" />
          <span className="ml-2 min-w-0 flex-1 truncate rounded bg-slate-200/70 px-2 py-0.5 font-mono text-[0.65rem] text-gray-600 dark:bg-slate-900/70 dark:text-slate-400">
            {project.urlLabel}
          </span>
        </div>
        <div className="relative aspect-[1920/1017] overflow-hidden">
          <Image
            src={project.image}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
            alt={project.alt}
            title={project.title}
          />
        </div>
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
