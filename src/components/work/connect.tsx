import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Component() {
  return (
    <div className="w-full ">
      {/* Main Connect Section */}
      <section className="relative text-white mb-[75px] py-16 px-6 overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/vedios/connect1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content */}
        <div className="relative z-10 mx-auto text-left mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-16 text-[#A1E3F9]">
            CONNECT WITH US
          </h2>
          <p className="text-lg md:text-lg mb-8 text-gray-200 ">
            Have a question, idea, or opportunity? Let's connect and build
            something impactful together.
          </p>
          <Button
            size="lg"
            className="bg-[#A1E3F9] hover:bg-[#A1E3F9] text-slate-900 font-semibold px-8 py-3 text-lg"
          >
            <Link href="/form">Get in Touch</Link>
          </Button>
        </div>

        {/* Optional overlay for better contrast */}
      </section>

      <div className="mt-16 relative">
        <div className="absolute top-0 inset-x-8 h-px bg-[#45B6CD]" />
      </div>

      {/* Services Section */}
      <section className="mt-16 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm md:text-base text-[#072328]">
            <span className="whitespace-nowrap">
              <Link href="/services/reporting">
                Assurance & Reporting services
              </Link>
            </span>
            <span className="whitespace-nowrap">
              <Link href="/services/csr">CSR project management</Link>
            </span>
            <span className="whitespace-nowrap">
              <Link href="/services/monitoring">Monitoring & Evaluation</Link>
            </span>
            <span className="whitespace-nowrap">
              <Link href="/services/impact">Impact Assessment</Link>
            </span>
            <span className="whitespace-nowrap">
              <Link href="/services/survey">Land Survey</Link>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
