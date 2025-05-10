import { prisma } from "@/lib/prisma";

const PageBlog = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const {slug} = await params
  const decodedSlug = decodeURIComponent(slug.replace(/-/g, " "));

  const blogData = await prisma.blogs.findFirst({
    where: { title: decodedSlug },
  });

  if (!blogData) {
    return (
      <div className="flex items-center justify-center min-h-screen text-xl text-red-600">
        ไม่พบบริการ
      </div>
    );
  }

  const imgUrl = process.env.NEXT_PUBLIC_MINIO_ENDPOINT;

  // จำลอง array รูปและคำบรรยาย (ในกรณีเก็บไว้ใน content เดียวกันแยกด้วย tag หรือ JSON จริงให้ parse แยกก่อน)
  const images = [
    {
      src: `${imgUrl}/${blogData.image}`,
      caption: "รูป: เสาเข็มตอกโดยเครื่องจักร",
      desc: "การดำเนินการอาจมีความล่าช้าเนื่องจากสภาพอากาศและความชื้นในพื้นที่",
    },
    {
      src: `${imgUrl}/another-image.jpg`,
      caption: "รูป: ปรับฐานเสาเข็ม",
      desc: "เพื่อให้เสาเข็มยึดเกาะได้ดีในสภาพดินอ่อน ต้องวางแนวเรียงให้ถูกต้อง",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-[20vh] space-y-12">
      {/* หัวข้อ */}
      <div className="text-center">
        <h1
          className="text-4xl font-bold text-gray-900"
          dangerouslySetInnerHTML={{ __html: blogData.title }}
        />
        <p className="text-gray-600 mt-2">
          อัปเดตเมื่อ{" "}
          {blogData.created_at
            ? new Date(blogData.created_at).toLocaleDateString("th-TH")
            : "ไม่ทราบวันที่"}
        </p>
      </div>

      {/* เนื้อหาให้อยู่ตรงกลางและจัดฟอร์แมต HTML ให้เรียบร้อย */}
      <div className="flex justify-center">
        <div
          className="prose prose-lg text-gray-800"
          dangerouslySetInnerHTML={{ __html: blogData.content }}
        />
      </div>

      {/* CTA */}
      <div className="text-center pt-10">
        <a
          href="/#footerId"
          className="inline-block px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white text-lg font-semibold rounded-xl transition duration-300"
        >
          ขอใบเสนอราคาหรือสอบถามเพิ่มเติม
        </a>
      </div>
    </section>
  );
};

export default PageBlog;
