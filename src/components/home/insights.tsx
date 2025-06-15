"use client"

import { useState } from "react"
import Image from "next/image"
import { useRef } from "react"

import Map from "./india-map"

// gsap.registerPlugin(ScrollTrigger)

export default function Page() {
 
  const mapContainerRef = useRef(null)

  // Add state management for the map
  const [activeState, setActiveState] = useState<string | null>(null)

  const handleStateHover = (stateId: string) => {
    setActiveState(stateId)
  }

  const handleStateLeave = () => {
    setActiveState(null)
  }



  return (
    <div className="w-full bg-white">
      {/* Memberships & Global Alliances Section */}
      <div className="relative">

        <h2 className="text-3xl font-medium text-center text-[#537D5D] mb-12" >
          Memberships &amp; Global Alliances
        </h2>

        {/* Map container with proper dimensions and animation */}
        <div
  ref={mapContainerRef}
  className="relative w-full max-w-4xl h-auto mx-auto"
>
  <Map />
</div>

        {/* Description */}

        {/* Insights & Events Section */}
        <div className="relative mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="flex-1 hidden md:block"></div>
            <h2 className="text-4xl font-medium text-[#537D5D] text-center mx-4" >
              Insights &amp; Events
            </h2>
            <div className="flex-1 flex items-center">
              <div className="h-4 w-4 rounded-full bg-[#537D5D]"></div>
              <div className="h-0.5 flex-1 bg-[#537D5D]"></div>
            </div>
          </div>

          <p className="text-lg text-[#9EBC8A] mb-12 text-center">
            Explore our latest resources and stay updated on what&apos;s coming next.
          </p>

          {/* Conference Cards - Horizontal Scroll */}
          <div className="overflow-x-auto">
  <div className="flex flex-col md:flex-row gap-6 px-4 md:px-8 lg:px-16 justify-center">
    {[
      {
        img: "/insights/1.png",
        title: "International Conference Responsible Business Co...",
        desc: "Social Responsibility Asia (SR Asia) is a professional network of SR professionals based in ...",
      },
      {
        img: "/insights/2.png",
        title: "International Conference on Socially...",
        desc: "Social Responsibility is an important facet of corporate strategy. Various reports of economic ...",
      },
      {
        img: "/insights/3.png",
        title: "Conference on creating buy-in for social respon...",
        desc: "Socially responsible products and services have always been in demands from developed world...",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="border border-teal-800 overflow-hidden w-full md:w-[300px]"
      >
        <div className="h-40 relative">
          <Image src={`${item.img}?height=200&width=400`} alt={item.title} fill className="object-cover" />
        </div>
        <div className="bg-[#537D5D] text-white p-4 flex flex-col justify-between h-full relative group">
          <div>
            <h3 className="text-base font-medium mb-1">{item.title}</h3>
            <p className="text-xs mb-4">{item.desc}</p>
          </div>
          <button
            className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 bg-[#F5F5DC] text-[#537D5D] text-sm px-3 py-1 rounded transition-opacity duration-300"
          >
            Register Now
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

        </div>
      </div>
    </div>
  )
}

