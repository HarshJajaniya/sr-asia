import Image from "next/image"

export default function ServicesSection() {
  const services = [
    {
      image: "/workk/monitoring/1.png",
      title: "Survey Design & Data Collection",
      description:
        "We apply robust sampling methods (random, stratified, cluster, purposive, snowball) with statistically reliable sample sizes. Digital tools like ODK, Kobo, and SurveyCTO ensure accurate, GPS-validated data collection with real-time monitoring for quality assurance.",
    },
    {
      image: "/workk/monitoring/2.png",
      title: "Monitoring Frameworks",
      description:
        "Our monitoring frameworks use Logical Framework Approach (LFA) and Theory of Change (ToC) to track progress and results. Dashboards powered by Power BI/Tableau provide near real-time insights, ensuring alignment with SDGs and OECD-DAC indicators.",
    },
    {
      image: "/workk/monitoring/3.png",
      title: "Concurrent Monitoring",
      description:
        "We provide real-time monitoring of projects and programs, offering continuous insights into implementation fidelity, resource utilization, and impact. This ensures timely decision-making, accountability, and adaptive management.",
    },
    {
      image: "/workk/monitoring/4.png",
      title: "Endline Evaluation",
      description:
        "Our endline evaluations compare project outcomes against baseline benchmarks, using methods like Difference-in-Differences (DiD) and Propensity Score Matching (PSM). The findings provide evidence of effectiveness, sustainability, and lessons learned.",
    },
    {
      image: "/workk/monitoring/5.png",
      title: "Baseline Studies",
      description:
        "Baseline studies establish benchmarks through descriptive statistics, indices, and vulnerability scores. These insights form the foundation for setting measurable targets and tracking impact throughout the project lifecycle.",
    },
    {
      image: "/workk/monitoring/6.png",
      title: "Midline Evaluations",
      description:
        "Midline evaluations act as progress checkpoints, assessing performance against planned outcomes. They enable course corrections, improve strategy, and ensure project delivery remains aligned with objectives and stakeholder expectations.",
    },
    {
      image: "/workk/monitoring/7.png",
      title: "Third-Party Evaluations",
      description:
        "As an independent evaluator, SR Asia provides unbiased third-party assessments. Our rigorous methodologies ensure credibility, transparency, and actionable insights, building trust among stakeholders and partners.",
    },
  ]

  return (
    <div className="w-full max-w-full mb-[75px] mx-[20px]">
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
