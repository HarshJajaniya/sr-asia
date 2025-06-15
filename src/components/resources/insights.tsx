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
      const res = await axios.get('https://srasia-backend.onrender.com/api/events')
      setEvents(res.data)
    } catch (err) {
      console.error('Axios fetch failed:', err)
    }
  }

  const deleteEvent = async (id: string) => {
    try {
      await axios.delete(`https://srasia-backend.onrender.com/api/events/${id}`)
      fetchEvents()
    } catch (err) {
      console.error('Delete failed:', err)
    }
  }

  useEffect(() => {
    fetchEvents()
  }, [])

  return (
    <div className="w-full bg-white">
      <div className="relative mb-16">
        {/* Header */}
        <div className="flex items-center justify-center mb-6">
          <div className="flex-1 hidden md:block"></div>
          <h2 className="text-4xl font-medium text-[#537D5D] text-center mx-4">
            Insights &amp; Events
          </h2>
          <div className="flex-1 flex items-center">
            <div className="h-4 w-4 rounded-full bg-[#537D5D]"></div>
            <div className="h-0.5 flex-1 bg-[#537D5D]"></div>
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
                    src={`https://srasia-backend.onrender.com${event.image}`}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Info Section */}
                <div className="p-4 h-[200px] flex flex-col justify-between">
                  <h3 className="text-base font-semibold mb-1">{event.title}</h3>
                  <p className="text-xs line-clamp-5">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
