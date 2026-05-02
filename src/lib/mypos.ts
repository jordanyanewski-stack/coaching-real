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
}

function loadPem(raw: string) {
  return raw.replace(/\\n/g, '\n');
}

export function buildPurchaseParams(params: PurchaseParams) {
  // Field order is significant — signature covers values joined with "->" in this exact order
  const ordered: [string, string][] = [
    ['IPCmethod',                'IPCPurchase'],
    ['IPCVersion',               '1.4'],
    ['IPCLanguage',              'BG'],
    ['SID',                      process.env.MYPOS_SID!.trim()],
    ['WalletNumber',             process.env.MYPOS_WALLET!.trim()],
    ['KeyIndex',                 process.env.MYPOS_KEY_INDEX!.trim()],
    ['Amount',                   params.amount],
    ['Currency',                 params.currency],
    ['OrderID',                  params.orderId],
    ['URL_OK',                   params.urlOk],
    ['URL_CANCEL',               params.urlCancel],
    ['URL_NOTIFY',               params.urlNotify],
    ['CustomerEmail',            params.customerEmail],
    ['CustomerNames',            params.customerName],
  ];

  const concatValues = ordered.map(([, v]) => v).join('->');
  const sign = crypto.createSign('RSA-SHA256');
  sign.update(concatValues);
  const signature = sign.sign(loadPem(process.env.MYPOS_PRIVATE_KEY!), 'base64');

  const fields = Object.fromEntries([...ordered, ['Signature', signature]]);
  return { action: process.env.MYPOS_IPC_URL!.trim(), fields };
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

  const concatValues = Object.values(fields).join('->');
  try {
    const verify = crypto.createVerify('RSA-SHA256');
    verify.update(concatValues);
    const valid = verify.verify(loadPem(process.env.MYPOS_API_PUBLIC_KEY!.trim()), signature, 'base64');
    return { valid, fields };
  } catch {
    return { valid: false, fields };
  }
}
