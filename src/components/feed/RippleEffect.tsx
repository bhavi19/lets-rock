// ============================================================
// RippleEffect — teal box showing how news affects the user
// ============================================================

import styles from './RippleEffect.module.css';

interface RippleEffectProps {
  icon: string;
  text: string;
}

export function RippleEffect({ icon, text }: RippleEffectProps) {
  return (
    <div className={styles.ripple}>
      <span className={styles.icon} aria-hidden="true">
        {icon}
      </span>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
