// ============================================================
// GET /api/news — returns personalised feed stories
// Query params: topic, page, limit
// ============================================================

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { MOCK_STORIES } from '@/lib/mockData';
import { PAGINATION } from '@/constants';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const topic = searchParams.get('topic') ?? 'all';
    const page = parseInt(searchParams.get('page') ?? '1', 10);
    const limit = parseInt(
      searchParams.get('limit') ?? String(PAGINATION.FEED_PAGE_SIZE),
      10,
    );

    // TODO: replace with real MongoDB query + Redis cache check
    const allStories =
      topic === 'all'
        ? MOCK_STORIES
        : MOCK_STORIES.filter((s) => s.topic === topic);

    const start = (page - 1) * limit;
    const stories = allStories.slice(start, start + limit);
    const hasMore = start + limit < allStories.length;

    return NextResponse.json(
      { stories, hasMore, page, total: allStories.length },
      {
        status: 200,
        headers: {
          'Cache-Control': 's-maxage=900, stale-while-revalidate=1800',
        },
      },
    );
  } catch (error) {
    console.error('[GET /api/news]', error);
    return NextResponse.json(
      { error: 'Failed to fetch news' },
      { status: 500 },
    );
  }
}
