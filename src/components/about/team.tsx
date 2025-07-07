"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TeamDisplay() {
  const [activeTab, setActiveTab] = useState("advisory-board");

  const teamMembers = [
    {
      id: "Shruti-Sharma",
      name: "Shruti Sharma",
      title: "HR Executive",
      image: "/team/1.jpeg",
    },
    {
      id: "Dolly-Pandey",
      name: "Dolly Pandey",
      title: "Assistant Manager",
      image: "/team/8.jpg",
    },
    {
      id: "Kalash-Kesharwani",
      name: "Kalash Kesharwani",
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
  ];

  return (
    <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 mb-[75px]">
      <p className="text-center text-2xl md:text-3xl mb-[75px] font-bold text-gray-800 ">
        OUR TEAM
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="flex flex-col items-center text-center"
          >
            <img
              src={member.image || "/placeholder.svg"}
              alt={member.name || "Team member"}
              className="object-cover w-32 h-40"
            />
            <h3 className="text-sm font-semibold mt-2 text-[#031318]">
              {member.name}
            </h3>
            <p className="text-xs text-gray-600">{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
