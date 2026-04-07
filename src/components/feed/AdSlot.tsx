// ============================================================
// AdSlot — non-intrusive Google AdSense placement
// Appears after every 3rd story in the feed
// ============================================================

import styles from './AdSlot.module.css';

interface AdSlotProps {
  label?: string;
  ctaText?: string;
  ctaUrl?: string;
}

export function AdSlot({
  label = 'HDFC Bank — zero-fee savings account, open in 2 mins',
  ctaText = 'Learn more',
  ctaUrl = '#',
}: AdSlotProps) {
  return (
    <div className={styles.slot} role="complementary" aria-label="Advertisement">
      <span className={styles.tag}>Ad</span>
      <p className={styles.text}>{label}</p>
      <a
        href={ctaUrl}
        className={styles.cta}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Advertisement: ${ctaText}`}
      >
        {ctaText} →
      </a>
    </div>
  );
}
