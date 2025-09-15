// app/page.tsx
'use client';

import { useWeb3AuthConnect } from '@web3auth/modal/react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { connect } = useWeb3AuthConnect();
  const router = useRouter();

  const handleStoreMemory = async () => {
    try {
      await connect();
      router.push('/dashboard');
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6 leading-tight">
          What if your voice could <br />outlive you?
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
          A mother’s laugh. A soldier’s message. A protest captured.  
          <strong className="font-semibold">Memory Bank</strong> ensures no truth is erased.
        </p>

        <button
          onClick={handleStoreMemory}
          className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-10 py-4 rounded-full text-lg shadow-lg transition transform hover:scale-105"
        >
          Store Your Memory
        </button>

        <div className="mt-24 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Feature title="Verified" desc="PDP-proof + timestamped. Tamper-evident." />
          <Feature title="Inheritable" desc="Pass to heirs when you're gone." />
          <Feature title="Forever" desc="Stored on Filecoin. No one can delete." />
        </div>
      </div>
    </div>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
      <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}