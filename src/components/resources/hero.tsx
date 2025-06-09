import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <section className="bg-[#537D5D] text-[#FDFCD6] py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold">Publications</h2>
            <p
              className="font-[500] text-[26px] leading-[50px] tracking-[0%]"
              style={{ fontFamily: "Karla" }}
            >
              Access our latest reports, whitepapers, and case studies covering topics like BRSR, ESG frameworks, CSR
              impact, and policy interventions. These publications offer data-driven insights and practical guidance for
              decision-makers and development professionals.
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="bg-yellow-100 text-green-800 w-lg h-lg px-8 py-3 text-base font-medium"
            >
              View All Publications
            </Button>
          </div>

          {/* Right Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="overflow-hidden">
                <Image
                  src="/resources/27.png"
                  alt="Hand pointing at business icons"
                  width={300}
                  height={170}
                  className="w-full h-auto max-w-full object-cover rounded"
                />
              </div>
              <div className="overflow-hidden">
                <Image
                  src="/resources/28.png"
                  alt="Business professionals reviewing documents"
                  width={300}
                  height={170}
                  className="w-full h-auto max-w-full object-cover rounded"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="overflow-hidden">
                <Image
                  src="/resources/29.png"
                  alt="Business documents and charts on desk"
                  width={300}
                  height={170}
                  className="w-full h-auto max-w-full object-cover rounded"
                />
              </div>
              <div className="overflow-hidden">
                <Image
                  src="/resources/30.png"
                  alt="Businessman holding blue folder"
                  width={300}
                  height={170}
                  className="w-full h-auto max-w-full object-cover rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
