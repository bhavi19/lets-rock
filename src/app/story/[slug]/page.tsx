// ============================================================
// Story Detail Page — full story view, SEO optimised
// Route: /story/[slug]
// ============================================================

import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MOCK_STORIES } from '@/lib/mockData';
import { ROUTES, APP_NAME } from '@/constants';
import { Badge } from '@/components/ui/Badge';
import { RippleEffect } from '@/components/feed/RippleEffect';
import { StoryArc } from '@/components/feed/StoryArc';
import { BiasMeter } from '@/components/feed/BiasMeter';
import { BottomNav } from '@/components/layout/BottomNav';
import { ExternalLinkIcon } from '@/components/ui/Icons';
import styles from './page.module.css';

interface Props {
  params: { slug: string };
}

// Generate SEO metadata per story
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const story = MOCK_STORIES.find((s) => s.slug === params.slug);
  if (!story) return { title: 'Story not found' };

  return {
    title: story.headline,
    description: story.plainEnglish,
    openGraph: {
      title: story.headline,
      description: story.plainEnglish,
      type: 'article',
      siteName: APP_NAME,
    },
    twitter: {
      card: 'summary',
      title: story.headline,
      description: story.plainEnglish,
    },
  };
}

// Pre-generate known story slugs at build time
export async function generateStaticParams() {
  return MOCK_STORIES.map((s) => ({ slug: s.slug }));
}

export default function StoryPage({ params }: Props) {
  const story = MOCK_STORIES.find((s) => s.slug === params.slug);
  if (!story) notFound();

  const publishedDate = new Date(story.publishedAt).toLocaleDateString(
    'en-IN',
    { day: 'numeric', month: 'long', year: 'numeric' },
  );

  return (
    <>
      <main className={styles.page}>
        {/* Back button */}
        <Link href={ROUTES.FEED} className={styles.back}>
          ← Back to feed
        </Link>

        <article className={styles.article}>
          {/* Header */}
          <header className={styles.header}>
            <Badge
              variant={story.badge}
              label={
                story.topic.charAt(0).toUpperCase() + story.topic.slice(1)
              }
            />
            <h1 className={styles.headline}>{story.headline}</h1>
            <p className={styles.date}>
              {publishedDate} · {story.sourcesCount} sources
            </p>
          </header>

          {/* Plain English summary */}
          <section className={styles.section}>
            <h2 className={styles.sectionLabel}>What happened</h2>
            <p className={styles.body}>{story.plainEnglish}</p>
          </section>

          {/* Ripple Effect */}
          <section className={styles.section}>
            <h2 className={styles.sectionLabel}>Why it matters to you</h2>
            <RippleEffect
              icon={story.rippleIcon}
              text={story.rippleEffect}
            />
          </section>

          {/* Story Arc */}
          {story.storyArc && story.storyArc.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionLabel}>How this story developed</h2>
              <StoryArc steps={story.storyArc} />
            </section>
          )}

          {/* Sources & Bias */}
          <section className={styles.section}>
            <h2 className={styles.sectionLabel}>Sources</h2>
            <div className={styles.sourcesRow}>
              <div className={styles.sourcesList}>
                {story.sources.map((source) => (
                  <a
                    key={source.name}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.sourceChip}
                    style={{ borderColor: source.color, color: source.color }}
                  >
                    {source.name}
                  </a>
                ))}
              </div>
              <div className={styles.biasWrap}>
                <span className={styles.biasLabel}>Bias</span>
                <BiasMeter score={story.biasScore} />
              </div>
            </div>
          </section>

          {/* Deep Read CTA */}
          {story.deepReadUrl && (
            <a
              href={story.deepReadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.deepRead}
            >
              <span>Read the full story</span>
              <ExternalLinkIcon size={16} />
            </a>
          )}
        </article>
      </main>
      <BottomNav />
    </>
  );
}
