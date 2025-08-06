"use client";

import { useState } from "react";
import { Play, Users, Leaf, TrendingUp, Shield, Calendar, Link } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const webinarSlides = [
  {
    id: 1,
    type: "WEBINAR",
    title: "ESG Awareness in the Pharmaceutical Industry",
    date: "Dec 22 2023",
    link:"https://www.linkedin.com/feed/update/urn:li:activity:7146372588250869760/",
    description:
      "The pharmaceutical industry is witnessing a paradigm shift towards greater Environmental, Social, and Governance (ESG) awareness, driven by recent SEBI regulations.",
    backgroundImage: "/esg-bg.png",
    pillars: [
      {
        icon: <TrendingUp className="w-8 h-8 text-green-600" />,
        title: "Sustainability Synergy",
        points: [
          "Strategies for integrating sustainability practices",
          "Balancing profitability with environmental responsibility",
          "Case studies of successful ESG implementation",
          "Identifying key performance indicators",
        ],
      },
      {
        icon: <Users className="w-8 h-8 text-blue-600" />,
        title: "Social Harmony and Inclusion",
        points: [
          "Promoting diversity, equity, and inclusion",
          "Community engagement initiatives",
          "Impact of social responsibility on brand reputation",
          "Employee wellbeing programs",
        ],
      },
      {
        icon: <Leaf className="w-8 h-8 text-green-500" />,
        title: "Climate Action and Environmental Stewardship",
        points: [
          "Adopting strategies for reducing environmental footprint",
          "Green technologies and sustainable innovation",
          "Carbon footprint reduction initiatives",
        ],
      },
      {
        icon: <Shield className="w-8 h-8 text-teal-600" />,
        title: "Investor Insights",
        points: [
          "How ESG performance influences investment decisions",
          "Sustainable investing and impact investment",
          "Communicating ESG initiatives to stakeholders",
        ],
      },
    ],
  },
  {
    id: 2,
    type: "WEBINAR",
    title: "ESG Challenges in Pharma: Charting a Sustainable Course",
    date: "Dec 30 2023",
    link:"https://www.linkedin.com/posts/birendraraturi_activity-7151517073309884416-UROW?utm_source=share&utm_medium=member_desktop",
    description:
      "As the pharmaceutical industry continues to evolve, so do the Environmental, Social, and Governance (ESG) challenges it faces. Join us as we delve into the crucial conversation on ESG Challenges in Pharma: Charting a Sustainable Course.",
    backgroundImage: "/esg-bg.png",
    challenges: [
      {
        title: "Environmental Responsibility",
        description:
          "From reducing carbon emissions to managing pharmaceutical waste",
      },
      {
        title: "Social Impact",
        description:
          "Initiatives can address healthcare disparities, promoting access to medicines, and engage with local communities",
      },
      {
        title: "Governance Practices",
        description: "Enhancing transparency, ethics, and accountability",
      },
      {
        title: "Innovation and Sustainability",
        description:
          "What role does innovation play in drive sustainability within the industry",
      },
      {
        title: "Regulatory Compliance",
        description:
          "Navigating evolving regulations and standards to ensure compliance",
      },
    ],
  },
  {
    id: 3,
    type: "WEBINAR",
    title: "Digital Transformation in Healthcare",
    date: "Jan 15 2024",
    link:"https://www.linkedin.com/posts/birendraraturi_join-us-for-an-insightful-csr-impact-assessment-activity-7156938439689490432-53Te?utm_source=share&utm_medium=member_desktop",
    description:
      "Explore the latest trends in digital health technologies and their impact on patient care and pharmaceutical operations.",
    backgroundImage: "/esg-bg.png",
    pillars: [
      {
        icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
        title: "AI & Machine Learning",
        points: [
          "Drug discovery acceleration",
          "Predictive analytics in healthcare",
          "Personalized medicine approaches",
          "Clinical trial optimization",
        ],
      },
      {
        icon: <Users className="w-8 h-8 text-indigo-600" />,
        title: "Patient-Centric Solutions",
        points: [
          "Digital therapeutics platforms",
          "Remote patient monitoring",
          "Telemedicine integration",
          "Patient engagement tools",
        ],
      },
      {
        icon: <Shield className="w-8 h-8 text-cyan-600" />,
        title: "Data Security & Privacy",
        points: [
          "HIPAA compliance strategies",
          "Blockchain in healthcare",
          "Secure data sharing protocols",
          "Privacy-preserving technologies",
        ],
      },
      {
        icon: <Leaf className="w-8 h-8 text-emerald-600" />,
        title: "Sustainable Tech",
        points: [
          "Green IT infrastructure",
          "Energy-efficient data centers",
          "Sustainable software development",
          "Carbon-neutral cloud solutions",
        ],
      },
    ],
  },
];

