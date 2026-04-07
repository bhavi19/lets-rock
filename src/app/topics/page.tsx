// ============================================================
// Topics Page — browse all news categories
// ============================================================

import Link from 'next/link';
import { ONBOARDING_TOPICS, ROUTES } from '@/constants';
import { TopBar } from '@/components/layout/TopBar';
import { BottomNav } from '@/components/layout/BottomNav';
import styles from './page.module.css';

export default function TopicsPage() {
  return (
    <>
      <TopBar />
      <main className={styles.main}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Topics</h1>
          <p className={styles.pageDesc}>Browse news by category</p>
        </div>

        <div className={styles.grid}>
          {ONBOARDING_TOPICS.map((topic) => (
            <Link
              key={topic.id}
              href={`${ROUTES.FEED}?topic=${topic.id}`}
              className={styles.topicCard}
            >
              <span className={styles.topicEmoji}>{topic.emoji}</span>
              <div className={styles.topicInfo}>
                <span className={styles.topicLabel}>{topic.label}</span>
                <span className={styles.topicDesc}>{topic.description}</span>
              </div>
              <span className={styles.topicArrow}>→</span>
            </Link>
          ))}
        </div>
      </main>
      <BottomNav />
    </>
  );
}
