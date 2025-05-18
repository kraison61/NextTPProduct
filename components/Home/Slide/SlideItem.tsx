"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CarouselItem } from "@/data/TypeProps";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const imageUrl = process.env.NEXT_PUBLIC_MINIO_ENDPOINT;
const fallbackImage = "/images/n1.jpg";
const bucketName = process.env.NEXT_PUBLIC_MINIO_BUCKET;

// responsive setting สำหรับ slide
const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1324 }, items: 5 },
  tablet: { breakpoint: { max: 1324, min: 764 }, items: 2 },
  mobile: { breakpoint: { max: 764, min: 0 }, items: 1 },
};

interface SlideItemProps {
  itemData: CarouselItem[];
  pageType: "service" | "image" | "blog";
}

const SlideItem = ({ itemData, pageType }: SlideItemProps) => {
  const handleImageClick = useCallback((e: React.MouseEvent, index: number) => {
    if (pageType === "image") {
      e.preventDefault(); // ถ้าเป็นภาพ ให้ไม่ redirect
    }
  }, [pageType]);

  const formatDate = useCallback((value: string | Date): string => {
    try {
      return new Date(value).toLocaleDateString("th-TH", {
        year: "2-digit",
        month: "short",
        day: "numeric",
      });
    } catch {
      return String(value);
    }
  }, []);

  return (
    <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={5000} keyBoardControl>
      {itemData.map((data, index) => {
        const imageSrc = `${imageUrl}/${bucketName}/${data.image}`;
        const isImage = pageType === "image";

        let href = "#";
        if (pageType === "service") {
          href = `/${encodeURIComponent(data.serviceName?.serviceLink || "#")}`;
        } else if (pageType === "blog") {
          href = `/blog/${encodeURIComponent(data.title)}`;
        } else if (pageType === "image") {
          href = `/image/${data.id}`;
        }

      console.log("imageSrc", imageSrc);

        return (
          <div key={data.id} className="m-3">
            <Link href={href} onClick={(e) => handleImageClick(e, index)}>
              {isImage ? (
                // ✅ ห่อเฉพาะภาพ image ด้วย PhotoProvider
                <PhotoProvider>
                  <PhotoView src={imageSrc}>
                    <ImageBlock imageSrc={imageSrc} title={data.title} />
                  </PhotoView>
                </PhotoProvider>
              ) : (
                <ImageBlock imageSrc={imageSrc} title={data.title} />
              )}
              <p className="text-lg font-semibold mt-4 line-clamp-2">{data.title}</p>
              <p className="text-sm text-gray-600">
                {isImage ? formatDate(data.description) : String(data.description)}
              </p>
            </Link>
          </div>
        );
      })}
    </Carousel>
  );
};

// ✅ component ย่อยสำหรับภาพ (มี fallback)
const ImageBlock = ({ imageSrc, title }: { imageSrc: string; title: string }) => {
  const [imgSrc, setImgSrc] = useState(imageSrc);

  return (
    <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md cursor-zoom-in">
      <div className="absolute inset-0 bg-black opacity-25 rounded-lg transition-opacity duration-300 hover:opacity-0" />
      <Image
        src={imgSrc}
        alt={title}
        width={500}
        height={500}
        className="h-full w-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
        loading="lazy"
        onError={() => setImgSrc(fallbackImage)}
      />
    </div>
  );
};

export default SlideItem;
