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
    News & Media
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
    src="/14.png"
    alt="People reviewing documents"
    width={500}
    height={300}
    className="w-full h-full object-cover"
  />
</div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Ganga Express Way: Land acquisition will be done after the survey of SR Asia, agency has been selected...
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                The administration is making all efforts for the Ganga Expressway. But in Meerut district, 28 hectares of land out of 181 hectares could not be purchased due to disputes with farmers. Now this land will have to be acquired. The process has started...
              </p>
              <Link
                href="#"
                className="block text-center py-2 px-4 bg-[#00966E] hover:bg-[#FDFCD6] hover:text-[#00966E] text-white  font-medium"
              >
                Read more
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg border border-gray-200 overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl">
             <div className="overflow-hidden h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72">
              <Image
                src="/15.png"
                alt="Hands joining together with green leaves"
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
               Ashshash Project, Social Responsibility (SR) Asia pledges solidarity for survivors of human trafficking...
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Winrock International's Ashshash Project supported by the Swiss Embassy and Social Responsibility Asia (SR ASIA) have teamed up to affirm the mobilisation of resources...
              </p>
              <Link
                href="#"
                className="block text-center py-2 px-4 bg-[#00966E] hover:bg-[#FDFCD6] hover:text-[#00966E] text-white font-medium"
              >
                Read more
              </Link>
            </div>
          </div>
        </div>

        {/* View All Projects Button */}
      
      </div>

      {/* The SR Asia Footprint section */}
      <div className="relative mt-16">
        <div className="flex items-center px-4 md:px-6">
          <div className="relative mr-4">
            <div className="ml-[40vw] w-5 h-5 rounded-full bg-[#004D40] z-10 relative"></div>
            <div className="absolute top-1/2 right-5 h-0.5 bg-[#004D40] w-[100vw]"></div>
          </div>
          <h2 className="text-2xl font-semibold text-[#004D40]">Our People</h2>
        </div>
      </div>
    </div>
  )
}

export default SrAsiaWork