//components/Contents.tsx

"use client";

import React from "react";
import Image from "next/image";

interface ContentsPageProps {
  service: {
    id: number;
    kw_img1: string | null;
    kw_h1: string;
    kw_top1: string;
    kw_con1: string;
    kw_top2: string;
    kw_con2: string;
    kw_img2: string;
    topalt: string | null;
    bottomalt: string | null;
  };
}

const imgUrl = process.env.NEXT_PUBLIC_MINIO_ENDPOINT;
const ContentsPage = ({ service }: ContentsPageProps) => {
  return (
    <div className="p-4">
      {/* Main Heading */}
      <h1
        className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
        dangerouslySetInnerHTML={{ __html: service.kw_h1 }}
      />

      {/* Section 1 */}
      <section className="px-4 max-w-7xl mx-auto overflow-hidden py-8">
        <div className="w-full flex flex-col md:flex-row gap-6 items-start">
          <figure className="mb-4 md:mb-0 rounded-lg shadow-md overflow-hidden w-full md:w-[400px]">
            <Image
              src={`${imgUrl}/${service.kw_img1 || "images/n1.jpg"}`}
              alt="ภาพประกอบบริการ"
              width={400}
              height={300}
              className="object-cover w-full"
            />
            <figcaption className="text-center text-gray-600 text-2xl mt-2">
              {service.topalt|| "คำอธิบายภาพประกอบ 1"}
            </figcaption>
          </figure>
          <div className="overflow-hidden">
            <div
              className="prose prose-sm sm:prose lg:prose-lg text-xl leading-relaxed text-gray-800"
              dangerouslySetInnerHTML={{ __html: service.kw_top1 }}
            />
            <div
              className="prose prose-sm sm:prose lg:prose-lg text-base text-gray-700 mt-6"
              dangerouslySetInnerHTML={{ __html: service.kw_con1 }}
            />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="mb-20 px-4 max-w-7xl mx-auto overflow-hidden py-8">
        <div className="w-full flex flex-col gap-6 items-start md:flex-row-reverse">
          <figure className="mb-4 md:mb-0 rounded-lg shadow-md overflow-hidden w-full md:w-[400px]">
            <Image
              src={`${imgUrl}/${service.kw_img2 || "images/n2.jpg"}`}
              alt="ภาพประกอบบริการ"
              width={400}
              height={300}
              className="object-cover w-full"
            />
            <figcaption className="text-center text-gray-600 text-2xl mt-2">
              {service.bottomalt|| "คำอธิบายภาพประกอบ 2"}
            </figcaption>
          </figure>
          <div className="overflow-hidden">
            <div
              className="prose prose-sm sm:prose lg:prose-lg text-2xl font-semibold text-gray-800 mb-4"
              dangerouslySetInnerHTML={{ __html: service.kw_top2 }}
            />
            <div
              className="prose prose-sm sm:prose lg:prose-lg text-base leading-relaxed text-gray-700"
              dangerouslySetInnerHTML={{ __html: service.kw_con2 }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentsPage;
