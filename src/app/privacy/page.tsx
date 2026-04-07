// ============================================================
// Privacy Policy Page
// ============================================================

import type { Metadata } from 'next';
import Link from 'next/link';
import { ROUTES, APP_NAME } from '@/constants';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy',
};

export default function PrivacyPage() {
  return (
    <main className={styles.page}>
      <Link href={ROUTES.HOME} className={styles.back}>← Back</Link>
      <h1 className={styles.title}>Privacy Policy</h1>
      <p className={styles.updated}>Last updated: April 2026</p>
      <div className={styles.content}>
        <p>{APP_NAME} collects your email address and topic preferences to personalise your news feed. We do not sell your data to third parties.</p>
        <h2>Data we collect</h2>
        <p>Email address, name, and topic preferences when you create an account. Reading behaviour (which stories you save or skip) to improve personalisation.</p>
        <h2>Advertising</h2>
        <p>We display Google AdSense ads on the free tier. Google may use cookies to show relevant ads. See Google&apos;s privacy policy for details.</p>
        <h2>Contact</h2>
        <p>For any privacy concerns, email us at privacy@briefworld.in</p>
      </div>
    </main>
  );
}
