import Image from "next/image"

export default function StatsSection() {
  return (
    <div className="relative w-full py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
      


      {/* Stats Grid */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        

        

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
            <h2 className="text-4xl font-bold text-[#004D40]">80+</h2>
            <p className="text-sm text-[#004D40] mt-2">CSR/ESG Clients Served</p>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#004D40]">50,000+</h2>
          <p className="text-sm text-[#004D40] mt-2">Field Research & Surveys</p>
        </div>

        {/* Partner Logos */}
        
      </div>

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


    </div>
    
  )
}
