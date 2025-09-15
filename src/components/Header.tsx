// app/components/Header.tsx
'use client';

import { useWeb3AuthUser, useWeb3AuthConnect, useWeb3AuthDisconnect } from '@web3auth/modal/react';
import { useAccount } from 'wagmi';
import { useRouter } from 'next/navigation';

export default function Header() {
  const { connect } = useWeb3AuthConnect();
  const { disconnect } = useWeb3AuthDisconnect();
  const { userInfo } = useWeb3AuthUser();
  const { address } = useAccount();
  const isConnected = !!address;
  const router = useRouter();

  const handleLogout = async () => {
    await disconnect();
    router.push('/');
  };

  return (
    <header className="bg-primary text-white p-4 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">🏦 Memory Bank</h1>

        <nav className="flex items-center space-x-6">
          <a href="#about" className="hover:underline">About</a>
          <a href="#archive" className="hover:underline">Archive</a>

          {isConnected ? (
            <div className="flex items-center space-x-3">
              <span className="text-sm hidden md:inline">
                {userInfo?.name || 'Legacy Keeper'}
              </span>
              <button
                onClick={handleLogout}
                className="bg-yellow-500 hover:bg-yellow-400 text-black text-sm font-medium px-4 py-1.5 rounded-full transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => connect()}
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-medium px-4 py-1.5 rounded-full transition transform hover:scale-105"
            >
              Connect
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}