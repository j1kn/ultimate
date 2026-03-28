import type { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://vertexconcierge.com'

const staticRoutes = [
  '',
  '/services',
  '/services/aviation',
  '/services/yachts',
  '/services/automotive',
  '/services/financial',
  '/services/currency',
  '/services/jewellery',
  '/partners',
  '/membership',
  '/journal',
  '/about',
  '/contact',
  '/privacy',
  '/terms',
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))

  // TODO: Fetch dynamic journal slugs from Sanity
  // const slugs = await getAllArticleSlugs()
  // const journalEntries = slugs.map((slug) => ({ ... }))

  return staticEntries
}
