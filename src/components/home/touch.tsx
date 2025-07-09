"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="py-12 px-4 mb-0">
      <div className="max-w-full mx-[20px]">
        <div className="bg-white overflow-hidden">
          <div className="grid md:grid-cols-2 min-h-[600px]">
            {/* Left Side - Full Height Image */}
            <div className="relative mr-6 w-full h-full">
              <Image
                src="/39.png"
                alt="Laptop with email interface"
                fill
                className="object-cover w-full h-full"
              />
            </div>

            {/* Right Side - Contact Form */}
            <div className="p-8 md:p-2 flex items-center justify-center">
              <div className="w-full max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-20">
                  GET IN TOUCH
                </h2>

                <form
                  className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 justify-center"
                  onSubmit={handleSubmit}
                >
                  {/* Name */}
                  <div>
                    <Label htmlFor="name" className="sr-only">
                      Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Name"
                      className="h-[40px] w-[334px] border-[#072328] rounded-2 focus:border-blue-500 focus:ring-0"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <Label htmlFor="phone" className="sr-only">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Phone"
                      className="h-[40px] w-[334px] border-[#072328] rounded-2 focus:border-blue-500 focus:ring-0"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="email" className="sr-only">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Email"
                      className="h-[40px] w-[334px] border-[#072328] rounded-2 focus:border-blue-500 focus:ring-0"
                    />
                  </div>

                  {/* Organization */}
                  <div>
                    <Label htmlFor="organization" className="sr-only">
                      Organization
                    </Label>
                    <Input
                      id="organization"
                      type="text"
                      placeholder="Organization / Affiliation"
                      className="h-[40px] w-[334px] border-[#072328] rounded-2 focus:border-blue-500 focus:ring-0"
                    />
                  </div>

                  {/* Message (span both columns) */}
                  <div className="sm:col-span-2 row-span-5">
                    <Label htmlFor="message" className="sr-only">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Message"
                      rows={4}
                      className="w-full h-[100px]  border-[#072328] rounded-2 focus:border-blue-500 focus:ring-0 resize-none"
                    />
                  </div>

                  {/* Submit Button (span both columns) */}
                  <div className="sm:col-span-2 pt-4">
                    <Button
                      type="submit"
                      className="w-full h-[50px] bg-[#072328] hover:bg-[#A1E3F9] hover:text-[#072328] active:bg-[#A1E3F9] focus:outline-none text-white text-lg font-medium transition-colors duration-200"
                    >
                      Submit Message
                    </Button>
                    {submitted && (
                      <p className="text-green-600 text-center font-medium pt-2">
                        ✅ Your message has been submitted!
                      </p>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
