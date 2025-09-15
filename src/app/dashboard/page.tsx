// app/dashboard/page.tsx
'use client';

import { useWeb3AuthUser, useWeb3AuthDisconnect } from '@web3auth/modal/react';
import { useAccount } from 'wagmi';

export default function Dashboard() {
  const { userInfo } = useWeb3AuthUser();
  const { disconnect } = useWeb3AuthDisconnect();
  const { address } = useAccount();

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

        <div className="grid md:grid-cols-2 gap-8">
          <UploadCard />
          <SubscriptionCard />
        </div>

        {/* Debug Info */}
        <div className="mt-12 p-6 bg-gray-100 rounded-xl">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">Debug</h3>
          <pre className="text-sm text-gray-700 overflow-auto max-h-40">
            {JSON.stringify({ userInfo, address }, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}

function UploadCard() {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold text-blue-900 mb-4">Upload a Memory</h2>
      <p className="text-gray-600 mb-4">Photo, video, voice note, or story.</p>
      <input
        type="file"
        accept="image/*,video/*,audio/*,text/*"
        className="block w-full mb-4 text-sm"
      />
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium">
        Store Forever
      </button>
    </div>
  );
}

function SubscriptionCard() {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold text-blue-900 mb-4">Keep It Safe</h2>
      <p className="text-gray-600 mb-4">
        Only <strong>$1/month</strong>. Your memories stay forever.
      </p>
      <button className="bg-yellow-500 text-black px-6 py-2 rounded-full font-medium hover:bg-yellow-400">
        Subscribe Now
      </button>
    </div>
  );
}