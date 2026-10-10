import Parser from 'rss-parser'

const MEDIUM_FEED_URL = 'https://medium.com/feed/@kshitijdarwhekar'
const MAX_ARTICLES = 6

const NAMED_ENTITIES = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' }

function decodeEntities(str = '') {
  return str
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(parseInt(dec, 10)))
    .replace(/&(amp|lt|gt|quot|apos|nbsp);/g, (_, name) => NAMED_ENTITIES[name])
}

function stripHtml(html = '') {
  const text = html.replace(/<[^>]*>/g, ' ')
  return decodeEntities(text)
    .replace(/Continue reading on .*?»\s*$/i, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function formatDate(dateString) {
  const date = new Date(dateString)
  if (Number.isNaN(date.getTime())) return ''
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export async function getMediumArticles() {
  try {
    const res = await fetch(MEDIUM_FEED_URL, { next: { revalidate: 3600 } })
    if (!res.ok) {
      throw new Error(`Medium feed responded with ${res.status}`)
    }
    const xml = await res.text()

    const parser = new Parser({
      customFields: { item: ['content:encoded', 'category'] },
    })
    const feed = await parser.parseString(xml)

    const articles = (feed.items || []).slice(0, MAX_ARTICLES).map((item) => {
      const content = item['content:encoded'] || item.content || ''
      const excerptSource = stripHtml(content)
      const excerpt = excerptSource.length > 160
        ? `${excerptSource.slice(0, 160).trim()}…`
        : excerptSource

      return {
        title: item.title,
        link: item.link,
        date: formatDate(item.pubDate),
        excerpt,
        categories: item.categories || [],
      }
    })

    return { articles, error: false }
  } catch (err) {
    console.error('Failed to fetch Medium articles:', err)
    return { articles: [], error: true }
  }
}
