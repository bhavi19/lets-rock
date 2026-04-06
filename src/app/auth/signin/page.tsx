// ============================================================
// Sign In Page
// ============================================================

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ROUTES, APP_NAME } from '@/constants';
import { Button } from '@/components/ui/Button';
import styles from './page.module.css';

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // TODO: call NextAuth signIn or /api/auth/signin
      await new Promise((r) => setTimeout(r, 800)); // mock delay
      router.push(ROUTES.FEED);
    } catch {
      setError('Invalid email or password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <div className={styles.header}>
          <span className={styles.logo}>{APP_NAME}</span>
          <h1 className={styles.title}>Welcome back</h1>
          <p className={styles.subtitle}>Sign in to your brief</p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input
              id="email"
              className={styles.input}
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="password">
              Password
            </label>
            <input
              id="password"
              className={styles.input}
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className={styles.error}>{error}</p>}

          <Button
            type="submit"
            size="lg"
            fullWidth
            disabled={isLoading || !email || !password}
          >
            {isLoading ? 'Signing in…' : 'Sign in'}
          </Button>
        </form>

        <div className={styles.divider}>
          <span className={styles.dividerText}>or</span>
        </div>

        <Button
          variant="ghost"
          size="lg"
          fullWidth
          onClick={() => {
            /* TODO: Google OAuth */
          }}
        >
          <span>Continue with Google</span>
        </Button>

        <p className={styles.footer}>
          Don&apos;t have an account?{' '}
          <Link href={ROUTES.SIGNUP} className={styles.link}>
            Sign up free
          </Link>
        </p>
      </div>
    </main>
  );
}
