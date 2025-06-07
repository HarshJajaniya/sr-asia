"use client"

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Component() {
  const pdfFiles = [
    { name: "CSR.pdf", filename: "CSR.pdf" },
    { name: "ESG:Service drive.pdf", filename: "ESG-Service-drive.pdf" },
    { name: "SR Asia.pdf", filename: "SR-Asia.pdf" },
    { name: "Sustainability Reporting.pdf", filename: "Sustainability-Reporting.pdf" },
  ]

  const handleDownload = (filename: string) => {
    const link = document.createElement("a")
    link.href = `/${filename}` // Serves from public folder
    link.setAttribute("download", filename)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="flex flex-col items-center gap-4 mb-16 bg-gray-50 p-4">
      <div className="flex flex-wrap gap-4 justify-center">
        {pdfFiles.map((file, index) => (
          <Button
            key={index}
            onClick={() => handleDownload(file.filename)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md flex items-center gap-2 font-medium text-sm whitespace-nowrap"
          >
            <Download className="w-4 h-4" />
            {file.name}
          </Button>
        ))}
      </div>
    </div>
  )
}
