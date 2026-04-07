// ============================================================
// StoryArc — timeline showing how a story developed over time
// ============================================================

import type { ArcStep } from '@/types';
import styles from './StoryArc.module.css';

interface StoryArcProps {
  steps: ArcStep[];
}

export function StoryArc({ steps }: StoryArcProps) {
  return (
    <div className={styles.arc}>
      {steps.map((step, index) => (
        <div
          key={index}
          className={[styles.step, step.isCurrent ? styles.current : '']
            .filter(Boolean)
            .join(' ')}
        >
          <span className={styles.date}>{step.date}</span>
          <span className={styles.stepLabel}>{step.label}</span>
        </div>
      ))}
    </div>
  );
}
