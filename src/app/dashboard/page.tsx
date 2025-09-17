// app/dashboard/page.tsx
'use client';

import { useWeb3AuthUser, useWeb3AuthDisconnect } from '@web3auth/modal/react';
import { useAccount } from 'wagmi';
import { useState } from 'react';
import { getSynapseClient } from '../../../lib/synapse-client';

export default function Dashboard() {
  const { userInfo } = useWeb3AuthUser();
  const { disconnect } = useWeb3AuthDisconnect();
  const { address } = useAccount();
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [cid, setCid] = useState<string | null>(null);

const handleUpload = async () => {
  if (!file) return;
  setUploading(true);
  setCid(null);

  try {
    const arrayBuffer = await file.arrayBuffer();
    const uint8Data = new Uint8Array(arrayBuffer);

    const synapse = await getSynapseClient();
    const result = await synapse.storage.upload(uint8Data);

    setCid(result.pieceCid.toString()); // ✅ Permanent ID

    setFile(null);
    alert('✅ Memory stored permanently!');
  } catch (err: unknown) {
    // ✅ Better error handling
    if (err instanceof Error) {
      alert('Upload failed: ' + err.message);
    } else {
      alert('Upload failed: Unknown error');
    }
    console.error(err);
  } finally {
    setUploading(false);
  }
};

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-blue-900">Your Legacy</h1>
          <button
            onClick={() => disconnect()}
            className="text-sm text-gray-600 hover:text-gray-800 font-medium"
          >
            Logout
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow mb-8">
          <h2 className="text-xl font-semibold text-blue-900 mb-2">
            Welcome, {userInfo?.name || 'Legacy Keeper'}
          </h2>
          {userInfo?.email && (
            <p className="text-gray-600">{userInfo.email}</p>
          )}
          {address && (
            <p className="text-sm text-gray-500 mt-1">
              Wallet: {address.slice(0, 6)}...{address.slice(-4)}
            </p>
          )}
        </div>

        {/* Upload Card */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">Upload a Memory</h2>
          <p className="text-gray-600 mb-4">Photo, video, voice note, or story.</p>

          <input
            type="file"
            accept="image/*,video/*,audio/*,text/*"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="block w-full mb-4 text-sm"
          />

          <button
            onClick={handleUpload}
            disabled={!file || uploading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium disabled:opacity-50"
          >
            {uploading ? 'Storing...' : 'Store Forever'}
          </button>

          {cid && (
            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded">
              <p className="text-sm text-green-800">
                <strong>✅ Verified & Permanent</strong>
                <br />
                <code className="text-xs break-all">{cid}</code>
              </p>
              <p className="text-xs text-green-600 mt-1">
                This memory is PDP-proofed and stored on Filecoin.
              </p>
            </div>
          )}
        </div>

        {/* Subscription Card */}
        <div className="bg-white p-6 rounded-xl shadow mt-8">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">Keep It Safe</h2>
          <p className="text-gray-600 mb-4">
            Only <strong>$1/month</strong>. Your memories stay forever.
          </p>
          <button className="bg-yellow-500 text-black px-6 py-2 rounded-full font-medium hover:bg-yellow-400">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
}