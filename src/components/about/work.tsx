"use client"

import Image from "next/image"

export default function Component() {
  return (
    <div className="min-h-screen bg-white px-4 md:px-8 py-8">
  <div className="max-w-7xl mx-auto">
    {/* Heading Section */}
    <div className="relative flex items-center justify-center mb-6 w-full">
      {/* Line and dot on the left */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center w-[35vw]">
        <div className="h-px bg-[#004D40] flex-grow"></div>
        <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#004D40] z-20 ml-2"></div>
      </div>

      {/* Centered heading */}
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#004D40] bg-white px-2 text-center z-10">
        Who we work with
      </h2>
    </div>

    {/* Image Grid Section */}
    <div className="flex justify-center items-center">
  <img
    src="/26.png"
    alt="who we work with image"
    className="max-w-full h-auto"
  />
</div>

  </div>
</div>

)}
