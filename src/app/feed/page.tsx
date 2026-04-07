// ============================================================
// Feed Page — the heart of BriefWorld
// Personalised news feed with topic filter
// ============================================================

'use client';

import { useState, useMemo } from 'react';
import type { TopicId } from '@/constants';
import { MOCK_STORIES, MOCK_BREAKING_STORY } from '@/lib/mockData';
import { TopBar } from '@/components/layout/TopBar';
import { BottomNav } from '@/components/layout/BottomNav';
import { TopicFilter } from '@/components/feed/TopicFilter';
import { BreakingBanner } from '@/components/feed/BreakingBanner';
import { StoryCard } from '@/components/feed/StoryCard';
import { AdSlot } from '@/components/feed/AdSlot';
import { MOCK_USER } from '@/constants';
import styles from './page.module.css';

const AD_FREQUENCY = 3; // show ad after every Nth story

export default function FeedPage() {
  const [activeTopic, setActiveTopic] = useState<TopicId>('all');

  const filteredStories = useMemo(() => {
    if (activeTopic === 'all') return MOCK_STORIES;
    return MOCK_STORIES.filter((s) => s.topic === activeTopic);
  }, [activeTopic]);

  return (
    <>
      <TopBar userName={MOCK_USER.name} storyCount={filteredStories.length} />

      <TopicFilter active={activeTopic} onChange={setActiveTopic} />

      <main className={styles.main}>
        {/* Breaking news banner — only shown when relevant */}
        {MOCK_BREAKING_STORY.isBreaking && activeTopic === 'all' && (
          <BreakingBanner story={MOCK_BREAKING_STORY} />
        )}

        {/* Story feed with ads injected */}
        {filteredStories.length === 0 ? (
          <EmptyState topic={activeTopic} />
        ) : (
          filteredStories.map((story, index) => (
            <div key={story.id}>
              <StoryCard
                story={story}
                animationDelay={index * 60}
              />
              {/* Inject ad after every AD_FREQUENCY stories */}
              {(index + 1) % AD_FREQUENCY === 0 &&
                index !== filteredStories.length - 1 && <AdSlot />}
            </div>
          ))
        )}

        <p className={styles.endNote}>
          You&apos;re all caught up · Updated 15 min ago
        </p>
      </main>

      <BottomNav />
    </>
  );
}

function EmptyState({ topic }: { topic: TopicId }) {
  return (
    <div className={styles.empty}>
      <span className={styles.emptyEmoji}>🔍</span>
      <p className={styles.emptyTitle}>No stories for this topic yet</p>
      <p className={styles.emptySub}>
        We&apos;re pulling in the latest <strong>{topic}</strong> news. Check
        back in a few minutes.
      </p>
    </div>
  );
}
