import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SectionReveal } from '@/components/ui/SectionReveal'
import Label from '@/components/ui/Label'
import { formatDate } from '@/lib/utils'

// Placeholder articles — TODO: replace with Sanity queries
const articles: Record<string, {
  title: string
  category: string
  excerpt: string
  body: string
  image: string
  publishedAt: string
  readTime: number
  author: string
}> = {
  'art-of-empty-leg-flying': {
    title: 'The Art of Empty Leg Flying',
    category: 'Aviation',
    excerpt: 'How to access last-minute private jet routes at a fraction of charter costs — without compromise.',
    body: `<p>Empty leg flights — also known as deadhead or repositioning flights — represent one of the most compelling opportunities in private aviation. When a charter aircraft needs to return to its base or reposition to pick up its next client, the operator often makes that flight available at significantly reduced rates.</p><p>For the discerning traveller who maintains flexibility in their plans, this creates an extraordinary opportunity to fly privately at a fraction of the standard charter cost. Through our partnership with Shy Aviation, Vertex Concierge clients receive priority notification of available empty legs that match their preferred routes.</p><p>The key is preparation. Having a pre-approved flight account, clear identification documents, and a flexible travel schedule means you can move quickly when an opportunity arises. Our concierge team handles everything — from the moment we alert you to wheels-up.</p>`,
    image: 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=1920',
    publishedAt: '2024-12-15T00:00:00Z',
    readTime: 5,
    author: 'Vertex Editorial',
  },
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = articles[slug]
  if (!article) return { title: 'Article Not Found' }
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} | Vertex Concierge Journal`,
      description: article.excerpt,
      images: [{ url: article.image }],
    },
  }
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = articles[slug]

  if (!article) notFound()

  return (
    <article className="pt-20">
      {/* Hero image */}
      <div className="relative h-[60vh] min-h-[400px]">
        <Image
          src={article.image}
          alt={article.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/50 to-transparent" />
      </div>

      {/* Article content */}
      <section className="bg-white">
        <div className="container-site max-w-3xl py-16">
          <SectionReveal>
            <Label color="champagne" className="mb-5">{article.category.toUpperCase()}</Label>
            <h1 className="font-display font-light text-obsidian mb-6"
              style={{ fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: '1.1' }}>
              {article.title}
            </h1>
            <div className="flex items-center gap-5 text-small text-text-muted mb-10 pb-8 border-b border-border-subtle">
              <span>{article.author}</span>
              <span aria-hidden="true">·</span>
              <span>{formatDate(article.publishedAt)}</span>
              <span aria-hidden="true">·</span>
              <span>{article.readTime} min read</span>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div
              className="prose prose-lg max-w-none text-text-secondary leading-relaxed"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
              dangerouslySetInnerHTML={{ __html: article.body }}
            />
          </SectionReveal>

          {/* Share */}
          <SectionReveal delay={0.2} className="mt-12 pt-8 border-t border-border-subtle">
            <div className="flex items-center gap-4">
              <span className="text-label text-text-muted">SHARE</span>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-label text-text-muted hover:text-champagne transition-colors"
              >
                X / TWITTER
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://vertexconcierge.com/journal/' + slug)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-label text-text-muted hover:text-champagne transition-colors"
              >
                LINKEDIN
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Back to journal */}
      <section className="bg-pearl py-10">
        <div className="container-site">
          <Link href="/journal" className="text-label text-champagne hover:text-obsidian transition-colors tracking-wider">
            ← BACK TO THE JOURNAL
          </Link>
        </div>
      </section>
    </article>
  )
}
