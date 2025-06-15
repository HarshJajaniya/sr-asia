"use client"

import { useState } from "react"
import { Instagram, Linkedin, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import axios from "axios"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await axios.post("https://srasia-backend.onrender.com/api/contact", formData)
      alert("Message sent successfully!")
      setFormData({
        name: "",
        email: "",
        phone: "",
        organization: "",
        subject: "",
        message: "",
      })
    } catch (err) {
      alert("Error sending message. Please try again.")
      console.error(err)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Contact Info */}
          <div className="p-8 bg-white">
            <h2 className="text-2xl font-semibold text-gray-700 mb-8">Contact Information</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Head Office - SR Asia</h3>
                <p className="text-gray-600">New Delhi, India</p>
              </div>
              <p className="text-gray-600"><span className="font-medium">Email:</span> info@sr-asia.org</p>
              <p className="text-gray-600"><span className="font-medium">Phone:</span> +91-XXXXXXXXXX</p>
              <div>
                <h4 className="font-medium text-gray-800 mb-3">Social Media:</h4>
                <div className="flex space-x-3">
                  <a href="#" className="p-2 bg-pink-500 text-white rounded hover:bg-pink-600"><Instagram /></a>
                  <a href="#" className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700"><Linkedin /></a>
                  <a href="#" className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"><Facebook /></a>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Office Hours:</h4>
                <p className="text-gray-600">Monday - Friday, 10:00 AM to 6:00 PM IST</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 bg-yellow-50">
            <h2 className="text-2xl font-semibold text-gray-700 mb-8">Contact Form</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {["name", "email", "phone", "organization", "subject"].map(field => (
                <div key={field} className="border-b border-gray-300 focus-within:border-green-500 transition-colors">
                  <Label htmlFor={field} className="sr-only">{field}</Label>
                  <input
                    id={field}
                    type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1).replace("-", " ")}
                    value={(formData as any)[field]}
                    onChange={handleChange}
                    className="w-full py-2 bg-transparent border-none focus:outline-none"
                  />
                </div>
              ))}
              <div className="border-b border-gray-300 focus-within:border-green-500 transition-colors">
                <Label htmlFor="message" className="sr-only">Message</Label>
                <textarea
                  id="message"
                  placeholder="Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full py-2 bg-transparent border-none resize-none focus:outline-none"
                />
              </div>
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-md">
                Submit Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
