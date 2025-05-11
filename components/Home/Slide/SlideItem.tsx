"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useCallback } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CarouselItem } from "@/data/TypeProps";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

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

  const handleImageClick = useCallback(
    (e: React.MouseEvent, index: number) => {
      if (pageType === "image") {
        e.preventDefault();
        setSelectedIndex(index);
      }
    },
    [pageType]
  );

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

  const slides = itemData.map((item) => ({
    src: `${imageUrl}/${item.image}`,
    alt: item.title,
  }));

  return (
    <>
      {/* Lightbox */}
      <Lightbox
        open={selectedIndex !== null}
        close={() => setSelectedIndex(null)}
        slides={slides}
        index={selectedIndex ?? 0}
        on={{ view: ({ index }) => setSelectedIndex(index) }}
      />

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
            href = `/${encodeURIComponent(data.serviceName?.serviceLink || "#")}`;
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
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = fallbackImage;
                    }}
                  />
                </div>
                <p className="text-lg font-semibold mt-4 line-clamp-2">{data.title}</p>
                <p className="text-sm text-gray-600">
                  {pageType === "image"
                    ? formatDate(data.description)
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
