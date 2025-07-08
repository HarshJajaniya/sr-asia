import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function Component() {
  const features = [
    {
      title: "Global reporting compliance",
      description:
        "Blending community voices, tech-driven tools, and global best practices to create sustainable, equitable change.",
      image: "/about/what/1.png",
    },
    {
      title: "Trusted by corporates, PSUs, ministries, and NGOs",
      description:
        "A reliable partner to both private and public sector institutions for strategy, execution, and impact validation.",
      image: "/about/what/2.png",
    },
    {
      title: "Global reporting compliance (BRCGS, SQF, CDP)",
      description:
        "Expertise in international and national ESG frameworks for accurate, compliant, and transparent reporting.",
      image: "/about/what/3.png",
    },
    {
      title: "Presence in 6 countries & 26+ Indian states",
      description:
        "A wide geographic footprint enabling local insights and scalable implementation across Asia.",
      image: "/about/what/4.png",
    },
    {
      title: "Strong field presence with rigorous M&E tools",
      description:
        "Real-time monitoring and third-party evaluation to ensure measurable, traceable impact on the ground.",
      image: "/about/what/5.png",
    },
    {
      title: "Global reporting compliance",
      description:
        "Blending community voices, tech-driven tools, and global best practices to create sustainable, equitable change.",
      image: "/about/what/6.png",
    },
  ];

  return (
    <div className="w-full max-w-full mx-auto mb-[75px] px-4 ">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#072328] mb-2">
          WHY CHOOSE US
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="border-0 shadow-none rounded-none">
            <CardContent className="p-0">
              <div className="aspect-video mb-4 overflow-hidden">
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-lg text-gray-900 leading-tight px-4 pt-0">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed px-4 pb-4">
                  {feature.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
