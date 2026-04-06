// ============================================================
// BiasMeter — left/right bias indicator for a story
// ============================================================

import styles from './BiasMeter.module.css';

interface BiasMeterProps {
  score: number; // 0 = far left, 100 = far right, 50 = center
}

export function BiasMeter({ score }: BiasMeterProps) {
  return (
    <div className={styles.meter} title={`Bias score: ${score}/100`}>
      <span className={styles.label}>L</span>
      <div className={styles.track} role="meter" aria-valuenow={score} aria-valuemin={0} aria-valuemax={100}>
        <div
          className={styles.fill}
          style={{ width: `${score}%` }}
        />
        <div
          className={styles.marker}
          style={{ left: `${score}%` }}
        />
      </div>
      <span className={styles.label}>R</span>
    </div>
  );
}
