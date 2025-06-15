import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="bg-gray-50 py-12 sm:py-16">
      <div
        className="mx-auto max-w-7xl bg-white rounded-md overflow-hidden"
        style={{
          boxShadow: "0px 0px 10px 1px #78787840",
        }}
      >
        <div className="px-6 sm:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Content Section */}
          <div className="space-y-6 py-10 md:py-16">
            <h2 className="text-[#4d7c4d] text-3xl sm:text-4xl md:text-[44px] leading-tight font-bold font-[Karla]">
              CASE STUDY - CORPORATE SOCIAL RESPONSIBILITY (CSR)
            </h2>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-[Karla]">
              THDC India Limited is a Joint Venture of Govt. of India and Govt. of Uttar Pradesh. The Equity is shared
              in the ratio of 75:25 between Govt. of India and Govt. of Uttar Pradesh. The Company was incorporated in
              July 1988 to develop, operate & maintain the 2400 MW Tehri Hydro Power Complex and other hydro projects.
              THDCIL is a Mini Ratna Category-I and Schedule ‘A’ CPSE.
            </p>

            <Button
              variant="secondary"
              size="lg"
              className="bg-[#2E7D32] hover:bg-[#256429] text-white px-8 py-3 text-base font-medium transition-colors"
            >
              Read the Full Case Study
            </Button>
          </div>

          {/* Image Section */}
          <div className="py-10 md:py-16 flex justify-center">
            <Image
              src="/resources/32.png"
              alt="Team collaboration - hands coming together over puzzle pieces"
              width={500}
              height={300}
              className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
