import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SectionReveal } from '@/components/ui/SectionReveal'
import Label from '@/components/ui/Label'
import { formatDate } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'The Journal',
  description: 'Perspectives, guides, and insights for the discerning — from the Vertex Concierge editorial team.',
}

// Placeholder articles — TODO: replace with Sanity data
const articles = [
  {
    slug: 'art-of-empty-leg-flying',
    title: 'The Art of Empty Leg Flying',
    category: 'Aviation',
    excerpt: 'How to access last-minute private jet routes at a fraction of charter costs — without compromise.',
    image: 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=800',
    publishedAt: '2024-12-15T00:00:00Z',
    readTime: 5,
  },
  {
    slug: 'mediterranean-superyachts-2024',
    title: 'Mediterranean Superyachts: The 2024 Season',
    category: 'Yachting',
    excerpt: 'The finest vessels available this season, from the Côte d\'Azur to the Ionian Islands.',
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800',
    publishedAt: '2024-11-28T00:00:00Z',
    readTime: 7,
  },
  {
    slug: 'wealth-structuring-2025',
    title: 'Wealth Structuring in a Shifting Landscape',
    category: 'Finance & Wealth',
    excerpt: 'Why ultra-HNW individuals are revisiting their financial architecture ahead of 2025 budget changes.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800',
    publishedAt: '2024-11-10T00:00:00Z',
    readTime: 6,
  },
  {
    slug: 'best-drives-in-the-uae',
    title: 'The Best Drives in the UAE',
    category: 'Automotive',
    excerpt: 'From the Hatta Mountain Road to Jebel Jais — five routes that demand a supercar.',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    publishedAt: '2024-10-22T00:00:00Z',
    readTime: 4,
  },
  {
    slug: 'diamonds-guide',
    title: 'Understanding Diamond Quality: A Collector\'s Guide',
    category: 'Lifestyle',
    excerpt: 'Beyond the 4Cs — what truly separates an exceptional diamond from an ordinary one.',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800',
    publishedAt: '2024-10-05T00:00:00Z',
    readTime: 8,
  },
  {
    slug: 'amalfi-coast-by-yacht',
    title: 'The Amalfi Coast by Private Yacht',
    category: 'Destinations',
    excerpt: 'Capri, Positano, and Ravello — why the Amalfi Coast is best experienced from the water.',
    image: 'https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?w=800',
    publishedAt: '2024-09-18T00:00:00Z',
    readTime: 6,
  },
]

const categories = ['All', 'Aviation', 'Yachting', 'Automotive', 'Finance & Wealth', 'Destinations', 'Lifestyle']

export default function JournalPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-obsidian section-py">
        <div className="container-site max-w-3xl">
          <SectionReveal>
            <Label color="champagne" className="mb-5">THE JOURNAL</Label>
            <h1 className="font-display font-light italic text-white mb-5"
              style={{ fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: '1.05' }}>
              Perspectives for
              <br />
              the discerning.
            </h1>
            <p className="text-white/60 text-base leading-relaxed max-w-[480px]">
              Insights, guides, and narratives from the world of private luxury.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Category filter */}
      <section className="bg-white border-b border-border-subtle sticky top-16 lg:top-20 z-40">
        <div className="container-site">
          <div className="flex gap-6 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                className="shrink-0 text-label tracking-wider text-text-muted hover:text-obsidian transition-colors pb-1 border-b-2 border-transparent data-[active]:border-champagne data-[active]:text-obsidian"
                data-active={cat === 'All' ? '' : undefined}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles grid */}
      <section className="bg-white section-py">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <SectionReveal key={article.slug} delay={i * 0.05}>
                <Link href={`/journal/${article.slug}`} className="group block">
                  <div className="relative h-[220px] overflow-hidden mb-5">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-600 group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <Label color="champagne" className="mb-3">{article.category.toUpperCase()}</Label>
                  <h2 className="font-display font-light text-[22px] text-obsidian mb-3 leading-snug group-hover:text-text-secondary transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-[14px] text-text-secondary leading-relaxed line-clamp-2 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-small text-text-muted">
                    <span>{formatDate(article.publishedAt)}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime} min read</span>
                    <span className="ml-auto text-champagne group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
