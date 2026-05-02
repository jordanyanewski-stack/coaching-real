# Payment + Email Integration Plan
## myPOS + MailerLite + Neon (Postgres) + Next.js 16

**Goal:** Connect masterclass landing page (`/masterclass`) to myPOS payment, Neon Postgres order tracking, and MailerLite email automation.

---

## Architecture

```
User fills form (/masterclass)
  → POST /api/checkout/create
    → Neon: insert order (status=pending)
    → MailerLite: add to pending-buyers group
    → Returns auto-submit HTML form → redirects to myPOS
  → User pays on myPOS hosted page
    → myPOS POSTs to /api/mypos/notify (webhook)
      → Verify signature
      → Neon: update order status=paid
      → MailerLite: move to paid-buyers group (triggers email automation)
    → myPOS redirects user to /thank-you (or /payment-cancelled)
```

---

## Phase 1: External accounts & credentials

### Neon (via Vercel Marketplace)
- [ ] In Vercel dashboard → Storage → Browse Marketplace → find Neon
- [ ] Create Neon Postgres database, link it to this project
- [ ] Vercel auto-injects `DATABASE_URL` (pooled) + `DATABASE_URL_UNPOOLED` into env vars
- [ ] Pull env vars locally: `vercel env pull .env.local`
- [ ] Run SQL to create `orders` table:
  ```sql
  CREATE TABLE orders (
    id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    email       text NOT NULL,
    name        text NOT NULL,
    amount      numeric(10,2) NOT NULL,
    currency    text NOT NULL DEFAULT 'EUR',
    status      text NOT NULL DEFAULT 'pending',
    mypos_order_id text UNIQUE NOT NULL,
    mypos_transaction_id text,
    created_at  timestamptz DEFAULT now(),
    updated_at  timestamptz DEFAULT now()
  );
  ```
  Run via Neon SQL editor in dashboard, or `psql $DATABASE_URL_UNPOOLED`

### myPOS
- [ ] Log into myPOS dashboard
- [ ] Stores → eCommerce → Add Store
- [ ] Domain: `coachingreallive.com`
- [ ] Currencies: enable EUR (and BGN if needed)
- [ ] Choose: Персонализирана интеграция (Custom API)
- [ ] Generate Configuration Pack → save the base64 string
- [ ] Decode it (it's JSON) — extract: `sid`, `wallet`, `keyIndex`, `privateKey`, `apiPublicKey`, `ipcUrl`
- [ ] Submit store for verification (up to 5 business days)
- [ ] While waiting: use sandbox URL `https://www.mypos.com/vmp/checkout-test` with test keys

### MailerLite (already have account)
- [ ] Create group: `pending-buyers` → save group ID
- [ ] Create group: `paid-buyers` → save group ID
- [ ] Create automation on `paid-buyers`:
  - Trigger: "Subscriber joins group"
  - Email: event details (date, time, Zoom link, materials)
- [ ] Integrations → Developer API → generate API key

---

## Phase 2: Project setup

- [ ] Install dependencies:
  ```bash
  npm install @neondatabase/serverless
  ```
- [ ] `.env.local` template (Neon vars come from `vercel env pull`, add the rest manually):
  ```
  # Neon (auto-injected by Vercel after linking — pull with: vercel env pull .env.local)
  DATABASE_URL=
  DATABASE_URL_UNPOOLED=

  # myPOS
  MYPOS_IPC_URL=https://www.mypos.com/vmp/checkout-test
  MYPOS_SID=
  MYPOS_WALLET=
  MYPOS_KEY_INDEX=
  MYPOS_PRIVATE_KEY=
  MYPOS_API_PUBLIC_KEY=

  # MailerLite
  MAILERLITE_API_KEY=
  MAILERLITE_PENDING_GROUP_ID=
  MAILERLITE_PAID_GROUP_ID=

  # App
  NEXT_PUBLIC_SITE_URL=http://localhost:3000
  PRODUCT_NAME=12 Masterclass
  PRODUCT_PRICE=67.00
  PRODUCT_CURRENCY=EUR
  ```
- [ ] Verify `.env.local` is in `.gitignore`

---

## Phase 3: Code files to create

### Library files
- [ ] `src/lib/db.ts` — Neon serverless client (uses `DATABASE_URL`)
- [ ] `src/lib/mailerlite.ts` — `addToPending()` + `moveToPaid()`
- [ ] `src/lib/mypos.ts` — `buildPurchaseParams()` + `verifyNotify()` + signature logic

### API routes
- [ ] `src/app/api/checkout/create/route.ts` — creates order in Neon, adds to MailerLite pending, redirects to myPOS
- [ ] `src/app/api/mypos/notify/route.ts` — webhook: validates signature, updates Neon, moves MailerLite group, returns "OK"

### Pages
- [ ] Modify `/masterclass` page — add name/email form that submits to checkout API
- [ ] `src/app/thank-you/page.tsx` — success page with event details
- [ ] `src/app/payment-cancelled/page.tsx` — cancel/retry page

---

## Phase 4: Local testing with ngrok

- [ ] Install ngrok: `brew install ngrok`
- [ ] Run dev server: `npm run dev`
- [ ] Second terminal: `ngrok http 3000`
- [ ] Copy HTTPS URL (e.g. `https://abc123.ngrok-free.app`)
- [ ] Set `NEXT_PUBLIC_SITE_URL` in `.env.local` to ngrok URL, restart dev server
- [ ] Test full flow with myPOS sandbox + test card from myPOS docs

---

## Phase 5: Deploy to Vercel

- [ ] Push code to GitHub
- [ ] `NEXT_PUBLIC_SITE_URL=https://coachingreallive.com` — add to Vercel env vars
- [ ] `MYPOS_IPC_URL=https://www.mypos.com/vmp/checkout` (production) — add to Vercel env vars
- [ ] Add all other non-Neon env vars to Vercel (Neon vars are already there from marketplace link)
- [ ] Deploy

---

## Phase 6: End-to-end production test

- [ ] Set `PRODUCT_PRICE=1.00` for testing
- [ ] Visit `/masterclass` → submit form → pay 1 EUR
- [ ] Check Neon: order row with `status='paid'` in SQL editor
- [ ] Check MailerLite: subscriber in `paid-buyers`, automation email received
- [ ] Test cancel: verify redirect to `/payment-cancelled`, status stays `pending`
- [ ] Refund the 1 EUR in myPOS dashboard

---

## Phase 7: Switch to real product

- [ ] `PRODUCT_PRICE=67.00`, `PRODUCT_NAME=12 Masterclass`
- [ ] Update `/masterclass` copy with real event details
- [ ] Update `/thank-you` with real Zoom link, date, time
- [ ] Update MailerLite automation email
- [ ] Redeploy

---

## Critical rules (read before writing any code)

- The myPOS notify webhook MUST respond with literal `OK` + HTTP 200, or payments fail
- All myPOS API routes must set `export const runtime = 'nodejs'` (needs crypto module)
- Signature validation on notify webhook is non-negotiable — never trust unsigned requests
- Customer email is collected BEFORE payment — stored in Neon + MailerLite pending group
- Subscriber only moves to `paid-buyers` via webhook, never via client-side redirect
- The thank-you page is informational only — webhook is the source of truth for payment status
- This is Next.js 16 — use `proxy.ts` not `middleware.ts` for middleware
- Use `DATABASE_URL` (pooled) for API routes, `DATABASE_URL_UNPOOLED` for migrations/schema
