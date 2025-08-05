"use client"

import { useState } from "react"
import { Users, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const driverContent = {
  "Feasibility Analysis": {
    title: "Feasibility Analysis",
    description:
      " We conduct in-depth feasibility studies to assess the technical, financial, environmental, and social viability of proposed projects. Our analysis helps organizations determine the feasibility and potential risks associated with project implementation, guiding strategic decision-making processes.Project Scope and Objectives: We define clear project scopes and objectives in the DPR, outlining the goals, deliverables, timelines, and resource requirements of the proposed project. Our detailed project scoping ensures alignment with organizational priorities and stakeholder expectations.Market Research and Analysis: We perform comprehensive market research and analysis to identify market trends, demand-supply dynamics, competitor landscapes, and potential risks and opportunities for the proposed project. Our market insights enable organizations to make informed decisions regarding project positioning, pricing, and market entry strategies.Technical Design and Specifications: We develop detailed technical designs and specifications for the proposed project, outlining the required infrastructure, equipment, technology, and engineering solutions. Our technical expertise ensures that project designs are robust, efficient, and aligned with industry standards and best practices.Financial Projections and Viability: We prepare detailed financial projections and viability assessments for the proposed project, including capital expenditure estimates, revenue forecasts, cost-benefit analyses, and financial risk assessments. Our financial analyses help organizations evaluate the financial feasibility and potential returns on investment of the project.",
  },
  "Technology Assessments": {
    title: "Technology Assessments",
    description:
      "SR Asia offers specialized Technology Assessment services, designed to provide organizations with comprehensive insights into the suitability, feasibility, and impact of adopting specific technologies. Our assessments help organizations make informed decisions regarding technology investments, upgrades, and integrations, ensuring optimal alignment with business goals and objectives.Technology Landscape Analysis: We conduct thorough analyses of the technology landscape relevant to the organization's industry, identifying emerging trends, innovations, and disruptions. Our assessments help organizations stay abreast of technological advancements and assess their potential impact on business operations.Needs Assessment: We collaborate with organizations to understand their specific technology needs, challenges, and objectives. By conducting needs assessments, we tailor our technology recommendations to address unique organizational requirements and priorities effectively.Technology Selection Criteria: We develop clear and concise criteria for evaluating and selecting technology solutions based on organizational priorities, budgetary constraints, technical requirements, and scalability. Our selection criteria ensure that technology investments align with strategic objectives and deliver maximum value.Comparative Analysis: We perform comparative analyses of multiple technology solutions, weighing their respective strengths, weaknesses, features, and costs. Our comparative analyses help organizations make informed decisions by providing a comprehensive overview of available options and their potential implications.Feasibility Assessment: We assess the technical, financial, and operational feasibility of implementing specific technology solutions within the organization's existing infrastructure and ecosystem. Our feasibility assessments help organizations identify potential implementation challenges, risks, and mitigation strategies.",
  },
  "Value Chain Assessments": {
    title: "Value Chain Assessments",
    description:
      "SR Asia specializes in Value Chain Assessments, designed to help organizations identify opportunities for optimization, innovation, and efficiency improvement across their value chains. Our assessments provide organizations with valuable insights into the end-to-end processes, stakeholders, and value-added activities, enabling them to enhance competitiveness, sustainability, and profitability.Key Features of Our Value Chain Assessment Services:End-to-End Analysis: We conduct comprehensive analyses of organizations' value chains, from raw material sourcing to product/service delivery to end customers. Our assessments map out the entire value chain, identifying key processes, stakeholders, and value-added activities at each stage.Stakeholder Engagement: We engage with relevant stakeholders, including suppliers, manufacturers, distributors, retailers, and customers, to gather insights, feedback, and perspectives on value chain dynamics and opportunities. By fostering collaboration and dialogue, we ensure that our assessments capture diverse perspectives and priorities.Process Mapping and Optimization: We map out existing processes within the value chain and identify opportunities for optimization, streamlining, and automation. Our process optimization recommendations aim to reduce costs, eliminate inefficiencies, and enhance productivity across the value chain.Value-Added Analysis: We analyze the value-added activities within the value chain and assess their contribution to overall organizational performance and competitiveness. Our value-added analysis helps organizations identify areas for innovation, differentiation, and value creation.Supply Chain Resilience: We assess the resilience of organizations' supply chains to external shocks, disruptions, and risks, such as natural disasters, geopolitical instability, and supply chain disruptions. Our resilience assessments help organizations identify vulnerabilities and develop strategies to build robust, agile, and sustainable supply chains.",
  },

}


export default function AdvisoryServicesPage() {
const [selectedDriver, setSelectedDriver] = useState<string>(
  "Feasibility Analysis"
);


  return (
    <div className="min-h-screen">
     <div className="max-w-full px-[20px] mb-[75px]">
        {/* Introduction Section */}
        <section className="mb-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h1>
          <p className="text-[#246875] leading-relaxed ">
           DPR and feasibility studies are critical components in the early stages of project development, providing a detailed plan and assessing the project's viability. M&E ensures ongoing assessment and improvement during project implementation. PMC services contribute to effective project management, while advisory services bring external expertise to guide decision-making and address specific challenges. Together, these elements form a comprehensive approach to successful project development and execution.
Detailed Project Report (DPR):
SR Asia offers specialized services in preparing Detailed Project Reports (DPR), meticulously crafted documents that outline the comprehensive framework and feasibility of proposed projects. Our DPR services are designed to provide organizations with detailed insights, analyses, and recommendations to facilitate informed decision-making and successful project implementation.

          </p>
        </section>

        {/* What's Next Section */}
        <section className="mb-16">
          <h2 className="text-[tertiary/700] text-3xl font-bold mb-6">What's next for Advisory Services?</h2>
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
