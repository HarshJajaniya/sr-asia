"use client";

import { useState } from "react";

export default function TeamDisplay() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    if (!id) return;
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const teamMembers = [
    {
      id: "Dr. Swati-Bhatt",
      name: "Dr. Swati Bhatt",
      title: "Director",
      image: "/team/11.jpg",
      description:
        "She has been a part of Monitoring and Evaluation of CSR Projects team through SR Asia for corporates like THDCIL, GAIL, Indraprastha Gas Ltd. In addition to her regular academic activities, she is involved with ATAL Incubation Centre, Gov. of India as a Mentor for Change, in consulting activities for new start-ups.",
    },
    {
      id: "Birendra-Dutt-Raturi",
      name: "Birendra Dutt Raturi",
      title: "International Director",
      image: "/team/6.JPG",
      description:
        "Birendra Raturi is the Director of SR Asia and has done MPhil from Delhi University. He has vast 30 years’ experience in the Management functions which includes credit and non-credit needs of MSEs. He has offered consulting services for multiple sectors for a wide range of companies starting from MSME to large scale and government organizations.He has consulted over 200 companies for the various assignment such as sustainability Study, international standards (ISO) certifications, Lean and ZERO-defect Manufacturing, Export coaching and International Trade fair preparation and participation in EU countries, CSR and sustainability –value chain mapping, CSR project design and assessment, CSR and sustainability reporting and Assurances as per AA1000 AS, GRI-G4, OECD and UNGC principles and guidelines.",
    },
    {
      id: "Rakesh-Khare",
      name: "Rakesh Khare",
      title: "Senior Advisor",
      image: "/team/10.png",
      description:
        "Mr. Rakesh Khare is B.E in Civil Engineering from IIT Roorkee. He is former Executive Director (Technical) from THDC INDIA LTD. and presently CEO with SR Asia.He has more than thirty-Eight years of experience in construction of all Civil Engineering, Atomic Power, Underground Works of Hydropower projects etc.He had given lectures/Presentations on CSR in various Educational Institute including IIT/Various corporations like NHPC/HAL/NTPC etc. He was instrumental in forming CSR policy/procedure/formation of NGO named SEWA THDC prior to Govt. Of India notified CSR guidelines. Apart from technical works he was also in charge for CSR works of THDC since inception (2008). During his tenure corporation has received many awards",
    },
    {
      id: "Jaya-Yadav",
      name: "Jaya Yadav",
      title: "Research Analyst",
      image: "/team/5.JPG",
      description:
        "Jaya Yadav holds a Master's degree in Sustainable Management and Design Application from Lady Irwin College, Delhi University. She works as a research analyst and is responsible for proposal making, developing approach and methodology, Sampling techniques, developing research tools using software applications, training of field investigators. She has over two years of experience on CSR project assessment, impact evaluation and in sustainability reporting assurance.",
    },
    {
      id: "Tanu-Akolia",
      name: "Tanu Akolia",
      title: "HR Head",
      image: "/team/9.jpeg",
      description:
        "Tanu Sati is a postgraduate in Resource Management from Lady Irwin College, Delhi University. She has over four years’ experience in both Human Resources and research activities. She is heading HR and admin function in SR Asia and her responsibilities are day to day administration of people’s management, office care and resource accounting and auditing. She also maintains data and sourcing of recruitment agencies including universities and colleges for placement and internships, Empanelment of Experts, and the recruitment of Field Survey Executives tailored to specific project requirements including all HR related compliances.",
    },
    {
      id: "Shruti-Sharma",
      name: "Shruti Sharma",
      title: "HR Executive",
      image: "/team/8.jpg",
      description:
        "Shruti handles talent engagement and HR operations at SR Asia.",
    },

    {
      id: "Dolly-Pandey",
      name: "Dolly Pandey",
      title: "Assistant Manager",
      image: "/team/4.JPG",
      description:
        "Dolly Pandey is a graduate in social science from Delhi university. She has more than five years’ experience in the fiancé /Banking sector providing solutions to the clients.She is responsible for Preparing identifying tender, Proposal Making, Budget Preparation, submission of tenders through eprocurement website or emails etc as required including  client interactions and follow-ups.",
    },
    {
      id: "Lalvulmawii",
      name: "Lalvulmawii",
      title: "Project Coordinator",
      image: "/team/7.jpg",
      description:
        "Lalvulmawii manages project execution and field operations.",
    },
    {
      id: "Sanjukta-Tirkey",
      name: "Sanjukta Tirkey",
      title: "Research Associate",
      image: "/team/2.JPG",
      description:
        "Sanjukta Tirkey holds a Master’s degree in Sustainable Management and Design Application from Lady Irwin College, University of Delhi. She specializes in sustainable development with expertise in assurance of BRSR and sustainability reporting. Her work involves conducting site visits, developing data collection tools, preparing site-wise reports, and carrying out gap assessments, mapping exercises, and materiality as well as double materiality analyses. She also has experience in Corporate Social Responsibility (CSR) projects, Social Impact Assessments (SIA), and Resettlement & Rehabilitation (R&R) projects, where she contributes to designing methodologies, training field investigators, leading field teams, and managing end-to-end data collection and assessment processes.",
    },
    {
      id: "Kalash-Kesharwani",
      name: "Kalash Kesharwani",
      title: "Salesforce Admin",
      image: "/team/1.JPG",
      description:
        "Kalash Kesharwani is a diploma holder in mechanical engineering at GPG and graduate in science from Allahabad University. She has Experience in SAP CPI. She is responsible for sales force implementation- data integration, trend analysis and technical assistance.",
    },
    {
      id: "New-Member",
      name: "Eshwar Lawadiya",
      title: "Project Officer",
      image: "/team/15.png",
      description:
        "Eshwar Lawadiya is a Project Officer with a focus on sustainable development initiatives.",
    },
    {
      id: "Shrabanti-Chakraborty",
      name: "Shrabanti Chakraborty",
      title: "Website Design and Development Lead",
      image: "/team/3.JPG",
      description:
        "Shrabanti leads the web design and dev team to deliver user-centric digital platforms.",
    },
  ];

  return (
    <div className="w-full px-2 sm:px-4 mb-[75px]">
      <p
        className="text-center text-2xl md:text-3xl mb-[75px] font-bold text-gray-800"
        id="team"
      >
        OUR TEAM
      </p>

      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center">
          {teamMembers.map((member) => {
            if (!member.id) return null;
            const isExpanded = expanded[member.id] || false;

            return (
              <div
                key={member.id}
                className="flex flex-col items-center text-center rounded-lg h-full max-w-[290px]"
              >
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name || "Team member"}
                  className="w-34 h-40 filter saturate-0 hover:saturate-100"
                />
                <h3 className="text-sm font-semibold mt-3 text-[#031318]">
                  {member.name}
                </h3>
                <p className="text-xs text-gray-600">{member.title}</p>

                {member.description && (
                  <>
                    <p
                      className={`text-sm mt-2 text-[#246875] transition-all duration-300 ${
                        isExpanded ? "" : "line-clamp-2"
                      }`}
                    >
                      {member.description}
                    </p>
                    {member.description.length > 60 && (
                      <button
                        onClick={() => toggleExpand(member.id)}
                        className="text-xs text-blue-500 mt-1 underline"
                      >
                        {isExpanded ? "Read Less" : "Read More"}
                      </button>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
