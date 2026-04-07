// ============================================================
// StoryCard — the main news card shown in the feed
// Contains: Badge, Headline, Plain English, Ripple, Arc, Footer
// ============================================================

'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Story } from '@/types';
import { ROUTES } from '@/constants';
import { Badge } from '@/components/ui/Badge';
import { RippleEffect } from './RippleEffect';
import { StoryArc } from './StoryArc';
import { BiasMeter } from './BiasMeter';
import { ShareIcon, SaveIcon, ExternalLinkIcon } from '@/components/ui/Icons';
import styles from './StoryCard.module.css';

interface StoryCardProps {
  story: Story;
  animationDelay?: number;
}

export function StoryCard({ story, animationDelay = 0 }: StoryCardProps) {
  const [saved, setSaved] = useState(false);
  const [showArc, setShowArc] = useState(false);

  const handleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    setSaved((prev) => !prev);
    // TODO: persist to API
  };

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    if (navigator.share) {
      navigator.share({
        title: story.headline,
        text: story.plainEnglish,
        url: `${ROUTES.STORY}/${story.slug}`,
      });
    } else {
      navigator.clipboard.writeText(
        `${window.location.origin}${ROUTES.STORY}/${story.slug}`,
      );
    }
  };

  return (
    <article
      className={styles.card}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      {/* Card body — navigates to story detail */}
      <Link href={`${ROUTES.STORY}/${story.slug}`} className={styles.body}>
        <Badge
          variant={story.badge}
          label={story.topic.charAt(0).toUpperCase() + story.topic.slice(1)}
        />

        <h2 className={styles.headline}>{story.headline}</h2>

        <p className={styles.plainEnglish}>{story.plainEnglish}</p>

        <RippleEffect icon={story.rippleIcon} text={story.rippleEffect} />

        {story.storyArc && story.storyArc.length > 0 && (
          <div className={styles.arcSection}>
            <button
              className={styles.arcToggle}
              onClick={(e) => {
                e.preventDefault();
                setShowArc((prev) => !prev);
              }}
              type="button"
              aria-expanded={showArc}
            >
              {showArc ? 'Hide timeline ↑' : 'See story timeline ↓'}
            </button>
            {showArc && <StoryArc steps={story.storyArc} />}
          </div>
        )}
      </Link>

      {/* Card footer — actions */}
      <footer className={styles.footer}>
        <div className={styles.actions}>
          <button
            className={styles.action}
            onClick={handleShare}
            type="button"
            aria-label="Share this story"
          >
            <ShareIcon size={14} />
            <span>Share</span>
          </button>

          <button
            className={[styles.action, saved ? styles.actionSaved : '']
              .filter(Boolean)
              .join(' ')}
            onClick={handleSave}
            type="button"
            aria-label={saved ? 'Unsave story' : 'Save story'}
            aria-pressed={saved}
          >
            <SaveIcon size={14} filled={saved} />
            <span>{saved ? 'Saved' : 'Save'}</span>
          </button>

          {story.deepReadUrl && (
            <a
              className={styles.action}
              href={story.deepReadUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Read full story from source"
            >
              <ExternalLinkIcon size={14} />
              <span>Deep read</span>
            </a>
          )}
        </div>

        <div className={styles.meta}>
          <div className={styles.sources} aria-label={`${story.sourcesCount} sources`}>
            {story.sources.slice(0, 3).map((source) => (
              <span
                key={source.name}
                className={styles.sourceDot}
                style={{ backgroundColor: source.color }}
                title={source.name}
                aria-label={source.name}
              />
            ))}
            <span className={styles.sourceCount}>{story.sourcesCount} sources</span>
          </div>

          {/* <BiasMeter score={story.biasScore} /> */}
        </div>
      </footer>
    </article>
  );
}
