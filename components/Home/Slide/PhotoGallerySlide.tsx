"use client";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Image from "next/image";
import { CarouselItem } from "@/data/TypeProps";
import dayjs from "dayjs";

interface Props {
  itemData: CarouselItem[];
}

const PhotoGallerySlide = ({ itemData }: Props) => {
  return (
    <PhotoProvider>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {itemData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden"
          >
            <PhotoView
              src={`${process.env.NEXT_PUBLIC_MINIO_ENDPOINT}/${process.env.NEXT_PUBLIC_MINIO_BUCKET}/${item.image}`}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_MINIO_ENDPOINT}/${process.env.NEXT_PUBLIC_MINIO_BUCKET}/${item.image}`}
                alt={item.title}
                width={600}
                height={400}
                className="cursor-zoom-in object-cover w-full h-60"
                loading="lazy"
              />
            </PhotoView>
            <div className="p-4 text-center">

              {item.serviceName?.serviceName && (
                <h3 className="text-sm font-medium mt-1">
                  {item.serviceName.serviceName} พิกัด : {item.title}
                </h3>
              )}

              {item.workedDate && (
                <p className="text-xs text-gray-500 mt-1">
                  {typeof item.workedDate === "string"
                    ? dayjs(item.workedDate).format("YYYY-MM-DD")
                    : dayjs(item.workedDate.toLocaleString()).format("YYYY-MM-DD")}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </PhotoProvider>
  );
};

export default PhotoGallerySlide;
