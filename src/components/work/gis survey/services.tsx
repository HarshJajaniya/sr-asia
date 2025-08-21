import Image from "next/image";

export default function ServicesSection() {
  const services = [
    {
      image: "/workk/project/1.png",
      title: "GIS-Based Mapping and Analysis",
      description:
        "We use advanced GIS tools to create ward maps, land-use and land-cover (LULC) maps, and coal mine impact zones. These insights help in planning safe relocation, monitoring environmental risks, and managing resources effectively.",
    },
    {
      image: "/workk/project/2.png",
      title: "Socio-Economic and Settlement Studies",
      description:
        "By conducting household counts and ward-wise settlement calculations, we provide accurate data on population distribution. This ensures that resettlement strategies are community-focused and support vulnerable groups fairly.",
    },
    {
      image: "/workk/project/3.png",
      title: "Environmental and Climate Monitoring",
      description:
        "We analyze air pollution trends (SO₂ and PM2.5) and long-term precipitation patterns to assess environmental stress. These findings help in mitigating health risks, planning agriculture, and building resilience against climate change.",
    },
    {
      image: "/workk/project/4.png",
      title: "CSR Project Design and Implementation",
      description:
        "Our expertise in advisory, consulting, and CSR project execution enables us to design initiatives that address local needs. This includes infrastructure planning, livelihood support, and sustainable community development.",
    },
    {
      image: "/workk/project/5.png",
      title: "EMonitoring, Evaluation, and Compliance",
      description:
        "We provide robust systems for tracking impact, ensuring transparency, and aligning with RAP guidelines. This approach builds trust among stakeholders and ensures that development remains both accountable and sustainable.",
    },
  ];

  return (
    <div className="w-full max-w-full mx-[20px] mb-[75px]">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">
        How can we help you?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {services.map((service, index) => (
          <div key={index} className="relative">
            {/* Top border for first row */}
            {index < 2 && (
              <div className="absolute top-0 left-0 right-0 h-px bg-[#45B6CD]"></div>
            )}

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
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  {/* Line after title */}
                  <div className="w-64 h-0.5 bg-[#45B6CD] mb-4"></div>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
