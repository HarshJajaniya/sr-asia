"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const driverContent = {
  "Evidence-Based Policy Research": {
    title: "Evidence-Based Policy Research",
    description:
      "We design and execute studies that combine quantitative surveys, qualitative assessments, and econometric models. Using global frameworks such as OECD-DAC, UN SDGs, IFC Performance Standards, and ISO 26000, we translate ground realities into actionable insights for public policy, development programs, and business regulations.",
  },
  "Policy Design & Strategy Advisory": {
    title: "Policy Design & Strategy Advisory",
    description:
      "We develop policy frameworks, guidelines, and roadmaps tailored to national and regional contexts. Our advisory aligns policies with India’s development priorities, ESG requirements, and global sustainability standards, while recommending governance models, institutional arrangements, and regulatory compliance pathways.",
  },
  "Sectoral Studies & Knowledge Products": {
    title: "Sectoral Studies & Knowledge Products",
    description:
      "We prepare white papers, discussion notes, policy briefs, and reports for government, donors, and multilaterals. Our in-depth sector studies span healthcare, green economy, livelihoods, digital inclusion, education, and infrastructure, benchmarking global best practices for Indian and South Asian contexts.",
  },
  "Impact & KAP Studies": {
    title: "Impact & KAP Studies (Knowledge, Attitude, Practice)",
    description:
      "We conduct perception and behavioral studies to measure policy effectiveness. Our KAP studies provide actionable recommendations for campaigns, governance reforms, and development interventions, ensuring that policies translate into tangible outcomes for communities.",
  },
}

export default function PolicyResearchPage() {
  const [selectedDriver, setSelectedDriver] = useState<string>(
    "Evidence-Based Policy Research"
  )

  return (
    <div className="min-h-screen">
      <div className="max-w-full px-[20px] mb-[75px]">
        {/* Introduction Section */}
        <section className="mb-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            🌍 Policy Research & Design
          </h1>
          <p className="text-[#246875] leading-relaxed">
            At <strong>SR Asia</strong>, we believe that sound policies shape sustainable
            futures. Our Policy Research & Design practice bridges the gap between
            evidence-based insights and actionable strategies, helping governments,
            multilaterals, and corporates make informed decisions on ESG,
            Sustainability, CSR, and development challenges.
            <br />
            <br />
            Through robust methodologies and alignment with global standards, we provide
            data-driven research, policy analysis, and design frameworks that translate
            into practical recommendations for inclusive growth, sustainable development,
            and responsible business practices.
          </p>
        </section>

        {/* What's Next Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            What’s next for Policy Research?
          </h2>
          <p className="text-[#246875] leading-relaxed mb-8">
            At SR Asia, we continue to advance policy research with deep sectoral
            expertise, AI-driven analytics, and internationally benchmarked methodologies.
            Our focus is on transforming research insights into scalable, actionable, and
            future-ready policy solutions.
          </p>

          {/* Our Drivers */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Our Core Services
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
  )
}
