"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
 import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    organization: "",
    message: "",
  });

  // Inside the component...
interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  organization: string;
  message: string;
}

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
  e.preventDefault();

  // Basic frontend validation
  if (
    !formData.name.trim() ||
    !formData.email.trim() ||
    !formData.message.trim()
  ) {
    toast.error("❌ Please fill in all required fields: Name, Email, and Message.");
    return;
  }

  try {
    const response = await axios.post("https://srasia-backend.onrender.com/api/contact", formData);

    if (response.status >= 200 && response.status < 300) {
      toast.success("✅ Your message was sent successfully!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        organization: "",
        message: "",
      });
    } else {
      toast.error("⚠️ Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error("❌ Error submitting form:", error);
    toast.error("⚠️ Something went wrong. Please try again.");
  }
};


  interface ContactFormChangeEvent extends React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> {}

  const handleChange = (e: ContactFormChangeEvent): void => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="py-12 px-4 mb-0" id="contact-form">
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
                  className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6"
                  onSubmit={handleSubmit}
                >
                  {/* Name */}
                  <div className="w-full">
                    <Label htmlFor="name" className="sr-only">Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Name"
                      className="h-[40px] w-full border-[#072328] rounded-2 focus:border-blue-500 focus:ring-0"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Phone */}
                  <div className="w-full">
                    <Label htmlFor="phone" className="sr-only">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Phone"
                      className="h-[40px] w-full border-[#072328] rounded-2 focus:border-blue-500 focus:ring-0"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Email */}
                  <div className="w-full">
                    <Label htmlFor="email" className="sr-only">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Email"
                      className="h-[40px] w-full border-[#072328] rounded-2 focus:border-blue-500 focus:ring-0"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Organization */}
                  <div className="w-full">
                    <Label htmlFor="organization" className="sr-only">Organization</Label>
                    <Input
                      id="organization"
                      type="text"
                      placeholder="Organization / Affiliation"
                      className="h-[40px] w-full border-[#072328] rounded-2 focus:border-blue-500 focus:ring-0"
                      value={formData.organization}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2">
                    <Label htmlFor="message" className="sr-only">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Message"
                      rows={4}
                      className="w-full h-[100px] border-[#072328] rounded-2 focus:border-blue-500 focus:ring-0 resize-none"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Submit */}
                  <div className="sm:col-span-2 pt-4">
                    <Button
                      type="submit"
                      className="w-full h-[50px] bg-[#072328] hover:bg-[#A1E3F9] hover:text-[#072328] active:bg-[#A1E3F9] focus:outline-none text-white text-lg font-medium transition-colors duration-200"
                    >
                      Submit Message
                    </Button>
                   
                  
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
function setError(arg0: boolean) {
  throw new Error("Function not implemented.");
}

