// src/app/api/debug/route.ts
export async function GET() {
  return Response.json({
    hasPrivateKey: !!process.env.NEXT_PRIVATE_SYNAPSE_PRIVATE_KEY,
    keyPresent: process.env.NEXT_PRIVATE_SYNAPSE_PRIVATE_KEY ? 'yes' : 'no',
    web3authId: process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID ? 'loaded' : 'missing',
  });
}