"use client";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CarouselItem } from "@/data/TypeProps";

interface Props {
  itemData: CarouselItem[];
}

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1324 }, items: 3 },
  tablet: { breakpoint: { max: 1324, min: 764 }, items: 2 },
  mobile: { breakpoint: { max: 764, min: 0 }, items: 1 },
};

const PhotoGalleryCarousel = ({ itemData }: Props) => {
  const baseURL = process.env.NEXT_PUBLIC_MINIO_ENDPOINT;
  const bucketName = process.env.NEXT_PUBLIC_MINIO_BUCKET;

  return (
    <PhotoProvider>
      <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={5000}>
        {itemData.map((item) => (
          <div key={item.id} className="px-4 py-2">
            <PhotoView src={`${baseURL}/${bucketName}/${item.image}`}>
              <div className="cursor-zoom-in overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <Image
                  src={`${baseURL}/${bucketName}/${item.image}`}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-72"
                  loading="lazy"
                />
              </div>
            </PhotoView>

            {/* ✅ เพิ่มชื่อ Service ที่นี่ */}
            <p className="mt-2 text-center px-3 py-2 text-sm sm:text-base font-semibold text-blue-950 bg-white/70 rounded-b-md shadow-sm truncate transition-all duration-300 hover:bg-white">
              {item.title || "ไม่ระบุบริการ"}
            </p>
          </div>
        ))}
      </Carousel>
    </PhotoProvider>
  );
};

export default PhotoGalleryCarousel;
