import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function ServicesSection() {
  const services = [
    {
      title: "CSR Consulting & Impact Assessment",
      icon: "/about/icons/1.png",
      //   description: "Comprehensive CSR strategy and impact measurement",
    },
    {
      title: "ESG & Sustainability Reporting",
      subtitle: "(BRSR, TCFD, CDP)",
      icon: "/about/icons/2.png",
      //   description: "Complete ESG reporting and compliance solutions",
    },
    {
      title: "Monitoring & Evaluation",
      subtitle: "(M&E)",
      icon: "/about/icons/3.png",
      //   description: "Data-driven monitoring and evaluation services",
    },
    {
      title: "Skill Development & Ecological Restoration",
      icon: "/about/icons/4.png",
      //   description: "Capacity building and environmental restoration",
    },
    {
      title: "Policy Research & Advisory",
      icon: "/about/icons/5.png",
      //   description: "Strategic policy analysis and advisory services",
    },
    {
      title: "Third-party Evaluation & Assurance",
      icon: "/about/icons/6.png",
      //   description: "Independent evaluation and assurance services",
    },
  ];

  return (
    <section className="mb-[75px]">
      <div className="max-w-8xl mx-[20px]">
        <h2 className="text-3xl font-bold text-center text-[#031318] mb-12 tracking-wide">
          WHAT WE DO
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 w-full h-90 border-none shadow-none rounded-none"
            >
              <CardContent className="flex flex-col items-center justify-center text-center h-full rounded-none">
                <div className="mb-8">
                  <div className="w-20 h-20 flex items-center justify-center">
                    <Image
                      src={service.icon || "/placeholder.svg"}
                      alt={service.title}
                      width={100}
                      height={100}
                      className="w-24 h-24 object-contain"
                    />
                  </div>
                </div>

                <h3 className="text-[24px] font-regular text-[#031318] mb-2 leading-tight">
                  {service.title}
                </h3>

                {service.subtitle && (
                  <p className="text-[24px] font-regular text-[#031318] mb-3">
                    {service.subtitle}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
