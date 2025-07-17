import Link from "next/link"

export default function Component() {
  const industryEntries = [
    {
      year: "2024",
      title: "Industry Network Integration: Circular Biotech MoU",
      description:
        "This MoU represents a landmark collaboration between 10 parties across India and Taiwan, including SR Asia, IIT Madras (ICCW), and multiple biotech, environmental, and consulting firms. It establishes a strategic platform for innovation in climate change, health, and circular biotechnology, targeting Sustainable Development Goals (SDGs).",
      link: "#",
    },
    {
      year: "2024",
      title: "Industry Network Integration: Circular Biotech MoU",
      description:
        "This MoU represents a landmark collaboration between 10 parties across India and Taiwan, including SR Asia, IIT Madras (ICCW), and multiple biotech, environmental, and consulting firms. It establishes a strategic platform for innovation in climate change, health, and circular biotechnology, targeting Sustainable Development Goals (SDGs).",
      link: "#",
    },
    {
      year: "2024",
      title: "Industry Network Integration: Circular Biotech MoU",
      description:
        "This MoU represents a landmark collaboration between 10 parties across India and Taiwan, including SR Asia, IIT Madras (ICCW), and multiple biotech, environmental, and consulting firms. It establishes a strategic platform for innovation in climate change, health, and circular biotechnology, targeting Sustainable Development Goals (SDGs).",
      link: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-full mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">INDUSTRY NETWORK</h1>
        <div className="space-y-8">
          {industryEntries.map((entry, index) => (
            <div key={index} className="grid grid-cols-[auto_1fr_auto] gap-4 items-start p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-lg font-medium text-gray-700 pr-4">{entry.year}</div>
              <div className="grid gap-1">
                <h2 className="text-lg font-semibold text-gray-800">{entry.title}</h2>
                <p className="text-sm text-gray-600">{entry.description}</p>
              </div>
              <Link href={entry.link} className="text-blue-600 hover:underline justify-self-end pt-1">
                Read here
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
