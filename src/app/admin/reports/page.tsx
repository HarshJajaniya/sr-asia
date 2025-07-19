"use client";

import { useEffect, useState } from "react";
import axios from "axios";

type Report = {
  _id?: string;
  category: string;
  image: string;
  alt: string;
  title: string;
  subtitle: string;
  link: string;
  description: string;
};

export default function AdminReportPage() {
  const [reports, setReports] = useState<Report[]>([]);
  const [form, setForm] = useState<Report>({
    category: "brsr",
    image: "",
    alt: "",
    title: "",
    subtitle: "",
    link: "",
    description: "",
  });

  const fetchReports = async () => {
    const res = await axios.get("https://srasia-backend.onrender.com/api/reports");
    setReports(res.data);
  };

  useEffect(() => {
    fetchReports();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post("https://srasia-backend.onrender.com/admin/reports", form);
    setForm({
      category: "brsr",
      image: "",
      alt: "",
      title: "",
      subtitle: "",
      link: "",
      description: "",
    });
    fetchReports();
  };

  const handleDelete = async (id: string) => {
    await axios.delete(`https://srasia-backend.onrender.com/admin/reports/${id}`);
    fetchReports();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Add New Report</h1>
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <select
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          className="border px-4 py-2 w-full"
        >
          <option value="brsr">BRSR</option>
          <option value="impact">Impact</option>
          <option value="social">Social</option>
        </select>
        <input
          type="text"
          placeholder="Image URL"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
          className="border px-4 py-2 w-full"
        />
        <input
          type="text"
          placeholder="Alt Text"
          value={form.alt}
          onChange={(e) => setForm({ ...form, alt: e.target.value })}
          className="border px-4 py-2 w-full"
        />
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="border px-4 py-2 w-full"
        />
        <input
          type="text"
          placeholder="Subtitle"
          value={form.subtitle}
          onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
          className="border px-4 py-2 w-full"
        />
        <input
          type="text"
          placeholder="Link"
          value={form.link}
          onChange={(e) => setForm({ ...form, link: e.target.value })}
          className="border px-4 py-2 w-full"
        />
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="border px-4 py-2 w-full"
        />
        <button type="submit" className="bg-[#072328] text-white px-6 py-2 rounded">
          Add Report
        </button>
      </form>

      <h2 className="text-xl font-bold mb-4">Existing Reports</h2>
      <ul className="space-y-4">
        {reports.map((report) => (
          <li key={report._id} className="border p-4 rounded shadow">
            <p className="font-semibold">{report.title}</p>
            <p className="text-sm text-gray-500">Category: {report.category}</p>
            <button
              onClick={() => handleDelete(report._id!)}
              className="text-red-600 mt-2"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
