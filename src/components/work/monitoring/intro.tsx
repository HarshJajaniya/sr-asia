"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const serviceContent = {
  "Survey Design & Data Collection": {
    title: "Survey Design & Data Collection",
    description: `We design robust surveys using both probability and non-probability sampling 
    (random, stratified, cluster, purposive, snowball, quota) with statistically reliable 
    sample sizes. Instruments are adapted from UNICEF MICS, World Bank LSMS, NFHS/DLHS, 
    and customized for project objectives. Mobile tools (ODK, Kobo, SurveyCTO) with GPS tagging 
    ensure accuracy, supported by real-time dashboards and quality control checks.`,
  },
  "Monitoring Frameworks": {
    title: "Monitoring Frameworks",
    description: `Our frameworks use Logical Framework Approach (LFA) and Theory of Change (ToC) 
    to map Inputs → Outcomes → Impacts. Indicators align with OECD-DAC criteria and SDGs. 
    Automated MIS dashboards (Power BI/Tableau) connect with field survey tools for real-time tracking. 
    Data flows seamlessly from enumerators → supervisors → M&E team → client dashboards.`,
  },
  "Evaluation Studies": {
    title: "Evaluation Studies (Baseline, Midline, Endline)",
    description: `We conduct Baseline studies (benchmarks, indices, vulnerability scores), 
    Midline evaluations (progress tracking, fidelity checks), and Endline evaluations 
    (comparative analysis using DiD, PSM, regression). Our mixed methods combine household 
    surveys with FGDs, KIIs, and participatory tools for triangulation.`,
  },
  "Impact Assessment": {
    title: "Impact Assessment",
    description: `Impact is assessed via quasi-experimental designs (RCTs, DiD, PSM) and theory-based approaches 
    (Contribution Analysis, Outcome Harvesting, MSC). Economic valuation applies SROI, cost-benefit, and 
    cost-effectiveness analysis. Alignment is maintained with SEBI-BRSR, ISAE 3000/3410, and UNEG standards.`,
  },
  "Data Analytics & Knowledge Products": {
    title: "Data Analytics & Knowledge Products",
    description: `We apply advanced analytics with Python, R, STATA, and SPSS for statistical modeling, 
    and use ML techniques (classification, clustering) for predictive insights. Geospatial tools 
    (ArcGIS, QGIS, satellite imagery) enhance spatial analysis. Data visualization with Power BI, 
    Tableau, and Python libraries ensures actionable insights. Knowledge outputs include M&E manuals, 
    indicator handbooks, policy briefs, and interactive data portals. Data governance follows USAID DQA 
    for integrity, reliability, and timeliness.`,
  },
  "Approach & Methodology": {
    title: "Our Approach & Methodology",
    description: `We apply global standards (OECD-DAC, UNEG, ISO 26000, GRI 2021, IFC Performance Standards). 
    AI and IT integration (Python, R, NLP, predictive analytics) strengthen both qualitative and quantitative 
    insights. Our triangulation approach validates findings using multiple methods. Capacity building 
    empowers client teams with M&E tools and statistical software. Learning loops embed results into decision-making 
    through reviews, workshops, and adaptive management.`,
  },
}

export default function AdvisoryServicesPage() {
  const [selectedService, setSelectedService] = useState<string>(
    "Survey Design & Data Collection"
  )

  return (
    <div className="min-h-screen">
      <div className="max-w-full mx-[20px]">
        {/* Introduction Section */}
        <section className="mb-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h1>
          <p className="text-[#246875] leading-relaxed">
            SR Asia offers specialized Monitoring, Evaluation & Research (MER) services that 
            integrate global standards, advanced analytics, and participatory methodologies. 
            Our end-to-end expertise spans survey design, digital data collection, monitoring frameworks, 
            evaluation studies, impact assessments, and knowledge product development.  

            By leveraging cutting-edge digital tools (ODK, Kobo, SurveyCTO, GIS) and advanced analytics 
            (Python, R, AI/ML), we ensure high-quality, real-time, and actionable insights. Our MER services 
            not only strengthen program accountability and learning but also align interventions with SDG 
            targets, ESG frameworks, and international best practices.  

            With a pan-Asian presence and a team rooted in policy research, CSR, sustainability, and data science, 
            SR Asia brings both global rigor and local relevance—helping organizations and partners make 
            evidence-driven decisions that create scalable and sustainable impact.
          </p>
        </section>

        {/* What's Next Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[#246875]">
            Our MER Services
          </h2>
          <p className="text-[#246875] leading-relaxed mb-8">
            Explore our key service areas below. Select a section to learn more 
            about our technical scope and specialized capabilities.
          </p>

          {/* Service Tabs */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Areas</h3>
            <div className="flex flex-wrap gap-3 mb-6">
              {Object.keys(serviceContent).map((service) => (
                <Button
                  key={service}
                  variant={selectedService === service ? "default" : "outline"}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    selectedService === service
                      ? "bg-[#45B6CD] text-white hover:bg-teal-700"
                      : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setSelectedService(service)}
                >
                  {service}
                </Button>
              ))}
            </div>

            {/* Dynamic Content */}
            <Card className="bg-white border border-teal-200 shadow-sm">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {serviceContent[selectedService as keyof typeof serviceContent].title}
                </h4>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {serviceContent[selectedService as keyof typeof serviceContent].description}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
