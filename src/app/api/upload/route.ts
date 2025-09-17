// src/app/api/upload/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getSynapseClient } from '../../../../lib/synapse-client';

// Add at top of POST
console.log('📁 API Route Running');
console.log('🔑 ENV in API:', {
  hasKey: !!process.env.NEXT_PRIVATE_SYNAPSE_PRIVATE_KEY,
  keyLength: process.env.NEXT_PRIVATE_SYNAPSE_PRIVATE_KEY?.length,
});

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const uint8Data = new Uint8Array(arrayBuffer);

    const synapse = await getSynapseClient();
    const result = await synapse.storage.upload(uint8Data);

    return NextResponse.json({
      pieceCid: result.pieceCid.toString(),
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Upload failed:', error.message);
      return NextResponse.json(
        { error: 'Upload failed: ' + error.message },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { error: 'Upload failed: Unknown error' },
      { status: 500 }
    );
  }
}
