// scripts/debug-env.ts
import * as dotenv from 'dotenv';
import path from 'path';

// ✅ Load .env.local manually
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

console.log('🔍 Debugging .env.local');
console.log('File exists:', require('fs').existsSync('.env.local'));
console.log('NEXT_PRIVATE_SYNAPSE_PRIVATE_KEY:', process.env.NEXT_PRIVATE_SYNAPSE_PRIVATE_KEY);
console.log('Loaded?', !!process.env.NEXT_PRIVATE_SYNAPSE_PRIVATE_KEY);