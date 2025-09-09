export default function MemoryList() {
  const memories = [
    { cid: 'bafkzca...', name: 'Voice Note to My Child', date: 'Apr 5, 2025' },
  ]

  return (
    <div className="mt-8 bg-white p-6 rounded-xl shadow">
      <h3 className="text-lg font-semibold text-primary mb-4">Your Memories</h3>
      {memories.map((m) => (
        <div key={m.cid} className="flex items-center justify-between p-3 border-b">
          <div>
            <p className="font-medium">{m.name}</p>
            <p className="text-sm text-gray-500">{m.date}</p>
          </div>
          <video
            src={`https://cdn.farcaster.pub/${m.cid}`}
            controls
            className="w-24 h-16 rounded"
          />
        </div>
      ))}
    </div>
  )
}