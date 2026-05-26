'use client';

import { useEffect } from 'react';

export function SetBuyerCookie({ product }: { product: string }) {
  useEffect(() => {
    if (product === 'audiobook' || product === 'audiobook-hot') {
      document.cookie = `audiobook_buyer=${Date.now()};path=/;max-age=${60 * 60 * 24 * 30}`;
    }
  }, [product]);

  return null;
}
