"use client";

import dynamic from "next/dynamic";
import { CarouselItem } from "@/data/TypeProps";

const SlideItem = dynamic(
  () => import("./SlideItem").then((mod) => mod.default),
  { 
    loading: () => <div>Loading...</div>,
    ssr: false 
  }
);

interface SlideItemProps {
  itemData: CarouselItem[];
  pageType: "service" | "image" | "blog";
}

const ClientSlideItem = ({ itemData, pageType }: SlideItemProps) => {
  return <SlideItem itemData={itemData} pageType={pageType} />;
};

export default ClientSlideItem;