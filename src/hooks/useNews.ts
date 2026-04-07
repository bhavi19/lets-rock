// ============================================================
// useNews — fetches and manages news feed state
// ============================================================

'use client';

import { useState, useEffect, useCallback } from 'react';
import type { Story } from '@/types';
import type { TopicId } from '@/constants';
import { API_ROUTES, PAGINATION } from '@/constants';

interface UseNewsReturn {
  stories: Story[];
  isLoading: boolean;
  isError: boolean;
  hasMore: boolean;
  loadMore: () => void;
  refresh: () => void;
}

export function useNews(topic: TopicId = 'all'): UseNewsReturn {
  const [stories, setStories] = useState<Story[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchStories = useCallback(
    async (currentPage: number, reset = false) => {
      setIsLoading(true);
      setIsError(false);

      try {
        const params = new URLSearchParams({
          topic,
          page: String(currentPage),
          limit: String(PAGINATION.FEED_PAGE_SIZE),
        });

        const res = await fetch(`${API_ROUTES.NEWS}?${params}`);
        if (!res.ok) throw new Error('Network response was not ok');

        const data = await res.json();

        setStories((prev) =>
          reset ? data.stories : [...prev, ...data.stories],
        );
        setHasMore(data.hasMore);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    },
    [topic],
  );

  // Reset and refetch when topic changes
  useEffect(() => {
    setPage(1);
    setStories([]);
    fetchStories(1, true);
  }, [topic, fetchStories]);

  const loadMore = useCallback(() => {
    if (isLoading || !hasMore) return;
    const nextPage = page + 1;
    setPage(nextPage);
    fetchStories(nextPage);
  }, [isLoading, hasMore, page, fetchStories]);

  const refresh = useCallback(() => {
    setPage(1);
    fetchStories(1, true);
  }, [fetchStories]);

  return { stories, isLoading, isError, hasMore, loadMore, refresh };
}
