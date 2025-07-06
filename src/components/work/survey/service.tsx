import Image from "next/image"

export default function ServicesSection() {
  const services = [
    {
      image: "/workk/survey/1.png",
      title: "GIS",
      description:
        "SR Asia delivers advanced geospatial and remote sensing solutions to help organizations decode spatial patterns, monitor environmental change, and optimize resource use. Through cutting-edge technology and expert analysis, we transform complex data into actionable insights for strategic planning and sustainable development.",
    },
    {
      image: "/workk/survey/2.png",
      title: "Online Questionnaire",
      description:
        "We provide comprehensive support to organizations in preparing and submitting their responses to the CDP questionnaire. Our team guides organizations through the reporting process, ensuring compliance with CDP's guidelines and requirements.",
    },
    
    {
      image: "/workk/survey/3.png",
      title: "Field Survey Services",
      description:
        "SR Asia conducts comprehensive field surveys to generate accurate, ground-level data that informs project planning, implementation, and evaluation. Our methodical approach ensures data reliability, stakeholder inclusion, and evidence-based decision-making across sectors.",
    },
    {
      image: "/workk/survey/4.png",
      title: "Socio-Economic Assessments",
      description:
        "SR Asia delivers in-depth socio-economic studies to evaluate community needs, livelihoods, and demographic dynamics. Our insights support inclusive development planning, policy formulation, and impact assessments that prioritize equity and long-term sustainability.",
    },
     {
      image: "/workk/survey/5.png",
      title: "Drone-Based Solutions",
      description:
        "SR Asia leverages advanced drone technology to capture high-resolution aerial data for mapping, monitoring, and analysis. Our drone services enhance precision, efficiency, and safety across projects in sectors like environment, infrastructure, and agriculture.",
    },
    {
      image: "/workk/survey/6.png",
      title: "Land Acquisition, SIA & R&R",
      description:
        "SR Asia provides end-to-end support for land acquisition in compliance with the RTFCLARR Act, ensuring legal, ethical, and socially responsible outcomes. Our expertise in Social Impact Assessment (SIA) and Resettlement & Rehabilitation (R&R) facilitates transparent stakeholder engagement, equitable compensation, and conflict-free project execution.",
    },
  ]

  return (
    <div className="w-full max-w-8xl mb-[75px] mx-[20px]">
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
