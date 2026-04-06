// ============================================================
// Saved Page — bookmarked stories
// ============================================================

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ROUTES } from '@/constants';
import { MOCK_STORIES } from '@/lib/mockData';
import { TopBar } from '@/components/layout/TopBar';
import { BottomNav } from '@/components/layout/BottomNav';
import { StoryCard } from '@/components/feed/StoryCard';
import { Button } from '@/components/ui/Button';
import styles from './page.module.css';

export default function SavedPage() {
  // TODO: replace with real saved stories from API/localStorage
  const [savedStories] = useState(MOCK_STORIES.slice(0, 2));

  return (
    <>
      <TopBar />
      <main className={styles.main}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Saved</h1>
          <p className={styles.pageDesc}>
            {savedStories.length} story{savedStories.length !== 1 ? 'ies' : ''}
            {' '}saved
          </p>
        </div>

        {savedStories.length === 0 ? (
          <div className={styles.empty}>
            <span className={styles.emptyEmoji}>🔖</span>
            <p className={styles.emptyTitle}>Nothing saved yet</p>
            <p className={styles.emptySub}>
              Tap Save on any story in your feed to keep it here.
            </p>
            <Link href={ROUTES.FEED}>
              <Button variant="secondary">Go to feed</Button>
            </Link>
          </div>
        ) : (
          <div className={styles.list}>
            {savedStories.map((story, index) => (
              <StoryCard key={story.id} story={story} animationDelay={index * 60} />
            ))}
          </div>
        )}
      </main>
      <BottomNav />
    </>
  );
}
