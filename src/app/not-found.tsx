// ============================================================
// 404 Page — custom not found
// ============================================================

import Link from 'next/link';
import { ROUTES } from '@/constants';
import { Button } from '@/components/ui/Button';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <main className={styles.page}>
      <span className={styles.code}>404</span>
      <h1 className={styles.title}>Page not found</h1>
      <p className={styles.desc}>
        This story may have moved or no longer exists.
      </p>
      <Link href={ROUTES.FEED}>
        <Button size="lg">Back to feed</Button>
      </Link>
    </main>
  );
}
