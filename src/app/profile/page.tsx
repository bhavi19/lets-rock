// ============================================================
// Profile Page — user settings, preferences, account
// ============================================================

'use client';

import { MOCK_USER, ROUTES, PRICING, STORAGE_KEYS } from '@/constants';
import { ONBOARDING_TOPICS } from '@/constants';
import { TopBar } from '@/components/layout/TopBar';
import { BottomNav } from '@/components/layout/BottomNav';
import { Button } from '@/components/ui/Button';
import { ChevronRightIcon } from '@/components/ui/Icons';
import Link from 'next/link';
import styles from './page.module.css';

export default function ProfilePage() {
  const user = MOCK_USER;

  const handleSignOut = () => {
    Object.values(STORAGE_KEYS).forEach((key) =>
      localStorage.removeItem(key),
    );
    window.location.href = ROUTES.HOME;
  };

  return (
    <>
      <TopBar />
      <main className={styles.main}>

        {/* Avatar & Name */}
        <div className={styles.avatarSection}>
          <div className={styles.avatar}>
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className={styles.userName}>{user.name}</p>
            <p className={styles.userEmail}>{user.email}</p>
          </div>
        </div>

        {/* Premium Banner */}
        <div className={styles.premiumBanner}>
          <div className={styles.premiumLeft}>
            <span className={styles.premiumEmoji}>⭐</span>
            <div>
              <p className={styles.premiumTitle}>Go Premium</p>
              <p className={styles.premiumDesc}>
                Ad-free · Full history · ₹{PRICING.PREMIUM_MONTHLY_INR}/mo
              </p>
            </div>
          </div>
          <Button variant="primary" size="sm">Upgrade</Button>
        </div>

        {/* Preferences */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Your topics</h2>
          <div className={styles.topicsWrap}>
            {ONBOARDING_TOPICS.filter((t) =>
              user.topics.some((topic) => topic === t.id),
            ).map((t) => (
              <span key={t.id} className={styles.topicPill}>
                {t.emoji} {t.label}
              </span>
            ))}
          </div>
          <Link href={ROUTES.ONBOARDING} className={styles.editLink}>
            Edit topics →
          </Link>
        </section>

        {/* Settings list */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Settings</h2>
          <div className={styles.menuList}>
            {MENU_ITEMS.map((item) => (
              <Link key={item.label} href={item.href} className={styles.menuItem}>
                <span className={styles.menuEmoji}>{item.emoji}</span>
                <span className={styles.menuLabel}>{item.label}</span>
                <ChevronRightIcon size={16} className={styles.menuArrow} />
              </Link>
            ))}
          </div>
        </section>

        {/* Sign out */}
        <div className={styles.signOut}>
          <Button variant="danger" size="md" onClick={handleSignOut}>
            Sign out
          </Button>
        </div>

        <p className={styles.version}>BriefWorld v0.1.0 · Made with in India 🇮🇳</p>
      </main>
      <BottomNav />
    </>
  );
}

const MENU_ITEMS = [
  { emoji: '🔔', label: 'Notifications', href: '#' },
  { emoji: '🌙', label: 'Dark mode', href: '#' },
  { emoji: '🌐', label: 'Language', href: '#' },
  { emoji: '🔒', label: 'Privacy policy', href: '/privacy' },
  { emoji: '📄', label: 'Terms of use', href: '/terms' },
  { emoji: '💬', label: 'Send feedback', href: '#' },
];
