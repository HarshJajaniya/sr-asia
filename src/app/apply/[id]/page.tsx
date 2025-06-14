'use client'
import { useState } from "react"
import axios from "axios"
import { useParams } from "next/navigation"

export default function ApplyPage() {
  const { id } = useParams()
  const [formData, setFormData] = useState({ name: "", email: "", experience: "", ctc: "", resume: null as File | null })

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const data = new FormData()
    Object.entries(formData).forEach(([key, value]) => {
      if (value) data.append(key, value)
    })
    data.append("jobId", id as string)

    await axios.post("http://localhost:5000/api/apply", data)
    alert("Application submitted successfully!")
  }

  return (
    <div className="max-w-xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-green-800">Apply Now</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Name" required onChange={e => setFormData({ ...formData, name: e.target.value })} className="w-full p-2 border" />
        <input type="email" placeholder="Email" required onChange={e => setFormData({ ...formData, email: e.target.value })} className="w-full p-2 border" />
        <input type="text" placeholder="Years of Experience" onChange={e => setFormData({ ...formData, experience: e.target.value })} className="w-full p-2 border" />
        <input type="text" placeholder="Current CTC" onChange={e => setFormData({ ...formData, ctc: e.target.value })} className="w-full p-2 border" />
        <input type="file" required onChange={e => setFormData({ ...formData, resume: e.target.files?.[0] || null })} className="w-full" />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Submit Application</button>
      </form>
    </div>
  )
}
