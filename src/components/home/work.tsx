import Image from "next/image"
import Link from "next/link"

const SrAsiaWork = () => {
  return (
    <div className="max-w-full">
      {/* Outer Card Section */}
      <div className="bg-gray-50 shadow-xl rounded-2xl my-12 px-4 md:px-6 py-10">
        {/* Section Header */}
        <div className="relative mb-12 max-w-5xl mx-auto">
          <div className="relative flex items-center mb-10 max-w-screen-xl ">
    <h2 className="text-2xl font-bold text-[#004D40] mx-auto bg-white px-4 z-10">
    Our Work on the Ground
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

        {/* Centered Grid of Cards */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-lg border border-gray-200 overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl">
            <div className="overflow-hidden h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72">
  <Image
    src="/7.png"
    alt="People reviewing documents"
    width={500}
    height={300}
    className="w-full h-full object-cover"
  />
</div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Carrying out Need Assessment of IREDA's CSR initiative, Him...
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                SR Asia collaborated with Indraprastha Gas Limited (IGL) to conduct an advisory, monitoring and evaluation
                (M&E), impact assessment...
              </p>
              <Link
                href="#"
                className="block text-center py-2 px-4 bg-green-700 hover:bg-green-800 text-white rounded-md font-medium"
              >
                Read more
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg border border-gray-200 overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl">
             <div className="overflow-hidden h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72">
              <Image
                src="/8.png"
                alt="Hands joining together with green leaves"
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Advisory, M & E ,Impact Assessment of CSR projects i...
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                SR Asia collaborated with Indraprastha Gas Limited (IGL) to conduct an advisory, monitoring and evaluation
                (M&E), impact assessment...
              </p>
              <Link
                href="#"
                className="block text-center py-2 px-4 bg-green-800 hover:bg-green-900 text-white rounded-md font-medium"
              >
                Read more
              </Link>
            </div>
          </div>
        </div>

        {/* View All Projects Button */}
        <div className="flex justify-center mt-12">
          <Link
            href="#"
            className="py-3 px-8 bg-[#537D5D] hover:bg-green-950 text-white text-lg font-medium transition"
          >
            View All Projects
          </Link>
        </div>
      </div>

      {/* The SR Asia Footprint section */}
      <div className="relative mt-16">
        <div className="flex items-center px-4 md:px-6">
          <div className="relative mr-4">
            <div className="ml-[40vw] w-5 h-5 rounded-full bg-[#004D40] z-10 relative"></div>
            <div className="absolute top-1/2 right-5 h-0.5 bg-[#004D40] w-[100vw]"></div>
          </div>
          <h2 className="text-2xl font-semibold text-[#004D40]">The SR Asia Footprint</h2>
        </div>
      </div>
    </div>
  )
}

export default SrAsiaWork
