import Image from "next/image"

export default function ServicesSection() {
  const services = [
    {
      image: "/assurance/1.png",
      title: "✔️ Third-Party Assurance",
      description:
        "With a commitment to independence and integrity, SR Asia provides robust third-party assurance services that validate ESG performance, compliance, and governance frameworks — reinforcing trust and credibility in your operations.",
    },
    {
      image: "/assurance/2.png",
      title: "🌱 Sustainability Reporting",
      description:
        "SR Asia enables organizations to communicate their ESG commitments with clarity and credibility. Through rigorous assessments, stakeholder engagement, and materiality-driven insights, we deliver impactful sustainability reports aligned with global standards and sustainable development goals.",
    },
    {
      image: "/assurance/3.png",
      title: "📘 Integrated Reporting",
      description:
        "SR Asia empowers organizations to present a unified narrative of financial performance and ESG impact. Our integrated reporting services deliver a strategic, stakeholder-informed view of value creation, risks, and long-term sustainability—enhancing transparency and decision-making.",
    },
    {
      image: "/assurance/4.png",
      title: "📊 BRSR-SEBI Reporting",
      description:
        "SR Asia supports listed companies in navigating SEBI’s BRSR framework with precision and confidence. From data collection to stakeholder engagement, we ensure compliance-driven, transparent, and strategically aligned sustainability disclosures that meet regulatory and investor expectations.",
    },
     {
      image: "/assurance/5.png",
      title: "🌍 Environment & Social Governance (ESG)",
      description:
        "SR Asia partners with organizations to embed ESG principles into strategy, operations, and reporting. Through tailored frameworks, performance measurement, and assurance services, we help drive responsible growth, mitigate risks, and enhance long-term value for stakeholders.",
    },
    {
      image: "/assurance/6.png",
      title: "📑 Annual Reports",
      description:
        "SR Asia crafts insightful, stakeholder-focused annual reports that go beyond compliance—showcasing performance, strategy, and impact with clarity and credibility. Our tailored approach ensures transparent reporting aligned with regulatory standards and organizational vision.",
    },
    {
      image: "/assurance/6.png",
      title: "Project planning, Log framework, ToC",
      description:
        "We assist organizations in planning, implementing, and managing projects of all sizes and complexities. From defining project objectives to overseeing execution and monitoring progress, our project management expertise ensures successful project outcomes.",
    },
    {
      image: "/assurance/7.png",
      title: "📊 Feasibility Reporting",
      description:
        "SR Asia delivers in-depth feasibility assessments to help organizations evaluate the viability, risks, and sustainability of proposed projects. Our evidence-based reports support sound decision-making, strategic planning, and long-term value creation.", 
    },
    {
      image: "/assurance/8.png",
      title: "📘 Detailed Project Report (DPR)",
      description:
        "SR Asia develops comprehensive and data-driven Detailed Project Reports that serve as the foundation for project planning, approvals, and execution. Our DPRs integrate technical, financial, environmental, and social insights to ensure project feasibility, compliance, and long-term impact.",
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
