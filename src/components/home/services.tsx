import Image from "next/image"

export default function ServicesSection() {
  return (
    <div className="w-full">
      {/* Key Services Section */}
      <div className="py-10 px-4 bg-white">
        <h2 className="text-center text-3xl font-semibold text-[#005540] mb-8">Key Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {/* Service Card 1 */}
          <div className="bg-[#fdf9e2] p-6 flex flex-col items-center justify-center aspect-square">
            <div className="w-16 h-16 flex items-center justify-center mb-2">
              <Image
                src="/icons/research.png"
                alt="Research & Desk Studies icon"
                width={48}
                height={48}
                className="w-12 h-12"
              />
            </div>
            <p className="text-[#005540] text-center font-medium text-sm">
              Research & Desk
              <br />
              Studies
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="bg-[#fdf9e2] p-6 flex flex-col items-center justify-center aspect-square">
            <div className="w-16 h-16 flex items-center justify-center mb-2">
              <Image
                src="/icons/third-party.png"
                alt="Third-Party Evaluations icon"
                width={48}
                height={48}
                className="w-12 h-12"
              />
            </div>
            <p className="text-[#005540] text-center font-medium text-sm">
              Third-Party
              <br />
              Evaluations
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="bg-[#fdf9e2] p-6 flex flex-col items-center justify-center aspect-square">
            <div className="w-16 h-16 flex items-center justify-center mb-2">
              <Image
                src="/icons/esg.png"
                alt="ESG Reporting icon"
                width={48}
                height={48}
                className="w-12 h-12"
              />
            </div>
            <p className="text-[#005540] text-center font-medium text-sm">ESG Reporting</p>
          </div>

          {/* Service Card 4 */}
          <div className="bg-[#fdf9e2] p-6 flex flex-col items-center justify-center aspect-square">
            <div className="w-16 h-16 flex items-center justify-center mb-2">
              <Image
                src="/icons/socio.png"
                alt="Socio-Economic Studies icon"
                width={48}
                height={48}
                className="w-12 h-12"
              />
            </div>
            <p className="text-[#005540] text-center font-medium text-sm">
              Socio-Economic
              <br />
              Studies
            </p>
          </div>

          {/* Service Card 5 */}
          <div className="bg-[#fdf9e2] p-6 flex flex-col items-center justify-center aspect-square">
            <div className="w-16 h-16 flex items-center justify-center mb-2">
              <Image
                src="/icons/skill-development.png"
                alt="Skill Development icon"
                width={48}
                height={48}
                className="w-12 h-12"
              />
            </div>
            <p className="text-[#005540] text-center font-medium text-sm">Skill Development</p>
          </div>

          {/* Service Card 6 */}
          <div className="bg-[#fdf9e2] p-6 flex flex-col items-center justify-center aspect-square">
            <div className="w-16 h-16 flex items-center justify-center mb-2">
              <Image
                src="/icons/land.png"
                alt="Land Acquisition icon"
                width={48}
                height={48}
                className="w-12 h-12"
              />
            </div>
            <p className="text-[#005540] text-center font-medium text-sm">Land Acquisition</p>
          </div>

          {/* Service Card 7 */}
          <div className="bg-[#fdf9e2] p-6 flex flex-col items-center justify-center aspect-square">
            <div className="w-16 h-16 flex items-center justify-center mb-2">
              <Image
                src="/icons/policy.png"
                alt="Government policy & programs icon"
                width={48}
                height={48}
                className="w-12 h-12"
              />
            </div>
            <p className="text-[#005540] text-center font-medium text-sm">
              Govt. policy &<br />
              programs
            </p>
          </div>

          {/* Service Card 8 */}
          <div className="bg-[#fdf9e2] p-6 flex flex-col items-center justify-center aspect-square">
            <div className="w-16 h-16 flex items-center justify-center mb-2">
              <Image
                src="/icons/pmc.png"
                alt="PMC & advisory icon"
                width={48}
                height={48}
                className="w-12 h-12"
              />
            </div>
            <p className="text-[#005540] text-center font-medium text-sm">PMC & advisory</p>
          </div>
        </div>
      </div>

      {/* Our Focus Areas Section */}
      <div className="py-10 px-4 bg-[#005540] border-t-4 border-b-4 border-[#0099cc]">
        <h2 className="text-center text-3xl font-semibold text-white mb-8">Our Focus Areas</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto mb-8">
          <div className="aspect-square overflow-hidden">
            <Image
              src="/3.png"
              alt="People in a meeting discussing charts"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square overflow-hidden">
            <Image
              src="/4.png"
              alt="People reviewing documents"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square overflow-hidden">
            <Image
              src="/5.png"
              alt="People working with digital devices"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square overflow-hidden">
            <Image
              src="/6.png"
              alt="Skills development whiteboard"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button className="bg-[#3c8c40] hover:bg-[#2d6b30] text-white font-medium py-3 px-8 rounded transition-colors">
            Explore Our Work
          </button>
        </div>
      </div>
    </div>
  )
}
