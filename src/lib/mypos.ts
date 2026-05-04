import crypto from 'crypto';

interface PurchaseParams {
  orderId: string;
  amount: string;
  currency: string;
  customerEmail: string;
  customerName: string;
  customerIp: string;
  urlOk: string;
  urlCancel: string;
  urlNotify: string;
  productName?: string;
}

function loadPem(raw: string) {
  return raw.replace(/\\n/g, '\n');
}

function splitName(fullName: string): { first: string; last: string } {
  const parts = fullName.trim().split(/\s+/);
  if (parts.length <= 1) return { first: parts[0] ?? '', last: '' };
  return { first: parts[0], last: parts.slice(1).join(' ') };
}

/**
 * Build IPCPurchase params and signature, mirroring the production myPOS
 * WooCommerce plugin (common-repository/mypos-virtual-for-woocommerce
 * → includes/class-wc-gateway-mypos.php), which is known to work against
 * this merchant account. Field order, casing, and the empty-string
 * placeholders are part of the signed payload — any deviation produces
 * Error 2 (STATUS_SIGNATURE_FAILED) from myPOS.
 */
export function buildPurchaseParams(params: PurchaseParams) {
  const SID         = (process.env.MYPOS_SID         ?? '').trim();
  const WALLET      = (process.env.MYPOS_WALLET      ?? '').trim();
  const KEY_INDEX   = (process.env.MYPOS_KEY_INDEX   ?? '').trim();
  const IPC_URL     = (process.env.MYPOS_IPC_URL     ?? '').trim();
  const PRIVATE_KEY = process.env.MYPOS_PRIVATE_KEY  ?? '';

  const { first: firstRaw, last: lastRaw } = splitName(params.customerName);
  // myPOS rejects requests with non-ASCII characters in name fields; since
  // PaymentParametersRequired=2 has the customer fill in their details on the
  // payment page anyway, fall back to empty strings for non-ASCII names.
  const isAscii = (s: string) => /^[\x00-\x7F]*$/.test(s);
  const first = isAscii(firstRaw) ? firstRaw : '';
  const last  = isAscii(lastRaw)  ? lastRaw  : '';
  const productName = (params.productName ?? process.env.PRODUCT_NAME ?? 'Product').trim();
  const lang = 'BG';

  const ordered: [string, string][] = [
    ['IPCmethod',                 'IPCPurchase'],
    ['IPCVersion',                '1.4'],
    ['IPCLanguage',               lang],
    ['WalletNumber',              WALLET],
    ['SID',                       SID],
    ['keyindex',                  KEY_INDEX],
    ['Source',                    'SDK_PHP_1.3.1'],
    ['Amount',                    params.amount],
    ['Currency',                  params.currency],
    ['OrderID',                   params.orderId],
    ['URL_OK',                    params.urlOk],
    ['URL_CANCEL',                params.urlCancel],
    ['URL_Notify',                params.urlNotify],
    ['CustomerIP',                params.customerIp],
    ['CustomerEmail',             params.customerEmail],
    ['CustomerFirstNames',        first],
    ['CustomerFamilyName',        last],
    ['CustomerCountry',           ''],
    ['CustomerCity',              ''],
    ['CustomerZIPCode',           ''],
    ['CustomerAddress',           ''],
    ['CustomerPhone',             ''],
    ['Note',                      ''],
    ['CardTokenRequest',          '0'],
    ['PaymentParametersRequired', '2'],
    ['PaymentMethod',             '1'],
    ['Article_1',                 productName],
    ['Quantity_1',                '1'],
    ['Price_1',                   params.amount],
    ['Amount_1',                  params.amount],
    ['Currency_1',                params.currency],
    ['CartItems',                 '1'],
    ['trp-form-language',         lang],
  ];

  const concatValues = ordered.map(([, v]) => v).join('-');
  const concatBase64 = Buffer.from(concatValues, 'utf8').toString('base64');

  const signer = crypto.createSign('RSA-SHA256');
  signer.update(concatBase64);
  const signature = signer.sign(loadPem(PRIVATE_KEY), 'base64');

  const fields = Object.fromEntries([...ordered, ['Signature', signature]]);
  return { action: IPC_URL, fields };
}

export function verifyNotify(rawBody: string): { valid: boolean; fields: Record<string, string> } {
  const params = new URLSearchParams(rawBody);
  const fields: Record<string, string> = {};
  let signature = '';

  for (const [key, value] of params.entries()) {
    if (key === 'Signature') {
      signature = value;
    } else {
      fields[key] = value;
    }
  }

  if (!signature) return { valid: false, fields };

  const concatValues = Object.values(fields).join('-');
  const concatBase64 = Buffer.from(concatValues, 'utf8').toString('base64');

  try {
    const verifier = crypto.createVerify('RSA-SHA256');
    verifier.update(concatBase64);
    const valid = verifier.verify(
      loadPem((process.env.MYPOS_API_PUBLIC_KEY ?? '').trim()),
      signature,
      'base64'
    );
    return { valid, fields };
  } catch {
    return { valid: false, fields };
  }
}
