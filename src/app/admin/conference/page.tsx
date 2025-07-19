"use client";
import { useState } from "react";
import axios from "axios";

export default function AdminConferencePage() {
  const [form, setForm] = useState({
    title: "",
    subtitle: "",
    intro: "",
    images: [""],
    pdfs: [{ name: "", url: "" }],
  });

  const handleChange = (field: string, value: any) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const updateList = (
    field: "images" | "pdfs",
    index: number,
    key: "name" | "url",
    value: string
  ) => {
    const updated = [...form[field]];
    if (field === "images") updated[index] = value;
    else if (typeof updated[index] === "object" && updated[index] !== null) {
      (updated[index] as { name: string; url: string })[key] = value;
    }
    setForm({ ...form, [field]: updated });
  };

  const addItem = (field: "images" | "pdfs") => {
    const updated = [...form[field]];
    updated.push(field === "images" ? "" : { name: "", url: "" });
    setForm({ ...form, [field]: updated });
  };

  const submit = async () => {
    await axios.post("https://srasia-backend.onrender.com/api/conference/admin", form);
    alert("Conference saved");
    setForm({ title: "", subtitle: "", intro: "", images: [""], pdfs: [{ name: "", url: "" }] });
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Add Conference</h1>

      <input
        className="w-full border mb-3 p-2"
        placeholder="Title"
        value={form.title}
        onChange={(e) => handleChange("title", e.target.value)}
      />

      <input
        className="w-full border mb-3 p-2"
        placeholder="Subtitle"
        value={form.subtitle}
        onChange={(e) => handleChange("subtitle", e.target.value)}
      />

      <textarea
        className="w-full border mb-3 p-2"
        placeholder="Intro"
        value={form.intro}
        onChange={(e) => handleChange("intro", e.target.value)}
      />

      <h2 className="text-lg font-semibold mb-2">Images</h2>
      {form.images.map((img, i) => (
        <input
          key={i}
          className="w-full border mb-2 p-2"
          placeholder="Image URL"
          value={img}
          onChange={(e) => updateList("images", i, "url", e.target.value)}
        />
      ))}
      <button onClick={() => addItem("images")} className="mb-4 bg-blue-500 text-white px-3 py-1 rounded">
        + Add Image
      </button>

      <h2 className="text-lg font-semibold mb-2">PDFs</h2>
      {form.pdfs.map((pdf, i) => (
        <div key={i} className="mb-2">
          <input
            className="w-full border p-2 mb-1"
            placeholder="PDF Name"
            value={pdf.name}
            onChange={(e) => updateList("pdfs", i, "name", e.target.value)}
          />
          <input
            className="w-full border p-2"
            placeholder="PDF URL"
            value={pdf.url}
            onChange={(e) => updateList("pdfs", i, "url", e.target.value)}
          />
        </div>
      ))}
      <button onClick={() => addItem("pdfs")} className="mb-4 bg-blue-500 text-white px-3 py-1 rounded">
        + Add PDF
      </button>

      <button onClick={submit} className="bg-green-600 text-white px-4 py-2 rounded">
        Submit
      </button>
    </div>
  );
}
