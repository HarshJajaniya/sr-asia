"use client"

import { useEffect, useState } from "react"
import axios from "axios"

interface EventType {
  _id: string
  title: string
  description: string
  image?: string
}

export default function AdminPage() {
  const [events, setEvents] = useState<EventType[]>([])
  const [form, setForm] = useState({ title: "", description: "" })
  const [imageFile, setImageFile] = useState<File | null>(null)

  const fetchEvents = () => {
    axios.get("https://srasia-backend.onrender.com/api/events")
      .then(res => setEvents(res.data))
      .catch(err => console.error(err))
  }

  useEffect(() => {
    fetchEvents()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const data = new FormData()
    data.append("title", form.title)
    data.append("description", form.description)
    if (imageFile) data.append("image", imageFile)

    await axios.post("https://srasia-backend.onrender.com/api/events", data)
    setForm({ title: "", description: "" })
    setImageFile(null)
    fetchEvents()
  }

  const handleDelete = async (id: string) => {
    await axios.delete(`https://srasia-backend.onrender.com/api/events/${id}`)
    fetchEvents()
  }

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <h2 className="text-4xl text-[#537D5D] font-semibold text-center mb-10">Admin: Add New Event</h2>
      
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6 bg-gray-50 p-6 rounded-lg shadow">
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          placeholder="Event Title"
          required
          className="w-full border p-2 rounded"
        />
        <textarea
          name="description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          placeholder="Event Description"
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files?.[0] || null)}
          className="w-full"
        />
        <button type="submit" className="bg-[#537D5D] text-white px-4 py-2 rounded">
          Add Event
        </button>
      </form>

      {/* Event Preview (same format as display page) */}
      <div className="mt-16">
        <h2 className="text-3xl font-medium text-[#537D5D] mb-6 text-center">Preview Events</h2>
        <div className="overflow-x-auto">
          <div className="flex gap-6 px-4 md:px-8 lg:px-16 justify-center">
            {events.map((event, index) => (
              <div
                key={event._id}
                className="border border-teal-800 overflow-hidden w-[320px] min-w-[280px] group relative rounded"
              >
                <div className="h-40 relative bg-gray-200">
                  <img
                    src={event.image || `/insights/${(index % 3) + 1}.png`}
                    alt={event.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="bg-[#537D5D] text-white p-4 relative">
                  <h3 className="text-base font-medium mb-1">{event.title}</h3>
                  <p className="text-xs mb-4">{event.description}</p>
                  <button
                    onClick={() => handleDelete(event._id)}
                    className="absolute bottom-4 right-4 bg-red-200 text-red-800 text-xs px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
