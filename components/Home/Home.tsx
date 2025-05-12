//Home.tsx

'use client';

import dynamic from 'next/dynamic';
import Hero from './Hero/Hero';
import WhyChoose from './WhyChoose/WhyChoose';
import { CarouselItem } from '@/data/TypeProps';

type HomeProps = {
  data: {
    dataService: CarouselItem[];
    dataImage: CarouselItem[];
    dataBlog: CarouselItem[];
  };
};

// ✅ dynamic import สำหรับ Slide ปกติ (บริการ / blog)
const Slide = dynamic(() => import('./Slide/Slide'), {
  loading: () => <div className="h-96 flex items-center justify-center">กำลังโหลด...</div>,
});

// ✅ dynamic import สำหรับ Slide แบบแกลเลอรี่ (รูปภาพ)
const PhotoGalleryCarousel = dynamic(() => import('./Slide/PhotoGalleryCarousel'), {
  ssr: false,
  loading: () => <div>กำลังโหลด...</div>,
});

// ✅ dynamic import สำหรับ Review (ซูมรีวิว)
const Review = dynamic(() => import('./Reviews/Review'), {
  loading: () => <div className="h-32 flex items-center justify-center">กำลังโหลดรีวิว...</div>,
  ssr: false,
});

export default function Home({ data }: HomeProps) {
  return (
    <div className="overflow-hidden">
      <Hero />

      {/* Slide สำหรับบริการ */}
      <Slide
        dataSlide={data.dataService}
        heading="รับเหมาก่อสร้างครบวงจร"
        title={`<ul>
  <li><h2><strong>ก่อสร้างกำแพงกันดิน (Retaining Wall)</strong></h2><h3>ป้องกันดินไหล ลดความเสี่ยงจากการพังทลาย เพิ่มความแข็งแรงให้พื้นที่ก่อสร้าง</h3></li>
  <li><h2><strong>งานถมดิน ปรับพื้นที่</strong></h2><h3>เตรียมพื้นฐานสำหรับงานก่อสร้างทุกประเภท ถมดินเพื่อความมั่นคงและระบายน้ำได้ดี</h3></li>
  <li><h2><strong>เทพื้นคอนกรีต</strong></h2><h3>พื้นโรงงาน พื้นโกดัง พื้นลานจอดรถ พร้อมเหล็กเสริมและระบบ Drainage</h3></li>
  <li><h2><strong>ก่อสร้างรั้วคอนกรีต, รั้วลวดหนาม, รั้วตาข่าย</strong></h2><h3>งานรั้วทุกรูปแบบ เพื่อความปลอดภัยและความเป็นส่วนตัว</h3></li>
  <li><h2><strong>งานโครงสร้างคอนกรีตเสริมเหล็ก</strong></h2><h3>เสา, คาน, พื้น ฐานราก งานคุณภาพได้มาตรฐานวิศวกรรม</h3></li>
  <li><h2><strong>รับออกแบบและให้คำปรึกษาด้านงานก่อสร้าง</strong></h2><h3>ประเมินหน้างาน ฟรี ไม่มีค่าใช้จ่ายเบื้องต้น</h3></li>
</ul>
`}
        pageType="service"
        targetId="servicesId"
      />

      {/* Slide สำหรับรูปภาพ: ใช้ Gallery ซูมได้ */}
      <div className="pt-20 pb-20 w-[80%] mx-auto" id="imagesId">
        <h2 className="text-center text-3xl font-bold mb-6">ภาพตัวอย่างงานจริง</h2>
        <p className="text-center text-gray-600 mb-10">
          รวมภาพผลงานบางส่วนจากโปรเจกต์จริง ที่เรามีโอกาสดูแลและส่งมอบให้กับลูกค้า ด้วยความตั้งใจในทุกรายละเอียด เพื่อให้ทุกชิ้นงานออกมาตรงตามความต้องการและมาตรฐานที่วางไว้
        </p>
         <PhotoGalleryCarousel itemData={data.dataImage} />
      </div>

      {/* Slide สำหรับบทความ */}
      <Slide
        dataSlide={data.dataBlog}
        heading="อัปเดตข่าวสารและบทความล่าสุด"
        title="แบ่งปันข่าวสารและบทความดี ๆ เกี่ยวกับงานของเรา ทั้งเรื่องน่ารู้ เทคนิคการทำงาน และกิจกรรมต่าง ๆ ที่เราอยากส่งต่อถึงคุณ"
        pageType="blog"
        targetId="blogsId"
      />

      <WhyChoose />
      <Review />
    </div>
  );
}
