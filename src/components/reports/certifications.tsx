import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

interface Certificate {
  id: string
  title: string
  issuer: string
  date: string
  imageUrl: string
  verificationLink?: string
}

const certificates: Certificate[] = [
  {
    id: "1",
    title: "ISO 9001:2015 Quality Management System",
    issuer: "International Organization for Standardization",
    date: "Issued: January 2023",
    imageUrl: "/placeholder.svg?height=100&width=100",
    verificationLink: "#",
  },
  {
    id: "2",
    title: "ISO 14001:2015 Environmental Management System",
    issuer: "International Organization for Standardization",
    date: "Issued: March 2022",
    imageUrl: "/placeholder.svg?height=100&width=100",
    verificationLink: "#",
  },
  {
    id: "3",
    title: "OHSAS 18001 Occupational Health and Safety",
    issuer: "British Standards Institution",
    date: "Issued: November 2021",
    imageUrl: "/placeholder.svg?height=100&width=100",
    verificationLink: "#",
  },
  {
    id: "4",
    title: "SA8000 Social Accountability Standard",
    issuer: "Social Accountability International",
    date: "Issued: July 2020",
    imageUrl: "/placeholder.svg?height=100&width=100",
    verificationLink: "#",
  },
  {
    id: "5",
    title: "Certified Sustainable Business Professional",
    issuer: "Global Sustainability Institute",
    date: "Issued: April 2019",
    imageUrl: "/placeholder.svg?height=100&width=100",
    verificationLink: "#",
  },
  {
    id: "6",
    title: "Certified Corporate Social Responsibility Specialist",
    issuer: "CSR Academy",
    date: "Issued: September 2018",
    imageUrl: "/placeholder.svg?height=100&width=100",
    verificationLink: "#",
  },
]

export default function CertificationSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-gray-50">
              Our Certifications & Standards
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              SR Asia is committed to upholding the highest standards in all our operations. Our certifications reflect
              our dedication to quality, environmental responsibility, occupational health and safety, and social
              accountability.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-3">
          {certificates.map((certificate) => (
            <Card
              key={certificate.id}
              className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-950 shadow-lg rounded-lg"
            >
              <Image
                src={certificate.imageUrl || "/placeholder.svg"}
                width={100}
                height={100}
                alt={`${certificate.title} certificate`}
                className="mb-4 rounded-lg object-contain"
              />
              <CardHeader className="p-0 mb-2">
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                  {certificate.title}
                </CardTitle>
                <CardDescription className="text-sm text-gray-500 dark:text-gray-400">
                  {certificate.issuer}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 text-sm text-gray-500 dark:text-gray-400">
                <p>{certificate.date}</p>
                {certificate.verificationLink && (
                  <Link
                    href={certificate.verificationLink}
                    className="inline-flex items-center gap-1 text-primary hover:underline mt-2"
                    prefetch={false}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Credential
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
