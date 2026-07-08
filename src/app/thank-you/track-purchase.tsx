'use client';

import { useEffect } from 'react';
import { trackPurchase } from '@/app/pixel';

interface Props {
  value: number;
  currency?: string;
  /** myPOS order id — Meta dedup key, so reloads never double-count. */
  eventId?: string;
}

export function TrackPurchase({ value, currency = 'EUR', eventId }: Props) {
  useEffect(() => {
    // No-op if value is missing or invalid (don't fire bogus events).
    if (!Number.isFinite(value) || value <= 0) return;
    trackPurchase(value, currency, eventId);
  }, [value, currency, eventId]);
  return null;
}
