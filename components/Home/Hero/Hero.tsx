"use client";

import React from "react";
import DOMPurify from 'isomorphic-dompurify'
const videoUrl = process.env.NEXT_PUBLIC_MINIO_ENDPOINT
const Hero = () => {
  let cleanSubtitle = `<section><p>บริษัท ธีรพงษ์เซอร์วิส จำกัด (Theeraphong Service Co., Ltd.)ให้บริการรับเหมาก่อสร้างหลากหลายประเภท โดยทีมงานมืออาชีพ มีประสบการณ์ตรงในงานก่อสร้างกว่า 10 ปี เราใส่ใจทุกขั้นตอนเพื่อมอบผลงานที่มีคุณภาพและความปลอดภัยสูงสุดพร้อมให้คำปรึกษาและออกแบบโครงการตามความต้องการของลูกค้า ครอบคลุมทั้งงานภาคเอกชนและภาครัฐ มั่นใจได้ว่างานเสร็จตรงเวลา งบไม่บานปลาย พร้อมรับประกันผลงานทุกโปรเจกต์</p><section>`;

  cleanSubtitle = DOMPurify.sanitize(cleanSubtitle, {
    ALLOWED_TAGS: ["b", "i", "em", "strong", "a", "ul", "li", "h2", "h3"],
    ALLOWED_ATTR: ["href", "target", "rel","class"],
  });

  return (
    <div className="relative w-full h-[120vh] sm:h-[100vh]">
      {/* overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-70"></div>
      {/* Video */}
      <video
        src={`${videoUrl}/video/0510.webm`}
        autoPlay
        muted
        loop
        preload="metadata"
        className="w-full h-full object-cover"
      />
      {/* Text content */}
      <div className="absolute z-[100] w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex w-[80%] mx-auto justify-center flex-col h-full">
          <div data-aos="fade-up">
            <h1 className="text-[25px] mb-4 md:mb-0 text-center md:text-[35px] lg:text-[45px] tracking-[0.3rem] text-white font-bold uppercase">
              รับเหมาก่อสร้างครบวงจร บริการถมดิน กำแพงกันดิน เทพื้นคอนกรีต โดยทีมช่างมืออาชีพ
            </h1>
            <div
              className="text-white md:text-base font-normal [word-spacing:5px] text-left w-[80%] mx-auto text-sm tracking-wider"
              dangerouslySetInnerHTML={{ __html: cleanSubtitle }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
