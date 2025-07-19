'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface EventType {
  _id: string
  title: string
  description: string
  image: string
}

export default function Page() {
  const [events, setEvents] = useState<EventType[]>([])

  const fetchEvents = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/events')
      setEvents(res.data)
    } catch (err) {
      console.error('Axios fetch failed:', err)
    }
  }

  const deleteEvent = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/events/${id}`)
      fetchEvents()
    } catch (err) {
      console.error('Delete failed:', err)
    }
  }

  useEffect(() => {
    fetchEvents()
  }, [])

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#537D5D] text-center md:text-left">
            Insights &amp; Events
          </h2>
          <div className="hidden md:flex items-center gap-2 flex-1">
            <div className="h-4 w-4 rounded-full bg-[#537D5D]"></div>
            <div className="h-0.5 w-full bg-[#537D5D]"></div>
          </div>
        </div>

        {/* Event Cards */}
        <div className="overflow-x-auto">
          <div className="flex gap-6 px-4 md:px-8 lg:px-16 justify-center">
            {events.map((event) => (
              <div
                key={event._id}
                className="w-[320px] min-w-[280px] group relative rounded overflow-hidden bg-[#537D5D] text-white"
              >
                {/* Image */}
                <div className="h-40 relative">
                  <Image
                    src={`http://localhost:5000${event.image}`}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>

              {/* Info */}
              <div className="p-4 flex flex-col justify-between h-[220px]">
                <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                <p className="text-sm line-clamp-5">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  )
}
