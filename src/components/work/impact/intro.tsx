"use client"

import { useState } from "react"
import { Users, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const driverContent = {
 "Impact Assessment": {
  title: "Impact Assessment",
  description:
    "We employ contemporary and innovative methods tailored to each project's vision, goals, and expected outcomes, ensuring accuracy and inclusivity. Our approach uses inclusive tools to capture diverse perspectives from communities, businesses, and government entities, guaranteeing that all voices are heard. We conduct thorough analyses of monitoring and evaluation reports, on-ground assessments, and other relevant documentation, establishing sustainability mapping to recommend simplified, future-focused solutions. Transparency is at the core of our process — we maintain open communication with stakeholders through clear updates, findings, and recommendations."
},
"Social Impact Assessment (SIA)": {
  title: "Social Impact Assessment (SIA)",
  description:
    "We evaluate the potential social effects of development projects to mitigate risks and maximize benefits for communities and stakeholders. Our process actively engages communities, incorporating their concerns and aspirations into the assessment. We identify and assess impacts on livelihoods, access to resources, social cohesion, and cultural heritage, and facilitate consultations between developers, government agencies, and affected communities to ensure socially sustainable outcomes. With cultural sensitivity at the forefront, we respect local customs and traditions, fostering trust and cooperation throughout the assessment."
},
"Environment & Social Impact Assessment (ESIA)": {
  title: "Environment & Social Impact Assessment (ESIA)",
  description:
    "We conduct integrated assessments addressing both environmental and social factors, providing a holistic view of a project's potential impacts on ecosystems and communities. Our environmental analysis covers air and water quality, biodiversity, and habitat protection, while our social analysis considers livelihoods, resource access, and community dynamics. Throughout the ESIA process, we engage stakeholders to incorporate their input and address their concerns, ensuring that decision-making is inclusive and grounded in both environmental responsibility and social well-being."
},
"Environmental Impact Assessment (EIA)": {
  title: "Environmental Impact Assessment (EIA)",
  description:
    "We offer comprehensive EIA services to evaluate the environmental consequences of proposed projects, ensuring planning and execution align with sustainable practices. Our evaluations span sectors such as infrastructure, energy, construction, and manufacturing. We ensure compliance with environmental regulations, guiding clients through permitting and approvals. Using a multidisciplinary approach that integrates environmental science, engineering, ecology, and social sciences, we provide well-rounded assessments. We engage stakeholders from local communities to NGOs, incorporating their perspectives into the process, and develop practical mitigation measures such as pollution prevention, habitat restoration, and ongoing environmental monitoring."
}


}


export default function AdvisoryServicesPage() {
const [selectedDriver, setSelectedDriver] = useState<string>(
  "Impact Assessment"
);


  return (
    <div className="min-h-screen">
      <div className="max-w-full mb-[75px] mx-[20px]">
        {/* Introduction Section */}
        <section className="mb-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h1>
          <p className="text-[#246875] leading-relaxed ">
          At SR Asia, we specialize in evaluating the intended or unintended effects of projects, programs, or policies on the environment, economy, and society. Our Impact Assessment service provides invaluable insights to guide decision-making, improve project outcomes, and drive sustainable growth.

Contemporary Methods: We employ contemporary and innovative methods throughout the impact assessment process, ensuring accuracy and inclusivity. Our approach is specific to each project's vision, goals, and real outcomes.
Inclusive Tools: We utilize inclusive tools to gather data and perspectives from diverse stakeholders, including communities, businesses, and government entities. This comprehensive approach ensures that all voices are heard and considered.
Thorough Analysis: We conduct thorough analysis of monitoring reports, evaluation reports, and other relevant papers, along with on-ground evaluation. Our team establishes a matrix that enables us to conduct sustainability mapping and recommend simplified solutions for the future.


          </p>
        </section>

        {/* What's Next Section */}
        <section className="mb-16">
          <h2 className="text-[tertiary/700] text-3xl font-bold mb-6">What's next for Impact Assessment?</h2>
          <p className="text-[#246875] leading-relaxed mb-8">
       At SR Asia, we specialize in evaluating the intended or unintended effects of projects, programs, or policies on the environment, economy, and society. Our Impact Assessment service provides invaluable insights to guide decision-making, improve project outcomes, and drive sustainable growth.
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
