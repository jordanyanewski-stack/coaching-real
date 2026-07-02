/**
 * Source of truth for every purchasable product on coachingreallive.com.
 *
 * Adding a product is a 4-step change:
 *   1. Add an entry below + set its MailerLite paid + pending group env vars on Vercel.
 *   2. Run a DB migration if the new product needs extra columns (rare).
 *   3. Render `<EnrollForm product="<slug>" />` on the product page.
 *   4. Add a `copyFor()` case in `src/app/thank-you/page.tsx` — otherwise the
 *      post-payment page falls through to the masterclass default (May Viber
 *      group + `/masterclass` back-link), which is wrong for a new product.
 *
 * The checkout API and MyPOS webhook are product-agnostic — they look
 * everything up here.
 */

import { cleanEnv } from '@/lib/validators';

export type ProductSlug = 'masterclass' | 'audiobook' | 'audiobook-hot' | 'audiobook-72h' | '12-izmerenia' | '12-izmerenia-promo' | 'career-course' | 'rodov-model' | 'zhiva' | 'biznes-dusha' | 'biznes-dusha-early' | 'biznes-dusha-day1' | 'izlez-ot-zastoy';

export interface Product {
  slug: ProductSlug;
  name: string;
  price: string;
  currency: 'EUR';
  supportsBankTransfer: boolean;
  bankTransfer: {
    referencePrefix: string;
    productLabel: string;
    nextStepCopy: string;
  };
  mlPaidGroupIdEnv: string;
  /** Env var name holding the MailerLite group ID for unpaid leads of this product. */
  mlPendingGroupIdEnv: string;
  /**
   * True ONLY for products that grant dashboard/login access (the audiobook,
   * streamed via /api/audiobook/stream after a gate check). When set, the myPOS
   * notify webhook sends a Clerk account invite to new buyers. Everything else —
   * live Zoom programs, email-delivered courses — omits it, so no account is
   * created. Default (undefined) = no invite.
   */
  requiresAccount?: boolean;
  /** Filename in Bunny storage. Streamed via /api/audiobook/stream after gate check. */
  bunnyFile?: string;
}

