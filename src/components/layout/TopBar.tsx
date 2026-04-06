// ============================================================
// TopBar — fixed header with greeting and read-time pill
// ============================================================

import { APP_NAME, READ_TIME } from '@/constants';
import styles from './TopBar.module.css';

interface TopBarProps {
  userName?: string;
  storyCount?: number;
}

export function TopBar({ userName, storyCount = 5 }: TopBarProps) {
  const greeting = getGreeting();

  return (
    <header className={styles.topbar}>
      <div className={styles.left}>
        <span className={styles.greeting}>{greeting}</span>
        <span className={styles.title}>
          {userName ? `Hi, ${userName}` : APP_NAME}
        </span>
      </div>
      <div className={styles.right}>
        <span className={styles.pill}>
          {storyCount} stories · {READ_TIME.BRIEF}
        </span>
      </div>
    </header>
  );
}

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 17) return 'Good afternoon';
  return 'Good evening';
}
