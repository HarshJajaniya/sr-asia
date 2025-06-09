import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 min-h-[300px]">
        {/* Work with Us */}
        <div className="bg-[#73946B] text-white p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-6">Work with Us</h2>
            <p className="text-green-100 leading-relaxed mb-8">
              Join our mission to build sustainable and equitable communities.
            </p>
          </div>
          <Button variant="secondary" className="bg-[#2E7D32] hover:bg-green-800 w-full text-white border-0">
            View Openings
          </Button>
        </div>

        {/* Partner with Us */}
        <div className="bg-[#00966E] text-white p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-6">Partner With Us</h2>
            <p className="text-teal-100 leading-relaxed mb-8">
              We collaborate with corporations, PSUs, NGOs, and governments to design impactful projects and build
              capacity for sustainable development
            </p>
          </div>
          <Button variant="secondary" className="bg-[#2E7D32] hover:bg-teal-800 text-white border-0 w-full">
            Start a Partnership Inquiry
          </Button>
        </div>

        {/* Volunteer Opportunities */}
        <div className="bg-[#537D5D] text-white p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-6">Volunteer Opportunities</h2>
            <p className="text-slate-100 leading-relaxed mb-8">
              Make a difference with your time and skills in real-world impact projects.
            </p>
          </div>
          <Button variant="secondary" className="bg-[#2E7D32] hover:bg-slate-800 text-white border-0 w-full">
            Join as Volunteer
          </Button>
        </div>
      </div>
    </div>
  )
}
