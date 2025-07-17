"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"

interface Place {
  name: string
  imageSrc: string
}

const places: Place[] = [
  { name: "INDIA", imageSrc: "/flags/India.png" },
  { name: "BANGLADESH", imageSrc: "/flags/Bangladesh.png" },
  { name: "INDONESIA", imageSrc: "/flags/Indonesia.png" },
  { name: "MALAYSIA", imageSrc: "/flags/Malysia.png" },
  { name: "PHILIPINES", imageSrc: "/flags/PHILLIPPINES.png" },
  { name: "VIETNAM", imageSrc: "/flags/Vietnam.png" },
]

export default function PresenceCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300 // Adjust this value as needed
      if (direction === "left") {
        scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" })
      } else {
        scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
      }
    }
  }

  return (
    <section className="w-full py-8 md:py-12 lg:py-16 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center uppercase mb-8">PRESENCE ACROSS ASIA</h2>
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 gap-4 no-scrollbar"
          >
            {places.map((place, index) => (
              <div
                key={index}
                className="relative flex-none w-[calc(100vw-2rem)] md:w-[400px] lg:w-[500px] h-[250px] md:h-[300px] rounded-lg overflow-hidden shadow-lg snap-center"
              >
                <Image
                  src={place.imageSrc || "/placeholder.svg"}
                  alt={`View of ${place.name}`}
                  fill
                  style={{ objectFit: "cover" }}
                  className="z-0"
                />
                <div className="absolute top-4 left-4 bg-[#42a5f5] text-white px-4 py-2 rounded-full text-lg font-semibold z-10">
                  {place.name}
                </div>
              </div>
            ))}
          </div>
          {/* Add navigation buttons here */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 z-20 hidden md:block"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6 text-gray-800" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 z-20 hidden md:block"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6 text-gray-800" />
          </button>
        </div>
      </div>
    </section>
  )
}
