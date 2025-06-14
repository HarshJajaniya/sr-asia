'use client'

import Link from 'next/link'

export default function QuickLinks() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-wrap gap-6">
        {[
          { href: '/admin/openings', label: 'Openings' },
          { href: '/admin/blog',      label: 'Blog'      },
          { href: '/admin/events',    label: 'Events'    },
        ].map(({ href, label }) => (
          <Link key={href} href={href}>
            <button className="px-8 py-4 rounded bg-green-600 text-white hover:bg-green-700 transition">
              {label}
            </button>
          </Link>
        ))}
      </div>
    </div>
  )
}
