// ============================================================
// Badge — topic label pill shown on every story card
// ============================================================

import type { BadgeVariant } from '@/constants';
import styles from './Badge.module.css';

interface BadgeProps {
  variant: BadgeVariant;
  label: string;
}

export function Badge({ variant, label }: BadgeProps) {
  return (
    <span className={`${styles.badge} ${styles[variant]}`}>
      {label}
    </span>
  );
}
