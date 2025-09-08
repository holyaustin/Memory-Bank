import { Synapse } from '@filoz/synapse-sdk'
import { ethers } from 'ethers'

let synapse: Synapse | null = null

export const getSynapseClient = async () => {
  if (!synapse) {
    const provider = new ethers.JsonRpcProvider(
      'https://api.calibration.node.glif.io/rpc/v1'
    )
    const wallet = new ethers.Wallet(
      process.env.PRIVATE_SYNAPSE_PRIVATE_KEY!,
      provider
    )

    synapse = await Synapse.create({
      signer: wallet,
      rpcURL: 'https://api.calibration.node.glif.io/rpc/v1',
    })
  }
  return synapse
}