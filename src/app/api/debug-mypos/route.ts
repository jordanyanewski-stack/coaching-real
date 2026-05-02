export const runtime = 'nodejs';

import crypto from 'crypto';

function loadPem(raw: string) {
  return raw.replace(/\\n/g, '\n');
}

export async function GET() {
  const SID         = (process.env.MYPOS_SID         ?? '').trim();
  const WALLET      = (process.env.MYPOS_WALLET      ?? '').trim();
  const KEY_INDEX   = (process.env.MYPOS_KEY_INDEX   ?? '').trim();
  const IPC_URL     = (process.env.MYPOS_IPC_URL     ?? '').trim();
  const SITE_URL    = (process.env.NEXT_PUBLIC_SITE_URL ?? '').trim();
  const PRICE       = (process.env.PRODUCT_PRICE     ?? '').trim();
  const CURRENCY    = (process.env.PRODUCT_CURRENCY  ?? 'EUR').trim();
  const PRIVATE_KEY_RAW = process.env.MYPOS_PRIVATE_KEY ?? '';

  const fakeOrderId = 'debug-' + Date.now();

  const ordered: [string, string][] = [
    ['IPCmethod',     'IPCPurchase'],
    ['IPCVersion',    '1.4'],
    ['IPCLanguage',   'BG'],
    ['SID',           SID],
    ['WalletNumber',  WALLET],
    ['KeyIndex',      KEY_INDEX],
    ['Amount',        PRICE],
    ['Currency',      CURRENCY],
    ['OrderID',       fakeOrderId],
    ['URL_OK',        `${SITE_URL}/thank-you?order=${fakeOrderId}`],
    ['URL_CANCEL',    `${SITE_URL}/payment-cancelled?order=${fakeOrderId}`],
    ['URL_NOTIFY',    `${SITE_URL}/api/mypos/notify`],
    ['CustomerEmail', 'test@example.com'],
    ['CustomerNames', 'Test User'],
  ];

  const concatValues = ordered.map(([, v]) => v).join('->');

  // Inspect each field's raw bytes for hidden chars
  const fieldInspection = ordered.map(([k, v]) => ({
    key: k,
    value: v,
    length: v.length,
    hex_first8: Buffer.from(v).slice(0, 8).toString('hex'),
    hex_last8:  Buffer.from(v).slice(-8).toString('hex'),
  }));

  // Inspect private key
  const pemNormalized = loadPem(PRIVATE_KEY_RAW);
  const pemHasLiteralBackslashN = PRIVATE_KEY_RAW.includes('\\n');
  const pemHasRealNewlines      = PRIVATE_KEY_RAW.includes('\n');
  const pemStartsWith = pemNormalized.slice(0, 35);
  const pemEndsWith   = pemNormalized.slice(-35);
  const pemLineCount  = pemNormalized.split('\n').length;

  let signature = '';
  let signError: string | null = null;
  try {
    const signer = crypto.createSign('RSA-SHA256');
    signer.update(concatValues);
    signature = signer.sign(pemNormalized, 'base64');
  } catch (e) {
    signError = (e as Error).message;
  }

  return Response.json({
    env: {
      SID, WALLET_set: !!WALLET, KEY_INDEX, IPC_URL, SITE_URL, PRICE, CURRENCY,
    },
    pem: {
      raw_length: PRIVATE_KEY_RAW.length,
      normalized_length: pemNormalized.length,
      has_literal_backslash_n: pemHasLiteralBackslashN,
      has_real_newlines: pemHasRealNewlines,
      starts_with: pemStartsWith,
      ends_with: pemEndsWith,
      line_count: pemLineCount,
    },
    fields: fieldInspection,
    concat_string: concatValues,
    concat_length: concatValues.length,
    signature: signature.slice(0, 40) + '...(' + signature.length + ' chars)',
    signError,
  });
}