export default function Component() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="bg-gradient-to-br from-green-50 to-blue-50 mb-0 pb-0" id="webinar">
      <Carousel className="w-full max-w-8xl mx-auto">
        <CarouselContent>
          {webinarSlides.map((slide, index) => (
            <CarouselItem key={slide.id}>
              <div className="px-6 pt-2">
                {/* Header Section */}
                <div className="relative mb-8 rounded-2xl overflow-hidden bg-gradient-to-r from-green-100 to-teal-100 p-8">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <Badge
                          variant="secondary"
                          className="bg-teal-700 text-white px-4 py-1"
                        >
                          {slide.type}
                        </Badge>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Calendar className="w-4 h-4" />
                          {slide.date}
                        </div>
                      </div>
                      <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                        {slide.title}
                      </h1>
                      <p className="text-gray-600 mb-4 max-w-2xl">
                        {slide.description}
                      </p>
                      <Button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2">
                        <Play className="w-4 h-4 mr-2" />
                        <a href={slide.link} target="_blank">
                          Watch Recording
                        </a>
                      </Button>
                    </div>
                    <div className="w-full lg:w-80 h-48 bg-green-200 rounded-lg flex items-center justify-center">
                      <Leaf className="w-16 h-16 text-green-600" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                {slide.pillars ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {slide.pillars.map((pillar, pillarIndex) => (
                      <Card key={pillarIndex} className="h-[400px]">
                        <CardContent className="p-6">
                          <div className="flex flex-col items-center text-center mb-4">
                            {pillar.icon}
                            <h3 className="font-semibold text-lg mt-3 mb-4">
                              {pillar.title}
                            </h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-600">
                            {pillar.points.map((point, pointIndex) => (
                              <li
                                key={pointIndex}
                                className="flex items-start gap-2"
                              >
                                <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                                {point}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        {slide.title}
                      </h2>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                        <Calendar className="w-4 h-4" />
                        {slide.date}
                      </div>
                      <p className="text-gray-600 mb-4">{slide.description}</p>
                      <Button className="bg-gray-800 hover:bg-gray-700 text-white">
                        <Play className="w-4 h-4 mr-2" />
                        <a href={slide.link} target="_blank">
                          Watch Recording
                        </a>
                      </Button>
                    </div>
                    <Card className="bg-teal-700 text-white">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-6">
                          {slide.title}
                        </h3>
                        <div className="space-y-4">
                          {slide.challenges?.map(
                            (challenge, challengeIndex) => (
                              <div
                                key={challengeIndex}
                                className="border-l-2 border-teal-300 pl-4"
                              >
                                <h4 className="font-semibold mb-1">
                                  {challenge.title}
                                </h4>
                                <p className="text-sm text-teal-100">
                                  {challenge.description}
                                </p>
                              </div>
                            )
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}

                {/* Slide Indicator */}
                <div className="flex justify-center mt-6 mb-0 gap-2">
                  {webinarSlides.map((_, slideIndex) => (
                    <div
                      key={slideIndex}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        slideIndex === index ? "bg-teal-600" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
}
