import Link from 'next/link'
import Image from 'next/image'
import { SectionReveal, SectionRevealContainer, SectionRevealItem } from '@/components/ui/SectionReveal'
import Label from '@/components/ui/Label'
import { formatDate } from '@/lib/utils'

// Placeholder articles until Sanity is connected
const placeholderArticles = [
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
]

export default function JournalPreview() {
  return (
    <section className="bg-pearl section-py">
      <div className="container-site">
        <SectionReveal className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <Label color="muted" className="mb-4">THE JOURNAL</Label>
            <h2 className="text-section-heading font-display font-light text-obsidian">
              Perspectives for
              <br />
              the discerning.
            </h2>
          </div>
          <Link
            href="/journal"
            className="text-label text-champagne hover:text-obsidian transition-colors tracking-wider whitespace-nowrap"
          >
            READ THE JOURNAL →
          </Link>
        </SectionReveal>

        <SectionRevealContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderArticles.map((article) => (
            <SectionRevealItem key={article.slug}>
              <Link href={`/journal/${article.slug}`} className="group block">
                <div className="overflow-hidden mb-5" style={{ borderRadius: '0px' }}>
                  <div className="relative h-[220px] overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-600 group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
                <span className="text-label text-champagne mb-3 block">{article.category.toUpperCase()}</span>
                <h3 className="font-display font-light text-[22px] text-obsidian mb-3 leading-snug group-hover:text-text-secondary transition-colors">
                  {article.title}
                </h3>
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
            </SectionRevealItem>
          ))}
        </SectionRevealContainer>
      </div>
    </section>
  )
}
