import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="w-full mx-auto bg-white">
      {/* Header */}
      <div className="bg-[#537D5D] text-white text-center py-4">
        <h2 className="text-2xl font-semibold">Our Work in Action</h2>
      </div>

      {/* Main Content */}
      <div className="">
        {/* Team Photo */}
        <div className="mb-6">
          <Image
            src="/workk.png"
            alt="Team members holding certificates in a conference room"
            width={1440}
            height={710}
            className="w-full h-auto rounded-lg shadow-sm"
          />
        </div>

        {/* Description Text */}
        <div className="text-center mb-8">
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
           Explore how SR Asia’s initiatives are driving real-world change. From CSR projects with PSUs to grassroots research studies, our portfolio highlights diverse, high-impact efforts across Asia.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="p-8 pl-16 pr-16 w-full flex flex-col sm:flex-row gap-4 justify-center">
          <Link
                href="#"
                className=" w-2xl block text-center py-2 px-4 bg-[#00966E] hover:bg-[#FDFCD6] hover:text-[#00966E] text-white  font-medium"
              >
                View All Projects
              </Link>
               <Link
                href="#"
                className="w-2xl block text-center py-2 px-4 bg-[#00966E] hover:bg-[#FDFCD6] hover:text-[#00966E] text-white  font-medium"
              >
                Read Case Studies
              </Link>
        </div>
      </div>
    </div>
  )
}
