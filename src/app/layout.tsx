import { PrivyProvider } from '@privy-io/react-auth'
import './globals.css'

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">
        <PrivyProvider appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID!}>
          <Header />
          {children}
          <Footer />
        </PrivyProvider>
      </body>
    </html>
  )
}

function Header() {
  return (
    <header className="bg-primary text-white p-4 shadow">
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