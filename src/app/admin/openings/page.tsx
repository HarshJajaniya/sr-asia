"use client"

import { useState, useEffect } from "react"
import axios from "axios"

export default function AdminOpeningsPage() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [type, setType] = useState("job") // default type
  const [openings, setOpenings] = useState([])

  const fetchOpenings = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/jobs")
      setOpenings(res.data)
    } catch (err) {
      console.error("Error fetching jobs", err)
    }
  }

  useEffect(() => {
    fetchOpenings()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:5000/api/jobs", {
        title,
        description,
        type,
      })
      fetchOpenings()
      setTitle("")
      setDescription("")
      setType("job")
    } catch (err: any) {
      console.error("Failed to add job:", err.response?.data || err.message)
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/jobs/${id}`)
      fetchOpenings()
    } catch (err) {
      console.error("Error deleting job", err)
    }
  }

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Insert Job Opening</h1>

      <form onSubmit={handleSubmit} className="space-y-3 mb-6">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2"
          required
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border p-2"
          required
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full border p-2"
          required
        >
          <option value="job">Job</option>
          <option value="internship">Internship</option>
        </select>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add Opening
        </button>
      </form>

      <h2 className="text-xl font-semibold mb-2">Current Openings</h2>
      <ul className="space-y-2">
        {openings.map((o: any) => (
          <li key={o._id} className="border p-3 flex justify-between">
            <div>
              <strong>{o.title}</strong> <br />
              <small>{o.description}</small> <br />
              <span className="text-sm text-gray-500">Type: {o.type}</span>
            </div>
            <button
              onClick={() => handleDelete(o._id)}
              className="text-red-500"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
