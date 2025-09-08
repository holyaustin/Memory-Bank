'use client'

import { useState } from 'react'

export default function UploadCard() {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)

// Replace handleUpload:
const handleUpload = async () => {
  if (!file) return
  setUploading(true)

  try {
    const arrayBuffer = await file.arrayBuffer()
    const uint8Data = new Uint8Array(arrayBuffer)

    const synapse = await getSynapseClient()
    const result = await synapse.storage.upload(uint8Data)

    alert(`Stored! PieceCID: ${result.pieceCid.slice(0, 12)}...`)
  } catch (err: any) {
    console.error(err)
    alert('Upload failed: ' + err.message)
  } finally {
    setUploading(false)
  }
}

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold text-primary mb-4">Upload a Memory</h2>
      <input
        type="file"
        accept="image/*,video/*,audio/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="block w-full mb-4 text-sm"
      />
      <button
        onClick={handleUpload}
        disabled={!file || uploading}
        className="bg-accent hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium disabled:opacity-50"
      >
        {uploading ? 'Storing...' : 'Store Forever'}
      </button>
    </div>
  )
}