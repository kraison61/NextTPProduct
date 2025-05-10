"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CarouselItem } from "@/data/TypeProps";

const imageUrl = process.env.NEXT_PUBLIC_MINIO_ENDPOINT;
const fallbackImage = "/images/n1.jpg";

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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      {/* MODAL เมื่อมี selectedImage */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage}
              alt="Full View"
              width={800}
              height={800}
              className="object-contain rounded-lg"
              loading="lazy"
            />
            <button
              className="absolute top-2 right-2 bg-white rounded-full p-2"
              onClick={() => setSelectedImage(null)}
            >
              ❌
            </button>
          </div>
        </div>
      )}

      {/* SLIDE */}
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={5000}
        keyBoardControl
      >
        {itemData.map((data) => {
          let href = "#";
          if (pageType === "service") {
            href = `/${encodeURIComponent(
              data.serviceName?.serviceLink || "#"
            )}`;
          } else if (pageType === "blog") {
            href = `/blog/${encodeURIComponent(data.title)}`;
          } else if (pageType === "image") {
            href = `/image/${data.id}`;
          }

          const handleClick = (e: React.MouseEvent) => {
            if (pageType === "image") {
              e.preventDefault(); // ป้องกันลิงก์ทำงาน
              setSelectedImage(`${imageUrl}/${data.image}`);
            }
          };

          const formatDate = (value: string | Date): string => {
            try {
              return new Date(value).toLocaleDateString("th-TH", {
                year: "2-digit",
                month: "short",
                day: "numeric",
              });
            } catch {
              return String(value);
            }
          };

          return (
            <div key={data.id} className="m-3">
              <Link href={href} onClick={handleClick}>
                <div className="relative h-[400px]">
                  <div className="absolute inset-0 bg-black opacity-25 rounded-lg"></div>
                  <Image
                    src={`${imageUrl}/${data.image}`}
                    alt={data.title}
                    width={500}
                    height={500}
                    className="h-full w-full object-cover rounded-lg"
                    loading="lazy"
                  />
                </div>
                <p className="text-lg font-semibold mt-4">{data.title}</p>
                <p className="text-sm text-gray-600">
                  {pageType === "image"
                    ? new Date(data.description).toLocaleDateString("th-TH", {
                        year: "2-digit",
                        month: "short",
                        day: "numeric",
                      })
                    : String(data.description)}
                </p>
              </Link>
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default SlideItem;
