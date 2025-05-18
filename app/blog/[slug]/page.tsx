import { prisma } from "@/lib/prisma";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug.replace(/-/g, " "));
  const blogData = await prisma.blogs.findFirst({
    where: {
      title: decodedSlug,
    },
  });
  return {
    title: blogData?.title || "บริการไม่พบ",
    description: blogData?.description || "ไม่มีคำอธิบายสำหรับบริการนี้",
  };
};

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

  

  return (
    <section className="max-w-6xl mx-auto px-4 pt-[30vh] space-y-12">
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