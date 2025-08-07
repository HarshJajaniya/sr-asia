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
       <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
              About SR Asia
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
              Promoting a sustainable future for Asia
            </p>
          </div>
        </div>
      </section>

      {/* Article Section */}
      <section className="flex-1 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-full mx-auto px-4 py-16">
          {/* Introduction */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About SR Asia
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          {/* Main Article */}
          <article className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                SR Asia is an international not-for-profit organization, established in{" "}
                <span className="font-semibold text-blue-600">2012</span>, with a vision to promote a 
                sustainable future for Asia. Founded by certified subject matter experts affiliated with{" "}
                <span className="font-semibold">APO Japan</span>,{" "}
                <span className="font-semibold">CBI the Netherlands Govt. (RBG)</span>, and{" "}
                <span className="font-semibold">Green Productivity (GP)</span>, the organization is 
                dedicated to fostering responsible business conduct across the region.
              </p>

              {/* Core Frameworks */}
              <div className="bg-blue-50 rounded-xl p-6 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Core Operational Frameworks
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    <span className="font-semibold text-gray-800">Innovation Development and Management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    <span className="font-semibold text-gray-800">Knowledge</span>
                  </div>
                </div>
              </div>

              {/* Geographic Presence */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Presence
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  With an active presence in{" "}
                  <span className="font-semibold text-blue-600">six Asian countries</span> —{" "}
                  <span className="font-semibold">Bangladesh, India, Indonesia, Malaysia, Vietnam, and the Philippines</span>{" "}
                  — SR Asia collaborates with ministries, public and private sector entities, 
                  inter-governmental bodies, and NGOs both within India and internationally.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  SR Asia operates in over{" "}
                  <span className="font-semibold text-blue-600">26 Indian states</span> and has become 
                  a pioneer in applied and desk research.
                </p>
              </div>

              {/* Services */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Our Expertise & Services
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">Project Implementation & Management</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">Baseline, Monitoring & Evaluation</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">Impact Assessment</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">Feasibility Studies</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">Sustainability Reporting & Assurance Services</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CSR Initiatives */}
              <div className="bg-green-50 rounded-xl p-6 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  CSR Initiatives
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The organization implements developmental projects under{" "}
                  <span className="font-semibold">Corporate Social Responsibility (CSR)</span> initiatives, 
                  focusing on areas such as{" "}
                  <span className="font-semibold text-green-600">Skill Development</span> and{" "}
                  <span className="font-semibold text-green-600">Ecological Restoration</span>.
                </p>
              </div>

              {/* Conferences */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Knowledge Sharing
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  SR Asia regularly organizes{" "}
                  <span className="font-semibold">national and international conferences</span> centered 
                  around key sustainability themes. These events serve as platforms for sharing insights, 
                  exchanging knowledge, and fostering collaboration among diverse stakeholders.
                </p>
              </div>

              {/* Affiliations */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Affiliations
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  SR Asia is proudly affiliated with several prestigious organizations:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                    <span className="font-semibold text-gray-800">United Nations Global Compact (UNGC)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                    <span className="font-semibold text-gray-800">IPLA Japan</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                    <span className="font-semibold text-gray-800">Confederation of Indian Industry (CII)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                    <span className="font-semibold text-gray-800">Asian Productivity Organization Japan (Alumni)</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  CII Membership No: <span className="font-semibold">N7559P</span>
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
 
  );
}
