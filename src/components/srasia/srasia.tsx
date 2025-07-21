"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/vedios/srasia.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold text-center">
            About SR Asia
          </h1>
        </div>
      </section>

      {/* Article Section */}
      <section className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
        <article className="space-y-6 text-lg leading-relaxed">
          <h2 className="text-3xl font-bold">
            About SR Asia – Social Responsibility Asia
          </h2>

          <p>
            <strong>SR Asia (Social Responsibility Asia)</strong> is a dynamic,
            international not-for-profit organization founded in{" "}
            <strong>2012</strong>, with a strategic vision to shape a{" "}
            <strong>sustainable, inclusive, and responsible Asia</strong>.
            Headquartered in India and actively operating across six Asian
            countries, SR Asia works at the intersection of{" "}
            <strong>
              sustainability, corporate responsibility, innovation, and social
              development
            </strong>
            .
          </p>

          <p>
            The founders of SR Asia include experts certified by global
            institutions like the{" "}
            <strong>Asian Productivity Organization (APO) Japan</strong> and{" "}
            <strong>CBI – Ministry of Foreign Affairs, Netherlands</strong>,
            bringing with them years of experience in policy, corporate
            sustainability, public-private collaboration, and sustainable
            innovation.
          </p>

          <h3 className="text-2xl font-semibold mt-10">
            A Vision for a Sustainable Asia
          </h3>

          <p>
            SR Asia’s vision is simple yet powerful:{" "}
            <em>"To work for a Sustainable Asia."</em> This vision guides all
            its actions, from grassroots interventions to high-level advisory
            roles with government ministries and private corporations. The
            organization believes that sustainability must be more than a
            concept—it must be a <strong>systemic transformation</strong>{" "}
            embedded in governance, business models, and community development.
          </p>

          <h3 className="text-2xl font-semibold mt-10">
            Mission and Strategic Pillars
          </h3>

          <p>At the heart of SR Asia’s mission are two strategic frameworks:</p>

          <h4 className="text-xl font-semibold">1. Innovation Development</h4>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Reduce environmental impact</li>
            <li>Enhance energy and resource efficiency</li>
            <li>Enable sustainable livelihoods</li>
            <li>Incubate green and social enterprises</li>
          </ul>

          <h4 className="text-xl font-semibold">2. Knowledge Management</h4>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Organizing national and international conferences</li>
            <li>Developing e-learning programs and in-person training</li>
            <li>Publishing policy briefs, reports, and toolkits</li>
            <li>
              Conducting research and assessments on sustainability performance
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mt-10">
            Global Presence with Regional Relevance
          </h3>

          <p>
            SR Asia’s footprint spans across{" "}
            <strong>
              India, Bangladesh, Indonesia, Malaysia, Vietnam, and the
              Philippines
            </strong>
            . Each of these regional hubs works closely with local governments,
            international donor agencies, private sector entities, and NGOs to
            tailor solutions that address{" "}
            <strong>context-specific development challenges</strong> while
            aligning with global standards such as the <strong>UN SDGs</strong>,{" "}
            <strong>ESG frameworks</strong>, and <strong>ILO guidelines</strong>
            .
          </p>

          <p>
            The organization also supports regional and international
            collaborations, acting as a bridge between{" "}
            <strong>Asia’s development needs</strong> and{" "}
            <strong>global expertise</strong>.
          </p>

          <h3 className="text-2xl font-semibold mt-10">
            Partnerships & Collaborations
          </h3>

          <p>
            Over the past decade, SR Asia has built strategic partnerships with:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>
              Government Ministries (Labor, Environment, MSMEs, Industry, and
              Rural Development)
            </li>
            <li>Multilateral organizations (APO, UNDP, UNGC, IPLA)</li>
            <li>
              Corporate leaders (manufacturing, IT, pharma, textiles, and
              agriculture)
            </li>
            <li>
              Development agencies and NGOs (human rights, gender, climate
              action)
            </li>
            <li>
              Academic institutions and think tanks (for collaborative research
              and training)
            </li>
          </ul>

          <p>SR Asia is recognized as a:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>
              Member of the{" "}
              <strong>United Nations Global Compact (UNGC)</strong>
            </li>
            <li>
              Partner of <strong>IPLA Japan</strong>
            </li>
            <li>
              Associate of the{" "}
              <strong>Confederation of Indian Industry (CII)</strong>{" "}
              (Membership No. N7559P)
            </li>
            <li>
              Alumni of the{" "}
              <strong>Asian Productivity Organization (APO), Japan</strong>
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mt-10">Core Work Areas</h3>

          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Sustainable Supply Chains & Procurement</li>
            <li>CSR & ESG Strategy Design</li>
            <li>Sustainable Urban Development (SDG 11)</li>
            <li>Climate Risk Assessment & Resilience Planning</li>
            <li>Gender Mainstreaming & Inclusion Programs</li>
            <li>Occupational Health & Safety Training</li>
            <li>Digital Transformation for Responsible Governance</li>
            <li>Monitoring, Evaluation, and Impact Assessment (MEIA)</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-10">
            Recent Highlights & Projects
          </h3>

          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>
              Led sustainability capacity building for over{" "}
              <strong>4,000 MSMEs</strong> in India and Southeast Asia
            </li>
            <li>
              Developed ESG frameworks for <strong>corporate disclosure</strong>{" "}
              and <strong>sustainability reporting</strong>
            </li>
            <li>
              Partnered with governments on{" "}
              <strong>climate-smart agriculture</strong> in Bangladesh and India
            </li>
            <li>
              Hosted conferences on <strong>green economy</strong> and{" "}
              <strong>digital innovation for social impact</strong>
            </li>
            <li>
              Published toolkits on <strong>waste management</strong>,{" "}
              <strong>gender equality</strong>, and{" "}
              <strong>energy conservation</strong>
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mt-10">
            What Sets SR Asia Apart
          </h3>

          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Deep technical expertise with cultural sensitivity</li>
            <li>
              Balance of <strong>grassroots programs</strong> and{" "}
              <strong>policy-level impact</strong>
            </li>
            <li>
              Focus on <strong>sustainable innovation</strong>, not just
              compliance
            </li>
            <li>Measurable outcomes and impact-driven design</li>
            <li>
              Commitment to building <strong>future-ready organizations</strong>
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mt-10">Core Values</h3>

          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>
              <strong>Integrity</strong> – Upholding transparency, ethics, and
              accountability
            </li>
            <li>
              <strong>Inclusiveness</strong> – Empowering marginalized
              communities
            </li>
            <li>
              <strong>Sustainability</strong> – Embedding long-term thinking
              into action
            </li>
            <li>
              <strong>Collaboration</strong> – Working across sectors for
              greater impact
            </li>
            <li>
              <strong>Learning & Innovation</strong> – Embracing change and
              knowledge sharing
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mt-10">Looking Ahead</h3>

          <p>
            SR Asia is on a mission to scale its impact over the next decade.
            With a growing network of partners and an expanding footprint, the
            organization aims to:
          </p>

          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>
              Drive <strong>green transitions</strong> in emerging economies
            </li>
            <li>
              Build <strong>digital public goods</strong> for open knowledge
              sharing
            </li>
            <li>
              Support <strong>climate financing</strong> and ESG-driven
              investments
            </li>
            <li>
              Lead <strong>South-South cooperation</strong> for sustainable
              development
            </li>
          </ul>

          <p>
            SR Asia remains committed to helping organizations, governments, and
            communities navigate complex sustainability challenges with{" "}
            <strong>purpose, precision, and partnership</strong>.
          </p>
        </article>
      </section>
    </div>
  );
}
