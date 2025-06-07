"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto relative">

        {/* Top Section */}
        <div className="flex justify-between items-start mb-10">
          <div className="w-1/3 relative">
            {/* Arrow top-left */}
            <div className="absolute top-15 -left-6 w-10 h-10">
              <Image src="/arrow-left.png" alt="Arrow" width={50} height={50} />
            </div>

            <h1 className="pl-8 text-2xl font-bold text-green-700 mb-2">PSU</h1>
            <p className="pl-8 text-xs text-gray-700 leading-relaxed">
              Public Sector Undertakings (PSUs) are government-owned corporations or companies in which the majority (51%
              or more) of shares are held by the government — either the Central Government, State Governments, or both.
            </p>
          </div>

          <div className="relative mb-12 max-w-5xl mx-auto">
          <div className="relative flex items-center mb-10 max-w-screen-xl ">
    <h2 className="text-2xl font-bold text-[#004D40] mx-auto bg-white px-4 z-10">
        Who we work with
    </h2>
    <div
    className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center space-x-2"
    style={{ width: '25vw', minWidth: '150px' }} // Ensure line container has width
    >
     <div className="w-4 h-4 rounded-full bg-[#004D40] z-20"></div>
     <div className="h-px bg-[#004D40] flex-grow"></div>
  </div>
</div>
</div>
      
        </div>

        {/* Image Grid */}
        <div className="pl-16 pr-16 grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="border-4 border-white shadow-md">
              <Image
                src="/21.png"
                alt="PSU Collage"
                width={500}
                height={300}
                className="w-full h-[240px] object-cover"
              />
            </div>
            <div className="relative border-4 border-white shadow-md">
              {/* Arrow bottom-left */}
              <div className="absolute -left-16 top-3/4 mt-8 -translate-y-1/2 w-8 h-8">
                <Image src="/arrow-right.png" alt="Arrow" width={50} height={50} />
              </div>
              <Image
                src="/22.png"
                alt="Government Building"
                width={500}
                height={300}
                className="w-full h-[240px] object-cover"
              />
            </div>
          </div>

          <div className="relative border-4 border-white shadow-md">
            {/* Arrow bottom-right */}
            <div className="absolute -right-16 top-3/4 mt-12 -translate-y-1/2 w-8 h-8">
              <Image src="/arrow-bottom.png" alt="Arrow" width={50} height={50} />
            </div>
            <Image
              src="/23.png"
              alt="Corporate Skyscraper"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bottom Labels */}
        <div className="grid grid-cols-2 mt-6">
          <div className="text-left">
            <h3 className="pl-8 text-xl font-semibold text-green-700 mb-1">Government</h3>
            <p className="text-xs pl-8 text-gray-700 max-w-md">
              We collaborate with various central and state government departments, ministries, and public agencies to
              support evidence-based policymaking, program implementation, and social development initiatives.
            </p>
          </div>

          <div className="text-right">
            <h3 className="pr-8 text-xl font-semibold text-green-700 mb-1">Corporate</h3>
            <p className="text-xs pr-8 text-gray-700 max-w-md float-right">
              SR Asia partners with leading public and private sector corporations to help them align their business
              strategies with national development goals and global sustainability frameworks.
            </p>
          </div>
        </div>

        {/* Floating Chat Bubble */}
      
      </div>
    </div>
  )
}
