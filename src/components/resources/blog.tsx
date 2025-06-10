import Image from "next/image"
import Link from "next/link"

export default function BlogsSection() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 bg-white">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/2">
          <Image
            src="/resources/31.png?height=400&width=500"
            alt="People collaborating with notebooks and digital devices"
            width={500}
            height={350}
            className="px-10 w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-6">
          <h2
            className="text-[#4d7c4d]"
            style={{
              fontFamily: "Karla",
              fontWeight: "700",
              fontSize: "44px",
              lineHeight: "50px",
              letterSpacing: "0%",
            }}
          >
            Blogs & Articles
          </h2>
          <p
            className="text-gray-700"
            style={{
              fontFamily: "Karla",
              fontSize: "26px",
              lineHeight: "50px",
              letterSpacing: "0%",
            }}
          >
            Explore expert perspectives on CSR, climate policy, gender equity,
            sustainable development, and governance. Our blog features voices
            from the field, internal research insights, and partner
            contributions.
          </p>
         <Link href="/blogs" className="block">
           <button className="w-full py-4 bg-[#3d7a3d] hover:bg-[#3e6536] text-white font-medium transition-colors">
           Read Our Blogs
        </button>
         </Link>

        </div>
      </div>
    </div>
  )
}
