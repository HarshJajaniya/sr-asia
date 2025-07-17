export default function StrategicPartners() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-[20px]">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div>
            <h2 className="text-[40px] pb-2 font-bold text-gray-900">
              STRATEGIC PARTNERS
            </h2>
            <p className="max-w-[900px] text-lg text-[#348EA0] md:text-xl">
              Collaborating with industry leaders to advance sustainability and
              innovation.
            </p>
          </div>
        </div>
        <div className="grid gap-8 py-12 sm:grid-cols-1 md:grid-cols-2 lg:gap-12">
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-4">
              <img
                src="/flags/5.png"
                alt="GSPL Logo"
                width={96}
                height={96}
                className="w-32 h-32"
              />
              <div className="grid gap-1">
                <h3 className="text-2xl font-bold text-gray-900">
                  GSPL – Gujarat State Petronet Limited
                </h3>
                <p className="text-gray-600 text-sm">
                  Supporting the development of clean energy infrastructure and
                  natural gas distribution in India.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-4">
              <div className="w-40 h-32 bg-cyan-500 flex items-center justify-center text-white text-2xl font-bold">
                CF farm
              </div>
              <div className="grid gap-1">
                <h3 className="text-2xl font-bold text-gray-900">
                  CF Farm Metha
                </h3>
                <p className="text-gray-600 text-sm">
                  Driving advancements in circular economy and biotechnology
                  solutions through sustainable partnerships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
