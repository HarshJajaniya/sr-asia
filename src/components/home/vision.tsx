import Image from "next/image";

export default function Component() {
  return (
    <>
      <div className="mb-[35px] mt-[35px] ">
        {/* <h2 className="text-3xl font-bold text-center text-[#072328] py-4 mb-8">
          MISSION & VISION
        </h2> */}
        <section className="mb-[35px] px-4 md:px-6 lg:px-8">
          <div className="max-w-full mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#000000] uppercase tracking-wider" id="mission">
                  OUR MISSION & VISION
                </h2>
                <div className="space-y-4">
                  <p
                    className="text-gray-800 leading-[60px]"
                    style={{
                      fontFamily: "Roboto Flex",
                      fontWeight: 500,
                      fontStyle: "italic",
                      fontSize: "20px",
                      lineHeight: "35px",
                      letterSpacing: "0%",
                    }}
                  >
                    "To make true a green, healthy and prosperous Asia"
                  </p>
                  {/* <h2 className="text-xl font-bold text-[#000000] uppercase tracking-wider">OUR VISION</h2> */}
                  <p
                    className="text-gray-800 leading-[60px]"
                    style={{
                      fontFamily: "Roboto Flex",
                      fontWeight: 500,
                      fontStyle: "italic",
                      fontSize: "20px",
                      lineHeight: "35px",
                      letterSpacing: "0%",
                    }}
                  >
                    "Network and engage all stakeholders in Asia for Knowledge
                    Pooling, Implementation and setting up sustainable policies
                    and practices.Share knowledge and build partnership for
                    developing socially responsible Asian fraternity.Promote
                    social research and tools, Initialization, use of technology
                    for minimizing the impact of globally accepted threats and
                    perceptions.Advocate, promote and implement green products
                    and services."
                  </p>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative">
                <div className="relative overflow-hidden">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-[700px] h-[433px] object-cover"
                  >
                    <source src="/vedios/mission.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
