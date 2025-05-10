//Component/

import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import SlideItem from "./SlideItem";
import { CarouselItem } from "@/data/TypeProps";

interface SlideProps {
  dataSlide: CarouselItem[]
  heading:string 
  title:string 
  pageType:"service" | "image" | "blog"
  targetId:string
}

const Slide = ({dataSlide,heading,title,pageType,targetId}:SlideProps) => {
  return (
    <div  className="pt-20 pb-20">
      {/* Section Heading */}
      <SectionHeading heading={heading} title={title} targetId={targetId} />
      {/* Section Content */}
      <div className="mt-14 w-[80%] mx-auto">
        {/* Slider */}
        <SlideItem itemData={dataSlide} pageType={pageType} />
      </div>
    </div>
  );
};

export default Slide;
