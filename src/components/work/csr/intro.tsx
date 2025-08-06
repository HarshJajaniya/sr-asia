"use client"

import { useState } from "react"
import { Users, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const driverContent = {
"CSR Strategic Planning & Alignment": {
  "title": "CSR Strategic Planning & Alignment",
  "description": "We work with organizations to design comprehensive CSR strategies that align with business objectives, core values, and stakeholder expectations. This includes identifying priority social, environmental, and economic focus areas, setting measurable goals, and ensuring initiatives are mapped to broader corporate strategies. Our planning process integrates clear objectives, performance benchmarks, and mechanisms for ongoing monitoring and evaluation to ensure that CSR initiatives drive meaningful, measurable impact."
},
"Stakeholder Engagement & Partnerships": {
  "title": "Stakeholder Engagement & Partnerships",
  "description": "We facilitate structured engagement processes to gather insights, feedback, and perspectives from employees, communities, customers, and other key stakeholders. By fostering open dialogue, we ensure programs address real needs and build credibility. Additionally, we forge strategic partnerships with NGOs, government agencies, academic institutions, and community groups, leveraging their expertise, resources, and networks to amplify the reach and effectiveness of CSR interventions."
},
"Program Design, Development & Implementation": {
  "title": "Program Design, Development & Implementation",
  "description": "Our team designs and delivers CSR programs that tackle pressing societal and environmental challenges, from rural development and skill enhancement to renewable energy adoption and biodiversity conservation. We translate organizational vision into action through meticulous project planning, clear timelines, budget allocation, and milestone tracking. Our approach ensures smooth execution, active stakeholder involvement, and continuous alignment with strategic objectives."
},
"Resource Mobilization & Management": {
  "title": "Resource Mobilization & Management",
  "description": "We assist organizations in securing and managing the resources necessary for program success — including funding, skilled personnel, equipment, and technology. By aligning resources with project needs, we optimize efficiency and ensure that initiatives are fully equipped to achieve their intended outcomes."
},
"Monitoring, Evaluation & Learning": {
  "title": "Monitoring, Evaluation & Learning",
  "description": "Our robust M&E framework combines quantitative and qualitative methods to assess program progress, effectiveness, and long-term sustainability. We establish clear performance indicators from the outset, track progress against defined benchmarks, and use data-driven insights to guide mid-course corrections. Our methods include surveys, interviews, focus groups, and field observations, supported by logical frameworks linking goals to measurable outcomes. Stakeholders are actively involved throughout the process, ensuring that findings are relevant, transparent, and actionable."
}


}


export default function AdvisoryServicesPage() {
const [selectedDriver, setSelectedDriver] = useState<string>(
  "CSR Strategic Planning & Alignment"
);


  return (
    <div className="min-h-screen">
      <div className="max-w-full mx-auto px-6 py-12">
        {/* Introduction Section */}
        <section className="mb-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h1>
          <p className="text-[#246875] leading-relaxed ">
          SR Asia offers specialized services for Corporate Social Responsibility (CSR) implementation, enabling organizations to create measurable, lasting, and meaningful impact on society and the environment. In today’s evolving socio-economic landscape, CSR is more than a regulatory requirement — it is a strategic opportunity to contribute to sustainable development while strengthening brand reputation and stakeholder trust.

Our CSR implementation services are designed to help organizations develop and execute high-impact initiatives that align with their core values, business objectives, and stakeholder expectations. We provide end-to-end support, from identifying priority focus areas such as education, healthcare, environment, livelihood, and community development, to designing tailored programs that deliver tangible results.

SR Asia emphasizes a data-driven and participatory approach — engaging beneficiaries, local communities, and partners to ensure that initiatives are relevant, inclusive, and scalable. We integrate monitoring and evaluation mechanisms into every program, allowing organizations to track progress, assess impact, and continuously improve outcomes.

Whether it’s building sustainable rural livelihoods, driving environmental conservation projects, enhancing skill development opportunities, or supporting social innovation, we ensure that CSR initiatives are impactful, transparent, and aligned with both regulatory compliance and the organization’s long-term vision for responsible growth.


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
