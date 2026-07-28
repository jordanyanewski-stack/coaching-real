# Clerk Auth — Setup Steps

The code is wired up but needs three things you do manually to go live:

1. Install Clerk as a Vercel Marketplace integration (provisions env vars)
2. Run the DB migration on Neon
3. Configure the Clerk webhook URL

---

## 1. Install Clerk via Vercel Marketplace

Open: https://vercel.com/marketplace/clerk → click **Add Integration** → pick the `coaching-real` project (production).

Clerk auto-provisions these env vars into Vercel for you:

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `NEXT_PUBLIC_CLERK_SIGN_IN_URL` (set to `/sign-in`)
- `NEXT_PUBLIC_CLERK_SIGN_UP_URL` (set to `/sign-up`)
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL` (set to `/dashboard`)
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL` (set to `/dashboard`)

In Vercel **Settings → Environment Variables**, verify those are set for **Production** AND **Preview** AND **Development**. If any sign-in/sign-up/after-* URL is missing, add it with the value above.

Then pull them locally:

```bash
cd "/home/yordan/work/coaching-real"
vercel env pull .env.local
```

## 2. Run the DB migration on Neon

The Clerk webhook needs the `user_id` column on the `orders` table:

```bash
cd "/home/yordan/work/coaching-real"
# Source the unpooled URL for DDL
source <(grep -E '^DATABASE_URL_UNPOOLED=' .env.local | sed 's/^/export /')
psql "$DATABASE_URL_UNPOOLED" -f migrations/001-add-user-id-to-orders.sql
```

(Or paste the SQL into the Neon SQL Editor in the dashboard if you prefer.)

## 3. Configure the Clerk webhook

In the Clerk Dashboard:

1. Open the **coaching-real** application
2. **Configure → Webhooks → Add Endpoint**
3. Endpoint URL: `https://coachingreallive.com/api/clerk/webhook`
4. Subscribe to events: `user.created` and `user.updated`
5. Click **Create**
6. On the created endpoint's page, copy the **Signing Secret** (starts with `whsec_…`)
7. Add it to Vercel **Settings → Environment Variables**:
   - Name: `CLERK_WEBHOOK_SIGNING_SECRET`
   - Value: the `whsec_…` value
   - Environments: Production (+ Preview + Development if you want webhooks to fire in those too)
8. Pull again locally:
   ```bash
   vercel env pull .env.local
   ```

## 4. Localize the sender email (one-time, optional)

Clerk's default invitation + password-reset emails are in English. In the Clerk dashboard:

- **Customization → Emails** → set Bulgarian copy for each template
- **Customization → Languages** → confirm `bg` is enabled

(The UI strings on `/sign-in` and `/sign-up` are already Bulgarian via the `bgBG` localization bundle wired into `ClerkProvider`.)

## 5. Test the full flow

Locally:

```bash
npm run dev
```

Then in the browser:

1. Go to http://localhost:3000 — header should show **Вход**
2. Click **Вход** → register with a test email
3. After registration → redirected to `/dashboard`
4. **Моите покупки** table should be empty (or show the orders for that email if one already exists in DB)
5. Sign out via the avatar dropdown in the header
6. Sign in again → should land on `/dashboard`

To test the backfill end-to-end:

1. Insert a fake `orders` row with `status='paid'` and `email='your-test@example.com'`
2. Register a new Clerk user with the same email
3. After registration completes, the `user.created` webhook will fire (in production — not localhost unless you set up `ngrok`/`cloudflared`)
4. Refresh `/dashboard` — the order should appear

For local webhook testing, install the Clerk CLI:
```bash
npm install -g @clerk/clerk-cli
clerk webhook listen --endpoint http://localhost:3000/api/clerk/webhook
```

## 6. Deploy

Once steps 1-3 are complete and you've smoke-tested:

```bash
git add .
git commit -m "feat: add Clerk auth + dashboard"
git push
```

Vercel will redeploy. Verify on production:

- https://coachingreallive.com/sign-up — register
- https://coachingreallive.com/dashboard — should load

## What's NOT covered yet (v2 candidates)

- Bank-transfer paid confirmations don't auto-invite (only MyPOS does, since only MyPOS has automated paid status)
- No gated audiobook/course content delivery yet — `/dashboard` shows the placeholder "Скоро тук: ..." block for now
- No password-reset email customization (Clerk's default works in BG)
- No purchase → product mapping (currently shows raw MyPOS order ID; need a `product` column on `orders` to show "Аудиокнига" etc.)
