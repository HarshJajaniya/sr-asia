"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const driverContent = {
  "Participatory Rural Appraisal (PRA) & Needs Assessment": {
    title: "Participatory Rural Appraisal (PRA) & Needs Assessment",
    description:
      "We use participatory rural appraisal methods such as social mapping, transect walks, FGDs, and seasonal calendars to identify real community needs. This ensures that CSR projects are demand-driven, inclusive, and aligned with Schedule VII of the Companies Act, giving communities a voice in planning and implementation.",
  },
  "Baseline Studies": {
    title: "Baseline Studies",
    description:
      "Baseline studies provide benchmarks for socio-economic, health, livelihood, and environmental indicators. Using surveys, GIS, and OECD-DAC aligned frameworks, we establish reference points that help corporates and NGOs measure progress and accountability throughout project lifecycles.",
  },
  "Midline Assessments": {
    title: "Midline Assessments",
    description:
      "At the mid-point of a project, we conduct assessments to track progress against baseline indicators. These evaluations identify gaps, bottlenecks, and required course corrections, while incorporating beneficiary feedback for adaptive management.",
  },
  "End-line Studies": {
    title: "End-line Studies",
    description:
      "End-line evaluations measure outcomes and immediate impacts at project completion. By comparing with baseline and midline data, we highlight changes attributable to interventions and capture evidence-based lessons for scaling and replication.",
  },
  "Monitoring & Evaluation (M&E)": {
    title: "Monitoring & Evaluation (M&E)",
    description:
      "We design and implement M&E frameworks using LogFrames, Theory of Change, and MIS dashboards. Our services include real-time monitoring, compliance checks, third-party evaluations, and providing corporates with dashboards for decision-making.",
  },
  "Impact Assessments": {
    title: "Impact Assessments",
    description:
      "Independent impact assessments are conducted using SROI, cost–benefit analysis, and SDG mapping. These studies evaluate long-term social, economic, and environmental changes, ensuring compliance with CSR Rules and strengthening corporate accountability.",
  },
};

export default function CSRServicesPage() {
  const [selectedDriver, setSelectedDriver] = useState<string>(
    "Participatory Rural Appraisal (PRA) & Needs Assessment"
  );

  return (
    <div className="min-h-screen">
      <div className="max-w-full mb-[75px] mx-[20px]">
        {/* Introduction Section */}
        <section className="mb-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Introduction
          </h1>
          <p className="text-[#246875] leading-relaxed">
            Corporate Social Responsibility (CSR) in India is guided by Section
            135 of the Companies Act, 2013, Schedule VII, and CSR Rules, 2014.
            Companies with qualifying financial thresholds are required to spend
            at least 2% of their average profits on approved CSR activities.
            Governance is board-driven, with implementation through registered
            agencies, ensuring accountability, transparency, and impact. SR Asia
            plays a pivotal role in supporting companies to design, implement,
            and evaluate CSR initiatives that are compliant, impactful, and
            sustainable.
          </p>
        </section>

        {/* What's Next Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">What’s Next for CSR?</h2>
          <p className="text-[#246875] leading-relaxed mb-8">
            CSR in India is evolving beyond compliance into strategic alignment
            with business and sustainability goals. With rising allocations,
            companies are focusing on education, healthcare, environment, and
            livelihoods while also exploring emerging areas such as ESG, climate
            action, and worker-driven models. The future of CSR emphasizes
            inclusivity, transparency, tech-driven monitoring, and measurable
            social impact.
          </p>

          {/* Our Drivers */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Our CSR Services
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
