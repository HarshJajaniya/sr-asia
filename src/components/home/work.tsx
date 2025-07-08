"use client";

import Image from "next/image";
import Link from "next/link";

const workCards = [
  {
    title: "Strategic Impact Services for Sustainable Development",
    description:
      "At SR Asia, we drive purpose-led transformation through end-to-end solutions in CSR, sustainability, and compliance. From need assessments to impact evaluation, we align your projects with national laws and global standards—delivering measurable results, meaningful engagement, and lasting value.",
    image: "/workk/1.jpg",
  },
  {
    title: "Trusted Assurance & Transparent Reporting",
    description:
      "SR Asia strengthens organizational credibility through independent third-party assessments, ESG disclosures, and integrated reporting. We help you build stakeholder trust by validating impact, enhancing transparency, and aligning with global sustainability standards.",
    image: "/workk/3.jpg",
  },
  {
    title: "Precision Mapping for Smarter Decisions",
    description:
      "At SR Asia, we deliver advanced GIS mapping and remote sensing services to transform spatial data into strategic insights. From environmental monitoring to infrastructure planning, our geospatial solutions empower organizations to visualize, analyze, and act with clarity and confidence.",
    image: "/workk/8.PNG",
  },
  {
    title: "Policy Intelligence for Impactful Governance",
    description:
      "At SR Asia, we empower governments and organizations with data-driven insights, strategic policy research, and on-ground implementation support. From evaluating flagship programs like PMAY and NRLM to crafting actionable briefs and ensuring compliance, we turn policy into performance—delivering change that matters.",
    image: "/workk/2.jpg",
  },
  {
    title: "Enabling Responsible Land Development",
    description:
      "At SR Asia, we offer end-to-end land acquisition and impact assessment services under the RTFCLARR Act—spanning Land Survey, SIA, ESIA, EIA, and R&R. We blend precision, legal compliance, and community engagement to support development that is inclusive, sustainable, and conflict-free.",
    image: "/workk/9.jpg",
  },
  {
    title: "Expert Advisory Project Success and Feasibility",
    description:
      "At SR Asia, we deliver end-to-end PMC and advisory services—from DPRs and feasibility studies to M&E and strategic planning. With deep sectoral insight and robust execution support, we ensure your projects are viable, future-ready, and aligned for long-term impact.",
    image: "/workk/7.PNG",
  },
];

export default function SrAsiaWorkGrid() {
  return (
    <section className="max-w-full bg-gray-50 py-16 px-4 md:px-6 lg:px-8 mb-[75px]">
      <div className="max-w-full mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-[#072328] text-center mb-[75px]">OUR APPROACH</h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {workCards.map((card, idx) => (
            <article
              key={idx}
              className="flex flex-col justify-between bg-white overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="overflow-hidden h-48">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800 line-clamp-2">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {card.description}
                </p>
                <Link
                  href="#"
                  className="block text-center py-2 px-4 bg-[#072328] hover:bg-[#A1E3F9] hover:text-[#072328] text-white font-medium"
                >
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
