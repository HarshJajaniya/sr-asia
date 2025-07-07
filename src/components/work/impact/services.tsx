import Image from "next/image"

export default function ServicesSection() {
  const services = [
    {
      image: "/workk/impact/1.png",
      title: " CSR Project",
      description:
        "At SR Asia, we champion CSR as a strategic pathway to social and environmental impact. Our end-to-end CSR program management services help organizations design, implement, and monitor initiatives that align with regulatory mandates and community development goals.",
    },
    {
      image: "/workk/impact/2.png",
      title: "Policies",
      description:
        "SR Asia specializes in delivering comprehensive Policy Research & Insights services that offer invaluable guidance to decision-makers, organizations, and policymakers. Our expertise lies in meticulously analyzing policy landscapes, providing foresight into regulatory changes, and offering actionable insights that drive impactful decision-making.",
    },
    {
      image: "/workk/impact/3.png",
      title: "Third party",
      description:
        "SR Asia offers comprehensive Third-Party Assurance services aimed at enhancing trust, credibility, and transparency in organizational practices and performance. As an independent and impartial third-party provider, we assess and verify various aspects of operations, processes, and systems to provide stakeholders with assurance regarding compliance, quality, and integrity.",
    },
   
     
  ]

  return (
    <div className="w-full max-w-8xl mx-[20px] mb-[75px]">
      <h2 className="text-[32px] font-bold text-gray-900 mb-8">How can we help you?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {services.map((service, index) => (
          <div key={index} className="relative">
            {/* Top border for first row */}
            {index < 2 && <div className="absolute top-0 left-0 right-0 h-px bg-[#45B6CD]"></div>}

          

            {/* Bottom border for all */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-[#45B6CD]"></div>


            <div className="py-24 px-4">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={`${service.title} icon`}
                    width={97}
                    height={97}
                    className="w-20 h-20 md:w-24 md:h-24"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  {/* Line after title */}
                  <div className="w-64 h-0.5 bg-[#45B6CD] mb-4"></div>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">{service.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
