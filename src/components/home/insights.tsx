import Image from "next/image"

export default function Page() {
  return (
    <div className="w-full bg-white">
      {/* Memberships & Global Alliances Section */}
      <div className="relative">
        {/* Half star decoration */}
        <div className="absolute left-0 top-12">
          <Image src="/Star.png" alt="Decorative star" width={100} height={100}/>
        </div>

        <h2 className="text-3xl font-medium text-center text-green-800 mb-24">Memberships &amp; Global Alliances</h2>

        {/* Insights & Events Section */}
        <div className="relative mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="flex-1 hidden md:block"></div>
            <h2 className="text-4xl font-medium text-green-800 text-center mx-4">Insights &amp; Events</h2>
            <div className="flex-1 flex items-center">
              <div className="h-4 w-4 rounded-full bg-green-800"></div>
              <div className="h-0.5 flex-1 bg-green-800"></div>
            </div>
          </div>

          <p className="text-lg text-green-700 mb-12 text-center">
            Explore our latest resources and stay updated on what&apos;s coming next.
          </p>

          {/* Conference Cards - centered with more space on sides */}
          <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Card 1 */}
              <div className="border border-teal-800 overflow-hidden">
                <div className="h-40 relative">
                  <Image
                    src="/insights/1.png?height=200&width=400"
                    alt="International Conference"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-green-800 text-white p-3">
                  <h3 className="text-base font-medium mb-1">International Conference Responsible Business Co...</h3>
                  <p className="text-xs">
                    Social Responsibility Asia (SR Asia) is a professional network of SR professionals based in ...
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="border border-teal-800 overflow-hidden">
                <div className="h-40 relative">
                  <Image
                    src="/insights/2.png?height=200&width=400"
                    alt="International Conference on Socially"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-green-800 text-white p-3">
                  <h3 className="text-base font-medium mb-1">International Conference on Socially...</h3>
                  <p className="text-xs">
                    Social Responsibility is an important facet of corporate strategy. Various reports of economic ...
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="border border-teal-800 overflow-hidden">
                <div className="h-40 relative">
                  <Image
                    src="/insights/3.png?height=200&width=400"
                    alt="Conference on creating buy-in"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-green-800 text-white p-3">
                  <h3 className="text-base font-medium mb-1">Conference on creating buy-in for social respon...</h3>
                  <p className="text-xs">
                    Socially responsible products and services have always been in demands from developed world...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
