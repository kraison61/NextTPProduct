// app/admin/layout.tsx
import type { ReactNode } from 'react'

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen py-40">
      <aside className="w-64 bg-gray-100 p-4 border-r">
        <h2 className="text-xl font-bold mb-4">Admin Menu</h2>
        <ul className="space-y-2">
          <li><a href="/admin/blogs/create" className="text-blue-600">เพิ่มบทความ</a></li>
          <li><a href="/admin" className="text-blue-600">รายการบทความ</a></li>
          <li><a href="/admin/images/create" className="text-blue-600">เพิ่มรูปภาพ</a></li>
        </ul>
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  )
}
