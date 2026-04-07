// ============================================================
// useUser — manages current user state
// ============================================================

'use client';

import { useState, useEffect } from 'react';
import type { User } from '@/types';
import { STORAGE_KEYS, MOCK_USER } from '@/constants';
import { getLocalStorage } from '@/lib/utils';

interface UseUserReturn {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  signOut: () => void;
}

export function useUser(): UseUserReturn {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO: validate JWT from localStorage against /api/user
    const token = getLocalStorage<string | null>(STORAGE_KEYS.USER_TOKEN, null);

    if (token) {
      // Mock: return mock user when token exists
      setUser({
        id: '1',
        name: MOCK_USER.name,
        email: MOCK_USER.email,
        avatar: null,
        topics: [...MOCK_USER.topics],
        isPremium: false,
        createdAt: new Date().toISOString(),
      });
    }

    setIsLoading(false);
  }, []);

  const signOut = () => {
    Object.values(STORAGE_KEYS).forEach((key) =>
      localStorage.removeItem(key),
    );
    setUser(null);
    window.location.href = '/';
  };

  return {
    user,
    isLoading,
    isAuthenticated: user !== null,
    signOut,
  };
}
