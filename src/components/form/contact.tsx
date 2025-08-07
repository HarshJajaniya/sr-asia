"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../../components/ui/select";
import Link from "next/link";
import { FileText, ChevronRight, Target, MessageCircle } from "lucide-react";

function Contact() {
  const [feedback, setFeedback] = useState("");

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedback.trim()) return;
    alert(`Feedback submitted: ${feedback}`);
    setFeedback("");
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Content */}
        <div className="lg:col-span-2">
          <div className="mb-8">
            <h1 className="text-4xl font-light text-gray-900 mb-4">
              Request for proposal for services
            </h1>
            <h2 className="text-2xl font-semibold text-gray-900 mb-12">
              How can we support your organization?
            </h2>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-medium text-gray-900 mb-6">
              Choose your region to submit a proposal request.
            </h3>

            <div className="mb-6">
              <p className="text-gray-700 mb-4">
                SR Asia operates across multiple regions to deliver tailored
                solutions aligned with your goals. To connect with the right
                team, please select your location, and you’ll be redirected to
                the appropriate proposal request form. The form will open in a
                new tab for your convenience.
              </p>

              <p className="text-gray-700">
                All other inquiries should be directed to the{" "}
                <Link
                  href="/career"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Contact Us
                </Link>{" "}
                page.
              </p>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-6">
            <div>
              <Select>
                <SelectTrigger className="w-full h-12 bg-white border border-gray-300 rounded-none">
                  <SelectValue placeholder="Title*" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mr">Mr.</SelectItem>
                  <SelectItem value="ms">Ms.</SelectItem>
                  <SelectItem value="mrs">Mrs.</SelectItem>
                  <SelectItem value="dr">Dr.</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Input
                type="text"
                placeholder="First name*"
                className="w-full h-12 bg-white border border-gray-300 rounded-none placeholder:text-gray-700"
              />
            </div>

            <div>
              <Input
                type="text"
                placeholder="Last name*"
                className="w-full h-12 bg-white border border-gray-300 rounded-none placeholder:text-gray-700"
              />
            </div>

            <div>
              <Input
                type="text"
                placeholder="Position/Job title"
                className="w-full h-12 bg-white border border-gray-300 rounded-none placeholder:text-gray-700"
              />
            </div>

            <div>
              <Input
                type="text"
                placeholder="Email address*"
                className="w-full h-12 bg-white border border-gray-300 rounded-none placeholder:text-gray-700"
              />
            </div>

            <div>
              <Input
                type="text"
                placeholder="Phone number"
                className="w-full h-12 bg-white border border-gray-300 rounded-none placeholder:text-gray-700"
              />
            </div>

            <div>
              <Input
                type="text"
                placeholder="Phone number"
                className="w-full h-12 bg-white border border-gray-300 rounded-none placeholder:text-gray-700"
              />
            </div>

            <Select>
              <SelectTrigger className="w-full h-12 bg-white border border-gray-300 rounded-none">
                <SelectValue placeholder="*Company location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="india">India</SelectItem>
                <SelectItem value="singapore">Singapore</SelectItem>
                <SelectItem value="uae">UAE</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>

            <div>
              <Input
                type="text"
                placeholder="Industry*"
                className="w-full h-12 bg-white border border-gray-300 rounded-none placeholder:text-gray-700"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full h-12 bg-[#072328] text-white font-medium hover:bg-blue-700 transition rounded-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-1">
          <h3 className="text-xl font-medium text-gray-900 mb-8">
            Not sure what you are looking for?
          </h3>

          <div className="space-y-6">
            {/* Careers Section */}
            <Link href="/career">
              <div className="flex items-start space-x-4 group cursor-pointer mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-medium text-gray-900 group-hover:text-blue-600">
                      Careers
                    </h4>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
                  </div>
                  <p className="text-gray-600 mt-1">
                    Resumes/job inquiries should be sent through our careers
                    site.
                  </p>
                </div>
              </div>
            </Link>

            {/* General Inquiries Section */}
            <Link href="/career">
              <div className="flex items-start space-x-4 group cursor-pointer">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-medium text-gray-900 group-hover:text-blue-600">
                      General inquiries
                    </h4>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
                  </div>
                  <p className="text-gray-600 mt-1">
                    All other inquiries should be directed to our contact us
                    page.
                  </p>
                </div>
              </div>
            </Link>

            {/* Feedback Form */}
            <div className="border p-4 rounded-md bg-gray-50 mt-6">
              <div className="flex items-start space-x-4 mb-3">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-medium text-gray-900">
                      Feedback
                    </h4>
                  </div>
                  <p className="text-gray-600 mt-1">
                    Share your thoughts and suggestions.
                  </p>
                </div>
              </div>
              <form onSubmit={handleFeedbackSubmit} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type your feedback..."
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
