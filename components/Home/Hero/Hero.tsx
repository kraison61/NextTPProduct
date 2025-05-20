"use client";

import React from "react";
import DOMPurify from "isomorphic-dompurify";
import parse from "html-react-parser";
import Image from "next/image";

const videoUrl = process.env.NEXT_PUBLIC_MINIO_ENDPOINT;

const Hero = () => {
  let rawHtml = `
    <p>
      บริษัท ธีรพงษ์เซอร์วิส จำกัด (Theeraphong Service Co., Ltd.)
      ให้บริการรับเหมาก่อสร้างหลากหลายประเภท โดยทีมงานมืออาชีพ
      มีประสบการณ์ตรงในงานก่อสร้างกว่า 10 ปี เราใส่ใจทุกขั้นตอนเพื่อมอบผลงานที่มีคุณภาพ
      และความปลอดภัยสูงสุด พร้อมให้คำปรึกษาและออกแบบโครงการตามความต้องการของลูกค้า
      ครอบคลุมทั้งงานภาคเอกชนและภาครัฐ มั่นใจได้ว่างานเสร็จตรงเวลา งบไม่บานปลาย
      พร้อมรับประกันผลงานทุกโปรเจกต์
    </p>
  `;

  const cleanSubtitle = DOMPurify.sanitize(rawHtml, {
    ALLOWED_TAGS: ["b", "i", "em", "strong", "a", "ul", "li", "h2", "h3", "p"],
    ALLOWED_ATTR: ["href", "target", "rel", "class"],
  });

  return (
    <div className="relative w-full h-[120vh] sm:h-[100vh]">
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-950 opacity-70 z-0" />

      {/* Background Image */}
      <div className="w-full h-full relative bg-gray-800 opacity-40 z-0">
        <Image
          src="/hero1.webp"
          alt="Hero background"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      {/* Text Content */}
      <div className="absolute inset-0 z-10 grid place-items-center">
        <div className="flex w-4/5 mx-auto justify-center flex-col">
          <h1 className="text-[25px] mb-4 md:mb-0 text-left md:text-[35px] lg:text-[45px] tracking-[0.2rem] text-gray-200 font-bold uppercase">
            รับเหมาก่อสร้างครบวงจร บริการถมดิน กำแพงกันดิน เทพื้นคอนกรีต
            โดยทีมช่างมืออาชีพ
          </h1>
          <div className="text-gray-200 md:text-base font-normal text-left tracking-wider text-sm">
            {parse(cleanSubtitle)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
