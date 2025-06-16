'use client'

import { useSearchParams } from 'next/navigation'
import { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import axios from 'axios'

interface Opening {
  _id: string
  title: string
  description: string
  type?: string
}

export default function OpeningsPage() {
  const searchParams = useSearchParams()
  const type = searchParams.get('type') || 'job'

  const [openings, setOpenings] = useState<Opening[]>([])
  const [showFormFor, setShowFormFor] = useState<string | null>(null)

  const [form, setForm] = useState({
    name: '',
    email: '',
    experience: '',
    ctc: '',
    resume: null as File | null,
  })

  /* -------------------- data load -------------------- */
  const fetchOpenings = async () => {
    try {
      const res = await axios.get(
        `https://srasia-backend.onrender.com/api/jobs${type ? `?type=${type}` : ''}`,
      )
      setOpenings(res.data)
    } catch (err) {
      console.error('Error fetching openings:', err)
    }
  }

  useEffect(() => {
    fetchOpenings()
  }, [type])

  /* -------------------- helpers -------------------- */
  const openApplyForm = (id: string) => {
    // toggle the form & reset previous values
    setShowFormFor((prev) => (prev === id ? null : id))
    setForm({ name: '', email: '', experience: '', ctc: '', resume: null })
  }

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setForm((prev) => ({ ...prev, resume: e.target.files![0] }))
    }
  }

  const submitApplication = async (e: FormEvent, jobId: string) => {
    e.preventDefault()
    try {
      const fd = new FormData()
      fd.append('jobId', jobId)
      fd.append('name', form.name)
      fd.append('email', form.email)
      fd.append('experience', form.experience)
      fd.append('ctc', form.ctc)
      if (form.resume) fd.append('resume', form.resume)

      await axios.post('https://srasia-backend.onrender.com/api/apply', fd, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })

      alert('Application submitted!')
      setShowFormFor(null)
    } catch (err: any) {
      console.error('Failed to apply:', err.response?.data || err.message)
      alert('Failed to apply. Please try again.')
    }
  }

  /* -------------------- UI -------------------- */
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 capitalize text-green-800">
        {type} Openings
      </h1>

      {openings.length === 0 ? (
        <p>No openings available.</p>
      ) : (
        <div className="space-y-6">
          {openings.map((o) => (
            <div
              key={o._id}
              className="border border-gray-300 p-6 rounded-md shadow-sm"
            >
              {/* card text */}
              <h2 className="text-xl font-semibold text-gray-800">{o.title}</h2>
              <p className="mt-2 text-gray-700">{o.description}</p>
              {o.type && (
                <span className="text-sm mt-1 block text-gray-500">
                  Type: {o.type}
                </span>
              )}

              {/* apply button */}
              <button
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
                onClick={() => openApplyForm(o._id)}
              >
                {showFormFor === o._id ? 'Cancel' : 'Apply'}
              </button>

              {/* inline apply form */}
              {showFormFor === o._id && (
                <form
                  onSubmit={(e) => submitApplication(e, o._id)}
                  className="mt-4 space-y-3 border-t border-gray-200 pt-4"
                >
                  <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleInputChange}
                    className="w-full border p-2"
                    required
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleInputChange}
                    className="w-full border p-2"
                    required
                  />
                  <input
                    name="experience"
                    type="number"
                    placeholder="Years of Experience"
                    value={form.experience}
                    onChange={handleInputChange}
                    className="w-full border p-2"
                    required
                  />
                  <input
                    name="ctc"
                    type="number"
                    placeholder="Current CTC (₹)"
                    value={form.ctc}
                    onChange={handleInputChange}
                    className="w-full border p-2"
                    required
                  />
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="w-full"
                    required
                  />

                  <button
                    type="submit"
                    className="bg-green-600 text-white px-4 py-2 rounded"
                  >
                    Submit Application
                  </button>
                </form>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
