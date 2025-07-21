"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function Component() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      await axios.post(
        "https://srasia-backend.onrender.com/api/volunteer/send",
        formData
      );
      toast.success(
        "Thank you for joining with us. Looking forward to connecting with you!"
      );
      setFormData({ name: "", phone: "" });
      setShowForm(false);
    } catch (err) {
      toast.error("Failed to send message.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Volunteer Section */}
      <section className="bg-white mx-[20px] mb-[75px]">
        <div className="w-full py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image on Left */}
            <div className="order-2 lg:order-1">
              <Image
                src="/carrers/1.png"
                alt="Hands coming together in collaboration"
                width={500}
                height={300}
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Content on Right */}
            <div className="order-1 lg:order-2 space-y-6">
              <h1 className="text-4xl font-bold text-gray-900 uppercase tracking-wide">
                Volunteer with us
              </h1>
              <h2 className="text-xl text-gray-700 font-medium">
                Make a difference on the ground.
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Support real-world CSR, education, or ecological projects in
                urban and rural areas. Perfect for students, professionals, or
                community champions who want to give back.
              </p>
              <Button
                onClick={() => setShowForm(!showForm)}
                className="bg-[#072328] hover:bg-teal-900 text-white px-8 py-3 text-sm font-medium uppercase tracking-wide"
              >
                Contact Us
              </Button>

              {/* Contact Form */}
              {showForm && (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 p-4 mt-4 border rounded-xl shadow-md max-w-sm bg-white"
                >
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
