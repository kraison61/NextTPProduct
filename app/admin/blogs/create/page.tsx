'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import BulletList from '@tiptap/extension-bullet-list'
import ListItem from '@tiptap/extension-list-item'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'

type Level = 1 | 2 | 3 | 4 | 5 | 6

export default function CreateBlogPage() {
  const router = useRouter()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [serviceId, setServiceId] = useState('')
  const [services, setServices] = useState<{ id: string; serviceName: string }[]>([])
  const [loading, setLoading] = useState(false)

  const editor = useEditor({
    extensions: [StarterKit, BulletList, ListItem, Link, Image],
    content: '',
  })

  // โหลด service/mapping
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get('/api/services')
        const list = res.data.map((s: any) => ({
          id: s.id.toString(),
          serviceName: s.serviceName,
        }))
        setServices(list)
      } catch (err) {
        console.error(err)
        alert('โหลดหมวดหมู่ล้มเหลว')
      }
    }

    fetchServices()
  }, [])

  const handleCreate = async () => {
    if (!title || !description || !image || !editor?.getHTML() || !serviceId) {
      alert('กรุณากรอกข้อมูลให้ครบ')
      return
    }

    try {
      setLoading(true)
      await axios.post('/api/blogs', {
        title,
        description,
        content: editor.getHTML(),
        image,
        serviceNameId: Number(serviceId),
      })

      alert('สร้างบทความสำเร็จ')
      router.push('/admin')
    } catch (err) {
      console.error(err)
      alert('เกิดข้อผิดพลาดในการสร้างบทความ')
    } finally {
      setLoading(false)
    }
  }

  const headingLevels: Level[] = [1, 2, 3, 4, 5, 6]

  return (
    <div className="max-w-2xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">สร้างบทความใหม่</h1>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border mb-2"
        placeholder="หัวข้อ"
      />

      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 border mb-2"
        placeholder="คำอธิบาย"
      />

      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="w-full p-2 border mb-2"
        placeholder="URL รูปภาพหน้าปก"
      />

      <select
        value={serviceId}
        onChange={(e) => setServiceId(e.target.value)}
        className="w-full p-2 border mb-2"
      >
        <option value="">เลือกหมวดหมู่</option>
        {services.map((s) => (
          <option key={s.id} value={s.id}>
            {s.serviceName}
          </option>
        ))}
      </select>

      {editor && (
        <>
          <div className="flex flex-wrap gap-2 mb-2 border rounded p-2 bg-gray-100">
            {headingLevels.map((level) => (
              <button
                key={level}
                onClick={() => editor.chain().focus().toggleHeading({ level }).run()}
                className={`px-2 py-1 border rounded ${
                  editor.isActive('heading', { level })
                    ? 'bg-blue-600 text-white'
                    : 'bg-white'
                }`}
              >
                H{level}
              </button>
            ))}

            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={`px-2 py-1 border rounded ${
                editor.isActive('bold') ? 'bg-blue-600 text-white' : 'bg-white'
              }`}
            >
              B
            </button>

            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={`px-2 py-1 border rounded ${
                editor.isActive('italic') ? 'bg-blue-600 text-white' : 'bg-white'
              }`}
            >
              I
            </button>

            <button
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={`px-2 py-1 border rounded ${
                editor.isActive('bulletList') ? 'bg-blue-600 text-white' : 'bg-white'
              }`}
            >
              • List
            </button>

            <button
              onClick={() => {
                const url = window.prompt('ใส่ลิงก์ (URL):')
                if (url) {
                  editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
                }
              }}
              className="px-2 py-1 border rounded"
            >
              🔗 ลิงก์
            </button>

            <button
              onClick={() => {
                const url = window.prompt('กรุณาใส่ URL รูปภาพ:')
                if (url) {
                  editor.chain().focus().setImage({ src: url }).run()
                }
              }}
              className="px-2 py-1 border rounded"
            >
              🖼️ รูปภาพ
            </button>
          </div>

          <EditorContent
                editor={editor}
                className="prose max-w-none border p-4 mb-4 rounded bg-white shadow-sm"
              />
        </>
      )}

      <button
        onClick={handleCreate}
        className="bg-green-600 text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? 'กำลังบันทึก...' : 'สร้างบทความ'}
      </button>
    </div>
  )
}
