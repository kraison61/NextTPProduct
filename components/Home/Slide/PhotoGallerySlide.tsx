"use client";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Image from "next/image";
import { CarouselItem } from "@/data/TypeProps";

interface Props {
  itemData: CarouselItem[];
}

const PhotoGallerySlide = ({ itemData }: Props) => {
  return (
    <PhotoProvider>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {itemData.map((item) => (
          <PhotoView key={item.id} src={`${process.env.NEXT_PUBLIC_MINIO_ENDPOINT}/${item.image}`}>
            <Image
              src={`${process.env.NEXT_PUBLIC_MINIO_ENDPOINT}/${item.image}`}
              alt={item.title}
              width={600}
              height={400}
              className="rounded-lg shadow-md cursor-zoom-in object-cover"
              loading="lazy"
            />
          </PhotoView>
        ))}
      </div>
    </PhotoProvider>
  );
};

export default PhotoGallerySlide;
