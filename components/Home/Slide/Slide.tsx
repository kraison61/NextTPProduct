// components/Home/Slide/Slide.tsx
"use client"; // ✅ ทำให้ dynamic component ใช้ได้

import React from "react";
import SectionHeading from "@/components/Helper/SectionHeading";
import { CarouselItem } from "@/data/TypeProps";
import dynamic from "next/dynamic";

// ✅ Dynamic import เพื่อแยกโหลด SlideItem เฉพาะตอนใช้งาน
const SlideItem = dynamic(() => import("./SlideItem"), {
  ssr: false, // ห้าม render ฝั่ง server เพราะใช้ react-photo-view
  loading: () => <p>กำลังโหลดสไลด์...</p>,
});

interface SlideProps {
  dataSlide: CarouselItem[];
  heading: string;
  title: string;
  pageType: "service" | "image" | "blog";
  targetId: string;
}

const Slide = ({ dataSlide, heading, title, pageType, targetId }: SlideProps) => {
  return (
    <div className="pt-20 pb-20">
      {/* ✅ หัวข้อของ Section */}
      <SectionHeading heading={heading} title={title} targetId={targetId} />

      {/* ✅ SlideItem จะแสดงเฉพาะเมื่อโหลดเสร็จ */}
      <div className="mt-14 w-[80%] mx-auto">
        <SlideItem itemData={dataSlide} pageType={pageType} />
      </div>
    </div>
  );
};

export default Slide;
