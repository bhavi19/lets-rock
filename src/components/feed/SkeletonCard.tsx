// ============================================================
// SkeletonCard — loading placeholder for StoryCard
// ============================================================

import styles from './SkeletonCard.module.css';

export function SkeletonCard() {
  return (
    <div className={styles.card} aria-hidden="true">
      <div className={styles.body}>
        <div className={styles.badge} />
        <div className={styles.headline} />
        <div className={styles.headlineShort} />
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.lineShort} />
        <div className={styles.ripple} />
      </div>
      <div className={styles.footer}>
        <div className={styles.footerLeft} />
        <div className={styles.footerRight} />
      </div>
    </div>
  );
}

export function SkeletonFeed() {
  return (
    <div aria-label="Loading stories…" role="status">
      <span className="sr-only">Loading…</span>
      {[1, 2, 3].map((i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
