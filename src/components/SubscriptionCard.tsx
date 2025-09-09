'use client'

export default function SubscriptionCard() {
const subscribe = async () => {
  const res = await fetch('/api/subscribe', { method: 'POST' })
  const { url } = await res.json()
  window.location.href = url
}

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold text-primary mb-4">Keep It Safe</h2>
      <p className="text-gray-600 mb-4">Only $1/month. Cancel anytime.</p>
      <button
        onClick={subscribe}
        className="bg-secondary text-black px-6 py-2 rounded-full font-medium hover:bg-yellow-500"
      >
        Subscribe Now
      </button>
    </div>
  )
}