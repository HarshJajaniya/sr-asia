import Image from "next/image"
import Link from "next/link"

const SrAsiaWork = () => {
  return (
    <div className="max-w-5xl mx-auto py-8 px-8 md:px-12">
      {/* Our Work on the Ground section with line and dot */}
      <div className="relative mb-8">
        <div className="flex items-center">
          <h2 className="text-2xl font-semibold text-green-800 mr-4">Our Work on the Ground</h2>
          <div className="relative">
            <div className="w-5 h-5 rounded-full bg-green-800 z-10 relative"></div>
            <div className="absolute top-1/2 left-5 h-0.5 bg-green-800 w-[calc(100vw-5rem)]"></div>
          </div>
        </div>
      </div>

      {/* Project cards with reduced width and more spacing */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 px-4">
        {/* Card 1 */}
        <div className="bg-white rounded overflow-hidden shadow-sm">
          <div className="h-44 overflow-hidden">
            <Image
              src="/7.png"
              alt="People reviewing documents"
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium mb-1">Carrying out Need Assessment of IREDA's CSR initiative, Him...</h3>
            <p className="text-sm text-gray-600 mb-4">
              SR Asia collaborated with Indraprastha Gas Limited (IGL) to conduct an advisory, monitoring and evaluation
              (M&E), impact assessment...
            </p>
            <div className="w-full">
              <Link
                href="#"
                className="block text-center py-2 px-4 bg-green-700 hover:bg-green-800 text-white rounded w-full"
              >
                Read more
              </Link>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded overflow-hidden shadow-sm">
          <div className="h-44 overflow-hidden">
            <Image
              src="/8.png"
              alt="Hands joining together with green leaves"
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium mb-1">Advisory, M & E ,Impact Assessment of CSR projects i...</h3>
            <p className="text-sm text-gray-600 mb-4">
              SR Asia collaborated with Indraprastha Gas Limited (IGL) to conduct an advisory, monitoring and evaluation
              (M&E), impact assessment...
            </p>
            <div className="w-full">
              <Link
                href="#"
                className="block text-center py-2 px-4 bg-green-800 hover:bg-green-900 text-white rounded w-full"
              >
                Read more
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* View All Projects button */}
      <div className="flex justify-center mb-12">
        <Link href="#" className="py-2 px-8 bg-green-900 hover:bg-green-950 text-white rounded text-center">
          View All Projects
        </Link>
      </div>

      {/* The SR Asia Footprint section with line and dot */}
      <div className="relative">
        <div className="flex items-center">
          <div className="relative mr-4">
            <div className="w-5 h-5 rounded-full bg-green-800 z-10 relative"></div>
            <div className="absolute top-1/2 right-5 h-0.5 bg-green-800 w-[calc(100vw-5rem)]"></div>
          </div>
          <h2 className="text-2xl font-semibold text-green-800">The SR Asia Footprint</h2>
        </div>
      </div>
    </div>
  )
}

export default SrAsiaWork
