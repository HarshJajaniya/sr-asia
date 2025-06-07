import Image from "next/image"
import { Button } from "@/components/ui/button"

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
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-medium" size="lg">
            View All Projects
          </Button>
          <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-medium" size="lg">
            Read Case Studies
          </Button>
        </div>
      </div>
    </div>
  )
}
