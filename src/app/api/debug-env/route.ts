export const runtime = 'nodejs';

export async function GET() {
  return Response.json({
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL ?? '(not set)',
    MYPOS_SID: process.env.MYPOS_SID ?? '(not set)',
    MYPOS_WALLET: process.env.MYPOS_WALLET ? '✓ set' : '(not set)',
    MYPOS_KEY_INDEX: process.env.MYPOS_KEY_INDEX ?? '(not set)',
    MYPOS_IPC_URL: process.env.MYPOS_IPC_URL ?? '(not set)',
    MYPOS_PRIVATE_KEY: process.env.MYPOS_PRIVATE_KEY ? '✓ set' : '(not set)',
    PRODUCT_PRICE: process.env.PRODUCT_PRICE ?? '(not set)',
  });
}
