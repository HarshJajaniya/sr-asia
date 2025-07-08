import Image from "next/image"

export default function ServicesSection() {
  const services = [
    {
      image: "/assurance/1.png",
      title: "Advisory",
      description:
        "We offer strategic planning and advisory services to help organizations set goals, define strategies, and navigate strategic challenges. Our strategic advisors work closely with clients to develop actionable plans, identify growth opportunities, and drive organizational success.",
    },
    {
      image: "/assurance/2.png",
      title: "Consulting",
      description:
        "SR Asia offers strategic consulting in CSR program management, guiding organizations to design impactful, compliant, and purpose-driven initiatives. From needs assessment to implementation and impact evaluation, we ensure every CSR investment delivers measurable social value.",
    },
    {
      image: "/assurance/3.png",
      title: "CSR Project Design",
      description:
        "We develop detailed technical designs and specifications for the proposed project, outlining the required infrastructure, equipment, technology, and engineering solutions. Our technical expertise ensures that project designs are robust, efficient, and aligned with industry standards and best practices.",
    },
    {
      image: "/assurance/4.png",
      title: "M&E",
      description:
        "At SR Asia, we understand the critical importance of monitoring and evaluation (M&E) in ensuring the success of projects, programs, or policies. Our Concurrent Monitoring and Evaluation service provides real-time insights to inform decision-making, enhance accountability, and maximize impact.",
    },
     {
      image: "/assurance/5.png",
      title: "Execution",
      description:
        "We assist organizations in allocating resources effectively to support policy implementation activities. This may involve budgeting, staffing, and securing necessary infrastructure and technology to ensure the successful execution of policy initiatives.",
    }, {
      image: "/assurance/6.png",
      title: "Project planning, Log framework, ToC",
      description:
        "We assist organizations in planning, implementing, and managing projects of all sizes and complexities. From defining project objectives to overseeing execution and monitoring progress, our project management expertise ensures successful project outcomes.",
    },
  ]

  return (
    <div className="w-full max-w-full mx-[20px] mb-[75px]">
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
