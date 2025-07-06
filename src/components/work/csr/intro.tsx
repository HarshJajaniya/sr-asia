"use client"

import { useState } from "react"
import { Users, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const driverContent = {
  "Alignment with Legal & Policy Frameworks": {
    title: "Alignment with Legal & Policy Frameworks",
    description:
      "Navigate complex regulatory changes with expert guidance. We help organizations stay compliant with evolving standards, ensuring seamless adaptation to new requirements while maintaining operational excellence.",
  },
  "Strategic Impact Planning": {
    title: "Strategic Impact Planning",
    description:
      "Meet rising environmental, social, and governance expectations from stakeholders. Our comprehensive ESG advisory services help organizations build sustainable practices and transparent reporting frameworks.",
  },
  "Efficient Resource Utilization": {
    title: "Efficient Resource Utilization",
    description:
      "Integrate advisory services across all business functions for maximum impact. We provide holistic solutions that align strategic objectives with operational execution and long-term value creation.",
  },
   "Monitoring & Risk Mitigation": {
    title: "Monitoring & Risk Mitigation",
    description:
      "Implement robust monitoring frameworks to track project performance and mitigate risks proactively. Our data-driven insights enable organizations to make informed decisions and adapt strategies in real-time.",
  },

}


export default function AdvisoryServicesPage() {
const [selectedDriver, setSelectedDriver] = useState<string>(
  "Alignment with Legal & Policy Frameworks"
);


  return (
    <div className="min-h-screen">
      <div className="max-w-8xl mx-auto px-6 py-12">
        {/* Introduction Section */}
        <section className="mb-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h1>
          <p className="text-[#246875] leading-relaxed ">
           SR Asia offers specialized Program/Project Implementation services, dedicated to translating organizational vision into tangible results. With our expertise in project management, stakeholder engagement, and impact assessment, we support organizations in executing their programs and projects efficiently and effectively.


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
