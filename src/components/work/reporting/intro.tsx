"use client"

import { useState } from "react"
import { Users, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const driverContent = {
 "Sustainability Reporting": {
  "title": "Sustainability Reporting",
  "description": "SR Asia delivers comprehensive Sustainability Reporting solutions that empower organizations to clearly communicate their environmental, social, and governance (ESG) performance. We conduct holistic ESG performance reviews across environmental, social, and governance indicators, benchmarking against industry best practices. Our approach is stakeholder-centric, engaging with key groups to ensure the report reflects the most material issues. Through materiality mapping, we identify and prioritize the sustainability topics most relevant for long-term value creation. All reports are aligned with global frameworks such as GRI, SASB, and the SDGs, and include actionable recommendations to enhance ESG performance and reporting quality."
},
"Integrated Reporting": {
  "title": "Integrated Reporting",
  "description": "Our Integrated Reporting services merge financial performance with environmental, social, and governance (ESG) disclosures, giving stakeholders a complete picture of how your organization creates value over time. We integrate financial and non-financial metrics seamlessly, creating a unified narrative that tells your value creation story. This includes mapping strategic risks and opportunities, highlighting sustainability drivers, and ensuring clarity for investors. All reports are compliant with the International <IR> Framework, GRI, and other recognized standards, presenting a transparent connection between strategy, performance, and long-term outcomes."
},
"Environment & Social Governance (ESG)": {
  "title": "Environment & Social Governance (ESG)",
  "description": "SR Asia helps organizations integrate ESG considerations into their core strategies, operations, and decision-making. We develop tailored ESG roadmaps aligned with organizational values and stakeholder priorities, and track performance through KPIs and benchmarking. Our services include preparing ESG disclosures according to global frameworks such as GRI, SASB, and TCFD, embedding ESG principles into investments, supply chains, and governance structures, and providing independent assurance for accuracy and credibility. We also support cultural and operational change to ensure ESG principles are embedded for the long term."
},
"BRSR-SEBI Reporting": {
  "title": "BRSR-SEBI Reporting",
  "description": "We guide listed companies through the SEBI-mandated Business Responsibility and Sustainability Reporting (BRSR) process, ensuring compliance while adding strategic value to disclosures. Our services cover the full process — from navigating SEBI guidelines and timelines, to accurate ESG data gathering and validation, and creating clear, structured reports in the prescribed format. We highlight material ESG issues in alignment with corporate strategy and ensure that disclosures meet the expectations of investors, regulators, and the public."
},
"Carbon Disclosure Project (CDP)": {
  "title": "Carbon Disclosure Project (CDP)",
  "description": "Our CDP services help organizations measure, manage, and disclose environmental data — particularly greenhouse gas emissions — to demonstrate climate leadership. We guide clients through the CDP questionnaire process, measure Scope 1, Scope 2, and Scope 3 emissions, and develop science-based carbon reduction targets. Our team designs strategies for renewable energy adoption, communicates climate risks and opportunities, and implements measures to improve CDP scores, ensuring your climate action commitments are credible and impactful."
},
"TCFD Reporting": {
  "title": "TCFD Reporting",
  "description": "We assist organizations in aligning with the Task Force on Climate-related Financial Disclosures (TCFD) recommendations, enabling better climate risk management and investor confidence. This includes assessing climate-related risks and opportunities, developing tailored disclosure frameworks, and conducting scenario analyses to model both physical and transition risks. We collect and structure climate-related data to meet TCFD requirements and communicate climate resilience strategies transparently to stakeholders."
},
"CSRD Reporting": {
  "title": "CSRD Reporting",
  "description": "Our Corporate Sustainability Reporting Directive (CSRD) services help organizations meet the latest EU sustainability disclosure requirements with accuracy and strategic value. We ensure compliance with CSRD structures, integrate ESG data across environmental, social, and governance domains, and conduct double materiality assessments to evaluate both societal impact and ESG risks to the business. Reports are enriched with stakeholder insights, aligned with business objectives, and designed for digital submission using EU-compliant taxonomies."
},
"Annual Reports": {
  "title": "Annual Reports",
  "description": "We create impactful Annual Reports that combine regulatory compliance with strategic storytelling, offering stakeholders a comprehensive view of performance and future direction. Our process integrates financial and ESG achievements, uses visually engaging layouts, and delivers a compelling narrative that builds brand trust. We ensure alignment with statutory requirements, highlight growth strategies and innovation pathways, and position the organization as transparent, responsible, and future-ready."
}


}


export default function AdvisoryServicesPage() {
const [selectedDriver, setSelectedDriver] = useState<string>(
  "Sustainability Reporting"
);


  return (
    <div className="min-h-screen">
      <div className="max-w-full mb-[75px] mx-[20px]">
        {/* Introduction Section */}
        <section className="mb-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h1>
          <p className="text-[#246875] leading-relaxed ">
       Assurance and reporting form the cornerstone of transparency, accountability, and informed decision-making across industries. In today’s interconnected world, stakeholders — including investors, regulators, customers, employees, and the wider community — demand greater clarity and evidence of responsible practices. Reporting is not merely the presentation of facts and figures; it is the structured communication of an organization’s performance, priorities, risks, and achievements. It encompasses financial results, operational metrics, sustainability initiatives, governance practices, and compliance with regulatory frameworks.

Disclosure goes a step further, ensuring that critical details — often mandated by laws, standards, or stakeholder expectations — are openly revealed. These may include climate-related risks, social impact data, governance structures, or forward-looking strategies that could influence decisions. Effective reporting and disclosure empower stakeholders to evaluate an organization’s integrity, resilience, and long-term value creation potential.

High-quality assurance processes validate the accuracy, completeness, and reliability of reported information, building confidence and trust. In the modern business landscape, robust reporting and independent assurance are no longer optional; they are strategic imperatives that strengthen brand reputation, attract investment, foster stakeholder loyalty, and drive sustainable growth.


          </p>
        </section>

        {/* What's Next Section */}
        <section className="mb-16">
          <h2 className="text-[tertiary/700] text-3xl font-bold mb-6">What's next for Assurance and reporting?</h2>
          <p className="text-[#246875] leading-relaxed mb-8">
          SR Asia supports organizations in delivering structured, transparent, and compliant reporting that meets evolving regulatory expectations. Our disclosure solutions strengthen accountability and build lasting stakeholder confidence.

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
