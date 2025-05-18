"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";

export default function EditBlogPage() {
  const id = useParams<{ id: string }>()!.id; // ✅ ใช้ non-null assertion
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [serviceId, setServiceId] = useState("");
  const [services, setServices] = useState<
    { id: string; serviceName: string }[]
  >([]);

  const editor = useEditor({
    extensions: [StarterKit, BulletList, ListItem, Link, Image],
    content: "<p>กำลังโหลดเนื้อหา...</p>",
  });

  // โหลดข้อมูลบทความ
  useEffect(() => {
    if (!id) return;

    const fetchBlog = async () => {
      const blogRes = await axios.get(`/api/blogs/${id}`);
      const data = blogRes.data;
      setTitle(data.title);
      setDescription(data.description);
      setServiceId(data.servicename_id.toString());
      editor?.commands.setContent(data.content || "");
    };

    const fetchServices = async () => {
      const res = await axios.get("/api/services");
      const list = res.data.map((s: any) => ({
        id: s.id.toString(),
        serviceName: s.serviceName,
      }));
      setServices(list);
    };

    Promise.all([fetchBlog(), fetchServices()]).then(() => setLoading(false));
  }, [id, editor]);

  const handleUpdate = async () => {
    if (!title || !description || !editor?.getHTML()) {
      alert("กรุณากรอกข้อมูลให้ครบ");
      return;
    }

    try {
      await axios.put(`/api/blogs/${id}`, {
        title,
        description,
        content: editor.getHTML(),
        servicename_id: serviceId,
      });

      alert("อัปเดตบทความสำเร็จ");
      router.push("/admin");
    } catch (err) {
      console.error(err);
      alert("เกิดข้อผิดพลาดในการอัปเดต");
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">แก้ไขบทความ</h1>

      {loading ? (
        <p>กำลังโหลด...</p>
      ) : (
        <>
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
                {[1, 2, 3, 4, 5, 6].map((level) => (
                  <button
                    key={level}
                    onClick={() =>
                      editor
                        ?.chain()
                        .focus()
                        .toggleHeading({
                          level: level as 1 | 2 | 3 | 4 | 5 | 6,
                        }) // ✅ cast type
                        .run()
                    }
                    className={`px-2 py-1 border rounded ${
                      editor?.isActive("heading", {
                        level: level as 1 | 2 | 3 | 4 | 5 | 6,
                      })
                        ? "bg-blue-600 text-white"
                        : "bg-white"
                    }`}
                  >
                    H{level}
                  </button>
                ))}

                <button
                  onClick={() => editor.chain().focus().toggleBold().run()}
                  className={`px-2 py-1 border rounded ${
                    editor.isActive("bold")
                      ? "bg-blue-600 text-white"
                      : "bg-white"
                  }`}
                >
                  B
                </button>
                <button
                  onClick={() => editor.chain().focus().toggleItalic().run()}
                  className={`px-2 py-1 border rounded ${
                    editor.isActive("italic")
                      ? "bg-blue-600 text-white"
                      : "bg-white"
                  }`}
                >
                  I
                </button>
                <button
                  onClick={() =>
                    editor.chain().focus().toggleBulletList().run()
                  }
                  className={`px-2 py-1 border rounded ${
                    editor.isActive("bulletList")
                      ? "bg-blue-600 text-white"
                      : "bg-white"
                  }`}
                >
                  • List
                </button>
                <button
                  onClick={() => {
                    const url = window.prompt("ใส่ลิงก์ (URL):");
                    if (url) {
                      editor
                        .chain()
                        .focus()
                        .extendMarkRange("link")
                        .setLink({ href: url })
                        .run();
                    }
                  }}
                  className="px-2 py-1 border rounded"
                >
                  🔗 ลิงก์
                </button>
                <button
                  onClick={() => {
                    const url = window.prompt("กรุณาใส่ URL รูปภาพ:");
                    if (url) {
                      editor.chain().focus().setImage({ src: url }).run();
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
            onClick={handleUpdate}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            บันทึกการเปลี่ยนแปลง
          </button>
        </>
      )}
    </div>
  );
}
