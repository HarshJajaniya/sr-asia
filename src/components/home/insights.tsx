import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function Component() {
  return (
    <div className=" bg-white py-4 px-4">
      <div className="max-w-[1400px] mx-auto mb-[35px] ">

        {/* Heading */}
        <div className="flex items-center justify-center mb-[75px]">
          <h1 className="text-3xl font-bold text-gray-900 text-center">
            INSIGHTS &amp; SPECIALS
          </h1>
        </div>

        {/* ---------- 1 ▸ IMAGE ON THE RIGHT ---------- */}
        <div className="bg-white overflowwh-hidden mb-[30px] border-b border-gray-200 shadow-lg">
          <div className="flex flex-col md:flex-row gap-[106px] p-6">
            {/* text */}
            <div className="flex-1 space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 leading-tight">
                International Conference Responsible Business Conduct in Poverty Alleviation & Financial Inclusion through Green Banking & CSR
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
               Social Responsibility Asia (SR Asia) is a professional network of SR professionals based in
 Asia, creating bench marks and new standards in the field of social responsibility. SR Asia is to provide
and share SR solutions for shaping the modern day business on sustainability and competitiveness.
              </p>
              <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors">
                Read more
                <ChevronRight className="ml-1 w-4 h-4" />
              </button>
            </div>

            {/* image */}
            <Image
              src="/insights/1.png"
              alt="Conference panel discussion with multiple speakers seated at a table"
              width={300}
              height={425}
              /* 400 × 225 ≈ 16 : 9  */
              className="md:w-52 md:h-72 lg:w-[422px] lg:h-[355px] aspect-video object-cover"
            />
          </div>
        </div>

        {/* ---------- 2 ▸ IMAGE ON THE LEFT ---------- */}
        <div className="bg-white overflow-hidden mb-[35px] border-b border-gray-200 shadow-lg">
          <div className="flex flex-col md:flex-row-reverse gap-[106px] p-6">
            {/* text */}
            <div className="flex-1 space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 leading-tight">
                International Conference Responsible Business Conduct in Poverty Alleviation & Financial Inclusion through Green Banking & CSR
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
              Social Responsibility Asia (SR Asia) is a professional network of SR professionals based in
 Asia, creating bench marks and new standards in the field of social responsibility. SR Asia is to provide
and share SR solutions for shaping the modern day business on sustainability and competitiveness.
              </p>
              <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors">
                Read more
                <ChevronRight className="ml-1 w-4 h-4" />
              </button>
            </div>

            {/* image */}
            <Image
              src="/insights/3.png"
              alt="Award ceremony or recognition event"
              width={300}
              height={425}
              className="md:w-52 md:h-72 lg:w-[422px] lg:h-[355px]aspect-video object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
