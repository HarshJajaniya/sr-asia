import Image from "next/image"

export default function ServicesSection() {
  const services = [
    {
      image: "/workk/monitoring/1.png",
      title: " CSR Project",
      description:
        " CSR Project",
    },
    {
      image: "/workk/monitoring/2.png",
      title: "Contruction projects",
      description:
        "We conduct thorough evaluations to assess the potential environmental impacts of proposed projects across various sectors, including infrastructure development, energy, construction, and manufacturing.",
    },
    {
      image: "/workk/monitoring/3.png",
      title: "Con-Current monitoring",
      description:
        "At SR Asia, we understand the critical importance of monitoring and evaluation (M&E) in ensuring the success of projects, programs, or policies. Our Concurrent Monitoring and Evaluation service provides real-time insights to inform decision-making, enhance accountability, and maximize impact.",
    },
    {
      image: "/workk/monitoring/4.png",
      title: "End line Evaluation",
      description:
        "SR Asia’s end-line evaluations deliver comprehensive impact assessments at the project’s conclusion. We measure outcomes against baseline indicators to evaluate effectiveness, sustainability, and lessons for future programming. ",
    },
     {
      image: "/workk/monitoring/5.png",
      title: "Baseline ",
      description:
        "SR Asia conducts robust baseline studies to establish data-driven benchmarks at the start of a project. These insights form the foundation for setting targets, designing interventions, and measuring future impact with clarity and precision.",
    },
    {
      image: "/workk/monitoring/6.png",
      title: "Mid-line ",
      description:
        "Our mid-line evaluations provide critical progress checks, enabling course correction and strategy refinement. SR Asia ensures that project implementation stays aligned with objectives, timelines, and stakeholder expectations.",
    },
     {
      image: "/workk/monitoring/7.png",
      title: "Third Party  ",
      description:
        "As an independent evaluator, SR Asia offers impartial third-party assessments to ensure transparency, credibility, and accountability. Our rigorous evaluation methodologies provide stakeholders with trusted insights into project performance and impact.",
    },
  ]

  return (
    <div className="w-full max-w-8xl mb-[75px] mx-[20px]">
      <h2 className="text-[32px] mb-[75px] font-bold text-gray-900">How can we help you?</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {services.map((service, index) => (
          <div key={index} className="relative">
            {/* Top border for first row */}
            {index < 2 && <div className="absolute top-0 left-0 right-0 h-px bg-[#45B6CD]"></div>}

          

            {/* Bottom border for all */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-[#45B6CD]"></div>


            <div className="py-10 px-4">
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
