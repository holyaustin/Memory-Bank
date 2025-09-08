'use client'

import { useState } from 'react'

export default function MemoryWill() {
  const [heir, setHeir] = useState('')
  const [unlock, setUnlock] = useState('date')
  const [date, setDate] = useState('')

  const save = () => {
    alert(`Will saved: ${heir} gets access ${date ? 'on ' + date : 'after your passing'}`)
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow mt-6">
      <h3 className="text-lg font-semibold text-primary mb-4">Memory Will</h3>
      <input
        placeholder="Heir email"
        value={heir}
        onChange={(e) => setHeir(e.target.value)}
        className="w-full border rounded p-2 mb-4"
      />
      <select
        value={unlock}
        onChange={(e) => setUnlock(e.target.value)}
        className="w-full border rounded p-2 mb-4"
      >
        <option value="death">After my passing</option>
        <option value="date">On a specific date</option>
      </select>
      {unlock === 'date' && (
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border rounded p-2 mb-4"
        />
      )}
      <button
        onClick={save}
        className="bg-primary text-white px-4 py-2 rounded font-medium"
      >
        Save Will
      </button>
    </div>
  )
}