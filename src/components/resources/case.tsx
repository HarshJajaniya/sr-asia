import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="bg-gray-50 py-16">
      <div
        className=""
        style={{
          boxShadow: "0px 0px 10px 1px #78787840", // ✅ Box shadow
        }}
      >
        <div className="px-16 grid md:grid-cols-2 gap-8 items-center">
          {/* Content Section */}
          <div className="space-y-6">
            <h2
              className="text-[#4d7c4d]"
              style={{
                fontFamily: "Karla",
                fontWeight: "700",
                fontSize: "44px",
                letterSpacing: "0%",
              }}
            >
              CASE STUDY - CORPORATE SOCIAL RESPONSIBILITY (CSR)
            </h2>

            <p
              className="text-gray-700"
            
            >
            THDC India Limited is a Joint Venture of Govt. of India and Govt. of Uttar Pradesh. The Equity is shared in the ratio of 75:25 between Govt. of India and Govt. of Uttar Pradesh. The Company was incorporated in July’ 88 to develop, operate & maintain the 2400 MW Tehri Hydro Power Complex and other hydro projects. THDCIL is a Mini Ratna Category-I and Schedule ‘A’ CPSE
            </p>

            <Button
              variant="secondary"
              size="lg"
              className="bg-[#2E7D32] text-white w-lg h-lg px-8 py-3 text-base font-medium"
            >
             Read the Full Case Study
            </Button>
          </div>

          {/* Image Section */}
          <div className="relative">
            <Image
              src="/resources/32.png"
              alt="Team collaboration - hands coming together over puzzle pieces"
              width={500}
              height={300}
              className="py-16"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
