import Link from "next/link"
import { cn } from "@/lib/utils"

export function Sidebar() {
  const navItems = [
    { name: "All Reports", href: "#all-reports" },
    { name: "Impact Assessments", href: "#impact-assessments" },
    { name: "BRSR", href: "#brsr" },
    { name: "Social Impact Reports", href: "#social-impact-reports" },
    { name: "Environmental Reports", href: "#environmental-reports" },
  ]

  return (
    <aside className="w-64 bg-white p-6 shadow-md rounded-lg flex-shrink-0">
      <h2 className="text-lg font-bold mb-4 text-gray-800">Report Categories</h2>
      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900",
              // Add active state styling if needed, e.g., based on current hash or route
            )}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  )
}