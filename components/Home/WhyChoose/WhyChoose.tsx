import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import WhyChooseCard from "./WhyChooseCard";

const WhyChoose = () => {
  return (
    <div className="pt-16 pb-24">
      {/* Section Heading */}
      <SectionHeading
        heading="🤝 ทำไมต้องเลือกเรา"
        title="บริษัท ธีรพงษ์เซอร์วิส จำกัด มุ่งมั่นในการเป็นผู้ให้บริการรับเหมาก่อสร้างที่ลูกค้าไว้วางใจมากที่สุด ด้วยประสบการณ์ในวงการก่อสร้างกว่า 10 ปี เราเข้าใจทุกความต้องการของลูกค้า พร้อมให้บริการอย่างมืออาชีพในทุกขั้นตอน ตั้งแต่งานวางแผน ออกแบบ ไปจนถึงการก่อสร้างจริง ด้วยมาตรฐานงานที่เน้นคุณภาพ ความปลอดภัย และส่งมอบงานตรงเวลา เพื่อให้ลูกค้ามั่นใจว่างานของคุณจะเสร็จสมบูรณ์ตามที่ตั้งใจ
เรายึดถือหลัก “ซื่อสัตย์ จริงใจ ใส่ใจทุกรายละเอียด” เพราะเรารู้ว่าทุกโครงการคือการลงทุนที่มีคุณค่า"
        targetId="whychoose"
      />
      <div className="grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center mt-20">
        {/* Why choose card */}
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <WhyChooseCard image="/images/c1.svg" title="✅ ทีมงานมืออาชีพ มีประสบการณ์ตรงกว่า 20 ปี" description="เรามีวิศวกรและช่างผู้ชำนาญการ ควบคุมงานอย่างใกล้ชิดในทุกขั้นตอน พร้อมให้คำแนะนำที่ถูกต้องตามหลักวิศวกรรม เพื่อให้งานออกมาดีที่สุด" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="150"
        >
          <WhyChooseCard image="/images/c2.svg" title="🏗️ บริการครบวงจร ตรงเวลา งบไม่บานปลาย" description="รับเหมางานก่อสร้างตั้งแต่เริ่มต้นจนจบโครงการ ครอบคลุมทั้งงานถมดิน, เทพื้นคอนกรีต, กำแพงกันดิน, ก่อสร้างรั้ว และโครงสร้างอื่น ๆ จัดการงบประมาณชัดเจน ไม่มีค่าใช้จ่ายแอบแฝง" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <WhyChooseCard image="/images/c3.svg" title="🏆 ใส่ใจคุณภาพ และความปลอดภัยเป็นอันดับหนึ่ง" description="ใช้วัสดุได้มาตรฐาน ตรวจสอบคุณภาพงานทุกจุดก่อนส่งมอบ มั่นใจในความแข็งแรง ทนทาน พร้อมรับประกันผลงานทุกโครงการ เพื่อความสบายใจของลูกค้า" />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
