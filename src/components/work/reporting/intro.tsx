"use client"

import { useState } from "react"
import { Users, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const driverContent = {
  "Sustainability Reporting": {
  title: "Sustainability Reporting",
  description:
    "SR Asia specializes in providing comprehensive Sustainability Reporting services aimed at helping organizations communicate their environmental, social, and governance (ESG) performance to stakeholders. Our sustainability reports offer transparent insights into organizational practices, impacts, and contributions towards sustainable development goals.",
  keyFeatures: [
    "Comprehensive Assessment: We conduct thorough assessments of organizational performance across environmental, social, and governance dimensions, analyzing key indicators and metrics to provide a holistic view of sustainability performance.",
    "Stakeholder Engagement: We engage with stakeholders throughout the reporting process, soliciting feedback, insights, and priorities to ensure that our sustainability reports address stakeholder expectations and concerns.",
    "Materiality Analysis: We conduct materiality assessments to identify and prioritize the most relevant sustainability topics and issues for inclusion in the report, focusing on areas most significant to stakeholders and with the greatest impact on organizational performance."
  ]
},
"Integrated Reporting": {
  title: "Integrated Reporting",
  description:
    "SR Asia offers Integrated Reporting services designed to help organizations communicate a holistic view of their performance, encompassing financial, environmental, social, and governance (ESG) dimensions. Integrated Reporting goes beyond traditional financial reporting by providing stakeholders with a comprehensive understanding of an organization's value creation process, strategy, and impact.",
  keyFeatures: [
    "Comprehensive Performance Assessment: We conduct comprehensive assessments of organizational performance, integrating financial and non-financial data to provide a holistic view of value creation, considering ESG factors alongside financial metrics.",
    "Stakeholder Engagement: We engage with stakeholders throughout the reporting process to ensure reports address expectations and concerns, enhancing relevance and credibility.",
    "Strategic Communication: Our reports highlight value creation drivers, risks, opportunities, and long-term sustainability strategies, enhancing transparency, trust, and confidence among stakeholders."
  ]
},
"Environment & Social Governance (ESG)": {
  title: "Environment & Social Governance (ESG)",
  description:
    "SR Asia specializes in providing comprehensive ESG services aimed at helping organizations integrate environmental, social, and governance factors into their business strategies and operations. Our ESG services enable organizations to enhance sustainability performance, mitigate risks, and capitalize on opportunities for long-term value creation.",
  keyFeatures: [
    "ESG Strategy Development: We work closely with organizations to develop tailored ESG strategies that align with their values, goals, and stakeholder expectations.",
    "ESG Performance Measurement: We help organizations measure and track ESG performance using KPIs and benchmarks to identify areas for improvement.",
    "Stakeholder Engagement: We facilitate stakeholder engagement processes to gather insights and perspectives on ESG issues, enhancing transparency and trust.",
    "ESG Reporting and Disclosure: We prepare ESG reports and disclosures adhering to global frameworks such as GRI, SASB, and TCFD.",
    "ESG Integration: We help integrate ESG considerations into core operations like investment, supply chain, and risk management.",
    "ESG Assurance: We provide independent assurance and verification services to validate ESG data and disclosures."
  ]
},
"BRSR-SEBI Reporting": {
  title: "BRSR-SEBI Reporting",
  description:
    "SR Asia offers specialized services for BRSR-SEBI Reporting to assist organizations in fulfilling reporting obligations and enhancing transparency. BRSR is a crucial SEBI requirement for listed companies to disclose their sustainability performance, initiatives, and impacts.",
  keyFeatures: [
    "Compliance Support: We guide organizations through BRSR-SEBI reporting guidelines, deadlines, and methodologies.",
    "Data Collection and Analysis: We assist in gathering and analyzing ESG performance data to identify trends and improvement areas.",
    "Report Preparation: We prepare BRSR-SEBI reports in the prescribed format with accurate disclosures.",
    "Stakeholder Engagement: We gather stakeholder feedback to improve report relevance, credibility, and accountability."
  ]
},
"Carbon Disclosure Project (CDP)": {
  title: "Carbon Disclosure Project (CDP)",
  description:
    "SR Asia offers specialized CDP services to help organizations measure, manage, and disclose environmental impacts, particularly carbon emissions and climate change. CDP enables companies to report data, set reduction targets, and show commitment to sustainability.",
  keyFeatures: [
    "CDP Reporting Support: We guide organizations through CDP questionnaire preparation and submission.",
    "Data Collection and Analysis: We analyze greenhouse gas emissions, energy consumption, and related metrics.",
    "Emission Reduction Strategies: We develop strategies for reducing carbon footprint and transitioning to renewable energy.",
    "Stakeholder Engagement: We facilitate discussions on climate-related issues to improve disclosure credibility.",
    "CDP Performance Improvement: We help organizations improve their CDP scores through targeted initiatives."
  ]
},
"TCFD Reporting": {
  title: "TCFD Reporting",
  description:
    "SR Asia offers TCFD Reporting services to assist organizations in disclosing climate-related risks and opportunities, enabling stakeholders to assess business resilience in a changing climate.",
  keyFeatures: [
    "Comprehensive Assessment: We assess climate-related risks, opportunities, and their impact on business and financial performance.",
    "Disclosure Strategy Development: We create tailored TCFD disclosure strategies aligned with business objectives and risk profiles.",
    "Scenario Analysis: We assess potential impacts of various climate scenarios to aid in resilience planning.",
    "Data Collection and Reporting: We help collect and report data per TCFD recommendations.",
    "Stakeholder Engagement: We gather stakeholder perspectives to ensure relevant and credible disclosures."
  ]
},
"CSRD Reporting": {
  title: "CSRD Reporting",
  description:
    "SR Asia specializes in CSRD Reporting to help organizations communicate sustainability initiatives, impacts, and performance, meeting regulatory requirements and stakeholder expectations.",
  keyFeatures: [
    "Regulatory Compliance: We ensure adherence to CSR reporting mandates from government bodies.",
    "Comprehensive Assessment: We evaluate CSR initiatives and performance across ESG dimensions.",
    "Stakeholder Engagement: We gather input to enhance report transparency and credibility.",
    "Data Collection and Analysis: We analyze CSR-related data for trends and improvement areas.",
    "Reporting Strategy Development: We create CSR reporting strategies aligned with organizational objectives and stakeholder expectations."
  ]
},
"Annual Reports": {
  title: "Annual Reports",
  description:
    "SR Asia helps organizations deliver engaging, transparent, and strategic annual reports showcasing performance, achievements, and future outlook to stakeholders.",
  keyFeatures: [
    "Comprehensive Analysis: We assess financial and non-financial performance for informed decision-making.",
    "Stakeholder Engagement: We involve stakeholders to ensure reports reflect priorities and build trust.",
    "Transparent Reporting: We prepare clear and concise annual reports following best practices.",
    "Customized Solutions: We tailor reporting to highlight sustainability, strategy, and organizational values.",
    "Compliance Support: We ensure annual reports meet regulatory standards.",
    "Strategic Impact: We create impactful reports that enhance reputation, attract investors, and inspire confidence."
  ]
}

}


export default function AdvisoryServicesPage() {
const [selectedDriver, setSelectedDriver] = useState<string>(
  "Life Cycle Assessment (LCA)"
);


  return (
    <div className="min-h-screen">
      <div className="max-w-full mb-[75px] mx-[20px]">
        {/* Introduction Section */}
        <section className="mb-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h1>
          <p className="text-[#246875] leading-relaxed ">
            Assurance and Reporting Content: Reporting and disclosure are fundamental elements of transparency and accountability in various domains, including business, finance, governance, and environmental stewardship. Reporting involves the communication of relevant information, often in a structured format, to internal or external stakeholders. This information may include financial performance, operational metrics, compliance status, or other key indicators. Disclosure, on the other hand, refers to the act of revealing specific details, often mandated by regulations, that could impact the decisions of stakeholders. 


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
