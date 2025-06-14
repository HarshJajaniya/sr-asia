import Image from "next/image"
import Link from "next/link"

const SrAsiaWork = () => {
  return (
    <div className="max-w-full overflow-x-hidden">
      {/* Outer Card Section */}
      <div className="bg-white shadow-xl rounded-2xl my-6 md:my-12 px-4 py-8 md:px-6 md:py-10">
        {/* Section Header */}
        <div className="relative mb-8 md:mb-12 px-4 md:px-6">
  <div className="relative flex flex-col sm:flex-row items-center justify-center mb-8 md:mb-10 w-full gap-4 sm:gap-0">
    <h2 className="text-xl md:text-2xl font-bold text-[#004D40] bg-white px-4 z-10 text-center">
      News & Media
    </h2>
    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center w-[35vw] pr-10">
      <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#004D40] z-20"></div>
      <div className="h-px bg-[#004D40] flex-grow ml-2"></div>
    </div>
  </div>
</div>


        {/* Centered Grid of Cards */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {/* Card Template */}
          {[{
            img: "/24.png",
            alt: "People reviewing documents",
            title: "Ganga Express Way: Land acquisition will be done after the survey of SR Asia...",
            desc: "The administration is making all efforts for the Ganga Expressway. But in Meerut district, 28 hectares of land out of 181 hectares could not be purchased due to disputes with farmers...",
            link: "https://www.jagran.com/uttar-pradesh/meerut-city-ganga-express-way-after-the-survey-of-sr-asia-land-acquisition-will-be-done-agency-has-been-selected-21977488.html" 
          }, {
            img: "/25.png",
            alt: "Hands joining together with green leaves",
            title: "Ashshash Project, Social Responsibility (SR) Asia pledges solidarity...",
            desc: "Winrock International's Ashshash Project supported by the Swiss Embassy and Social Responsibility Asia (SR ASIA) have teamed up to affirm the mobilisation of resources...",
            link: "https://www.tbsnews.net/economy/corporates/ashshash-project-social-responsibility-sr-asia-pledges-solidarity-survivors-human"
          }].map((item, i) => (
            <div key={i} className="bg-white shadow-md md:shadow-lg border border-gray-200 overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg md:hover:shadow-xl rounded-xl">
              <div className="overflow-hidden h-48 sm:h-40 md:h-48 lg:h-56 xl:h-64">
                <Image
                  src={item.img}
                  alt={item.alt}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 md:p-6 flex flex-col justify-between ">
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4 line-clamp-3">
                  {item.desc}
                </p>
                <Link
                  href={item.link}
                   target="_blank"
                  className="block text-center py-2 px-4 bg-[#00966E] hover:bg-[#FDFCD6] hover:text-[#00966E] text-white text-sm md:text-base font-medium rounded"
                >
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* The SR Asia Footprint section */}
      <div className="relative mt-12 md:mt-16 px-4 md:px-6">
        <div className="flex flex-col mb-5 md:flex-row items-center justify-center">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center w-[35vw] pr-10">
          <div className="h-px bg-[#004D40] flex-grow mr-2"></div>
          <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#004D40] z-20"></div>
          </div>

          <h2 className="text-xl md:text-2xl font-semibold text-[#004D40] text-center mt-8 md:mt-0">
            Our People
          </h2>
        </div>
      </div>
    </div>
  )
}

export default SrAsiaWork