export const PRODUCTS: Record<ProductSlug, Product> = {
  masterclass: {
    slug: 'masterclass',
    name: '12 дни Мастъркласове',
    price: '67.00',
    currency: 'EUR',
    supportsBankTransfer: true,
    bankTransfer: {
      referencePrefix: '12 Мастъркласове',
      productLabel: '12 дни Мастъркласове (18–29 май 2026)',
      nextStepCopy:
        'Имейлът съдържа Zoom линка, програмата и инструкциите за първия мастърклас (18 май, 19:00 ч.).',
    },
    mlPaidGroupIdEnv: 'MAILERLITE_PAID_GROUP_ID',
    mlPendingGroupIdEnv: 'MAILERLITE_PENDING_GROUP_ID',
  },
  audiobook: {
    slug: 'audiobook',
    requiresAccount: true, // dashboard streaming — needs a Clerk account
    name: 'Аудиокнига Дигитален Успех',
    price: '25.00',
    currency: 'EUR',
    supportsBankTransfer: true,
    bankTransfer: {
      referencePrefix: 'Аудиокнига',
      productLabel: 'Аудиокнига: Дигитален Успех',
      nextStepCopy:
        'След потвърждението ще получиш достъп до аудиокнигата в профила си в coachingreallive.com/dashboard.',
    },
    mlPaidGroupIdEnv: 'MAILERLITE_AUDIOBOOK_PAID_GROUP_ID',
    mlPendingGroupIdEnv: 'MAILERLITE_AUDIOBOOK_PENDING_GROUP_ID',
    bunnyFile: 'stasi-audiobook.mp3',
  },
  '12-izmerenia': {
    slug: '12-izmerenia',
    name: '12 Измерения на твоята мисия',
    price: '197.00',
    currency: 'EUR',
    supportsBankTransfer: true,
    bankTransfer: {
      referencePrefix: '12 Измерения',
      productLabel: '12 Измерения на твоята мисия · онлайн курс',
      nextStepCopy:
        'Имейлът съдържа достъп до пълния курс с всички 12 модула.',
    },
    mlPaidGroupIdEnv: 'MAILERLITE_12IZMERENIA_PAID_GROUP_ID',
    mlPendingGroupIdEnv: 'MAILERLITE_12IZMERENIA_PENDING_GROUP_ID',
  },
  '12-izmerenia-promo': {
    slug: '12-izmerenia-promo',
    name: '12 Измерения на твоята мисия (промо)',
    price: '97.00',
    currency: 'EUR',
    supportsBankTransfer: true,
    bankTransfer: {
      referencePrefix: '12 Измерения',
      productLabel: '12 Измерения на твоята мисия · онлайн курс (промо)',
      nextStepCopy:
        'Имейлът съдържа достъп до пълния курс с всички 12 модула.',
    },
    mlPaidGroupIdEnv: 'MAILERLITE_12IZMERENIA_PAID_GROUP_ID',
    mlPendingGroupIdEnv: 'MAILERLITE_12IZMERENIA_PENDING_GROUP_ID',
  },
  'audiobook-hot': {
    slug: 'audiobook-hot',
    requiresAccount: true, // dashboard streaming — needs a Clerk account
    name: 'Аудиокнига Дигитален Успех (специална оферта)',
    price: '9.00',
    currency: 'EUR',
    supportsBankTransfer: false,
    bankTransfer: {
      referencePrefix: 'Аудиокнига',
      productLabel: 'Аудиокнига: Дигитален Успех (специална оферта)',
      nextStepCopy: '',
    },
    mlPaidGroupIdEnv: 'MAILERLITE_AUDIOBOOK_PAID_GROUP_ID',
    mlPendingGroupIdEnv: 'MAILERLITE_FREEBIE_GROUP_ID',
    bunnyFile: 'stasi-audiobook.mp3',
  },
  // €19 "72-hour" email tier — sits between the €9 thank-you hot offer and the
  // €25 regular price. Delivered via the freebie nurture sequence (email ~72h
  // after opt-in) and sold on the unlisted /audiobook-72h page. Same audiobook,
  // same Bunny file + dashboard delivery as the others; card-only.
  'audiobook-72h': {
    slug: 'audiobook-72h',
    requiresAccount: true, // dashboard streaming — needs a Clerk account
    name: 'Аудиокнига Дигитален Успех (имейл оферта)',
    price: '19.00',
    currency: 'EUR',
    supportsBankTransfer: false,
    bankTransfer: {
      referencePrefix: 'Аудиокнига',
      productLabel: 'Аудиокнига: Дигитален Успех (имейл оферта)',
      nextStepCopy: '',
    },
    mlPaidGroupIdEnv: 'MAILERLITE_AUDIOBOOK_PAID_GROUP_ID',
    mlPendingGroupIdEnv: 'MAILERLITE_FREEBIE_GROUP_ID',
    bunnyFile: 'stasi-audiobook.mp3',
  },
  'career-course': {
    slug: 'career-course',
    name: 'Кариерно развитие в ерата на AI',
    price: '97.00',
    currency: 'EUR',
    supportsBankTransfer: true,
    bankTransfer: {
      referencePrefix: 'Кариерен курс',
      productLabel: 'Кариерно развитие в ерата на AI · пълен курс',
      nextStepCopy:
        'Имейлът съдържа достъп до пълния 4-седмичен курс и материалите.',
    },
    mlPaidGroupIdEnv: 'MAILERLITE_CAREER_PAID_GROUP_ID',
    // No dedicated pending group yet — falls back to the legacy general pending group.
    mlPendingGroupIdEnv: 'MAILERLITE_PENDING_GROUP_ID',
  },
  zhiva: {
    slug: 'zhiva',
    name: 'ЖИВА · 4-седмичен курс',
    price: '97.00',
    currency: 'EUR',
    supportsBankTransfer: true,
    bankTransfer: {
      referencePrefix: 'Жива курс',
      productLabel: 'ЖИВА · 4-седмичен онлайн процес с Таня Касабова',
      nextStepCopy:
        'Имейлът съдържа достъп до пълния 4-седмичен курс с Таня Касабова.',
    },
    mlPaidGroupIdEnv: 'MAILERLITE_ZHIVA_PAID_GROUP_ID',
    mlPendingGroupIdEnv: 'MAILERLITE_ZHIVA_PENDING_GROUP_ID',
  },
  // ── „Излез от вътрешния застой" — Христина Симеонова (метод ALIGN). ──
  // 4-седмичен курс на живо за жени 25–44, старт 23 юли 2026. €37, card-only
  // (supportsBankTransfer:false → EnrollForm автоматично скрива банковия превод).
  // Доставя се в ЗАТВОРЕНА Facebook група (без Clerk акаунт, без Bunny) →
  // requiresAccount пропуснат. Платените → специална MailerLite група
  // (confirmation имейл автоматизацията се строи Христина-side). Pending пада към
  // общата pending група, за да не се губят ad-lead-ове преди специалната
  // променлива да е зададена (същият модел като career-course / biznes-dusha-early).
  'izlez-ot-zastoy': {
    slug: 'izlez-ot-zastoy',
    name: 'Излез от вътрешния застой',
    price: '37.00',
    currency: 'EUR',
    supportsBankTransfer: false,
    bankTransfer: {
      referencePrefix: 'Излез от застоя',
      productLabel: 'Излез от вътрешния застой · 4-седмичен курс с Христина Симеонова',
      nextStepCopy: '',
    },
    mlPaidGroupIdEnv: 'MAILERLITE_HRISTINA_PAID_GROUP_ID',
    mlPendingGroupIdEnv: 'MAILERLITE_PENDING_GROUP_ID',
  },
  'rodov-model': {
    slug: 'rodov-model',
    name: 'Прекъсни родовия модел в любовта',
    price: '97.00',
    currency: 'EUR',
    supportsBankTransfer: true,
    bankTransfer: {
      referencePrefix: 'Родов модел',
      productLabel: 'Прекъсни родовия модел в любовта · 4-седмичен курс',
      nextStepCopy:
        'Имейлът съдържа достъп до пълния 4-седмичен курс с Галя Тодорова.',
    },
    mlPaidGroupIdEnv: 'MAILERLITE_RODOV_PAID_GROUP_ID',
    mlPendingGroupIdEnv: 'MAILERLITE_RODOV_PENDING_GROUP_ID',
  },
  // ── „Бизнес с душа, без хаос" — July 2026 live masterclass (22 юли–2 август). ──
  // The July re-run of the same 12-masterclass program as `/masterclass`, so both
  // tiers reuse the masterclass MailerLite groups (paid → MAILERLITE_PAID_GROUP_ID,
  // pending → MAILERLITE_PENDING_GROUP_ID). No separate „Бизнес с душа" group or
  // automation needed — leads & buyers land in the same lists the masterclass
  // page already feeds (both vars are already live on Vercel).
  // `biznes-dusha-early` = €37 early-bird price (до 15 юли), `biznes-dusha` = €97 regular.
  // The /biznes-s-dusha page auto-switches which slug renders based on the date.
  'biznes-dusha-early': {
    slug: 'biznes-dusha-early',
    name: 'Бизнес с душа, без хаос (ранна цена)',
    price: '37.00',
    currency: 'EUR',
    supportsBankTransfer: true,
    bankTransfer: {
      referencePrefix: 'Бизнес с душа',
      productLabel: 'Бизнес с душа, без хаос · 12 мастъркласа (22 юли–2 август 2026) · ранна цена',
      nextStepCopy:
        'Имейлът съдържа Zoom линка, програмата и инструкциите за първия мастърклас (22 юли, 17:00 ч.).',
    },
    mlPaidGroupIdEnv: 'MAILERLITE_PAID_GROUP_ID',
    // No dedicated pending group yet — falls back to the legacy general pending group
    // so ad-captured leads are never lost if the dedicated var isn't set in time.
    mlPendingGroupIdEnv: 'MAILERLITE_PENDING_GROUP_ID',
  },
  // Free Day-1 tier — entered ONLY via promo code (NataliaK12) through
  // /api/checkout/free-code; never sold, never reaches myPOS. Orders are
  // recorded with amount 0 + status 'free' so they stay out of revenue queries.
  // Subscribers land in a dedicated group (NOT the paid group) so Stasi can
  // send them just the Day-1 Zoom link + an upsell to the full program.
  'biznes-dusha-day1': {
    slug: 'biznes-dusha-day1',
    name: 'Бизнес с душа, без хаос — Ден 1 (промо код)',
    price: '0.00',
    currency: 'EUR',
    supportsBankTransfer: false,
    bankTransfer: {
      referencePrefix: '',
      productLabel: '',
      nextStepCopy: '',
    },
    mlPaidGroupIdEnv: 'MAILERLITE_BIZNES_DUSHA_DAY1_GROUP_ID',
    mlPendingGroupIdEnv: 'MAILERLITE_BIZNES_DUSHA_DAY1_GROUP_ID',
  },
  'biznes-dusha': {
    slug: 'biznes-dusha',
    name: 'Бизнес с душа, без хаос',
    price: '97.00',
    currency: 'EUR',
    supportsBankTransfer: true,
    bankTransfer: {
      referencePrefix: 'Бизнес с душа',
      productLabel: 'Бизнес с душа, без хаос · 12 мастъркласа (22 юли–2 август 2026)',
      nextStepCopy:
        'Имейлът съдържа Zoom линка, програмата и инструкциите за първия мастърклас (22 юли, 17:00 ч.).',
    },
    mlPaidGroupIdEnv: 'MAILERLITE_PAID_GROUP_ID',
    mlPendingGroupIdEnv: 'MAILERLITE_PENDING_GROUP_ID',
  },
};

