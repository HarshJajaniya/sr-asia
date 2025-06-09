"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TeamDisplay() {
  const [activeTab, setActiveTab] = useState("advisory-board")

  const teamMembers = [
    {
      id: "ameya-aatman",
      name: "Ameya Aatman",
      title: "Project Manager",
      image: "/team/1.png",
      about:
        "Ameya is a postgraduate in International Development from University of Nottingham. She has experience in the fields of Strategy, Policymaking, Human Centric Innovation, Design Thinking, and Sustainable Development. She has worked across multiple NGOs. She is an experienced professional with a demonstrated history of working in the non-profit organization management industry.",
    },
    {
      id: "arvind-raturi",
      name: "Arvind Raturi",
      title: "Accountant",
      image: "/team/2.png",
      about:
        "Arvind is a postgraduate in International Development from University of Nottingham. He has worked with several non-profit organizations and has experience in budgeting and financial analysis.",
    },
    {
      id: "team-member-3",
      name: "Team Member 3",
      title: "Designer",
      image: "/team/3.png",
      about:
        "Creative and experienced designer specializing in branding, web, and UX design.",
    },
    {
      id: "team-member-4",
      name: "Team Member 4",
      title: "Developer",
      image: "/team/4.png",
      about:
        "Full-stack developer with expertise in React, Node.js, and cloud architecture.",
    },
    {
      id: "team-member-5",
      name: "Team Member 5",
      title: "Coordinator",
      image: "/team/5.png",
      about:
        "Efficient project coordinator with strong communication and team management skills.",
    },
  ]

  return (
    <div className="container mx-auto px-6 lg:px-12">
     <div className="flex flex-wrap justify-center gap-6 relative overflow-visible">

        {teamMembers.map((member) => (
          <Card
            key={member.id}
            className={`
              group relative cursor-pointer 
    bg-[#fffde7] border-[#fffde7] shadow-md 
    transition-transform duration-300 
    w-[200px] h-[300px] 
    transform-gpu
    hover:scale-125
    hover:z-50
    z-10
            `}
          >
            <div className="pl-4 pr-4 flex flex-col items-center text-center h-full overflow-hidden">
              <div className="w-40 h-65 overflow-hidden mb-4">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name || "Team member"}
                  className="object-cover w-full h-full"
                />
              </div>

              <h3 className="text-lg font-semibold text-green-800">{member.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{member.title}</p>

              <div
                className={`
                  text-xs text-gray-600 mt-2 transition-all duration-300 
                  overflow-hidden max-h-[60px] group-hover:max-h-[400px]
                `}
              >
                <p className="line-clamp-3 group-hover:line-clamp-none">
                  {member.about}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-3xl">
          <TabsList className="w-full justify-between bg-transparent">
            {[
              "advisory-board",
              "management-team",
              "executive-team",
              "subject-matter-expert",
              "country-directors",
            ].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className={`text-base ${
                  activeTab === tab ? "text-green-800 font-medium" : "text-gray-400"
                }`}
              >
                {tab.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </div>
  )
}
