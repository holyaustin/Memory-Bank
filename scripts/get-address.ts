// scripts/get-address.ts
import { ethers } from 'ethers';
import * as dotenv from 'dotenv';

// ✅ Load .env.local
dotenv.config({ path: '.env.local' }); // Adjust path if needed

const privateKey = process.env.NEXT_PRIVATE_SYNAPSE_PRIVATE_KEY;

if (!privateKey) {
  console.error('❌ Error: NEXT_PRIVATE_SYNAPSE_PRIVATE_KEY is not set in .env.local');
  process.exit(1);
}

try {
  const wallet = new ethers.Wallet(privateKey);
  console.log('✅ Wallet Address:', wallet.address);
  console.log('🔑 Public Key:', wallet);
} catch (error) {
  console.error('❌ Invalid private key. Must start with 0x and be 64 hex characters.');
  process.exit(1);
}