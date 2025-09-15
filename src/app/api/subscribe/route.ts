import { NextRequest } from 'next/server'
import { getSynapseClient } from '@/lib/synapse-client'

export async function POST(req: NextRequest) {
  const synapse = await getSynapseClient()
  const balance = await synapse.payments.balance()

  if (balance < 1000000000000000000n) {
    // In prod: redirect to Stripe or USDC payment
    return Response.json({
      url: 'https://buy.stripe.com/test_abc123',
    })
  }

  return Response.json({ status: 'active' })
}