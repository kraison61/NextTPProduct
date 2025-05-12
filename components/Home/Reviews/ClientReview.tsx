"use client";

import dynamic from "next/dynamic";

const Review = dynamic(() => import("@/components/Home/Reviews/Review"), {
  ssr: false,
  loading: () => <div className="h-32 flex items-center justify-center">กำลังโหลดรีวิว...</div>,
});

export default function ClientReview() {
  return <Review />;
}
