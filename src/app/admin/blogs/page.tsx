"use client"
import { useState } from "react"

export default function AdminBlogPage() {
  const [form, setForm] = useState({
    title: "",
    summary: "",
    content: "",
    image: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await fetch("http://localhost:5000/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
    alert("Blog submitted!")
    setForm({ title: "", summary: "", content: "", image: "" })
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Add Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Title" className="w-full border p-2" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
        <input type="text" placeholder="Summary" className="w-full border p-2" value={form.summary} onChange={e => setForm({ ...form, summary: e.target.value })} />
        <input type="text" placeholder="Image Path (/resources/31.png)" className="w-full border p-2" value={form.image} onChange={e => setForm({ ...form, image: e.target.value })} />
        <textarea placeholder="Content" rows={6} className="w-full border p-2" value={form.content} onChange={e => setForm({ ...form, content: e.target.value })}></textarea>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Publish Blog</button>
      </form>
    </div>
  )
}
