"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Plus, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export default function PdfAccordion() {
  const [openItem, setOpenItem] = useState<string | undefined>(undefined)

  const items = [
    {
      id: "item-1",
      title: "F205 Use of Certificates and Certification and Accreditation Mark",
      pdfUrl: "/certificates/1.pdf", // Placeholder PDF URL
    },
    {
      id: "item-2",
      title: "F205-1-UKAS Use of the UKAS Symbol by Certified Clients",
      pdfUrl: "/certificates/2.pdf", // Placeholder PDF URL
    },
    {
      id: "item-3",
      title: "Great Place to Work Certification",
      pdfUrl: "/certificates/3.jpg", // Placeholder PDF URL
    },
    {
      id: "item-4",
      title: "Himayat 30-01-2023 Carrying out Retention study and Impact Assessment (IA) exercise under HIMAYAT Scheme",
      pdfUrl: "/certificates/4.pdf", // Placeholder PDF URL
    },
    {
      id: "item-5",
      title: "Certification of Registration ",
      pdfUrl: "/certificates/5.pdf", // Placeholder PDF URL
    },{
      id: "item-6",
      title: "Turnover Certificate (2021-24)",
      pdfUrl: "/certificates/6.pdf", // Placeholder PDF URL
    },{
      id: "item-7",
      title: "Updated Udyam Registration Certificate",
      pdfUrl: "/certificates/7.pdf", // Placeholder PDF URL
    },
    ,{
      id: "item-8",
      title: "CTN Certificate",
      pdfUrl: "/certificates/CTN.jpg", // Placeholder PDF URL
    },
    ,{
      id: "item-9",
      title: "Turnover Certificate",
      pdfUrl: "/certificates/8.pdf", // Placeholder PDF URL
    },
  ]

  return (
    <div className="p-4 max-w-full mx-auto">
      <Accordion type="single" collapsible className="w-full" value={openItem} onValueChange={setOpenItem}>
        {items.map((item) => (
          <AccordionItem key={item.id} value={item.id} className="border-b-0">
            <AccordionTrigger className="bg-[#246875] text-white data-[state=open]:bg-[#246875] px-4 py-3 rounded-none border-b border-white flex justify-between items-center text-left font-medium text-base">
              <div className="flex items-center gap-2">
                <Plus className="h-5 w-5 shrink-0" />
                <span className="flex-1">{item.title}</span>
              </div>
              <ChevronRight
                className={cn(
                  "h-5 w-5 shrink-0 transition-transform duration-200",
                  openItem === item.id && "rotate-90",
                )}
              />
            </AccordionTrigger>
            <AccordionContent className="bg-white p-0 overflow-hidden">
              <div className="w-full h-[600px] overflow-y-auto">
                <iframe src={item.pdfUrl} className="w-full h-full border-0" title={item.title}></iframe>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
