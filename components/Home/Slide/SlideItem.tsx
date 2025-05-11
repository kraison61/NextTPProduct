"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useCallback } from "react";
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
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // ฟังก์ชันสำหรับเลื่อนภาพก่อนหน้า
  const handlePrev = useCallback(() => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  }, [selectedIndex, setSelectedIndex]);

  // ฟังก์ชันสำหรับเลื่อนภาพถัดไป
  const handleNext = useCallback(() => {
    if (selectedIndex !== null && selectedIndex < itemData.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  }, [selectedIndex, setSelectedIndex, itemData]);

  // ฟังก์ชันสำหรับเปิด Modal เมื่อคลิกที่ภาพ
  const handleImageClick = useCallback(
    (e: React.MouseEvent, index: number) => {
      if (pageType === "image") {
        e.preventDefault();
        setSelectedIndex(index);
      }
    },
    [pageType, setSelectedIndex]
  );

  // ฟังก์ชันสำหรับปิด Modal
  const closeModal = useCallback(() => {
    setSelectedIndex(null);
  }, [setSelectedIndex]);

  // ฟังก์ชันสำหรับ format วันที่
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

  // Modal Component
  const ImageModal = useCallback(() => {
    if (selectedIndex === null) return null;

    const currentImage = itemData[selectedIndex];

    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
        onClick={closeModal}
        aria-modal="true"
      >
        <div
          className="relative max-w-[90%] max-h-[90%]"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={`${imageUrl}/${currentImage.image}`}
            alt={currentImage.title}
            width={800}
            height={800}
            className="object-contain rounded-lg"
            priority // โหลดภาพปัจจุบันก่อน
          />
          {/* Close Button */}
          <button
            className="absolute top-2 right-2 bg-white rounded-full p-2 focus:outline-none"
            onClick={closeModal}
            aria-label="Close modal"
          >
            ❌
          </button>
          {/* Prev Button */}
          {selectedIndex > 0 && (
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-black rounded-full p-2 focus:outline-none"
              onClick={handlePrev}
              aria-label="Previous image"
            >
              ⬅️
            </button>
          )}
          {/* Next Button */}
          {selectedIndex < itemData.length - 1 && (
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-black rounded-full p-2 focus:outline-none"
              onClick={handleNext}
              aria-label="Next image"
            >
              ➡️
            </button>
          )}
        </div>
      </div>
    );
  }, [closeModal, handleNext, handlePrev, itemData, selectedIndex]);

  return (
    <>
      {/* Image Modal */}
      <ImageModal />

      {/* Carousel */}
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={5000}
        keyBoardControl
      >
        {itemData.map((data, index) => {
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

          return (
            <div key={data.id} className="m-3">
              <Link href={href} onClick={(e) => handleImageClick(e, index)}>
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md">
                  <div className="absolute inset-0 bg-black opacity-25 rounded-lg transition-opacity duration-300 hover:opacity-0"></div>
                  <Image
                    src={`${imageUrl}/${data.image}`}
                    alt={data.title}
                    width={500}
                    height={500}
                    className="h-full w-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <p className="text-lg font-semibold mt-4 line-clamp-2">{data.title}</p>
                <p className="text-sm text-gray-600">
                  {pageType === "image" ? formatDate(data.description) : String(data.description)}
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