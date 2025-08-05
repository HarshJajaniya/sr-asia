"use client"

import { useState } from "react"
import { Users, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const driverContent = {
  " Social Impact Assessment (SIA) - ": {
    title: "Social Impact Assessment (SIA) - ",
    description:
      "Community Engagement: We actively engage with communities and stakeholders throughout the SIA process, soliciting their input, concerns, and aspirations. This participatory approach ensures that their voices are heard and incorporated into the assessment.Impact Identification: We identify and assess the potential social impacts of development projects, including changes in livelihoods, access to resources, social cohesion, and cultural heritage. This enables project stakeholders to anticipate and address potential challenges proactively.Stakeholder Consultation: We facilitate dialogues and consultations between project developers, government agencies, and affected communities to identify solutions and mitigate potential negative impacts. Our goal is to ensure that development projects are socially sustainable and beneficial for all stakeholders.Cultural Sensitivity: We approach SIA with cultural sensitivity and respect for local customs, traditions, and values. This enables us to build trust and rapport with communities, fostering cooperation and collaboration throughout the assessment process.",
  },
  "State-of-the-Art Technology": {
    title: "State-of-the-Art Technology",
    description:
      "We utilize state-of-the-art surveying equipment and techniques to deliver precise and detailed land surveys. Our team of experienced surveyors ensures that every inch of land is accurately measured and mapped. Comprehensive Analysis: Our land surveys include detailed analysis of topography, boundaries, and features of the land. This information is essential for making informed decisions and avoiding potential conflicts or challenges during project execution. Customized Solutions: We tailor our land survey services to meet the specific needs and objectives of each project. Whether it's a small-scale development or a large-scale infrastructure project, we provide customized solutions to ensure accurate and reliable results.",
  },
  "Environment & Social Impact Assessment (ESIA)": {
    title: "Environment & Social Impact Assessment (ESIA)",
    description:
      "Integrated Assessment: We conduct integrated assessments that consider the interactions between environmental and social factors. This ensures a comprehensive understanding of the potential impacts of development projects on ecosystems, biodiversity, and human well-being.Environmental Analysis: We assess the potential environmental impacts of projects, including changes in air and water quality, habitat destruction, and pollution. Our goal is to identify measures to minimize environmental degradation and promote sustainable practices.Social Analysis: We analyze the potential social impacts of projects, including changes in livelihoods, access to resources, and social dynamics. This enables us to anticipate and address potential challenges and maximize positive social outcomes.Stakeholder Engagement: We actively engage with stakeholders throughout the ESIA process, soliciting their input, concerns, and feedback. This participatory approach ensures that the voices of affected communities are heard and considered in decision-making.",
  },
  "Environmental Impact Assessment (EIA)- ": {
    title: "Environmental Impact Assessment (EIA)- ",
    description:
      "Thorough Evaluation: We conduct thorough evaluations to assess the potential environmental impacts of proposed projects across various sectors, including infrastructure development, energy, construction, and manufacturing.Regulatory Compliance: Our team ensures compliance with relevant environmental regulations and standards throughout the EIA process, helping clients navigate complex regulatory requirements and obtain necessary permits and approvals.Multidisciplinary Approach: Our EIA process involves a multidisciplinary approach, integrating expertise in environmental science, engineering, ecology, and social sciences to provide a comprehensive assessment of potential impacts.",
  },
  "Resettlement and Rehabilitation (R&R)": {
    title: "Resettlement and Rehabilitation (R&R)",
    description:
      "Comprehensive Planning: We develop comprehensive resettlement and rehabilitation plans that address the needs and concerns of affected communities. Our approach involves extensive stakeholder engagement to ensure that the voices of those impacted are heard and considered. Livelihood Restoration: We prioritize livelihood restoration for displaced individuals and communities, implementing programs that provide alternative income sources and support sustainable development. This includes skills training, access to resources, and assistance in finding new employment opportunities. Social Support: Our R&R initiatives include social support programs that address the psychological and emotional well-being of affected individuals. We recognize the importance of community cohesion and work to rebuild social networks and support systems.",
  },
}


export default function AdvisoryServicesPage() {
const [selectedDriver, setSelectedDriver] = useState<string>(
  " Social Impact Assessment (SIA) - "
);


  return (
    <div className="min-h-screen">
      <div className="max-w-full mb-[75px] mx-[20px]">
        {/* Introduction Section */}
        <section className="mb-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h1>
          <p className="text-[#246875] leading-relaxed ">
           At SR Asia, we understand the critical role of accurate land surveying in ensuring the success of development projects. Our Land Survey services offer precision and reliability, providing essential data for project planning, design, and implementation.



          </p>
        </section>

        {/* What's Next Section */}
        <section className="mb-16">
          <h2 className="text-[tertiary/700] text-3xl font-bold mb-6">What's next for Land Survey?</h2>
          <p className="text-[#246875] leading-relaxed mb-8">
        At SR Asia, we understand the critical role of accurate land surveying in ensuring the success of development projects. Our Land Survey services offer precision and reliability, providing essential data for project planning, design, and implementation.
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
