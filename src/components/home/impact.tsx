import Image from "next/image"

export default function NewsletterImpactSection() {
  return (
    <div className="w-full">
      {/* Newsletter Section */}
      <div className="bg-[#0a4a3c] text-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="w-full max-w-[250px]">
          <Image
            src="/9.png"
            alt="Email newsletter illustration"
            width={250}
            height={250}
            className="rounded-md"
          />
        </div>
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-2xl md:text-3xl font-medium">Subscribe to our newsletter</h2>
          <div className="space-y-4">
            <input
              type="email"
              placeholder="enter your email"
              className="w-full px-4 py-3 rounded border border-gray-300 text-black"
            />
            <button className="w-full bg-[#4c9c2e] hover:bg-[#3d7d24] text-white py-3 rounded transition-colors">
              Subscribe
            </button>
            <div className="flex items-start gap-2">
              <input type="checkbox" id="newsletter-consent" className="mt-1" />
              <label htmlFor="newsletter-consent" className="text-sm">
                I agree to receive communications from SR Asia
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="bg-gray-50 mb-2 py-32 md:py-20 px-8 relative overflow-hidden">
        {/* Left decorative illustration */}
        <div className="absolute left-0 bottom-10 w-[150px] h-[250px] md:w-[200px] md:h-[250px] opacity-90">
          <Image
            src="/11.png?height=200&width=200"
            alt="People illustration"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>

        {/* Right decorative illustration */}
        <div className="absolute right-0 top-0 w-[200px] h-[200px] md:w-[250px] md:h-[250px] opacity-90">
          <Image
            src="/10.png?height=250&width=250"
            alt="Social media icons illustration"
            width={250}
            height={250}
            className="object-contain"
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#0a4a3c] mb-3">Ready to Make an Impact?</h2>
          <p className="text-[#0a4a3c] mb-8 md:mb-12">
            Collaborate with us to build a more sustainable and inclusive future.
          </p>

          <div className="flex flex-col items-center">
            {/* First button - centered */}
            <div className="w-full max-w-xs mb-8">
              <button className="w-full bg-[#0a4a3c] hover:bg-[#083a30] text-white py-3 px-6 rounded transition-colors">
                Partner With Us
              </button>
            </div>

            {/* Second button - offset to right */}
            <div className="w-full max-w-xs mb-8 self-center ml-16">
              <button className="w-full bg-[#0a4a3c] hover:bg-[#083a30] text-white py-3 px-6 rounded transition-colors">
                Volunteer
              </button>
            </div>

            {/* Third button - offset further to right */}
            <div className="w-full max-w-xs self-center ml-32">
              <button className="w-full bg-[#0a4a3c] hover:bg-[#083a30] text-white py-3 px-6 rounded transition-colors">
                Get Involved
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
