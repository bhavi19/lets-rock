// ============================================================
// Landing Page — SEO-first public homepage
// ============================================================

import type { Metadata } from 'next';
import Link from 'next/link';
import { APP_NAME, APP_TAGLINE, APP_DESCRIPTION, ROUTES } from '@/constants';
import { Button } from '@/components/ui/Button';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: `${APP_NAME} — ${APP_TAGLINE}`,
  description: APP_DESCRIPTION,
};

export default function LandingPage() {
  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>AI-powered news digest</span>
          <h1 className={styles.heroTitle}>{APP_NAME}</h1>
          <p className={styles.heroSub}>{APP_TAGLINE}</p>
          <p className={styles.heroDesc}>{APP_DESCRIPTION}</p>

          <div className={styles.heroCta}>
            <Link href={ROUTES.ONBOARDING}>
              <Button size="lg">Get your free brief →</Button>
            </Link>
            <Link href={ROUTES.FEED}>
              <Button variant="ghost" size="lg">See today's feed</Button>
            </Link>
          </div>

          <p className={styles.heroNote}>Free · No credit card · 5 minutes a day</p>
        </div>
      </section>

      {/* Features */}
      <section className={styles.features}>
        <h2 className={styles.sectionTitle}>Why BriefWorld is different</h2>
        <div className={styles.featureGrid}>
          {FEATURES.map((f) => (
            <div key={f.title} className={styles.featureCard}>
              <span className={styles.featureEmoji}>{f.emoji}</span>
              <h3 className={styles.featureTitle}>{f.title}</h3>
              <p className={styles.featureDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social proof */}
      <section className={styles.proof}>
        <p className={styles.proofText}>
          &ldquo;Finally a news app that tells me{' '}
          <em>why it matters to me</em> — not just what happened.&rdquo;
        </p>
        <span className={styles.proofAuthor}>— Early user, Pune</span>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2 className={styles.ctaTitle}>Start your brief today</h2>
        <p className={styles.ctaDesc}>Join thousands of Indians reading smarter.</p>
        <Link href={ROUTES.ONBOARDING}>
          <Button size="lg" fullWidth>Get started free →</Button>
        </Link>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p className={styles.footerText}>
          © 2026 {APP_NAME} · Made with ❤️ in India
        </p>
        <div className={styles.footerLinks}>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/about">About</Link>
        </div>
      </footer>
    </main>
  );
}

const FEATURES = [
  {
    emoji: '🌊',
    title: 'Ripple Effect',
    desc: 'Every story shows how global events connect directly to your daily life in India.',
  },
  {
    emoji: '📖',
    title: 'Story Arc',
    desc: 'Never feel lost. A timeline shows you how every story developed — catch up in seconds.',
  },
  {
    emoji: '⚖️',
    title: 'Bias Meter',
    desc: 'See how many sources confirm a story and where they sit on the political spectrum.',
  },
  {
    emoji: '🎯',
    title: 'Personalised Feed',
    desc: 'Pick your topics. AI curates exactly what you care about — nothing more.',
  },
  {
    emoji: '⏱️',
    title: '5 Minutes Max',
    desc: 'Every morning brief is designed to be read completely in under 5 minutes.',
  },
  {
    emoji: '🔍',
    title: 'Plain English',
    desc: 'No jargon. No spin. Every story explained like a smart friend would.',
  },
];
