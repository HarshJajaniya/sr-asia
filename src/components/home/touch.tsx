"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="min-h-screen py-12 px-4 mb-[75px]">
      <div className="max-w-full mx-auto">
        <div className="bg-white overflow-hidden rounded-2xl shadow-xl">
          <div className="grid md:grid-cols-2 min-h-[600px]">
            {/* Left Side - Full Height Image */}
            <div className="relative w-full h-full">
              <Image
                src="/57.png"
                alt="Laptop with email interface"
                fill
                className="object-cover w-full h-full"
              />
            </div>

            {/* Right Side - Contact Form */}
            <div className="p-8 md:p-12 flex items-center">
              <div className="max-w-md w-full mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                  GET IN TOUCH
                </h2>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="sr-only">Name</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Name"
                        className="h-[40px] border-0 border-b-2 border-gray-200 rounded-none px-0 focus:border-blue-500 focus:ring-0"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="sr-only">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Phone"
                        className="h-[40px] border-0 border-b-2 border-gray-200 rounded-none px-0 focus:border-blue-500 focus:ring-0"
                      />
                    </div>
                  </div>

                  {/* Email and Organization */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="sr-only">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Email"
                        className="h-[40px] border-0 border-b-2 border-gray-200 rounded-none px-0 focus:border-blue-500 focus:ring-0"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="organization" className="sr-only">Organization</Label>
                      <Input
                        id="organization"
                        type="text"
                        placeholder="Organization / Affiliation"
                        className="h-[40px] border-0 border-b-2 border-gray-200 rounded-none px-0 focus:border-blue-500 focus:ring-0"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="sr-only">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Message"
                      rows={4}
                      className="border-0 border-b-2 border-gray-200 rounded-none px-0 py-3 focus:border-blue-500 focus:ring-0 resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      className="w-full h-[50px] bg-[#072328] hover:bg-[#072328] text-white text-lg font-medium"
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
  )
}
