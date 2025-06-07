"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TeamDisplay() {
  const [activeTab, setActiveTab] = useState("advisory-board")
  const [expandedCard, setExpandedCard] = useState<string | null>("ameya-aatman")

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
      about: "Arvind is a postgraduate in International Development from University of Nottingham and has...",
    },
    {
      id: "team-member-3",
      name: "",
      title: "",
      image: "/team/3.png",
      about: "",
    },
    {
      id: "team-member-4",
      name: "",
      title: "",
      image: "/team/4.png",
      about: "",
    },
    {
      id: "team-member-5",
      name: "",
      title: "",
      image: "/team/5.png",
      about: "",
    },
  ]

  const handleCardClick = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id)
  }

  return (
    <div className="container mx-auto py-8 px-6 lg:px-12">
      <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
        {teamMembers.map((member, index) => (
          <Card
            key={member.id}
            className={`relative overflow-hidden cursor-pointer bg-[#fffde7] border-[#fffde7] shadow-sm hover:shadow-md transition-shadow ${
              index === 0
                ? "w-full sm:w-[300px] min-h-[400px]"
                : index === 1
                  ? "w-full sm:w-[280px] min-h-[320px]"
                  : "w-full sm:w-[200px] h-[250px]"
            }`}
            onClick={() => handleCardClick(member.id)}
          >
            <div className="p-4">
              <div className={`relative ${index < 2 ? "mb-4" : ""}`}>
                <div
                  className={`aspect-square w-full ${index === 0 ? "max-h-[180px]" : index === 1 ? "max-h-[160px]" : "max-h-[140px]"} flex items-center justify-center overflow-hidden`}
                >
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name || "Team member"}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute top-2 right-2 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  H
                </div>
              </div>

              {(index === 0 || index === 1) && (
                <div className="mt-2">
                  {member.name && <h3 className="text-lg font-semibold text-green-800">{member.name}</h3>}
                  {member.title && <p className="text-sm text-gray-600 mb-3">{member.title}</p>}
                  {member.about && (
                    <>
                      <p className="text-sm font-medium text-gray-700">About {member.name.split(" ")[0]}</p>
                      <p className={`text-xs mt-1 text-gray-600 ${index === 0 ? "line-clamp-8" : "line-clamp-4"}`}>
                        {member.about}
                      </p>
                    </>
                  )}
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-3xl">
          <TabsList className="w-full justify-between bg-transparent">
            <TabsTrigger
              value="advisory-board"
              className={`text-base ${activeTab === "advisory-board" ? "text-green-800 font-medium" : "text-gray-400"}`}
            >
              Advisory Board
            </TabsTrigger>
            <TabsTrigger
              value="management-team"
              className={`text-base ${activeTab === "management-team" ? "text-green-800 font-medium" : "text-gray-400"}`}
            >
              Management Team
            </TabsTrigger>
            <TabsTrigger
              value="executive-team"
              className={`text-base ${activeTab === "executive-team" ? "text-green-800 font-medium" : "text-gray-400"}`}
            >
              Executive Team
            </TabsTrigger>
            <TabsTrigger
              value="subject-matter-expert"
              className={`text-base ${activeTab === "subject-matter-expert" ? "text-green-800 font-medium" : "text-gray-400"}`}
            >
              Subject Matter Expert
            </TabsTrigger>
            <TabsTrigger
              value="country-directors"
              className={`text-base ${activeTab === "country-directors" ? "text-green-800 font-medium" : "text-gray-400"}`}
            >
              Country Directors
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  )
}
