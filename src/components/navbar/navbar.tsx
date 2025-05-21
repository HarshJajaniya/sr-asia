import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
   <>
      {/* Navigation */}
      <nav className="bg-white flex items-center justify-between px-4 md:px-8 py-3 border-b border-gray-100">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/logo.svg" alt="Sustainable Asia Logo" width={50} height={50} className="h-10 w-auto" />
          </Link>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link href="/about" className="text-[#2e8b57] font-medium hover:text-[#155c35] transition-colors">
            About Us
          </Link>
          <Link href="/work" className="text-[#2e8b57] font-medium hover:text-[#155c35] transition-colors">
            Our Work
          </Link>
          <Link href="/resources" className="text-[#2e8b57] font-medium hover:text-[#155c35] transition-colors">
            Resources
          </Link>
          <Link href="/connect" className="text-[#2e8b57] font-medium hover:text-[#155c35] transition-colors">
            Connect
          </Link>
        </div>
      </nav>

    
  </>
  )
}
