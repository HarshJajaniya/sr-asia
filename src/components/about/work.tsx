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
        <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
          {/* Left Column */}
          <div className="space-y-4">
            <div className="border-4 border-white shadow-md">
              <Image
                src="/21.png"
                alt="PSU Collage"
                width={500}
                height={300}
                className="w-full h-[200px] sm:h-[240px] object-cover"
              />
            </div>
            <div className="relative border-4 border-white shadow-md">
              {/* Arrow bottom-left */}
              <div className="absolute -left-10 sm:-left-16 top-3/4 mt-8 -translate-y-1/2 w-8 h-8">
                <Image src="/arrow-right.png" alt="Arrow" width={50} height={50} />
              </div>
              <Image
                src="/22.png"
                alt="Government Building"
                width={500}
                height={300}
                className="w-full h-[200px] sm:h-[240px] object-cover"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="relative border-4 border-white shadow-md mt-4 md:mt-0">
            {/* Arrow bottom-right */}
            <div className="absolute -right-10 sm:-right-16 top-3/4 mt-12 -translate-y-1/2 w-8 h-8">
              <Image src="/arrow-bottom.png" alt="Arrow" width={50} height={50} />
            </div>
            <Image
              src="/23.png"
              alt="Corporate Skyscraper"
              width={500}
              height={500}
              className="w-full h-[300px] sm:h-full object-cover"
            />
          </div>
        </div>

        {/* Bottom Text Labels */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-6">
          <div className="text-left">
            <h3 className="text-xl font-semibold text-green-700 mb-1">Government</h3>
            <p className="text-sm text-gray-700 max-w-md">
              We collaborate with various central and state government departments, ministries, and public agencies to
              support evidence-based policymaking, program implementation, and social development initiatives.
            </p>
          </div>

          <div className="text-left md:text-right">
            <h3 className="text-xl font-semibold text-green-700 mb-1">Corporate</h3>
            <p className="text-sm text-gray-700 max-w-md md:float-right">
              SR Asia partners with leading public and private sector corporations to help them align their business
              strategies with national development goals and global sustainability frameworks.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
