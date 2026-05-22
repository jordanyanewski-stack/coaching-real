-- Add Clerk user_id to orders so a single user can see all their past purchases.
-- Email stays the canonical link for guest checkout; user_id gets backfilled
-- via the Clerk user.created webhook (see src/app/api/clerk/webhook/route.ts).

ALTER TABLE orders
  ADD COLUMN IF NOT EXISTS user_id text;

CREATE INDEX IF NOT EXISTS orders_user_id_idx ON orders (user_id);
CREATE INDEX IF NOT EXISTS orders_email_idx ON orders (lower(email));
