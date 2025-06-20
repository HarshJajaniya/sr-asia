import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactForm() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left side - Image */}
            <div className="relative h-64 md:h-full min-h-[400px] bg-gradient-to-br from-blue-600 to-purple-600 p-8 flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <Image
                  src="/laptop-email.png"
                  alt="Laptop with email interface"
                  width={400}
                  height={300}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Right side - Contact Form */}
            <div className="p-8 md:p-12">
              <div className="max-w-md mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">GET IN TOUCH</h2>

                <form className="space-y-6">
                  {/* Name and Phone row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="sr-only">
                        Name
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Name"
                        className="border-0 border-b-2 border-gray-200 rounded-none px-0 py-3 focus:border-blue-500 focus:ring-0"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="sr-only">
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Phone"
                        className="border-0 border-b-2 border-gray-200 rounded-none px-0 py-3 focus:border-blue-500 focus:ring-0"
                      />
                    </div>
                  </div>

                  {/* Email and Organization row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="sr-only">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Email"
                        className="border-0 border-b-2 border-gray-200 rounded-none px-0 py-3 focus:border-blue-500 focus:ring-0"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="organization" className="sr-only">
                        Organization / Affiliation
                      </Label>
                      <Input
                        id="organization"
                        type="text"
                        placeholder="Organization / Affiliation"
                        className="border-0 border-b-2 border-gray-200 rounded-none px-0 py-3 focus:border-blue-500 focus:ring-0"
                      />
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="sr-only">
                      Message
                    </Label>
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
                      className="w-full bg-teal-700 hover:bg-teal-800 text-white py-4 text-lg font-medium"
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
