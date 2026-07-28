<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Coaching Real

Bulgarian coaching, course, funnel, content, and member platform for Stanislava Pavlova. Production domain: `coachingreallive.com`. Next.js App Router on Vercel with Clerk, Postgres, myPOS, Stripe, MailerLite, Resend, Bunny media, admin tools, and Meta Pixel flows.

## Context first

- Current agenda: `/mnt/c/Users/User/Documents/LifeOS/Now.md`
- Project hub: `/mnt/c/Users/User/Documents/LifeOS/01-Projects/Coaching-Real-Launch/Coaching-Real.md`
- Brand context: `/mnt/c/Users/User/Documents/LifeOS/01-Projects/Coaching-Real-Launch/Coaching-Real-Brand.md`
- Funnel documentation and incident reports live beside the hub.

`Now.md` wins when an older hub section conflicts with a newer dated decision. Preserve historical campaign facts rather than silently rewriting them.

## Commands

```bash
npm run dev
npm run lint
npm test
npm run build
```

The development command intentionally uses Webpack. Read relevant Next.js documentation from `node_modules/next/dist/docs/` before relying on remembered APIs.

## Structure

- `src/app/` — landing pages, member/admin routes, checkout and webhook endpoints.
- `src/components/` — shared interface and funnel components.
- `src/lib/` — products, payments, MailerLite, database, auth, and other integrations.
- Treat the product registry and existing page patterns as sources of truth; extend them instead of creating parallel systems.

## Safety

- Payment, entitlement, webhook, email, and Pixel behavior are one connected flow. Trace the full path before changing any step.
- Never bulk-mutate Stripe objects. Use known account-specific IDs and snapshot the current object first.
- Keep Bulgarian and UK Stripe accounts separate.
- Never expose environment values or paste secrets into markdown, source, chat, or logs.
- Avoid SDK initialization at module load when missing build-time environment values would crash Vercel builds.
- Use `printf` semantics when setting environment variables; trailing newlines have previously broken authentication.
- Preserve bank-transfer and myPOS behavior when editing shared checkout code.
- Do not send test email to real lists or trigger real purchases without explicit approval.

## Copy and design

- Customer-facing copy is Bulgarian: natural language, minimal anglicisms, and the project's established `ти`/gender register.
- Avoid fabricated outcomes, testimonials, scarcity, or personal advertising-spend claims.
- Maintain ad-to-page message continuity.
- Preserve established landing-page visual systems. Important Bulgarian headings and dates must be checked at desktop and mobile widths.

## Verification

Run checks proportional to the change. For shared integration or production-flow changes, require lint, tests, build, and a targeted browser flow. Verify at 1440px and 390px for meaningful UI work, check console errors, and inspect actual interaction states.

Deployment is via `main` to Vercel. Do not push or deploy unless requested. When deployment is requested, use production, verify the final domain, and record the verified result in LifeOS.
