"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { Button } from "@/components/ui/button";

type Report = {
  id?: number | string;
  _id?: string;
  image: string;
  alt: string;
  title: string;
  subtitle: string;
  link: string;
  description: string;
  category?: "brsr" | "impact" | "social";
};

const isValidImageUrl = (url: any) => {
  return typeof url === "string" && (url.startsWith("http") || url.startsWith("/"));
};

const staticReportCategories: Record<"brsr" | "impact" | "social", Report[]>  = {
  brsr: [
    {
      id: 1,
      image: "/report/4.png",
      alt: "BRSR Report",
      title: "BUSINESS RESPONSIBILITY AND SUSTAINABILITY REPORT (BRSR)",
      subtitle: "NHPC Limited",
      link:"https://nsearchives.nseindia.com/corporate/NHPC_02082024181825_SE_Intimation_BRSR_202324.pdf",
      description: "In the past decade, disclosure requirements have surged globally, compelling companies to identify their responsibilities concerning the Environment, Social, and Governance (ESG) aspects and transparently integrate them into their annual disclosures.",
    },
     {
      id: 2,
      image: "/report/5.png",
      alt: "BRSR Report",
      title: "BUSINESS RESPONSIBILITY AND SUSTAINABILITY REPORT (BRSR)",
      subtitle: "FY 2023-24 | GAIL(India) Limited",
      link:"https://nsearchives.nseindia.com/corporate/Himanshugail_01082024205141_BRSRPDF.pdf",
      description: "The Business Responsibility and Sustainability Report (BRSR) for FY 2023–24 by GAIL (India) Limited presents a detailed account of the company’s sustainability initiatives and responsible business practices. It covers environmental metrics such as GHG emissions, energy efficiency, water usage, and waste management, along with social indicators like workforce diversity, training, and grievance redressal. The report also outlines governance practices including ethical conduct, anti-corruption measures, and board oversight. GAIL’s operations in natural gas transmission, petrochemicals, and renewable energy are highlighted within the ESG framework. Notably, the report is independently assured by SR Asia, ensuring compliance with SEBI’s BRSR guidelines and enhancing its credibility.",
    },
   
     {
      id: 4,
      image: "/report/6.png",
      alt: "BRSR Report",
      title: "BUSINESS RESPONSIBILITY AND SUSTAINABILITY REPORT (BRSR)",
      subtitle: "Coal India Limited | FY 2023-24",
      link:"https://nsearchives.nseindia.com/corporate/COALINDIA_27072024144017_brsrfinal.pdf",
      description: "Coal India’s FY 2023–24 Business Responsibility and Sustainability Report marks a pivotal stride in its ESG journey, aligning with SEBI’s BRSR norms and integrated global frameworks . The report highlights major environmental initiatives, including the addition of 70 MWp ground-based and 1.6 MW rooftop solar capacity, the surge in green transportation, extensive afforestation, and the planning of 50 eco-parks by FY 2029 d3u7ubx0okog7j.cloudfront.net. It also underscores water conservation efforts through first-mile mine connectivity projects and community water supply schemes d3u7ubx0okog7j.cloudfront.net+1d3u7ubx0okog7j.cloudfront.net+1. Socially, Coal India emphasizes community welfare, education, healthcare, and employee wellbeing, while strong governance is reflected via board oversight, CSR and Risk Management Committees pib.gov.in+3d3u7ubx0okog7j.cloudfront.net+3d3u7ubx0okog7j.cloudfront.net+3.",
    },
      {
      id: 3,
      image: "/report/7.png",
      alt: "BRSR Report",
      title: "BUSINESS RESPONSIBILITY AND SUSTAINABILITY REPORT (BRSR)",
      subtitle: "Sapotra block of Karauli district 2023",
      link:"https://nsearchives.nseindia.com/corporate/SAIL_04092024183554_BRSR_SAIL_202324.pdf",
      description: "SAIL’s FY 2023–24 Business Responsibility & Sustainability Report provides a comprehensive overview of its ESG practices across integrated and special steel plants, mines, and offices nationwide . It highlights environmental efforts, including robust pollution control, energy conservation, and transparent GHG emissions reporting (Scope 1 & 2), alongside steps toward sustainable sourcing and human rights due diligence . The report also emphasizes SAIL’s social initiatives, covering employee diversity, welfare programs, training, and grievance redress systems",
    },
  ],
  impact: [
    {
      id: 5,
      image: "/report/2.png",
      alt: "CSR Projects of THDCIL",
      title: "IMPACT ASSESSMENT REPORT-2018",
      subtitle: "CSR Projects of THDCIL",
      link:"https://www.thdc.co.in/sites/default/files/Impact%20Assessment%20Report%20F.Y.%202020-21.pdf",
      description:
        "SEWA THDC has implemented various CSR projects during the year 2017-18. The four CSR projects have been implemented in different villages and districts of Uttarakhand. Some aspects like discerning MoU &LoA documents, visiting project site and sample verification, in depth discussion with the beneficiaries and stakeholders etc. were primarily considered while carrying out the evaluation & impact assessment study. These projects are executed on short term basis",
    },
    {
      id: 6,
      image: "/report/3.png",
      alt: "Sapotra block Education",
      title: "IMPACT ASSESSMENT REPORT 2023",
      subtitle: "Sapotra block of Karauli district – Remedial Education",
      link:"https://www.cogencis.com/assets/pdf/Reports_Impact_Assessment_CSR_Projects.pdf",
      description:
        "Mandi Airport is a proposed greenfield airport to be built at Nagchala in Mandi district of the Indian state of Himachal Pradesh. This airport will be built on a total of 232.12 hectares. The Airports Authority of India (AAI) has given its approval for the construction of the airport after a site visit in May 2018. In August 2019, the Chief Minister of Himachal Pradesh requested the Fifteenth Finance Commission for a special purpose grant of ₹1,000 crore (US$130 million) for the construction of the airport.",
    },
    {
      id: 7,
      image: "/report/8.png",
      alt: "Sapotra block Education",
      title: "IMPACT ASSESSMENT REPORT",
      subtitle: "Skill Council for Mining Sector",
      link:"https://www.skillcms.in/assetsfe/pdf/Impact_Assessment%20Report_January%202023.pdf",
      description:
        "SAIL’s FY 2023–24 Business Responsibility & Sustainability Report provides a comprehensive overview of its ESG practices across integrated and special steel plants, mines, and offices nationwide . It highlights environmental efforts, including robust pollution control, energy conservation, and transparent GHG emissions reporting (Scope 1 & 2), alongside steps toward sustainable sourcing and human rights due diligence . The report also emphasizes SAIL’s social initiatives, covering employee diversity, welfare programs, training, and grievance redress systems",
    },
  ],
  social: [
    {
      id: 8,
      image: "/report/1.png",
      alt: "Social Impact Report",
      title: "SOCIAL IMPACT REPORT",
      subtitle: "Land acquisition for Mandi International Greenfield Airport",
      link:"https://cdn.prod.website-files.com/5d70c9269b8d7bd25d8b1696/66c59d0da3aaeeb7223ca766_PzQZv3_GrE5vE6ODOck1Dl3_7leuhkARFL3AEruwz2w.pdf",
      description:
        " to transform the Sapotra block of Karauli district into an ODF block by improving the availability of water, sanitation, and hygiene facilities in government schools.",
    },
     {
      id: 9,
      image: "/report/9.png",
      alt: "Social Impact Report",
      title: "SOCIAL IMPACT REPORT",
      subtitle: "SJVN Limited",
      link:"",
      description:
        "The Impact assessment is conducted in accordance with the scope of work and terms of reference (ToR) outlined by SJVN for all completed CSR Programs/Projects/Activities with a value of Rs.100.00 lakh or more and in accordance with MCA, Notification dated 22-Jan-2021 Companies Amendment Rules, 2021 (Rule 8.3) listed in Annexure-4 of LOA dated 14-Apr-2022 is to be implemented in the year prior. The purpose of this study was to evaluate the impact of SJVN Ltd's CSR initiatives at various project sites in five Indian states. This impact report is the result of secondary research and extensive fieldwork conducted at project sites in Himachal Pradesh, Bihar (Buxar), Uttarakhand (Uttarkashi and Chamoli), Maharashtra (Nasik and Ahmadnagar) and Gujarat (Patan and Sundarnagar)."
    },
  ],
}
type CategoryKey = keyof typeof staticReportCategories;

