import Image from "next/image"

export default function StatsSection() {
  return (
    <div className="relative w-full py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* World Map Background */}
      <div className="absolute w-[1000] h-[690px] inset-0 z-0">
  <Image
    src="/12.png"
    alt="World Map Background"
    fill
    className="object-contain  opacity-50"
    priority
  />
</div>


      {/* Stats Grid */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#004D40]">12+</h2>
            <p className="text-sm text-[#004D40] mt-2">Years of Experience</p>
          </div>

          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#004D40]">26+</h2>
            <p className="text-sm text-[#004D40] mt-2">States Covered in India</p>
          </div>

          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#004D40]">120+</h2>
            <p className="text-sm text-[#004D40] mt-2">Projects Implemented</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#004D40]">1.2 Million+</h2>
            <p className="text-sm text-[#004D40] mt-2">Beneficiaries Reached</p>
          </div>

          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#004D40]">30+</h2>
            <p className="text-sm text-[#004D40] mt-2">Government & PSU Collaborations</p>
          </div>

          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#004D40]">80+</h2>
            <p className="text-sm text-[#004D40] mt-2">CSR/ESG Clients Served</p>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#004D40]">50,000+</h2>
          <p className="text-sm text-[#004D40] mt-2">Field Research & Surveys</p>
        </div>

        {/* Partner Logos */}
        <div className="max-w-3xl mx-auto">
          {/* Top row - 3 logos */}
          <div className="grid grid-cols-3 gap-8 mb-12 items-center justify-items-center">
            <div className="flex flex-col items-center">
              <div className="w-28 h-28 relative mb-3">
                <Image src="/stats/1.png" alt="UNGC Logo" fill className="object-contain" />
              </div>
              <span className="text-[#004D40]font-medium text-lg">UNGC</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-28 h-16 relative mb-3">
                <Image src="/stats/2.png" alt="CII Logo" fill className="object-contain" />
              </div>
              <span className="text-[#004D40]font-medium text-lg">CII</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-28 h-28 relative mb-3">
                <Image src="/stats/3.png" alt="APO Logo" fill className="object-contain" />
              </div>
              {/* <span className="text-[#004D40]font-medium text-lg">APO</span> */}
            </div>
          </div>

          {/* Bottom row - 2 logos */}
          <div className="grid grid-cols-2 gap-8 items-center justify-items-center">
            <div className="flex flex-col items-center">
              <div className="w-28 h-28 relative mb-3">
                <Image src="/stats/4.png" alt="CTCN Logo" fill className="object-contain" />
              </div>
              <span className="text-[#004D40]font-medium text-lg">CTCN</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-28 h-16 relative mb-3">
                <Image src="/stats/5.png" alt="IPLA Logo" fill className="object-contain" />
              </div>
              <span className="text-[#004D40]font-medium text-lg">IPLA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
