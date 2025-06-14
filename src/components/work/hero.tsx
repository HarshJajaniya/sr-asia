import Image from "next/image";
import Link from "next/link";

export default function Component() {
  return (
    <div className="w-full bg-white">
      {/* Header */}
      <div className="bg-[#537D5D] text-white text-center py-6 px-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Our Work in Action</h2>
      </div>

      {/* Main Content */}
      <div className="px-4 md:px-8 py-8">
        {/* Team Photo */}
        <div className="mb-6">
          <Image
            src="/workk.png"
            alt="Team members holding certificates in a conference room"
            width={1440}
            height={710}
            className="w-full h-auto rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Description */}
        <div className="text-center mb-8 px-2">
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Explore how SR Asia’s initiatives are driving real-world change. From CSR projects with PSUs to grassroots research studies, our portfolio highlights diverse, high-impact efforts across Asia.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4">
          <Link
            href="/downloads/projects.docx"
            download
            className="w-full sm:w-auto block text-center py-2 px-6 bg-[#00966E] hover:bg-[#FDFCD6] hover:text-[#00966E] text-white font-medium rounded transition-colors duration-300"
          >
            View All Projects
          </Link>
          <Link
            href="/downloads/case-studies.docx"
            download
            className="w-full sm:w-auto block text-center py-2 px-6 bg-[#00966E] hover:bg-[#FDFCD6] hover:text-[#00966E] text-white font-medium rounded transition-colors duration-300"
          >
            Read Case Studies
          </Link>
        </div>
      </div>
    </div>
  );
}
