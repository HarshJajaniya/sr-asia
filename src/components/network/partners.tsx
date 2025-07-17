export default function StrategicPartners() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">STRATEGIC PARTNERS</h2>
            <p className="max-w-[900px] text-lg text-blue-700 md:text-xl">
              Collaborating with industry leaders to advance sustainability and innovation.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-full items-start gap-8 py-12 sm:grid-cols-1 md:grid-cols-2 lg:gap-12">
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-4">
              <img
                src="/flags/3.png"
                alt="GSPL Logo"
                width={96}
                height={96}
                className="w-24 h-24"
              />
              <div className="grid gap-1">
                <h3 className="text-2xl font-bold text-gray-900">GSPL – Gujarat State Petronet Limited</h3>
                <p className="text-gray-600 text-sm">
                  Supporting the development of clean energy infrastructure and natural gas distribution in India.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-4">
              <div className="w-24 h-24 bg-cyan-500 flex items-center justify-center text-white text-3xl font-bold">
                CF farm
              </div>
              <div className="grid gap-1">
                <h3 className="text-2xl font-bold text-gray-900">CF Farm Metha</h3>
                <p className="text-gray-600 text-sm">
                  Driving advancements in circular economy and biotechnology solutions through sustainable partnerships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
