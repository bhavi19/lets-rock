// ============================================================
// GET /api/user/preferences — get user topic preferences
// PUT /api/user/preferences — update user topic preferences
// ============================================================

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(_request: NextRequest) {
  try {
    // TODO: get userId from session/JWT, query Supabase/PostgreSQL
    const preferences = {
      topics: ['world', 'india', 'tech'],
      language: 'en',
      notifications: true,
      darkMode: false,
    };

    return NextResponse.json({ preferences }, { status: 200 });
  } catch (error) {
    console.error('[GET /api/user/preferences]', error);
    return NextResponse.json(
      { error: 'Failed to fetch preferences' },
      { status: 500 },
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { topics } = body;

    if (!Array.isArray(topics) || topics.length < 1) {
      return NextResponse.json(
        { error: 'At least one topic is required' },
        { status: 400 },
      );
    }

    // TODO: update preferences in Supabase/PostgreSQL

    return NextResponse.json(
      { message: 'Preferences updated', topics },
      { status: 200 },
    );
  } catch (error) {
    console.error('[PUT /api/user/preferences]', error);
    return NextResponse.json(
      { error: 'Failed to update preferences' },
      { status: 500 },
    );
  }
}
