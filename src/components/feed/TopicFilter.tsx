// ============================================================
// TopicFilter — horizontally scrollable topic chip row
// ============================================================

'use client';

import { TOPICS } from '@/constants';
import type { TopicId } from '@/constants';
import styles from './TopicFilter.module.css';

interface TopicFilterProps {
  active: TopicId;
  onChange: (topic: TopicId) => void;
}

export function TopicFilter({ active, onChange }: TopicFilterProps) {
  return (
    <div className={styles.wrapper} role="tablist" aria-label="Filter by topic">
      <div className={styles.scroll}>
        {TOPICS.map((topic) => (
          <button
            key={topic.id}
            role="tab"
            aria-selected={active === topic.id}
            className={[
              styles.chip,
              active === topic.id ? styles.chipActive : '',
            ]
              .filter(Boolean)
              .join(' ')}
            onClick={() => onChange(topic.id)}
            type="button"
          >
            <span className={styles.emoji} aria-hidden="true">
              {topic.emoji}
            </span>
            <span>{topic.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
