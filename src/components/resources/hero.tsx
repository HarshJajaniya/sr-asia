import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <section className="bg-[#537D5D] text-[#FDFCD6] py-12 sm:py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[Karla]">
              Publications
            </h2>
            <p className="font-medium text-base sm:text-lg lg:text-xl leading-relaxed font-[Karla]">
              Access our latest reports, whitepapers, and case studies covering topics like BRSR, ESG frameworks, CSR
              impact, and policy interventions. These publications offer data-driven insights and practical guidance for
              decision-makers and development professionals.
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="bg-yellow-100 text-green-800 px-6 py-3 text-base font-semibold"
            >
              View All Publications
            </Button>
          </div>

          {/* Right Column - Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            {["27", "28", "29", "30"].map((img, idx) => (
              <div className="overflow-hidden rounded" key={idx}>
                <Image
                  src={`/resources/${img}.png`}
                  alt={`Publication ${idx + 1}`}
                  width={300}
                  height={170}
                  className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105 rounded"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
