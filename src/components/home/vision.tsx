import Image from "next/image"

export default function Component() {
  return (
    <>
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-[#000000] uppercase tracking-wider">OUR MISSION</h2>
            <div className="space-y-4">
              <p
                className="text-gray-800 leading-[60px]"
                style={{
                  fontFamily: "Roboto Flex",
                  fontWeight: 500,
                  fontStyle: "italic",
                  fontSize: "24px",
                  lineHeight: "60px",
                  letterSpacing: "0%",
                }}
              >
                "To make true a green, healthy and prosperous Asia"
              </p>
            
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/vision/1.png"
                alt="Professional office environment with person silhouette overlooking city skyline"
                width={700}
                height={451}
                className="object-cover"
              
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

           <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/vision/vision.png"
                alt="Professional office environment with person silhouette overlooking city skyline"
                width={700}
                height={451}
                className="object-cover"
              
              />
            </div>
          </div>

          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-[#000000] uppercase tracking-wider">OUR VISION</h2>
            <div className="space-y-4">
              
              <p
                className="text-gray-800 leading-[60px]"
                style={{
                  fontFamily: "Roboto Flex",
                  fontWeight: 500,
                  fontStyle: "italic",
                  fontSize: "24px",
                  lineHeight: "60px",
                  letterSpacing: "0%",
                }}
              >
                "A leading networking organization contributing to the sustainable development of a prosperous Asia"
              </p>
            </div>
          </div>

          {/* Right Image */}
         
        </div>
      </div>
    </section>
    </>
  )
}
