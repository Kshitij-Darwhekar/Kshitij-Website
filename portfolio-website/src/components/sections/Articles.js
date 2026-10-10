import { getMediumArticles } from '@/lib/medium'
import ArticleCard from './ArticleCard'

export default async function Articles() {
  const { articles, error } = await getMediumArticles()

  return (
    <section id="articles" className="p-10">
      <div className="content-wrap">
        <p className="section-eyebrow">06 · Articles</p>
        <h2 className="text-5xl py-3 text-black dark:text-slate-400">Articles</h2>
        <p className="max-w-3xl text-lg py-2 text-gray-800 dark:text-slate-400">
          Latest posts from{' '}
          <a href="https://medium.com/@kshitijdarwhekar" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:text-teal-700">
            Medium
          </a>.
        </p>
        {!error && articles.length > 0 && (
          <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/40 px-3 py-1 font-mono text-xs text-emerald-500">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse motion-reduce:animate-none" />
            Pulled live via RSS
          </div>
        )}

        {error || articles.length === 0 ? (
          <p className="py-6 text-gray-600 dark:text-slate-500">
            Articles are temporarily unavailable here — read them directly on{' '}
            <a href="https://medium.com/@kshitijdarwhekar" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:text-teal-700">
              Medium
            </a>.
          </p>
        ) : (
          <div className="grid gap-6 py-10 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.link} article={article} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
