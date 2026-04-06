/* ============================================================
   BRIEFWORLD — CONSTANTS
   All static config, labels, routes, and enums in one place.
   Never hardcode these values in components.
   ============================================================ */

// ── App Meta ──────────────────────────────────────────────
export const APP_NAME = 'BriefWorld' as const;
export const APP_TAGLINE = 'News that matters. Context that counts.' as const;
export const APP_DESCRIPTION =
  'AI-powered personalised news digest. Understand what happened, why it matters, and how it affects you — in 5 minutes.' as const;
export const APP_URL = 'https://briefworld.in' as const;

// ── Routes ────────────────────────────────────────────────
export const ROUTES = {
  HOME: '/',
  FEED: '/feed',
  ONBOARDING: '/onboarding',
  SAVED: '/saved',
  TOPICS: '/topics',
  PROFILE: '/profile',
  STORY: '/story',
  SIGNIN: '/auth/signin',
  SIGNUP: '/auth/signup',
} as const;

// ── API Routes ────────────────────────────────────────────
export const API_ROUTES = {
  NEWS: '/api/news',
  NEWS_BY_TOPIC: '/api/news/topic',
  USER: '/api/user',
  USER_PREFERENCES: '/api/user/preferences',
  AUTH_SIGNIN: '/api/auth/signin',
  AUTH_SIGNUP: '/api/auth/signup',
  SAVED: '/api/saved',
  TOPICS: '/api/topics',
} as const;

// ── Topics ────────────────────────────────────────────────
export const TOPICS = [
  { id: 'all', label: 'All', emoji: '🌐' },
  { id: 'world', label: 'World', emoji: '🌍' },
  { id: 'india', label: 'India', emoji: '🇮🇳' },
  { id: 'tech', label: 'Tech', emoji: '💻' },
  { id: 'economy', label: 'Economy', emoji: '📈' },
  { id: 'politics', label: 'Politics', emoji: '🏛️' },
  { id: 'sports', label: 'Sports', emoji: '🏏' },
  { id: 'health', label: 'Health', emoji: '🏥' },
  { id: 'science', label: 'Science', emoji: '🔬' },
  { id: 'war', label: 'War & Conflict', emoji: '⚠️' },
] as const;

export type TopicId = (typeof TOPICS)[number]['id'];

// ── Badge Variants ────────────────────────────────────────
export const BADGE_VARIANTS = {
  war: 'war',
  tech: 'tech',
  world: 'world',
  economy: 'economy',
  politics: 'politics',
  sports: 'sports',
  health: 'health',
  science: 'science',
  india: 'world',
  all: 'world',
} as const;

export type BadgeVariant = keyof typeof BADGE_VARIANTS;

// ── Nav Items ─────────────────────────────────────────────
export const NAV_ITEMS = [
  { id: 'feed', label: 'Feed', route: ROUTES.FEED, icon: 'newspaper' },
  { id: 'saved', label: 'Saved', route: ROUTES.SAVED, icon: 'bookmark' },
  { id: 'topics', label: 'Topics', route: ROUTES.TOPICS, icon: 'grid' },
  { id: 'profile', label: 'Profile', route: ROUTES.PROFILE, icon: 'user' },
] as const;

// ── Onboarding Topics (for selection screen) ──────────────
export const ONBOARDING_TOPICS = [
  { id: 'world', label: 'World News', emoji: '🌍', description: 'Global events, diplomacy, international affairs' },
  { id: 'india', label: 'India', emoji: '🇮🇳', description: 'Politics, economy, and society in India' },
  { id: 'tech', label: 'Technology', emoji: '💻', description: 'AI, startups, gadgets, and digital trends' },
  { id: 'economy', label: 'Economy', emoji: '📈', description: 'Markets, finance, and business news' },
  { id: 'politics', label: 'Politics', emoji: '🏛️', description: 'Elections, policy, and governance' },
  { id: 'war', label: 'War & Conflict', emoji: '⚠️', description: 'Geopolitics, conflicts, and peace talks' },
  { id: 'sports', label: 'Sports', emoji: '🏏', description: 'Cricket, football, Olympics and more' },
  { id: 'health', label: 'Health', emoji: '🏥', description: 'Medical breakthroughs and public health' },
  { id: 'science', label: 'Science', emoji: '🔬', description: 'Space, environment, and discoveries' },
] as const;

// ── Read Time Labels ──────────────────────────────────────
export const READ_TIME = {
  SHORT: '2 min read',
  MEDIUM: '4 min read',
  LONG: '7 min read',
  BRIEF: '~5 min brief',
} as const;

// ── Bias Meter Labels ─────────────────────────────────────
export const BIAS_LABELS = {
  LEFT: 'L',
  RIGHT: 'R',
  CENTER: 'C',
} as const;

// ── Pagination ────────────────────────────────────────────
export const PAGINATION = {
  FEED_PAGE_SIZE: 10,
  SAVED_PAGE_SIZE: 20,
} as const;

// ── Local Storage Keys ────────────────────────────────────
export const STORAGE_KEYS = {
  USER_TOPICS: 'bw_user_topics',
  USER_TOKEN: 'bw_auth_token',
  THEME: 'bw_theme',
  ONBOARDING_DONE: 'bw_onboarding_done',
} as const;

// ── Pricing ───────────────────────────────────────────────
export const PRICING = {
  FREE_STORIES_PER_DAY: 5,
  PREMIUM_MONTHLY_INR: 99,
  PREMIUM_YEARLY_INR: 799,
} as const;

// ── Error Messages ────────────────────────────────────────
export const ERROR_MESSAGES = {
  GENERIC: 'Something went wrong. Please try again.',
  NETWORK: 'No internet connection. Please check your network.',
  NOT_FOUND: 'This story could not be found.',
  AUTH_REQUIRED: 'Please sign in to continue.',
} as const;

// ── Placeholder / Mock ────────────────────────────────────
export const MOCK_USER = {
  name: 'Rahul',
  email: 'rahul@example.com',
  avatar: null,
  topics: ['world', 'india', 'tech'],
} as const;
