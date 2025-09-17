// src/components/UploadCard.tsx
'use client';

import { useState } from 'react';

export default function UploadCard() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [cid, setCid] = useState<string | null>(null);

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);
    setCid(null);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Upload failed');
      }

      setCid(data.pieceCid);
      setFile(null);
      alert('✅ Memory stored permanently on Filecoin!');
    } catch (err: unknown) {
      if (err instanceof Error) {
        alert('Upload failed: ' + err.message);
      } else {
        alert('Upload failed: Unknown error');
      }
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold text-blue-900 mb-4">Upload a Memory</h2>
      <p className="text-gray-600 mb-4">Photo, video, voice note, or story.</p>

      <input
        type="file"
        accept="image/*,video/*,audio/*,text/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="block w-full mb-4 text-sm"
      />

      <button
        onClick={handleUpload}
        disabled={!file || uploading}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium disabled:opacity-50"
      >
        {uploading ? 'Storing on Filecoin...' : 'Store Forever'}
      </button>

      {cid && (
        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded">
          <p className="text-sm text-green-800">
            <strong>✅ Verified & Permanent</strong>
            <br />
            <code className="text-xs break-all">{cid}</code>
          </p>
          <p className="text-xs text-green-600 mt-1">
            This memory is PDP-proofed and stored on Filecoin.
          </p>
        </div>
      )}
    </div>
  );
}