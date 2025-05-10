import React from "react";
import DOMPurify from 'isomorphic-dompurify'
type Props = {
  heading: string;
  title:string
  targetId:string
};

const SectionHeading = ({ heading,title,targetId }: Props) => {
  return (
    <div className="w-[80%] mx-auto" id={targetId}>
      <h2 className="text-xl sm:text-3xl text-blue-950 font-bold">{heading}</h2>
      <p className="mt-2 text-gray-700 sm:text-base text-sm font-medium"  dangerouslySetInnerHTML={{ __html: title }} />
    </div>
  );
};

export default SectionHeading;
