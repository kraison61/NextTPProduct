// app/gallery/page.tsx
import fetchData from "@/data/data";
import PhotoGallerySlide from "@/components/Home/Slide/PhotoGallerySlide";

const GalleryPage = async () => {
  const { dataImage } = await fetchData(); // เรียกจากฝั่ง server

  return (
    <div className="p-4 w-[80%] mx-auto pt-[20vh]">
      <h1 className="text-2xl font-bold mb-4">รวมรูปภาพผลงานทั้งหมด</h1>
      <PhotoGallerySlide itemData={dataImage} />
    </div>
  );
};

export default GalleryPage;
