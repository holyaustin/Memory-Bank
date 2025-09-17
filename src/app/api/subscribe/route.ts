// src/app/api/subscribe/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getSynapseClient } from '../../../../lib/synapse-client';

export async function POST(_req: NextRequest) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  try {
    const synapse = await getSynapseClient();
    const balance = await synapse.payments.balance();

    const requiredBalance = BigInt('1000000000000000000'); // 1 USDFC

    if (balance < requiredBalance) {
      return NextResponse.json({
        url: 'https://buy.stripe.com/test_abc123',
      });
    }

    return NextResponse.json({ status: 'active' });
  } catch (error) {
    console.error('Subscription check failed:', error);
    return NextResponse.json(
      { error: 'Failed to check subscription' },
      { status: 500 }
    );
  }
}