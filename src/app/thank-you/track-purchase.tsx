'use client';

import { useEffect } from 'react';
import { trackPurchase } from '@/app/pixel';

export function TrackPurchase() {
  useEffect(() => {
    trackPurchase(67);
  }, []);
  return null;
}
