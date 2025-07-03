import Image from "next/image"

export default function ServicesSection() {
  const services = [
    {
      image: "/workk/csr/1.png",
      title: "Coaching - Remedial Education",
      description:
        "We begin by conducting a rigorous assessment of training needs within your organization. This process involves identifying skill gaps, knowledge deficiencies, and areas for improvement.",
    },
    {
      image: "/workk/csr/2.png",
      title: "Biodiversity Park",
      description:
        "SR Asia contributes to the development of Biodiversity Parks that restore native ecosystems, promote conservation awareness, and enhance urban resilience. Our UK-based initiative integrates ecological planning with community engagement to foster sustainable, nature-based solutions.",
    },
    {
      image: "/workk/csr/3.png",
      title: "Marine Plastic",
      description:
        "SR Asia collaborates on the BASE initiative in Bangladesh to combat marine plastic pollution through research, community engagement, and sustainable waste management. Our work supports coastal resilience and aligns with global efforts to protect marine ecosystems.",
    },
    {
      image: "/workk/csr/4.png",
      title: "Clean India Mission ",
      description:
        "SR Asia actively supports the Swachh Bharat (Clean India) Mission through targeted interventions at ISBT Anand Vihar, Delhi. Our initiatives focus on sanitation infrastructure, waste management, and behavior change communication to foster a cleaner, healthier public space.",
    },
     {
      image: "/workk/csr/5.png",
      title: "Plastic Recycling ",
      description:
        "SR Asia partners with Coca-Cola in Bangladesh to advance plastic waste reduction through inclusive recycling solutions. Our initiatives promote circular economy practices, empower waste workers, and support sustainable packaging and environmental stewardship.",
    },
    {
      image: "/workk/csr/6.png",
      title: "Skill Development",
      description:
        "Our leadership development initiatives cultivate a pipeline of future leaders within your organization. Through bespoke training, coaching, and mentorship opportunities, we empower employees to drive organizational growth and success",
    },
  ]

  return (
    <div className="w-full max-w-6xl mx-auto p-8">
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
