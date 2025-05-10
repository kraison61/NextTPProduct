//app/[slug]/page.tsx
import ContentsPage from "@/components/BlogComponent/Contents";
import Review from "@/components/Home/Reviews/Review";
import Slide from "@/components/Home/Slide/Slide";
import { prisma } from "@/lib/prisma";
import { CarouselItem } from "@/data/TypeProps";

export async function generateStaticParams() {
  const servicePages = await prisma.service_names.findMany();

  return servicePages.map((service) => ({
    slug: service.serviceLink // เปลี่ยนเว้นวรรคเป็นขีด
  }));
}

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const serviceData = await prisma.service_names.findFirst({
    where: {
      serviceLink: slug,
    },
    include: {
      services: {
        select: {
          kw_title: true,
          kw_des: true,
        },
      },
    },
  });
  const firstService = serviceData?.services?.[0];
  return {
    title: firstService?.kw_title || "บริการไม่พบ",
    description: firstService?.kw_des || "ไม่มีคำอธิบายสำหรับบริการนี้",
  };
};

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // 1️⃣ หา service_name ด้วย slug (ภาษาไทย)
  const serviceNameData = await prisma.service_names.findFirst({
    where: { serviceLink: slug },
    include: {
      services: true, // ดึง services ที่เกี่ยวข้องทั้งหมด
    },
  });

  if (!serviceNameData || serviceNameData.services.length === 0) {
    return <div>ไม่พบบริการ</div>;
  }


  const firstService = serviceNameData.services[0]; // เลือกตัวแรก (หรือจะใช้ทุกตัวก็ได้)

  // 2️⃣ ดึงรูปทั้งหมดที่เชื่อมกับ services.id
  const images = await prisma.image_uploads.findMany({
    where: {
      serviceId: serviceNameData.id, // ✅ ค้นด้วย id ของ service_names
    },
    select: {
      id: true,
      img_url: true,
      location: true,
      worked_date: true,
    },
  });
  

  // 3️⃣ สร้าง contentsData สำหรับเนื้อหา (optional ใช้บริการแรก)
  const contentsData = {
    id: Number(firstService.id),
    kw_img1: firstService.kw_img1,
    kw_h1: firstService.kw_h1,
    kw_top1: firstService.kw_top1,
    kw_con1: firstService.kw_con1,
    kw_top2: firstService.kw_top2,
    kw_con2: firstService.kw_con2,
    kw_img2: firstService.kw_img2,
  };

  // 4️⃣ สร้าง carousel item ที่มีข้อมูลเพิ่ม
  const carouselItems: CarouselItem[] = images.map((img) => ({
    id: img.id.toString(),
    image: img.img_url,
    title: img.location || "ไม่ระบุสถานที่",
    description: `วันที่ให้บริการ: ${img.worked_date.toLocaleDateString("th-TH")}`,
  }));

  return (
    <div className="pt-[20vh]">
      <ContentsPage service={contentsData} />
      {carouselItems.length > 0 && (
        <Slide
          dataSlide={carouselItems}
          heading="ภาพตัวอย่างงาน"
          title="จากสถานที่จริง"
          pageType="image"
          targetId="imagesId"
        />
      )}
      <Review />
    </div>
  );
}

