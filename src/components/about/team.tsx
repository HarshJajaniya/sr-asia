"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TeamDisplay() {
  const [activeTab, setActiveTab] = useState("advisory-board");

  const teamMembers = [
    {
      id: "Birendra-Dutt-Raturi",
      name: "Birendra Dutt Raturi",
      title: "International Director",
      image: "/team/6.JPG",
    },
    {
      id: "Rakesh-Khare",
      name: "Rakesh Khare",
      title: "Senior Advisor",
      image: "/team/10.png",
    },

    {
      id: "Swati-Bhatt",
      name: "Swati Bhatt",
      title: "Director",
      image: "/team/11.JPG",
    },
    {
      id: "Shruti-Sharma",
      name: "Shruti Sharma",
      title: "HR Executive",
      image: "/team/8.JPG",
    },
    {
      id: "Dolly-Pandey",
      name: "Dolly Pandey",
      title: "Assistant Manager",
      image: "/team/4.JPG",
    },
    {
      id: "Lalvulmawii",
      name: "Lalvulmawii",
      title: "Prjoect Coordinator",
      image: "/team/7.jpg",
    },
    {
      id: "Kalash-Kesharwani",
      name: "Kalash Kesharwani",
      title: "Salesforce Admin",
      image: "/team/1.JPG",
    },
    {
      id: "Jaya-Yadav",
      name: "Jaya Yadav",
      title: "Research Analyst",
      image: "/team/5.JPG",
    },
    {
      id: "Sanjukta-Tirkey",
      name: "Sanjukta Tirkey",
      title: "Research Associate",
      image: "/team/2.JPG",
    },
    {
      id: "Tanu-Akolia",
      name: "Tanu Akolia",
      title: "HR Generalist",
      image: "/team/9.jpeg",
    },
    {
      id: "Shrabanti-Chakraborty",
      name: "Shrabanti Chakraborty",
      title: "Website design and Development Lead",
      image: "/team/3.JPG",
    },
  ];

  return (
    <div className="w-full  px-2 sm:px-4 mb-[75px]">
      <p className="text-center text-2xl md:text-3xl mb-[75px] font-bold text-gray-800">
        OUR TEAM
      </p>

      {/* ✅ Centered team grid */}
      <div className="w-full justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
          {teamMembers.map((member) => (
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
