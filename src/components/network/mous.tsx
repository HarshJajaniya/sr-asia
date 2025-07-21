import Link from "next/link";

export default function Component() {
  const organizations = [
    {
      name: "APO JAPAN – Asian Productivity Organization",
      description:
        "Promotes productivity and innovation for sustainable socioeconomic development in the Asia-Pacific region.",
      link: "https://www.apo-tokyo.org/alumni/interview-with-sr-asia-founder/",
    },
    {
      name: "IPLA – International Partnership for Expanding Waste Management Services",
      description:
        "UN-backed platform enhancing sustainable waste management through global public-private partnerships.",
      link: "https://www.uncrd.or.jp/?menu=389",
    },
    {
      name: "UNGC – United Nations Global Compact",
      description:
        "Encourages businesses worldwide to uphold principles of human rights, labor, environment, and anti-corruption.",
      link: "https://unglobalcompact.org/what-is-gc/participants/30251-SR-Asia",
    },
    {
      name: "CTCN – Climate Technology Centre and Network",
      description:
        "UNFCCC initiative that facilitates access to climate-resilient technologies in developing nations.",
      link: "https://www.ctc-n.org/networking-and-collaboration/collaboration/network-members/sr-asia",
    },
    {
      name: "CSR PAYMA – Taiwan",
      description:
        "A Taiwan-based CSR network that builds corporate responsibility through collaboration and learning.",
      link: "#",
    },
    {
      name: "360° Network",
      description:
        "A cross-sectoral platform supporting integrated sustainable development and stakeholder innovation.",
      link: "#",
    },
    {
      name: "CII – Confederation of Indian Industry",
      description:
        "Fosters India's industrial development through business collaboration, sustainability, and policy engagement.",
      link: "https://www.cii.in/",
    },
  ];

  return (
    <section className="w-full px-[20px] mb-[75px]">
      <h2 className="text-2xl font-bold sm:text-4xl md:text-[40px] text-center mb-12 md:mb-16">
        MEMBERSHIPS WITH GLOBAL ORGANIZATIONS
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-t border-gray-200 pt-8">
        {organizations.map((org, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 items-start max-w-[315px] w-full mx-auto"
          >
            <h3 className="text-xl font-bold">{org.name}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {org.description}
            </p>
            {org.link === "#" || org.link.trim() === "" ? (
              <span className="text-red-500 text-sm font-medium">
                Website not available
              </span>
            ) : (
              <Link
                href={org.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#007AFF] hover:underline font-medium text-sm"
              >
                Read here
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
