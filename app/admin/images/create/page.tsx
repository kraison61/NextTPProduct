'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

export default function ImageUploadPage() {
  const router = useRouter()

  const [files, setFiles] = useState<FileList | null>(null)
  const [location, setLocation] = useState('')
  const [workedDate, setWorkedDate] = useState('')
  const [serviceId, setServiceId] = useState('')
  const [services, setServices] = useState<{ id: string; serviceName: string }[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get('/api/services')
        const data = res.data.map((s: any) => ({
          id: s.id.toString(),
          serviceName: s.serviceName,
        }))
        setServices(data)
      } catch (err) {
        console.error(err)
        alert('โหลดรายการหมวดหมู่ล้มเหลว')
      }
    }

    fetchServices()
  }, [])

  const handleUpload = async () => {
    if (!files || !location || !workedDate || !serviceId) {
      alert('กรุณากรอกข้อมูลให้ครบ')
      return
    }

    const formData = new FormData()
    for (let i = 0; i < files.length; i++) {
      formData.append('image', files[i])
    }

    formData.append('location', location)
    formData.append('worked_date', workedDate)
    formData.append('serviceId', serviceId)

    try {
      setLoading(true)
      await axios.post('/api/images/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      alert('อัปโหลดสำเร็จ')
      router.push('/admin/')
    } catch (error) {
      console.error(error)
      alert('เกิดข้อผิดพลาดในการอัปโหลด')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">อัปโหลดภาพ</h1>

      <div className="mb-4">
        <label className="block font-semibold">เลือกรูปภาพ (หลายไฟล์ได้)</label>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={(e) => setFiles(e.target.files)}
          className="w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold">สถานที่</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold">วันที่ปฏิบัติงาน</label>
        <input
          type="date"
          value={workedDate}
          onChange={(e) => setWorkedDate(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold">หมวดหมู่ (Service)</label>
        <select
          value={serviceId}
          onChange={(e) => setServiceId(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">-- เลือกหมวดหมู่ --</option>
          {services.map((s) => (
            <option key={s.id} value={s.id}>
              {s.serviceName}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={handleUpload}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {loading ? 'กำลังอัปโหลด...' : 'อัปโหลด'}
      </button>
    </div>
  )
}
