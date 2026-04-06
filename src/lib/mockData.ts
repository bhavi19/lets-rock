// ============================================================
// BRIEFWORLD — MOCK DATA
// Realistic placeholder stories for development & UI testing.
// Replace with real API calls once backend is ready.
// ============================================================

import type { Story } from '@/types';

export const MOCK_STORIES: Story[] = [
  {
    id: '1',
    slug: 'iran-kuwait-refinery-hormuz',
    headline: 'Iran drones hit Kuwait refinery — world\'s most vital oil route nearly blocked',
    plainEnglish:
      'Iranian drones struck Kuwait\'s largest oil refinery this week. The Strait of Hormuz — a narrow sea passage — has nearly shut down, dropping ship traffic from 150 vessels per day to just 10–20. This one channel carries oil and gas for most of Asia and Africa.',
    rippleEffect: 'India imports 85% of its oil. If Hormuz stays blocked, petrol prices could spike within 4–6 weeks.',
    rippleIcon: '🇮🇳',
    topic: 'war',
    badge: 'war',
    sourcesCount: 6,
    sources: [
      { name: 'Reuters', color: '#E8290B', url: 'https://reuters.com' },
      { name: 'BBC', color: '#1A1A8C', url: 'https://bbc.com' },
      { name: 'Al Jazeera', color: '#007A4D', url: 'https://aljazeera.com' },
    ],
    biasScore: 50,
    publishedAt: '2026-04-04T06:00:00Z',
    isBreaking: true,
    storyArc: [
      { date: 'Mar 1', label: 'US launches war against Iran' },
      { date: 'Mar 15', label: 'Iran blocks Strait of Hormuz' },
      { date: 'Apr 1', label: 'Israel invades Lebanon' },
      { date: 'Now', label: 'Kuwait, UAE refineries hit by drones', isCurrent: true },
    ],
    deepReadUrl: 'https://reuters.com',
  },
  {
    id: '2',
    slug: 'microsoft-10b-japan-ai',
    headline: 'Microsoft treats AI like a power grid — pours $10B into Japan',
    plainEnglish:
      'Microsoft will invest $10 billion in Japan over 3 years. The money goes toward AI and national cybersecurity infrastructure. Governments are now treating AI the same way they treat roads and power plants.',
    rippleEffect: 'Cloud and AI security jobs in Asia-Pacific are about to see a major boom. Good time to upskill.',
    rippleIcon: '💼',
    topic: 'tech',
    badge: 'tech',
    sourcesCount: 4,
    sources: [
      { name: 'Reuters', color: '#E8290B', url: 'https://reuters.com' },
      { name: 'The Guardian', color: '#005689', url: 'https://theguardian.com' },
    ],
    biasScore: 52,
    publishedAt: '2026-04-04T04:30:00Z',
    deepReadUrl: 'https://theguardian.com',
  },
  {
    id: '3',
    slug: 'pakistan-afghanistan-peace-china',
    headline: 'Pakistan and Afghanistan hold peace talks — with China as the referee',
    plainEnglish:
      'Pakistan and Afghanistan\'s Taliban government are officially talking peace, hosted by China. Both countries have had border clashes and terror attacks for years. China wants stability on its western border.',
    rippleEffect: 'A Pakistan–Afghanistan–China bloc on India\'s northwest border is a major shift in regional power balance.',
    rippleIcon: '🌏',
    topic: 'world',
    badge: 'world',
    sourcesCount: 3,
    sources: [
      { name: 'BBC', color: '#1A1A8C', url: 'https://bbc.com' },
      { name: 'Al Jazeera', color: '#007A4D', url: 'https://aljazeera.com' },
    ],
    biasScore: 45,
    publishedAt: '2026-04-04T03:00:00Z',
    deepReadUrl: 'https://bbc.com',
  },
  {
    id: '4',
    slug: 'us-jobs-report-april-2026',
    headline: 'US adds 178,000 jobs but mixed signals worry economists',
    plainEnglish:
      'America added more jobs than expected last month. But more people started looking for work, nudging unemployment slightly upward. Economy is growing — but people are anxious.',
    rippleEffect: 'A strong US job market keeps the dollar strong, which makes the Indian rupee weaker and imports more expensive.',
    rippleIcon: '💰',
    topic: 'economy',
    badge: 'economy',
    sourcesCount: 5,
    sources: [
      { name: 'Reuters', color: '#E8290B', url: 'https://reuters.com' },
      { name: 'NPR', color: '#4287C8', url: 'https://npr.org' },
    ],
    biasScore: 48,
    publishedAt: '2026-04-03T22:00:00Z',
    deepReadUrl: 'https://reuters.com',
  },
  {
    id: '5',
    slug: 'trump-defense-budget-15-trillion',
    headline: 'Trump requests $1.5 trillion defence budget — largest in US history',
    plainEnglish:
      'President Trump asked Congress for the biggest defence spending package in American history. This comes while the US is actively at war with Iran. Critics say it will balloon the national debt.',
    rippleEffect: 'Higher US defence spending usually pushes global oil prices and defence stocks upward — affects India\'s import bill.',
    rippleIcon: '🏛️',
    topic: 'politics',
    badge: 'politics',
    sourcesCount: 7,
    sources: [
      { name: 'NPR', color: '#4287C8', url: 'https://npr.org' },
      { name: 'BBC', color: '#1A1A8C', url: 'https://bbc.com' },
      { name: 'Reuters', color: '#E8290B', url: 'https://reuters.com' },
    ],
    biasScore: 38,
    publishedAt: '2026-04-03T18:00:00Z',
    deepReadUrl: 'https://npr.org',
  },
];

export const MOCK_BREAKING_STORY = MOCK_STORIES[0];
