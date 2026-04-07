// ============================================================
// BreakingBanner — flashing red strip for breaking news
// ============================================================

import type { Story } from '@/types';
import styles from './BreakingBanner.module.css';

interface BreakingBannerProps {
  story: Story;
  onClick?: () => void;
}

export function BreakingBanner({ story, onClick }: BreakingBannerProps) {
  return (
    <button className={styles.banner} onClick={onClick} type="button">
      <span className={styles.dot} aria-hidden="true" />
      <div className={styles.content}>
        <span className={styles.label}>Breaking</span>
        <span className={styles.headline}>{story.headline}</span>
      </div>
      <span className={styles.arrow} aria-hidden="true">→</span>
    </button>
  );
}
