'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// The myPOS URL_OK redirect can land the buyer here BEFORE the webhook flips
// the order to 'paid' — in that render the Purchase pixel is (correctly) not
// fired. Poll the order status and refresh the server component once it goes
// paid, so TrackPurchase + SetBuyerCookie activate through the normal path.
export function PendingPaymentWatcher({ orderId }: { orderId: string }) {
  const router = useRouter();

  useEffect(() => {
    let attempts = 0;
    const timer = setInterval(async () => {
      attempts += 1;
      if (attempts > 20) {
        clearInterval(timer); // give up after ~60s — webhook is genuinely late
        return;
      }
      try {
        const res = await fetch(`/api/orders/status?order=${encodeURIComponent(orderId)}`);
        const data = (await res.json()) as { status?: string };
        if (data.status === 'paid') {
          clearInterval(timer);
          router.refresh();
        }
      } catch {
        // transient network error — keep polling
      }
    }, 3000);
    return () => clearInterval(timer);
  }, [orderId, router]);

  return null;
}
