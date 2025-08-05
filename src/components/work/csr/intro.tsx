"use client"

import { useState } from "react"
import { Users, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const driverContent = {
"Strategic Planning": {
  title: "Strategic Planning",
  description:
    "We work closely with organizations to develop comprehensive CSR strategies aligned with business objectives, values, and stakeholder expectations. This involves identifying priority areas, setting clear goals, and establishing mechanisms for monitoring and evaluation."
},
"Stakeholder Engagement": {
  title: "Stakeholder Engagement",
  description:
    "We facilitate stakeholder engagement processes to gather insights, feedback, and perspectives on CSR priorities and initiatives. This enhances the relevance, credibility, and impact of programs while fostering trust and collaboration."
},
"Program Design and Development": {
  title: "Program Design and Development",
  description:
    "We design and develop CSR programs addressing key social, environmental, and economic challenges. From community development to environmental conservation, we help organizations create impactful interventions."
},
"Partnership Development": {
  title: "Partnership Development",
  description:
    "We build strategic partnerships with NGOs, government agencies, and community groups to leverage resources, expertise, and networks. Our approach focuses on collaboration, co-creation, and shared value creation."
},
"Program/Project Implementation": {
  title: "Program/Project Implementation",
  description:
    "We specialize in translating organizational vision into tangible results through efficient project execution. Our expertise includes project management, stakeholder engagement, and impact assessment."
},
"Strategic Alignment": {
  title: "Strategic Alignment",
  description:
    "We ensure that projects align closely with organizational goals, strategies, and priorities, mapping clear objectives and deliverables to achieve desired outcomes."
},
"Project Planning and Design": {
  title: "Project Planning and Design",
  description:
    "We develop comprehensive project plans, outlining timelines, budgets, resources, and milestones to ensure projects are well-defined, organized, and executable."
},
"Resource Mobilization": {
  title: "Resource Mobilization",
  description:
    "We assist in mobilizing the necessary resources—funding, manpower, equipment, and technology—to ensure projects are adequately supported for success."
},
"Monitoring and Evaluation": {
  title: "Monitoring and Evaluation",
  description:
    "We track progress and measure impact through robust frameworks that ensure CSR programs deliver tangible results. Transparency is maintained via regular stakeholder communication, industry benchmarks, and third-party verification."
},
"Scientific Framework": {
  title: "Scientific Framework",
  description:
    "We apply a blend of quantitative and qualitative methods to gain a comprehensive understanding of project progress and effectiveness."
},
"Performance Indicators": {
  title: "Performance Indicators",
  description:
    "We establish clear indicators at project inception to track progress against benchmarks, enabling timely improvements."
},
"Data Collection": {
  title: "Data Collection",
  description:
    "We use surveys, interviews, focus groups, and observations to gather both quantitative and qualitative data for holistic assessments."
},
"Logical Framework": {
  title: "Logical Framework",
  description:
    "We employ a structured framework linking goals, activities, outputs, and outcomes to guide monitoring and evaluation activities."
},
"Stakeholder Engagement in M&E": {
  title: "Stakeholder Engagement in M&E",
  description:
    "We actively involve stakeholders in the monitoring and evaluation process to ensure findings are relevant, credible, and actionable."
}

}


export default function AdvisoryServicesPage() {
const [selectedDriver, setSelectedDriver] = useState<string>(
  "Strategic Planning"
);


  return (
    <div className="min-h-screen">
      <div className="max-w-full mx-auto px-6 py-12">
        {/* Introduction Section */}
        <section className="mb-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h1>
          <p className="text-[#246875] leading-relaxed ">
            SR Asia offers specialized services for Corporate Social Responsibility (CSR) implementation, helping organizations create meaningful impact in society and the environment. Our CSR implementation services are designed to support organizations in developing and executing strategic initiatives that align with their values, objectives, and stakeholder expectations.


          </p>
        </section>

        {/* What's Next Section */}
        <section className="mb-16">
          <h2 className="text-[tertiary/700] text-3xl font-bold mb-6">What's next for CSR Project Management?</h2>
          <p className="text-[#246875] leading-relaxed mb-8">
         At SR Asia, we champion CSR as a strategic pathway to social and environmental impact. Our end-to-end CSR program management services help organizations design, implement, and monitor initiatives that align with regulatory mandates and community development goals.
          </p>

          {/* Our Drivers */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Drivers</h3>
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
                  {driverContent[selectedDriver as keyof typeof driverContent].title}
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {driverContent[selectedDriver as keyof typeof driverContent].description}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

      
      </div>
    </div>
  )
}
