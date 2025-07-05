import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactForm() {
  return (
    <div className="min-h-screen py-12 px-4 mb-[75px]">
  <div className="max-w-full mx-auto">
    <div className="bg-white overflow-hidden">
      <div className="grid md:grid-cols-2 gap-0 min-h-[600px]">
        {/* Left side - Full Image */}
        <div className="relative w-full h-full">
          <Image
            src="/57.png"
            alt="Laptop with email interface"
            fill
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right side - Contact Form */}
        <div className="p-8 md:p-12 flex items-center">
          <div className="max-w-md mx-auto w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">GET IN TOUCH</h2>

            <form className="space-y-6">
              {/* Name and Phone row */}
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

              {/* Email and Organization row */}
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
                  <Label htmlFor="organization" className="sr-only">Organization / Affiliation</Label>
                  <Input
                    id="organization"
                    type="text"
                    placeholder="Organization / Affiliation"
                    className="h-[40px] border-0 border-b-2 border-gray-200 rounded-none px-0 focus:border-blue-500 focus:ring-0"
                  />
                </div>
              </div>

              {/* Message field */}
              <div className="space-y-2">
                <Label htmlFor="message" className="sr-only">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Message"
                  rows={4}
                  className="border-0 border-b-2 border-gray-200 rounded-none px-0 py-3 focus:border-blue-500 focus:ring-0 resize-none"
                />
              </div>

              {/* Submit button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full h-[50px] bg-[#072328] hover:bg-[#072328] text-white text-lg font-medium"
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

  )
}
