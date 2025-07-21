"use client";

import { useState } from "react";

export default function TeamDisplay() {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    if (!id) return;
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const teamMembers = [
    {
      id: "Birendra-Dutt-Raturi",
      name: "Birendra Dutt Raturi",
      title: "International Director",
      image: "/team/6.JPG",
      description:
        "Birendra Raturi is the Director of SR Asia and has done MPhil from Delhi University. He has vast 30 years experience in the Management functions which includes credit and non-credit needs of MSEs. He has offered consulting services for multiple sectors for a wide range of companies starting from MSME to large scale and government organizations",
    },
    {
      id: "Rakesh-Khare",
      name: "Rakesh Khare",
      title: "Senior Advisor",
      image: "/team/10.png",
      description:
        "Rakesh Khare is a Senior Advisor with significant experience in policy formulation and sustainable development strategies for social impact organizations.",
    },
    {
      id: "Swati-Bhatt",
      name: "Swati Bhatt",
      title: "Director",
      image: "/team/11.jpg",
      description:
        "Swati Bhatt brings leadership in sustainability initiatives and operational excellence at SR Asia.",
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
        "Dolly oversees coordination between departments and project support functions.",
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
      id: "Kalash-Kesharwani",
      name: "Kalash Kesharwani",
      title: "Salesforce Admin",
      image: "/team/1.JPG",
      description:
        "Kalash manages CRM systems and ensures data integrity on Salesforce.",
    },
    {
      id: "Jaya-Yadav",
      name: "Jaya Yadav",
      title: "Research Analyst",
      image: "/team/5.JPG",
      description:
        "Jaya provides data-driven insights for sustainable research projects.",
    },
    {
      id: "Sanjukta-Tirkey",
      name: "Sanjukta Tirkey",
      title: "Research Associate",
      image: "/team/2.JPG",
      description:
        "Sanjukta contributes to research design and field data collection.",
    },
    {
      id: "Tanu-Akolia",
      name: "Tanu Akolia",
      title: "HR Generalist",
      image: "/team/9.jpeg",
      description: "Tanu supports end-to-end HR processes and team wellness.",
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
      <p className="text-center text-2xl md:text-3xl mb-[75px] font-bold text-gray-800">
        OUR TEAM
      </p>

      <div className="w-full justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
          {teamMembers.map((member) => {
            if (!member.id) return null;
            const isExpanded = expanded[member.id] || false;

            return (
              <div
                key={member.id}
                className="flex flex-col items-center text-center"
              >
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name || "Team member"}
                  className="object-cover w-32 h-40 rounded-md"
                />
                <h3 className="text-sm font-semibold mt-2 text-[#031318]">
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
