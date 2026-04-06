// ============================================================
// Loading — shown by Next.js during page transitions
// ============================================================

import { SkeletonFeed } from '@/components/feed/SkeletonCard';
import styles from './loading.module.css';

export default function Loading() {
  return (
    <div className={styles.wrap}>
      <SkeletonFeed />
    </div>
  );
}
