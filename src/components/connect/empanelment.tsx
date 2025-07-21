"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { toast } from "react-hot-toast";

const categories = [
  "ESG",
  "CSR & Impact Assessments",
  "Climate & Biodiversity",
  "Monitoring & Evaluation",
  "Policy & Governance",
  "Others",
];

const Empanelment = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !selectedCategory) {
      toast.error("Please fill in all fields including category.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/empanelment/send", {
        ...formData,
        category: selectedCategory,
      });

      toast.success(
        "Thank you for joining with us. Looking forward to connecting with you!"
      );

      setFormData({ name: "", email: "", phone: "" });
      setSelectedCategory(null);
    } catch (err) {
      toast.error("Failed to send message.");
    }
  };

  return (
    <div>
      {/* Section: Empanelment of Experts */}
      <section className="bg-gray-50 mb-[75px] mx-[20px]">
        <div className="w-full py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-gray-900 uppercase tracking-wide">
                Empanelment of Experts
              </h1>
              <p className="text-gray-700 font-medium">
                Work with us as a subject matter expert or consultant.
              </p>
              <p className="text-gray-600">
                We're building a diverse pool of experts across domains like:
              </p>

              {/* Category Buttons */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`p-4 rounded-md border-2 text-sm font-medium text-gray-700 ${
                      selectedCategory === category
                        ? "bg-[#072328] text-white border-[#072328]"
                        : "bg-white border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Form Section */}
              {selectedCategory && (
                <form
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-4 bg-white p-6 rounded-lg shadow"
                >
                  <p className="text-sm text-gray-600 mb-2">
                    Applying under: <strong>{selectedCategory}</strong>
                  </p>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Your Phone Number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                  />
                  <Button
                    type="submit"
                    className="bg-[#072328] hover:bg-teal-900 text-white w-full"
                  >
                    Submit Profile for {selectedCategory}
                  </Button>
                </form>
              )}
            </div>

            {/* Right Image */}
            <div>
              <Image
                src="/carrers/2.png"
                alt="Professional handshake representing expert collaboration"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section: Newsletter */}
      <section className="w-full px-[20px] mb-[75px] bg-gray-50">
        <div className="max-w-full mx-auto flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2">
            <Image
              src="/42.jpg"
              alt="Newsletter Illustration"
              width={600}
              height={400}
              className="w-full h-[400px] object-cover rounded-md"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <div className="text-left">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-gray-600 mb-6">
                Stay updated with the latest projects, insights, and global
                partnerships from SR Asia.
              </p>

              <form className="flex flex-col sm:flex-row gap-4 mb-10">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 w-full sm:w-auto flex-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
                >
                  Subscribe
                </button>
              </form>

              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  📌 Featured in ThinkGlobal Directory
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  SR Asia is officially listed on the global network of
                  sustainable development organizations.
                </p>
                <a
                  href="https://www.thinkglobal.org/fosdo-directory/name/sr-asia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#072328] text-white px-6 py-2 rounded-md hover:bg-teal-900 transition"
                >
                  View Our Listing
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Empanelment;
