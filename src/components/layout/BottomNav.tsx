// ============================================================
// BottomNav — fixed bottom navigation bar
// ============================================================

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/constants';
import { NewspaperIcon, BookmarkIcon, GridIcon, UserIcon } from '@/components/ui/Icons';
import styles from './BottomNav.module.css';

const ICON_MAP: Record<string, React.FC<{ active: boolean }>> = {
  newspaper: NewspaperIcon,
  bookmark: BookmarkIcon,
  grid: GridIcon,
  user: UserIcon,
};

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav} role="navigation" aria-label="Main navigation">
      {NAV_ITEMS.map((item) => {
        const isActive = pathname === item.route;
        const Icon = ICON_MAP[item.icon];

        return (
          <Link
            key={item.id}
            href={item.route}
            className={[styles.item, isActive ? styles.active : '']
              .filter(Boolean)
              .join(' ')}
            aria-current={isActive ? 'page' : undefined}
          >
            <span className={styles.iconWrap}>
              {Icon && <Icon active={isActive} />}
              {isActive && <span className={styles.dot} aria-hidden="true" />}
            </span>
            <span className={styles.label}>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
