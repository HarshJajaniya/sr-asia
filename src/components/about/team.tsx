"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TeamDisplay() {
  const [activeTab, setActiveTab] = useState("advisory-board")

  const teamMembers = [
    {
      id: "Shruti-Sharma",
      name: "Shruti Sharma",
      title: "HR Executive",
      image: "/team/1.jpeg",
    },
    {
      id: "Rameen-Anjum ",
      name: "Rameen Anjum ",
      title: "Sr. Research Analyst",
      image: "/team/3.jpeg",
        },
    {
      id: "Kalash-Kesharwani ",
      name: "Kalash Kesharwani ",
      title: "Salesforce Admin",
      image: "/team/2.jpeg",
    },
    {
      id: "Jaya-Yadav ",
      name: "Jaya Yadav ",
      title: "Research Analyst",
      image: "/team/4.jpeg",
        },
    {
      id: "Sanjukta-Tirkey",
      name: "Sanjukta Tirkey",
      title: "Research Analyst",
      image: "/team/5.jpeg",
    },
    {
      id: "Tanu-Akolia",
      name: "Tanu Akolia",
      title: "HR Generalist",
      image: "/team/6.jpeg",
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