export function getProduct(slug: string | undefined | null): Product | null {
  if (!slug) return null;
  return slug in PRODUCTS ? PRODUCTS[slug as ProductSlug] : null;
}

// cleanEnv (not bare .trim()) strips the literal "\n" that Vercel can store in
// an env value — otherwise a corrupted group id silently targets a nonexistent
// MailerLite group and buyers never enter f1-audiobook-paid / f1-course-paid.
export function getPaidGroupId(slug: ProductSlug): string {
  return cleanEnv(process.env[PRODUCTS[slug].mlPaidGroupIdEnv]);
}

export function getPendingGroupId(slug: ProductSlug): string {
  return cleanEnv(process.env[PRODUCTS[slug].mlPendingGroupIdEnv]);
}

/**
 * Slugs that unlock the audiobook (dashboard player + /api/audiobook/stream).
 * Every audiobook tier — €9 `audiobook-hot`, €19 `audiobook-72h`, €25
 * `audiobook` — streams the same Bunny file, so a paid order under ANY of
 * these must grant access. Derived from `bunnyFile` so a new audiobook tier
 * is auto-included. (Previously both gates hard-coded the single `audiobook`
 * slug, which locked out every funnel buyer of the €9/€19 tiers.)
 */
export const AUDIOBOOK_ACCESS_SLUGS: ProductSlug[] = Object.values(PRODUCTS)
  .filter(p => p.bunnyFile)
  .map(p => p.slug);

export function grantsAudiobookAccess(slug: string | null | undefined): boolean {
  return !!slug && (AUDIOBOOK_ACCESS_SLUGS as string[]).includes(slug);
}
