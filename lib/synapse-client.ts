// lib/synapse-client.ts
import { Synapse } from '@filoz/synapse-sdk';
import { ethers } from 'ethers';
import { cookies } from 'next/headers';

let client: Synapse | null = null;

export async function getSynapseClient() {
  if (!client) {
    const provider = new ethers.JsonRpcProvider('https://api.calibration.node.glif.io/rpc/v1');
    const privateKey = process.env.SYNAPSE_PRIVATE_KEY;

    if (!privateKey) {
      throw new Error('SYNAPSE_PRIVATE_KEY is not set');
    }

    const wallet = new ethers.Wallet(privateKey, provider);

    client = await Synapse.create({
      signer: wallet,
      rpcURL: 'https://api.calibration.node.glif.io/rpc/v1',
    });
  }
  return client;
}