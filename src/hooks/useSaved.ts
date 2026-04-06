// ============================================================
// useSaved — manages saved/bookmarked stories
// Uses localStorage for instant feedback + syncs to API
// ============================================================

'use client';

import { useState, useEffect } from 'react';
import { STORAGE_KEYS } from '@/constants';
import { getLocalStorage, setLocalStorage } from '@/lib/utils';

export function useSaved() {
  const [savedIds, setSavedIds] = useState<string[]>(() =>
    getLocalStorage<string[]>(STORAGE_KEYS.USER_TOPICS, []),
  );

  useEffect(() => {
    setLocalStorage(STORAGE_KEYS.USER_TOPICS, savedIds);
    // TODO: sync to API in background
  }, [savedIds]);

  const isSaved = (storyId: string): boolean => savedIds.includes(storyId);

  const toggleSave = (storyId: string): void => {
    setSavedIds((prev) =>
      prev.includes(storyId)
        ? prev.filter((id) => id !== storyId)
        : [...prev, storyId],
    );
  };

  const save = (storyId: string): void => {
    setSavedIds((prev) =>
      prev.includes(storyId) ? prev : [...prev, storyId],
    );
  };

  const unsave = (storyId: string): void => {
    setSavedIds((prev) => prev.filter((id) => id !== storyId));
  };

  return { savedIds, isSaved, toggleSave, save, unsave };
}
