import { Instagram, Linkedin, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Contact Information Section */}
          <div className="p-8 bg-white">
            <h2 className="text-2xl font-semibold text-gray-700 mb-8">Contact Information</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Head Office - SR Asia</h3>
                <p className="text-gray-600">New Delhi, India</p>
              </div>

              <div>
                <p className="text-gray-600">
                  <span className="font-medium">Email:</span> info@sr-asia.org
                </p>
              </div>

              <div>
                <p className="text-gray-600">
                  <span className="font-medium">Phone:</span> +91-XXXXXXXXXX
                </p>
              </div>

              <div>
                <h4 className="font-medium text-gray-800 mb-3">Social Media:</h4>
                <div className="flex space-x-3">
                  <a href="#" className="p-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-800 mb-2">Office Hours:</h4>
                <p className="text-gray-600">Monday - Friday, 10:00 AM to 6:00 PM IST</p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="p-8 bg-yellow-50">
            <h2 className="text-2xl font-semibold text-gray-700 mb-8">Contact Form</h2>

            <form className="space-y-6">
              <div className="border-b border-gray-300 focus-within:border-green-500 transition-colors">
                <Label htmlFor="name" className="sr-only">
                  Name
                </Label>
                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  className="w-full py-2 bg-transparent border-none focus:outline-none focus:ring-0"
                />
              </div>

              <div className="border-b border-gray-300 focus-within:border-green-500 transition-colors">
                <Label htmlFor="email" className="sr-only">
                  Email
                </Label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="w-full py-2 bg-transparent border-none focus:outline-none focus:ring-0"
                />
              </div>

              <div className="border-b border-gray-300 focus-within:border-green-500 transition-colors">
                <Label htmlFor="phone" className="sr-only">
                  Phone
                </Label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Phone"
                  className="w-full py-2 bg-transparent border-none focus:outline-none focus:ring-0"
                />
              </div>

              <div className="border-b border-gray-300 focus-within:border-green-500 transition-colors">
                <Label htmlFor="organization" className="sr-only">
                  Organization / Affiliation
                </Label>
                <input
                  id="organization"
                  type="text"
                  placeholder="Organization / Affiliation"
                  className="w-full py-2 bg-transparent border-none focus:outline-none focus:ring-0"
                />
              </div>

              <div className="border-b border-gray-300 focus-within:border-green-500 transition-colors">
                <Label htmlFor="subject" className="sr-only">
                  Subject / Inquiry type
                </Label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Subject / Inquiry type"
                  className="w-full py-2 bg-transparent border-none focus:outline-none focus:ring-0"
                />
              </div>

              <div className="border-b border-gray-300 focus-within:border-green-500 transition-colors">
                <Label htmlFor="message" className="sr-only">
                  Message
                </Label>
                <textarea
                  id="message"
                  placeholder="Message"
                  rows={6}
                  className="w-full py-2 bg-transparent border-none focus:outline-none focus:ring-0 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-md transition-colors"
              >
                Submit Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
