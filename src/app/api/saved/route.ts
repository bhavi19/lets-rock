// ============================================================
// GET  /api/saved — get user's saved stories
// POST /api/saved — save a story
// DELETE /api/saved — remove a saved story
// ============================================================

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { MOCK_STORIES } from '@/lib/mockData';

export async function GET(_request: NextRequest) {
  try {
    // TODO: query PostgreSQL for saved story IDs, then fetch from MongoDB
    const saved = MOCK_STORIES.slice(0, 2);
    return NextResponse.json({ stories: saved }, { status: 200 });
  } catch (error) {
    console.error('[GET /api/saved]', error);
    return NextResponse.json(
      { error: 'Failed to fetch saved stories' },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { storyId } = body;

    if (!storyId) {
      return NextResponse.json(
        { error: 'storyId is required' },
        { status: 400 },
      );
    }

    // TODO: save storyId + userId to PostgreSQL
    return NextResponse.json(
      { message: 'Story saved', storyId },
      { status: 201 },
    );
  } catch (error) {
    console.error('[POST /api/saved]', error);
    return NextResponse.json(
      { error: 'Failed to save story' },
      { status: 500 },
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json();
    const { storyId } = body;

    if (!storyId) {
      return NextResponse.json(
        { error: 'storyId is required' },
        { status: 400 },
      );
    }

    // TODO: delete from PostgreSQL
    return NextResponse.json(
      { message: 'Story removed', storyId },
      { status: 200 },
    );
  } catch (error) {
    console.error('[DELETE /api/saved]', error);
    return NextResponse.json(
      { error: 'Failed to remove story' },
      { status: 500 },
    );
  }
}
