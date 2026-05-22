-- Multi-product checkout. Until now every order was implicitly a masterclass
-- purchase; backfill existing rows as such and require new rows to declare
-- which product was bought so the webhook can route MailerLite/Clerk
-- side-effects to the right group.

ALTER TABLE orders
  ADD COLUMN IF NOT EXISTS product VARCHAR(32) NOT NULL DEFAULT 'masterclass';

CREATE INDEX IF NOT EXISTS orders_product_idx ON orders (product);
