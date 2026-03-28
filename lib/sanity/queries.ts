import { sanityClient } from './client'

export interface Article {
  _id: string
  title: string
  slug: { current: string }
  category: string
  excerpt: string
  coverImage?: { asset: { url: string }; alt?: string }
  author?: { name: string; image?: { asset: { url: string } } }
  publishedAt: string
  readTime?: number
  seoTitle?: string
  seoDescription?: string
}

export interface ArticleDetail extends Article {
  body: unknown[]
}

export async function getArticles(params?: {
  category?: string
  limit?: number
  offset?: number
}): Promise<Article[]> {
  const { category, limit = 9, offset = 0 } = params ?? {}

  const categoryFilter = category && category !== 'All'
    ? `&& category == "${category}"`
    : ''

  return sanityClient.fetch(
    `*[_type == "article" ${categoryFilter}] | order(publishedAt desc) [${offset}...${offset + limit}] {
      _id, title, slug, category, excerpt,
      coverImage { asset -> { url }, alt },
      author -> { name, image { asset -> { url } } },
      publishedAt, readTime, seoTitle, seoDescription
    }`
  )
}

export async function getArticleBySlug(slug: string): Promise<ArticleDetail | null> {
  return sanityClient.fetch(
    `*[_type == "article" && slug.current == $slug][0] {
      _id, title, slug, category, excerpt, body,
      coverImage { asset -> { url }, alt },
      author -> { name, image { asset -> { url } } },
      publishedAt, readTime, seoTitle, seoDescription
    }`,
    { slug }
  )
}

export async function getRelatedArticles(
  currentId: string,
  category: string,
  limit = 3
): Promise<Article[]> {
  return sanityClient.fetch(
    `*[_type == "article" && category == $category && _id != $currentId] | order(publishedAt desc) [0...${limit}] {
      _id, title, slug, category, excerpt,
      coverImage { asset -> { url }, alt },
      author -> { name },
      publishedAt, readTime
    }`,
    { category, currentId }
  )
}

export async function getAllArticleSlugs(): Promise<string[]> {
  const articles = await sanityClient.fetch(
    `*[_type == "article"] { "slug": slug.current }`
  )
  return articles.map((a: { slug: string }) => a.slug)
}
