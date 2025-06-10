"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import axios from "axios"

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
      const res = await axios.get("http://localhost:5000/api/events")
      setEvents(res.data)
    } catch (err) {
      console.error("Axios fetch failed:", err)
    }
  }

  const deleteEvent = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/events/${id}`)
      fetchEvents() // refresh events after deletion
    } catch (err) {
      console.error("Delete failed:", err)
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
                className="border border-teal-800 overflow-hidden w-[320px] min-w-[280px] group relative rounded"
              >
                {/* Image */}
                <div className="h-40 relative bg-gray-200">
                  <Image
                    src={`http://localhost:5000${event.image}`}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Info Section */}
                <div className="bg-[#537D5D] text-white p-4 relative">
                  <h3 className="text-base font-medium mb-1">{event.title}</h3>
                  <p className="text-xs mb-4">{event.description}</p>

                  

                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
