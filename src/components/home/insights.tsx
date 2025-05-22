"use client"

import { useState } from "react"
import Image from "next/image"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Map } from "./india-map"

gsap.registerPlugin(ScrollTrigger)

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
        {/* Half star decoration */}
        <div className="absolute left-0 top-12">
          <Image src="/Star.png" alt="Decorative star" width={100} height={100} />
        </div>

        <h2 className="text-3xl font-medium text-center text-[#537D5D] mb-12" >
          Memberships &amp; Global Alliances
        </h2>

        {/* Map container with proper dimensions and animation */}
        <div ref={mapContainerRef} className="relative w-full max-w-4xl mx-auto h-[500px] mb-24">
          <Map activeState={activeState} onStateHover={handleStateHover} onStateLeave={handleStateLeave} />

          {/* State information display */}
          {activeState && (
            <div className="absolute top-4 right-4 bg-white/90 border border-[#537D5D] p-4 rounded-md shadow-md max-w-xs">
              <h3 className="text-[#537D5D] font-medium mb-2">{activeState}</h3>
              <p className="text-sm text-gray-600">View client testimonials and partnerships from this region.</p>
            </div>
          )}
        </div>

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

          {/* Conference Cards */}
          <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                  className="border border-teal-800 overflow-hidden"
                 
                >
                  <div className="h-40 relative">
                    <Image src={`${item.img}?height=200&width=400`} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="bg-[#537D5D] text-white p-3">
                    <h3 className="text-base font-medium mb-1">{item.title}</h3>
                    <p className="text-xs">{item.desc}</p>
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

