// lib/synapse-client.ts
import { Synapse } from '@filoz/synapse-sdk';
import { ethers } from 'ethers';

let client: Synapse | null = null;

export const getSynapseClient = async () => {
  if (!client) {
    const rpcURL = 'https://api.calibration.node.glif.io/rpc/v1';
    const privateKey = process.env.NEXT_PRIVATE_SYNAPSE_PRIVATE_KEY;
    console.log("Private Key:", privateKey); // Debugging line

    if (!privateKey) {
      throw new Error('NEXT_PRIVATE_SYNAPSE_PRIVATE_KEY is not set');
    }

    const provider = new ethers.JsonRpcProvider(rpcURL);
    const wallet = new ethers.Wallet(privateKey, provider);

    client = await Synapse.create({
      signer: wallet,
      rpcURL,
    });
  }
  return client;
};



    // https://filecoin-calibration.drpc.org or https://rpc.ankr.com/filecoin_testnet
   