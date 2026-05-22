'use client';

import { useEffect } from 'react';
import { trackPurchase } from '@/app/pixel';

interface Props {
  value: number;
  currency?: string;
}

export function TrackPurchase({ value, currency = 'EUR' }: Props) {
  useEffect(() => {
    // No-op if value is missing or invalid (don't fire bogus events).
    if (!Number.isFinite(value) || value <= 0) return;
    trackPurchase(value, currency);
  }, [value, currency]);
  return null;
}
