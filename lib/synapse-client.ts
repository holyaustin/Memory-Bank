// lib/synapse-client.ts
import { Synapse } from '@filoz/synapse-sdk';
import { ethers } from 'ethers';
import * as dotenv from 'dotenv';
import path from 'path';

// ✅ Force load .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

let client: Synapse | null = null;

export const getSynapseClient = async () => {
  if (!client) {
    console.log('🔧 Initializing Synapse client for Filecoin Calibration Testnet...');

    const privateKey = process.env.NEXT_PRIVATE_SYNAPSE_PRIVATE_KEY;
    console.log('🔑 Private key loaded:', !!privateKey ? 'YES' : 'NO');

    if (!privateKey) {
      throw new Error(
        'NEXT_PRIVATE_SYNAPSE_PRIVATE_KEY is not set. ' +
        'Check .env.local in project root and restart dev server.'
      );
    }

    const provider = new ethers.JsonRpcProvider('https://rpc.ankr.com/filecoin_testnet');
    const wallet = new ethers.Wallet(privateKey, provider);

    client = await Synapse.create({
      signer: wallet,
      rpcURL: 'https://rpc.ankr.com/filecoin_testnet',
    });

    console.log('✅ Synapse client created, connected to Filecoin');
  }
  return client;
};