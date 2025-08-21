"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const driverContent = {
  "Need Assessment Survey (NAS)": {
    title: "Need Assessment Survey (NAS)",
    description:
      "NAS identifies the social, economic, and cultural needs of affected or neighboring villages to design long-term community development programs. It distinguishes between felt needs, perceived needs, and forced needs, ensuring that interventions are people-centric and sustainable.",
  },
  "Objectives of NAS": {
    title: "Objectives of NAS",
    description:
      "To prepare demographic and socio-economic profiles, assess infrastructure, education, health, gender equality, cultural traits, and employment opportunities. It also identifies critical gaps where CSR can bring meaningful change and fosters community participation through PRA tools.",
  },
  "Key Indicators": {
    title: "Key Indicators",
    description:
      "NAS evaluates economic status (BPL %, per capita income), education (literacy, dropout rates, higher education), health (IMR, MMR, immunization), gender equality, quality of life (water, sanitation, housing, electricity), and employment trends against national and state benchmarks.",
  },
  "Social Impact Evaluation (SIE)": {
    title: "Social Impact Evaluation (SIE)",
    description:
      "SIE measures the extent to which CSR interventions in education, health, sanitation, infrastructure, and livelihoods have improved community living standards. It captures both short-term and long-term impacts, assesses effectiveness, and builds a Standard of Living Index (SOLI).",
  },
  "Approach & Methodology": {
    title: "Approach & Methodology",
    description:
      "Both qualitative and quantitative tools are applied, including structured interviews, focus group discussions, participatory rural appraisal, and analysis of secondary data. Comparisons are made at village, district, state, and national levels for robust evaluation.",
  },
};

export default function SIAIAContentPage() {
  const [selectedDriver, setSelectedDriver] = useState<string>(
    "Need Assessment Survey (NAS)"
  );

  return (
    <div className="min-h-screen">
      <div className="max-w-full mb-[75px] mx-[20px]">
        {/* Introduction */}
        <section className="mb-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Introduction
          </h1>
          <p className="text-[#246875] leading-relaxed">
            At SR Asia, we carry out{" "}
            <strong>Need Assessment Surveys (NAS)</strong>
            and <strong>Social Impact Evaluations (SIE)</strong> to understand
            community needs and measure the outcomes of CSR interventions. NAS
            identifies critical gaps in infrastructure, health, education, and
            livelihoods while SIE evaluates the effectiveness of programs in
            improving the quality of life. These processes ensure CSR projects
            are evidence-based, participatory, and aligned with long-term
            community development goals.
          </p>
        </section>

        {/* What's Next */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[tertiary/700]">
            What’s next for SIA & NAS?
          </h2>
          <p className="text-[#246875] leading-relaxed mb-8">
            Going forward, SR Asia aims to deepen participatory assessments,
            integrate technology-driven monitoring, and align CSR planning with
            the United Nations Sustainable Development Goals (SDGs). Our next
            phase emphasizes transparency, measurable outcomes, and partnerships
            with government and community stakeholders for holistic development.
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

            {/* Dynamic Content */}
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