export default function ReportViewer() {
  const [activeTab, setActiveTab] = useState<CategoryKey>("brsr");
  const [dynamicReports, setDynamicReports] = useState<Report[]>([]);

  useEffect(() => {
    axios.get("https://srasia-backend.onrender.com/api/reports/")
      .then((res) => setDynamicReports(res.data))
      .catch((err) => console.error("Error fetching reports", err));
  }, []);

  const combinedReports = (category: CategoryKey): Report[] => {
    const dynamic = dynamicReports.filter((r) => r.category === category);
    return [...staticReportCategories[category], ...dynamic];
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-60 bg-white border-r border-gray-200 p-4 space-y-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Projects Categories </h2>
        {(["brsr", "impact", "social"] as CategoryKey[]).map((key) => (
          <Button
            key={key}
             id={`${key}`}
            variant={activeTab === key ? "default" : "outline"}
            className="w-full"
            onClick={() => setActiveTab(key)}
          >
            {key === "brsr" ? "BRSR Assessments"  :
             key === "impact" ? "Impact Assessment" : "Social Impact Assessments"}
          </Button>
        ))}
      </div>

      {/* Report Cards */}
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="mx-auto max-w-4xl space-y-8">
          {combinedReports(activeTab).map((report, index) => (
            <div
              key={report._id ?? report.id ?? index}
              className="flex flex-col md:flex-row items-start gap-6 bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="flex-shrink-0 w-full md:w-[200px] h-[150px] relative">
             <Image
  src={isValidImageUrl(report.image) ? report.image : "/report/1.png"}
  alt={report.alt || "Default Image"}
  layout="fill"
  objectFit="cover"
/>

              </div>
              <div className="flex-1 space-y-2">
                <h2 className="text-xl font-bold text-gray-800 uppercase">{report.title}</h2>
                <h3 className="text-lg font-semibold text-gray-700">{report.subtitle}</h3>
                <p className="text-sm text-gray-600 line-clamp-3">{report.description}</p>
                {report.link && (
                  <Button className="bg-[#1a3640] text-white hover:bg-[#2a4650] px-6 py-2 rounded-md">
                    <a href={report.link} target="_blank" rel="noopener noreferrer">
                      View Report
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}