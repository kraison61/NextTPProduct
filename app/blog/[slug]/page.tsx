import { prisma } from "@/lib/prisma";
import Image from 'next/image';

const PageBlog = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
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

  // จำลอง array รูปและคำบรรยาย
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
    <section className="max-w-6xl mx-auto px-4 py-16 space-y-12">
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

      {/* เนื้อหา */}
      <div className="max-w-3xl mx-auto prose prose-lg text-gray-800">
        <div dangerouslySetInnerHTML={{ __html: blogData.content }} />
      </div>

      {/* รูปภาพประกอบ */}
      {images.length > 0 && (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <figure key={index}>
              <div className="relative aspect-w-16 aspect-h-9 overflow-hidden rounded-md shadow-md">
                <Image
                  src={image.src}
                  alt={image.caption}
                  fill
                  objectFit="object-cover"
                />
              </div>
              <figcaption className="mt-2 text-sm text-gray-500">
                {image.caption} - {image.desc}
              </figcaption>
            </figure>
          ))}
        </div>
      )}

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