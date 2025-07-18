import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Volunteer Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/carrers/1.png"
                alt="Hands coming together in collaboration"
                width={500}
                height={300}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h1 className="text-4xl font-bold text-gray-900 uppercase tracking-wide">
                Volunteer with us
              </h1>
              <h2 className="text-xl text-gray-700 font-medium">
                Make a difference on the ground.
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Support real-world CSR, education, or ecological projects in
                urban and rural areas. Perfect for students, professionals, or
                community champions who want to give back.
              </p>
              <Button className="bg-[#072328] hover:bg-teal-900 text-white px-8 py-3 text-sm font-medium uppercase tracking-wide">
                Register Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Empanelment Section */}
      <section className="bg-gray-50 mb-[75px]">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-gray-900 uppercase tracking-wide">
                Empanelment of Experts
              </h1>
              <p className="text-gray-700 font-medium">
                Work with us as a subject matter expert or consultant.
              </p>
              <p className="text-gray-600">
                We're building a diverse pool of experts across domains like:
              </p>

              {/* Expertise Categories */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="border-2 border-gray-300 p-4 text-center bg-white">
                  <span className="text-sm font-medium text-gray-700">
                    CSR & ESG
                  </span>
                </div>
                <div className="border-2 border-gray-300 p-4 text-center bg-white">
                  <span className="text-sm font-medium text-gray-700">
                    Climate & Biodiversity
                  </span>
                </div>
                <div className="border-2 border-gray-300 p-4 text-center bg-white">
                  <span className="text-sm font-medium text-gray-700">
                    Monitoring & Evaluation
                  </span>
                </div>
                <div className="border-2 border-gray-300 p-4 text-center bg-white">
                  <span className="text-sm font-medium text-gray-700">
                    Policy & Governance
                  </span>
                </div>
              </div>

              <Button className="bg-[#072328] hover:bg-teal-900 text-white px-8 py-3 text-sm font-medium uppercase tracking-wide mt-6">
                Submit Profile
              </Button>
            </div>
            <div>
              <Image
                src="/carrers/2.png"
                alt="Professional handshake representing expert collaboration"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-[20px]  mb-[75px]  bg-gray-50">
        <div className="max-w-full mx-auto flex flex-col lg:flex-row items-center gap-10">
          {/* Left Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="/42.jpg" // 🔁 Replace with your image path
              alt="Newsletter Illustration"
              className="w-full h-auto rounded-md"
            />
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2">
            <div className="text-left">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-gray-600 mb-6">
                Stay updated with the latest projects, insights, and global
                partnerships from SR Asia.
              </p>

              {/* Email Form */}
              <form className="flex flex-col sm:flex-row gap-4 mb-10">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 w-full sm:w-auto flex-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
                >
                  Subscribe
                </button>
              </form>

              {/* ThinkGlobal Directory Listing */}
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  📌 Featured in ThinkGlobal Directory
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  SR Asia is officially listed on the global network of
                  sustainable development organizations.
                </p>
                <a
                  href="https://www.thinkglobal.org/fosdo-directory/name/sr-asia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#072328] text-white px-6 py-2 rounded-md hover:bg-teal-900 transition"
                >
                  View Our Listing
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
