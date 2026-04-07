// ============================================================
// Onboarding Page — topic interest selection
// ============================================================

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ONBOARDING_TOPICS, ROUTES, STORAGE_KEYS } from '@/constants';
import type { TopicId } from '@/constants';
import { Button } from '@/components/ui/Button';
import { CheckIcon } from '@/components/ui/Icons';
import styles from './page.module.css';

const MIN_TOPICS = 2;

export default function OnboardingPage() {
  const router = useRouter();
  const [selected, setSelected] = useState<Set<TopicId>>(new Set());
  const [step, setStep] = useState<'topics' | 'done'>('topics');

  const toggle = (id: TopicId) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleContinue = () => {
    if (selected.size < MIN_TOPICS) return;
    localStorage.setItem(
      STORAGE_KEYS.USER_TOPICS,
      JSON.stringify([...selected]),
    );
    localStorage.setItem(STORAGE_KEYS.ONBOARDING_DONE, 'true');
    setStep('done');
    setTimeout(() => router.push(ROUTES.FEED), 800);
  };

  if (step === 'done') {
    return (
      <main className={styles.donePage}>
        <span className={styles.doneEmoji}>✅</span>
        <p className={styles.doneText}>Building your brief…</p>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <div className={styles.header}>
        <span className={styles.logo}>BriefWorld</span>
        <h1 className={styles.title}>What do you care about?</h1>
        <p className={styles.subtitle}>
          Pick at least {MIN_TOPICS} topics. We&apos;ll personalise your feed
          every day.
        </p>
      </div>

      <div className={styles.grid}>
        {ONBOARDING_TOPICS.map((topic) => {
          const isSelected = selected.has(topic.id);
          return (
            <button
              key={topic.id}
              type="button"
              onClick={() => toggle(topic.id)}
              aria-pressed={isSelected}
              className={[
                styles.topicCard,
                isSelected ? styles.topicCardSelected : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {isSelected && (
                <span className={styles.check}>
                  <CheckIcon size={12} />
                </span>
              )}
              <span className={styles.topicEmoji}>{topic.emoji}</span>
              <span className={styles.topicLabel}>{topic.label}</span>
              <span className={styles.topicDesc}>{topic.description}</span>
            </button>
          );
        })}
      </div>

      <div className={styles.footer}>
        <p className={styles.footerCount}>
          {selected.size === 0
            ? `Pick at least ${MIN_TOPICS}`
            : `${selected.size} selected`}
        </p>
        <Button
          size="lg"
          fullWidth
          disabled={selected.size < MIN_TOPICS}
          onClick={handleContinue}
        >
          Build my brief →
        </Button>
      </div>
    </main>
  );
}
