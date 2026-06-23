'use client';

import { useEffect } from 'react';

export function SetBuyerCookie({ product }: { product: string }) {
  useEffect(() => {
    if (product === 'audiobook' || product === 'audiobook-hot' || product === 'audiobook-72h') {
      // 10-day window — matches BUYER_WINDOW in 12-izmerenia/promo-price.tsx
      // (the €97 course promo expires right after the buyer's last email).
      document.cookie = `audiobook_buyer=${Date.now()};path=/;max-age=${60 * 60 * 24 * 10}`;
    }
  }, [product]);

  return null;
}
