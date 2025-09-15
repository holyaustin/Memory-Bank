// app/layout.tsx
import React from "react";
import Provider from "../components/Provider";
import "./globals.css";
//import { Inter } from "next/font/google";
import { headers } from "next/headers";

// ✅ SSR: Extract Web3Auth state from cookies
import { cookieToWeb3AuthState } from "@web3auth/modal";

//const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Memory Bank",
  description: "Your voice. Forever.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const cookie = headersList.get("cookie");
  const web3authInitialState = cookieToWeb3AuthState(cookie);

  return (
    <html lang="en">
      <body className="bg-white text-gray-800">
 
          <Header />
            <Provider web3authInitialState={web3authInitialState}>
              {children}
            </Provider>
          <Footer />

      </body>
    </html>
  )
}

function Header() {
  return (
    <header className="bg-blue-900 text-white p-4 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Memory Bank</h1>
        <nav>
          <a href="#about" className="mx-4 hover:underline">About</a>
          <a href="#archive" className="mx-4 hover:underline">Archive</a>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-50 p-6 mt-12">
      <div className="container mx-auto text-center text-gray-600">
        <p>© 2025 Memory Bank. Built on Filecoin Onchain Cloud.</p>
        <p className="mt-1 text-sm">Your voice. Forever.</p>
      </div>
    </footer>
  )
}