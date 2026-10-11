export default function ArticleCard({ article }) {
  return (
    <a
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-card group flex flex-col gap-2 hover:border-teal-500"
    >
      <span className="font-mono text-xs text-gray-500 dark:text-slate-500">{article.date}</span>
      <h3 className="text-lg font-semibold text-slate-800 group-hover:text-teal-500 dark:text-slate-200 dark:group-hover:text-teal-500">
        {article.title}
      </h3>
      <p className="flex-1 text-sm text-gray-600 dark:text-slate-400">{article.excerpt}</p>
      <span className="text-sm text-teal-500">Read on Medium ↗</span>
    </a>
  )
}
