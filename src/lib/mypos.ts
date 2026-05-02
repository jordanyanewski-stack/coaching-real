import crypto from 'crypto';

interface PurchaseParams {
  orderId: string;
  amount: string;
  currency: string;
  customerEmail: string;
  customerName: string;
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
 * Build IPCPurchase params and signature, matching the official myPOS PHP SDK
 * (developermypos/myPOS-Checkout-SDK-PHP). Field order, casing, separator,
 * and base64 wrapping must all match exactly or myPOS returns Error 2
 * (STATUS_SIGNATURE_FAILED).
 */
export function buildPurchaseParams(params: PurchaseParams) {
  const SID         = (process.env.MYPOS_SID         ?? '').trim();
  const WALLET      = (process.env.MYPOS_WALLET      ?? '').trim();
  const KEY_INDEX   = (process.env.MYPOS_KEY_INDEX   ?? '').trim();
  const IPC_URL     = (process.env.MYPOS_IPC_URL     ?? '').trim();
  const PRIVATE_KEY = process.env.MYPOS_PRIVATE_KEY  ?? '';

  const { first, last } = splitName(params.customerName);
  const productName = params.productName ?? process.env.PRODUCT_NAME ?? 'Product';

  // Order MUST match Purchase.php::process() exactly.
  // Empty strings are intentional — the field still participates in signature.
  const ordered: [string, string][] = [
    ['IPCmethod',                 'IPCPurchase'],
    ['IPCVersion',                '1.4'],
    ['IPCLanguage',               'BG'],
    ['SID',                       SID],
    ['WalletNumber',              WALLET],
    ['KeyIndex',                  KEY_INDEX],
    ['Source',                    'SDK_PHP_1.3.1'],
    ['Currency',                  params.currency],
    ['Amount',                    params.amount],
    ['OrderID',                   params.orderId],
    ['URL_OK',                    params.urlOk],
    ['URL_Cancel',                params.urlCancel],
    ['URL_Notify',                params.urlNotify],
    ['Note',                      ''],
    ['expires_in',                '86400'],
    ['ApplicationID',             ''],
    ['PartnerID',                 ''],
    ['customeremail',             params.customerEmail],
    ['customerphone',             ''],
    ['customerfirstnames',        first],
    ['customerfamilyname',        last],
    ['customercountry',           ''],
    ['customercity',              ''],
    ['customerzipcode',           ''],
    ['customeraddress',           ''],
    ['CartItems',                 '1'],
    ['Article_1',                 productName],
    ['Quantity_1',                '1'],
    ['Price_1',                   params.amount],
    ['Amount_1',                  params.amount],
    ['Currency_1',                params.currency],
    ['CardTokenRequest',          '0'],
    ['PaymentParametersRequired', '2'],
    ['PaymentMethod',             '1'],
  ];

  // Signature: base64(values joined by single '-') signed with RSA-SHA256, then base64.
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

  // myPOS notify uses the same scheme: base64(values joined by '-') signed with RSA-SHA256.
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
