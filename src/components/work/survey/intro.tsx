"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const driverContent = {
  "DGPS-Based Land Surveying": {
    title: "DGPS-Based Land Surveying",
    description:
      "We conduct high-precision land surveys using Differential GPS, Total Station, and GIS-enabled mapping. Our services include boundary demarcation for urban expansion, infrastructure projects, mining, industrial corridors, and agricultural planning with centimeter-level accuracy.",
  },
  "Cadastral Mapping & Record Modernization": {
    title: "Cadastral Mapping & Record Modernization",
    description:
      "We digitize and update cadastral maps to align with state revenue records. By integrating legacy land records with digital land management systems, we support land reforms, acquisition processes, and dispute resolution with transparent, verifiable data.",
  },
  "Infrastructure & Development Planning": {
    title: "Infrastructure & Development Planning",
    description:
      "SR Asia provides accurate land data for infrastructure such as roads, railways, industrial parks, SEZs, and renewable energy projects. Using GIS-based analysis, we support urban planners, smart city missions, and industrial development boards with site suitability and compliance mapping.",
  },
  "Community & Governance Applications": {
    title: "Community & Governance Applications",
    description:
      "We assist governments in land consolidation, resettlement, and rehabilitation planning. Our community-level mapping supports forestry, rural development, and participatory land governance by making data accessible, transparent, and inclusive.",
  },
  "Our Approach & Competitive Edge": {
    title: "Our Approach & Competitive Edge",
    description:
      "Our methodology combines DGPS, drone-enabled surveys, GIS analytics, and AI-based land classification aligned with global standards (FGDC, ISO 19115, NLRMP). With proven government experience in Mizoram, we deliver unmatched accuracy, transparency, and scalable solutions for large-scale land surveys.",
  },
};

export default function AdvisoryServicesPage() {
  const [selectedDriver, setSelectedDriver] = useState<string>(
    Object.keys(driverContent)[0] // ✅ Default to first key
  );

  return (
    <div className="min-h-screen">
      <div className="max-w-full mb-[75px] mx-[20px]">
        {/* Introduction Section */}
        <section className="mb-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Introduction
          </h1>
          <p className="text-[#246875] leading-relaxed ">
            Accurate land records are the foundation of transparent governance,
            efficient infrastructure planning, and sustainable development. At
            SR Asia, we specialize in Digital Land Surveying using Differential
            Global Positioning System (DGPS) and GIS technologies to deliver
            high-precision, reliable, and verifiable land data for governments,
            corporates, and community stakeholders.
            <br />
            <br />
            Our work with the Revenue & Land Settlement Department, Government
            of Mizoram, has demonstrated our ability to carry out large-scale,
            scientifically robust land surveys that strengthen land governance,
            support planning, and safeguard the rights of stakeholders.
          </p>
        </section>

        {/* What's Next Section */}
        <section className="mb-16">
          <h2 className="text-[tertiary/700] text-3xl font-bold mb-6">
            What's next for Land Survey?
          </h2>
          <p className="text-[#246875] leading-relaxed mb-8">
            SR Asia is focused on advancing large-scale DGPS-based surveys,
            modernizing cadastral records, and integrating legacy land data into
            digital platforms. We are also expanding our services to support
            smart cities, renewable energy projects, mining corridors, and
            community rehabilitation efforts. Our next phase emphasizes
            transparency, technology-driven governance, and participatory land
            management for sustainable growth.
          </p>

          {/* Our Drivers */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Our Drivers
            </h3>
            <div className="flex flex-wrap gap-3 mb-6">
              {Object.keys(driverContent).map((driver) => (
                <Button
                  key={driver}
                  variant={selectedDriver === driver ? "default" : "outline"}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    selectedDriver === driver
                      ? "bg-[#45B6CD] text-white hover:bg-teal-700"
                      : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setSelectedDriver(driver)}
                >
                  {driver}
                </Button>
              ))}
            </div>

            {/* Dynamic Content Based on Selected Driver */}
            <Card className="bg-white border border-teal-200 shadow-sm">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {
                    driverContent[selectedDriver as keyof typeof driverContent]
                      .title
                  }
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {
                    driverContent[selectedDriver as keyof typeof driverContent]
                      .description
                  }
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
