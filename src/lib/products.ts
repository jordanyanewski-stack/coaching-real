/**
 * Source of truth for every purchasable product on coachingreallive.com.
 *
 * Adding a product is a 3-step change:
 *   1. Add an entry below + set its MailerLite paid + pending group env vars on Vercel.
 *   2. Run a DB migration if the new product needs extra columns (rare).
 *   3. Render `<EnrollForm product="<slug>" />` on the product page.
 *
 * The checkout API and MyPOS webhook are product-agnostic — they look
 * everything up here.
 */

export type ProductSlug = 'masterclass' | 'audiobook' | 'audiobook-hot' | 'career-course' | 'rodov-model' | 'zhiva';

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
  'audiobook-hot': {
    slug: 'audiobook-hot',
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
};

export function getProduct(slug: string | undefined | null): Product | null {
  if (!slug) return null;
  return slug in PRODUCTS ? PRODUCTS[slug as ProductSlug] : null;
}

export function getPaidGroupId(slug: ProductSlug): string {
  return (process.env[PRODUCTS[slug].mlPaidGroupIdEnv] ?? '').trim();
}

export function getPendingGroupId(slug: ProductSlug): string {
  return (process.env[PRODUCTS[slug].mlPendingGroupIdEnv] ?? '').trim();
}
