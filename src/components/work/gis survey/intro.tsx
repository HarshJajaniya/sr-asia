"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const driverContent = {
  Demographics: {
    title: "Demographics",
    description:
      "Sasti and Ramnagar together account for around 950 households distributed across four wards, with Ward 4 being the most populated. Understanding the ward-wise settlement distribution is vital for planning relocation and resource allocation, ensuring that vulnerable groups receive adequate support.",
  },
  "Land & Resources": {
    title: "Land & Resources",
    description:
      "The region is largely dependent on its natural resources, with 69,512 hectares under agriculture and 21,415 hectares of forest cover forming the backbone of local livelihoods. However, increasing built-up areas and barren land indicate growing human pressure and the need for sustainable land management.",
  },
  "Environmental Pressures": {
    title: "Environmental Pressures",
    description:
      "Coal mining within a 2 km radius of Sasti introduces multiple risks, including noise pollution, dust emissions, and land subsidence. Combined with rising SO₂ and PM2.5 levels, these environmental hazards threaten both public health and biodiversity, making continuous monitoring essential.",
  },
  "Climate Trends": {
    title: "Climate Trends",
    description:
      "Analysis of precipitation patterns from 1985 to 2022 shows fluctuations that directly impact agricultural productivity and water availability. These climate variations pose long-term risks to livelihood security, making resilience strategies a priority for community planning.",
  },
  "Infrastructure & Connectivity": {
    title: "Infrastructure & Connectivity",
    description:
      "Sasti and Ramnagar are connected to Rajura and Ballarpur through a network of inner and linking roads. While these roads enable movement and access to resources, they require strengthening to support safe relocation, improved mobility, and future development needs.",
  },
};

export default function AdvisoryServicesPage() {
  // ✅ Start with a valid driver key
  const [selectedDriver, setSelectedDriver] =
    useState<keyof typeof driverContent>("Demographics");

  const currentDriver = driverContent[selectedDriver];

  return (
    <div className="min-h-screen">
      <div className="max-w-full mx-auto px-6 py-12">
        {/* Introduction Section */}
        <section className="mb-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Introduction
          </h1>
          <p className="text-[#246875] leading-relaxed ">
            This report presents the Baseline Socio-Economic Survey (BLSES) and
            Resettlement Action Plan (RAP) for the project-affected region of
            Sasti village and the adjoining Ramnagar area in Rajura Taluka,
            Chandrapur District, Maharashtra. Located about 18 km south of
            Chandrapur, Sasti lies within the Vidarbha region and covers an area
            of 8.075 sq. km (807 hectares) under its Gram Panchayat. The
            community is linguistically diverse, with Telugu, Marathi, and Hindi
            being the commonly spoken languages. Surrounded by coal mining
            activity, Sasti faces challenges such as displacement, environmental
            risks, and land-use changes. The Region of Interest Map (Map 1)
            illustrates the Sasti Gram Panchayat boundaries and provides the
            foundation for GIS-based analysis and socio-economic assessment in
            this study.
          </p>
        </section>

        {/* What's Next Section */}
        <section className="mb-16">
          <h2 className="text-[tertiary/700] text-3xl font-bold mb-6">
            What's next for CSR Project Management?
          </h2>
          <p className="text-[#246875] leading-relaxed mb-8">
            The future focus for Sasti and Ramnagar revolves around resettlement
            planning, considering the risks posed by nearby coal mining
            activities such as noise, dust, land subsidence, and water
            contamination. Sustainable land-use management will be vital, with
            agriculture, forest, and built-up areas requiring balanced
            development. Monitoring air quality (SO₂ and PM2.5) and studying
            long-term precipitation trends (1985–2022) will guide environmental
            safeguards. Improved infrastructure and road connectivity will also
            play a central role in supporting safe relocation and ensuring the
            well-being of affected communities.
          </p>

          {/* Our Drivers */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Our Drivers
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
                  onClick={() =>
                    setSelectedDriver(driver as keyof typeof driverContent)
                  }
                >
                  {driver}
                </Button>
              ))}
            </div>

            {/* Dynamic Content Based on Selected Driver */}
            <Card className="bg-white border border-teal-200 shadow-sm">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {currentDriver?.title ?? "Select a driver"}
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {currentDriver?.description ??
                    "Please choose a driver from above."}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
