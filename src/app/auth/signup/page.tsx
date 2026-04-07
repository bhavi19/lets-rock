// ============================================================
// Sign Up Page
// ============================================================

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ROUTES, APP_NAME } from '@/constants';
import { Button } from '@/components/ui/Button';
import styles from '../signin/page.module.css';

export default function SignUpPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }

    setIsLoading(true);
    try {
      // TODO: call /api/auth/signup
      await new Promise((r) => setTimeout(r, 800));
      router.push(ROUTES.ONBOARDING);
    } catch {
      setError('Could not create account. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <div className={styles.header}>
          <span className={styles.logo}>{APP_NAME}</span>
          <h1 className={styles.title}>Create account</h1>
          <p className={styles.subtitle}>Free forever. No card needed.</p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="name">
              Your name
            </label>
            <input
              id="name"
              className={styles.input}
              type="text"
              autoComplete="name"
              placeholder="Rahul"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

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
              autoComplete="new-password"
              placeholder="Min. 8 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
            />
          </div>

          {error && <p className={styles.error}>{error}</p>}

          <Button
            type="submit"
            size="lg"
            fullWidth
            disabled={isLoading || !name || !email || !password}
          >
            {isLoading ? 'Creating account…' : 'Create free account'}
          </Button>
        </form>

        <div className={styles.divider}>
          <span className={styles.dividerText}>or</span>
        </div>

        <Button
          variant="ghost"
          size="lg"
          fullWidth
          onClick={() => {/* TODO: Google OAuth */}}
        >
          Continue with Google
        </Button>

        <p className={styles.footer}>
          Already have an account?{' '}
          <Link href={ROUTES.SIGNIN} className={styles.link}>
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}
