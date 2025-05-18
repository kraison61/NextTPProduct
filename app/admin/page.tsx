'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/navigation'

type Blog = {
  id: string
  title: string
  description: string
  created_at: string
  serviceName: {
    serviceName: string
  }
}

export default function AdminBlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)
  const [deletingId, setDeletingId] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    axios.get('/api/blogs').then((res) => {
      const blogList: Blog[] = res.data.map((b: any) => ({
        ...b,
        id: b.id.toString(),
      }))
      setBlogs(blogList)
      setLoading(false)
    })
  }, [])

  const handleDelete = async (id: string) => {
    if (!confirm('คุณแน่ใจหรือไม่ว่าต้องการลบบทความนี้?')) return
    setDeletingId(id)

    try {
      await axios.delete(`/api/blogs/${id}`)
      setBlogs((prev) => prev.filter((b) => b.id !== id))
    } catch (err) {
      alert('เกิดข้อผิดพลาดในการลบ')
      console.error(err)
    } finally {
      setDeletingId(null)
    }
  }

  return (
    <div className="max-w-4xl mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">จัดการบทความ</h1>
        <Link href="/admin/blogs/create" className="bg-green-600 text-white px-4 py-2 rounded">
          ➕ สร้างใหม่
        </Link>
      </div>

      {loading ? (
        <p>กำลังโหลด...</p>
      ) : blogs.length === 0 ? (
        <p>ยังไม่มีบทความ</p>
      ) : (
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2 border">หัวข้อ</th>
              <th className="p-2 border">หมวดหมู่</th>
              <th className="p-2 border">สร้างเมื่อ</th>
              <th className="p-2 border">การจัดการ</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog.id}>
                <td className="p-2 border">{blog.title}</td>
                <td className="p-2 border">{blog.serviceName?.serviceName || '-'}</td>
                <td className="p-2 border">
                  {blog.created_at ? new Date(blog.created_at).toLocaleDateString('th-TH') : '-'}
                </td>
                <td className="p-2 border space-x-2">
                  <Link
                    href={`/admin/blogs/edit/${blog.id}`}
                    className="px-2 py-1 bg-blue-500 text-white rounded"
                  >
                    แก้ไข
                  </Link>
                  <button
                    onClick={() => handleDelete(blog.id)}
                    disabled={deletingId === blog.id}
                    className="px-2 py-1 bg-red-600 text-white rounded disabled:opacity-50"
                  >
                    {deletingId === blog.id ? 'กำลังลบ...' : 'ลบ'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
