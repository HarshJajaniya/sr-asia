import Image from "next/image"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils" // Assuming cn utility is available

interface UniversityCardProps {
  imageSrc: string
  imageAlt: string
  title: string
  description: string
}

function UniversityCard({ imageSrc, imageAlt, title, description }: UniversityCardProps) {
  return (
    <Card className="group relative w-full max-w-sm overflow-hidden rounded-lg shadow-lg bg-gray-800">
      <div className="relative h-64 w-full">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          width={400}
          height={250}
          style={{ objectFit: "cover" }}
          className="transition-transform duration-300 ease-in-out group-hover:scale-105"
          priority
        />

        {/* Gradient only appears on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Text content visible only on hover */}
      <CardContent
        className={cn(
          "absolute bottom-0 left-0 right-0 p-4 text-white",
          "transition-all duration-300 ease-in-out",
          "opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0"
        )}
      >
        <CardTitle className="text-xl font-bold mb-2">{title}</CardTitle>
        <CardDescription className="text-sm text-gray-200">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}



export default function Home() {
  const universities = [
    {
      imageSrc: "/flags/1.png", // Using placeholder for consistency
      imageAlt: "Building of IIT Madras",
      title: "IIT Madras",
      description:
        "Indian Institute of Technology Madras is one of India's premier engineering institutions, known globally for its research and innovation. SRI Asia collaborates with IIT Madras on technology-driven research, social impact assessments, and technology integration in development projects.",
    },
    {
      imageSrc: "/flags/2.png", // Using placeholder for consistency
      imageAlt: "Building of Hansraj College, University of Delhi",
      title: "Hansraj College, University of Delhi",
      description:
        "Hansraj College is one of the top-ranked colleges under Delhi University, celebrated for its academic excellence and vibrant student community. SRI Asia partners with Hansraj to promote youth engagement in SDG, CSR education, and internship-driven field research.",
    },
    {
      imageSrc: "/flags/3.png", // Using placeholder for consistency
      imageAlt: "Aerial view of Central University of Himachal Pradesh",
      title: "Central University of Himachal Pradesh",
      description:
        "A leading center for higher education in India, the Central University of Himachal Pradesh focuses on inclusive learning and research. SRI Asia works with the university on joint policy research, ecological studies, and capacity-building initiatives in rural development.",
    },
  ]

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#EEFAFE] p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {universities.map((uni, index) => (
          <UniversityCard
            key={index}
            imageSrc={uni.imageSrc}
            imageAlt={uni.imageAlt}
            title={uni.title}
            description={uni.description}
          />
        ))}
      </div>
    </div>
  )
}
