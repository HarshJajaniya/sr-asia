"use client"
import { useEffect, useState } from "react"


interface Blog {
  _id: string
  title: string
  summary: string
  content: string
  image: string
  createdAt: string
}

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([])

  useEffect(() => {
    fetch("https://srasia-backend.onrender.com/api/blogs")
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-[#537D5D] mb-8">Our Latest Blogs</h1>
      <div className="space-y-8">
        {blogs.map(blog => (
          <div key={blog._id} className="border border-gray-200 p-6 rounded-lg shadow-sm">
            {/* <Image src={blog.image} alt={blog.title} width={600} height={300} className="mb-4 rounded-md" /> */}
            <h2 className="text-2xl font-semibold text-[#3e6536]">{blog.title}</h2>
            <p className="text-md text-gray-700 mt-2">{blog.summary}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
