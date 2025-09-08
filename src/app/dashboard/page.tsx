'use client'

import { usePrivy, useLogin } from '@privy-io/react-auth'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Dashboard() {
  const { ready, authenticated } = usePrivy()
  const { login } = useLogin()
  const router = useRouter()

  useEffect(() => {
    if (ready && !authenticated) login()
    if (ready && authenticated) router.push('/dashboard')
  }, [ready, authenticated, login, router])

  if (!ready) return <div className="text-center py-10">Loading...</div>

  return <DashboardContent />
}

function DashboardContent() {
  return (
    <div className="min-h-screen bg-light py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-primary mb-2">Your Legacy</h1>
        <p className="text-gray-600 mb-8">Store, verify, and pass on your truth.</p>

        <div className="grid md:grid-cols-2 gap-8">
          <UploadCard />
          <SubscriptionCard />
        </div>
      </div>
    </div>
  )
}