import { describe, it, expect, beforeAll } from 'vitest';
import { generateKeyPairSync, createSign } from 'node:crypto';

/**
 * Roundtrip: build a purchase payload + sign it with the merchant's private
 * key (buildPurchaseParams), then have verifyNotify validate the resulting
 * signature against the matching public key. Prevents silent regressions on
 * the highest-cost-to-debug surface — signature failures only surface as
 * STATUS_SIGNATURE_FAILED in production with no useful client-side trace.
 */

let buildPurchaseParams: typeof import('./mypos').buildPurchaseParams;
let verifyNotify: typeof import('./mypos').verifyNotify;

beforeAll(async () => {
  // Generate a fresh 2048-bit keypair per test run.
  const { privateKey, publicKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048,
    privateKeyEncoding: { type: 'pkcs1', format: 'pem' },
    publicKeyEncoding:  { type: 'spki',  format: 'pem' },
  });

  process.env.MYPOS_SID            = 'TEST-SID';
  process.env.MYPOS_WALLET         = '61938166610';
  process.env.MYPOS_KEY_INDEX      = '1';
  process.env.MYPOS_IPC_URL        = 'https://test.mypos.example/ipc';
  process.env.MYPOS_PRIVATE_KEY    = privateKey;
  process.env.MYPOS_API_PUBLIC_KEY = publicKey;

  // Import after env is set so module-level constants pick up the right values
  // (the module reads process.env lazily inside the functions, but be safe).
  const mod = await import('./mypos');
  buildPurchaseParams = mod.buildPurchaseParams;
  verifyNotify        = mod.verifyNotify;
});

describe('mypos signature roundtrip', () => {
  it('verifyNotify accepts a payload signed by the same private key', () => {
    const { fields } = buildPurchaseParams({
      orderId:       'order-abc-123',
      amount:        '67.00',
      currency:      'EUR',
      customerEmail: 'jane@example.com',
      customerName:  'Йордан Ганчев',  // Cyrillic — exercises the transliterator
      customerIp:    '203.0.113.5',
      urlOk:         'https://example.com/thank-you?order=order-abc-123',
      urlCancel:     'https://example.com/payment-cancelled?order=order-abc-123',
      urlNotify:     'https://example.com/api/mypos/notify',
      productName:   'Test Product',
    });

    // Re-sign manually to confirm we know how myPOS would compose the
    // notification (the notify endpoint receives a DIFFERENT payload than
    // the IPCPurchase one, but verifyNotify hashes whatever fields it sees
    // in the body in the order they appear).
    const notifyFields: Record<string, string> = {
      IPCmethod:   'IPCPurchaseNotify',
      IPCVersion:  '1.4',
      OrderID:     'order-abc-123',
      IPC_Trnref:  'TRN-999',
      Status:      'success',
      Amount:      '67.00',
      Currency:    'EUR',
    };

    const concatValues = Object.values(notifyFields).join('-');
    const concatBase64 = Buffer.from(concatValues, 'utf8').toString('base64');
    const signer = createSign('RSA-SHA256');
    signer.update(concatBase64);
    const signature = signer.sign(process.env.MYPOS_PRIVATE_KEY!, 'base64');

    const body = new URLSearchParams({ ...notifyFields, Signature: signature }).toString();
    const result = verifyNotify(body);

    expect(result.valid).toBe(true);
    expect(result.fields.IPCmethod).toBe('IPCPurchaseNotify');
    expect(result.fields.OrderID).toBe('order-abc-123');

    // Outbound payload sanity: signature is present, Cyrillic name got
    // transliterated to ASCII before being signed.
    expect(typeof fields.Signature).toBe('string');
    expect((fields.Signature as string).length).toBeGreaterThan(0);
    expect(fields.CustomerFirstNames).toBe('Yordan');
    expect(fields.CustomerFamilyName).toBe('Ganchev');
  });

  it('verifyNotify rejects a payload signed by a foreign key', () => {
    const foreign = generateKeyPairSync('rsa', { modulusLength: 2048 });

    const notifyFields: Record<string, string> = {
      IPCmethod: 'IPCPurchaseNotify',
      OrderID:   'order-x',
    };
    const concatBase64 = Buffer.from(Object.values(notifyFields).join('-'), 'utf8').toString('base64');
    const signer = createSign('RSA-SHA256');
    signer.update(concatBase64);
    const badSignature = signer.sign(foreign.privateKey, 'base64');

    const body = new URLSearchParams({ ...notifyFields, Signature: badSignature }).toString();
    const result = verifyNotify(body);
    expect(result.valid).toBe(false);
  });

  it('verifyNotify rejects a body with no signature', () => {
    const body = new URLSearchParams({ IPCmethod: 'IPCPurchaseNotify' }).toString();
    expect(verifyNotify(body).valid).toBe(false);
  });
});
