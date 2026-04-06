// ============================================================
// BRIEFWORLD — TYPE DEFINITIONS
// Shared types used across the entire application.
// ============================================================

import type { TopicId, BadgeVariant } from '@/constants';

// ── News & Stories ────────────────────────────────────────
export interface ArcStep {
  date: string;
  label: string;
  isCurrent?: boolean;
}

export interface NewsSource {
  name: string;
  color: string;
  url: string;
}

export interface Story {
  id: string;
  headline: string;
  plainEnglish: string;
  rippleEffect: string;
  rippleIcon: string;
  topic: TopicId;
  badge: BadgeVariant;
  sourcesCount: number;
  sources: NewsSource[];
  biasScore: number; // 0 (left) to 100 (right), 50 = center
  publishedAt: string;
  isBreaking?: boolean;
  storyArc?: ArcStep[];
  deepReadUrl?: string;
  imageUrl?: string;
  slug: string;
}

export interface FeedResponse {
  stories: Story[];
  hasMore: boolean;
  page: number;
}

// ── User ──────────────────────────────────────────────────
export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string | null;
  topics: TopicId[];
  isPremium: boolean;
  createdAt: string;
}

export interface UserPreferences {
  topics: TopicId[];
  language: 'en' | 'hi';
  notifications: boolean;
  darkMode: boolean;
}

// ── Auth ──────────────────────────────────────────────────
export interface AuthPayload {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

// ── UI State ──────────────────────────────────────────────
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export interface ApiError {
  message: string;
  code?: string;
  status?: number;
}

// ── Navigation ────────────────────────────────────────────
export interface NavItem {
  id: string;
  label: string;
  route: string;
  icon: string;
}

// ── Topic ─────────────────────────────────────────────────
export interface Topic {
  id: TopicId;
  label: string;
  emoji: string;
  description?: string;
}

// ── Component Props ───────────────────────────────────────
export interface BaseProps {
  className?: string;
}
