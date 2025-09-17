// app/layout.tsx
import React from "react";
import Provider from "../components/Provider";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";
import { headers } from "next/headers";
import { cookieToWeb3AuthState } from "@web3auth/modal";

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
        {/* ✅ Provider wraps Header, children, AND Footer */}
        <Provider web3authInitialState={web3authInitialState}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}