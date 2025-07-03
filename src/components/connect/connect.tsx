import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"

const jobOpenings = [
  {
    id: 1,
    title: "Research Associate",
    location: "Delhi",
    type: "Full-time",
    description:
      "As a Research Associate - Impact Assessment, you will support the design, execution, and analysis of social, environmental, and economic impact studies. You'll work closely with CSR tea...",
  },
  {
    id: 2,
    title: "Research Associate",
    location: "Delhi",
    type: "Full-time",
    description:
      "As a Research Associate - Impact Assessment, you will support the design, execution, and analysis of social, environmental, and economic impact studies. You'll work closely with CSR tea...",
  },
  {
    id: 3,
    title: "Research Associate",
    location: "Delhi",
    type: "Full-time",
    description:
      "As a Research Associate - Impact Assessment, you will support the design, execution, and analysis of social, environmental, and economic impact studies. You'll work closely with CSR tea...",
  },
  {
    id: 4,
    title: "Research Associate",
    location: "Delhi",
    type: "Full-time",
    description:
      "As a Research Associate - Impact Assessment, you will support the design, execution, and analysis of social, environmental, and economic impact studies. You'll work closely with CSR tea...",
  },
  {
    id: 5,
    title: "Research Associate",
    location: "Delhi",
    type: "Full-time",
    description:
      "As a Research Associate - Impact Assessment, you will support the design, execution, and analysis of social, environmental, and economic impact studies. You'll work closely with CSR tea...",
  },
  {
    id: 6,
    title: "Research Associate",
    location: "Delhi",
    type: "Full-time",
    description:
      "As a Research Associate - Impact Assessment, you will support the design, execution, and analysis of social, environmental, and economic impact studies. You'll work closely with CSR tea...",
  },
]

export function JobListings() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-48 bg-white border-r border-gray-200">
        <div className="p-4">
          <div className="mb-6">
            <h2 className="text-sm font-semibold text-gray-800 mb-2 pb-2 border-b-2 border-dotted border-gray-300">
              CURRENT OPENINGS
            </h2>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-gray-800 pb-2 border-b-2 border-dotted border-gray-300">
              INTERSHIPS
            </h2>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full overflow-y-auto p-4 space-y-4">
          {jobOpenings.map((job) => (
            <Card key={job.id} className="bg-sky-100 border-sky-200">
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{job.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <Button className="bg-[#072328] hover:bg-teal-800 text-white px-4 py-2 text-sm font-medium">
                    Apply Now
                  </Button>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{job.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
