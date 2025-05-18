//app/data/data.ts
import { CarouselItem } from "@/data/TypeProps";
import { prisma } from "@/lib/prisma";

export const reviewData = [
  {
    id: 1,
    name: "คุณจันทรสุดา",
    review:
      "งานเทพื้นคอนกรีตที่ลานโรงงานเรียบร้อยมากครับ มีระบบระบายน้ำครบถ้วน ทีมงานดูแลทุกขั้นตอน ไม่ทิ้งงาน ทำงานตรงเวลา",
    image: "/images/user.png",
    job: "N/A",
  },
  {
    id: 2,
    name: "คุณปริญญา",
    review:
      "ก่อสร้างกำแพงกันดินออกมาได้แข็งแรง สวยงามเกินคาดเลยค่ะ ทีมงานมีความรู้และช่วยให้คำแนะนำเรื่องโครงสร้างดีมาก ประทับใจค่ะ",
    image: "/images/user.png",
    job: "N/A",
  },
  {
    id: 3,
    name: "คุณชัชฤทธิ์",
    review:
      "เลือกใช้บริการเพราะเห็นว่ามีประสบการณ์ตรง พอได้ทำจริง งานเรียบร้อยครับ ทีมงานใจเย็น ตอบทุกคำถาม และวัสดุที่ใช้ดีมาก",
    image: "/images/user.png",
    job: "N/A",
  },
  {
    id: 4,
    name: "คุณจาตุรันดร์",
    review:
      "ถมดินแล้วแน่นหนาดีมากเลยค่ะ เคยเจอที่อื่นทำแล้วทรุดง่าย แต่ของที่นี่จัดการให้ครบทุกขั้นตอน พร้อมแนะนำวิธีดูแลพื้นที่หลังถมดินด้วย",
    image: "/images/user.png",
    job: "N/A",
  },
  {
    id: 5,
    name: "คุณกิจกมล",
    review:
      "ขอบคุณธีรพงษ์เซอร์วิสมากครับ งานเทพื้นคอนกรีตได้มาตรฐานดีเยี่ยม รถขับเข้าออกสบาย ทีมงานสุภาพและมืออาชีพมากครับ",
    image: "/images/user.png",
    job: "N/A",
  },
  {
    id: 6,
    name: "LifeAllGlobal Co.,Ltd.",
    review:
      "ประทับใจตั้งแต่ขั้นตอนเสนอราคา ให้ข้อมูลละเอียด วัสดุที่ใช้คุณภาพดีมากค่ะ งานรั้วเรียบร้อย สวยงาม ปลอดภัย และตรงเวลาค่ะ",
    image: "/images/user.png",
    job: "N/A",
  },
  {
    id: 7,
    name: "คุณวสุ",
    review:
      "ตั้งแต่เริ่มคุยงานจนเสร็จ รู้สึกสบายใจครับ ทีมงานมีความรับผิดชอบสูง ไม่ทิ้งงาน วางแผนงานดี ส่งมอบตรงเวลา ราคายุติธรรม",
    image: "/images/user.png",
    job: "N/A",
  },
  {
    id: 8,
    name: "คุณยุทธนา",
    review:
      "ทำงานเรียบร้อย เก็บรายละเอียดดีมากค่ะ ไม่ต้องตามงานเลย มีการอัปเดตความคืบหน้าให้ตลอด ประทับใจในบริการค่ะ",
    image: "/images/user.png",
    job: "N/A",
  },
];

export const destinationData = [
  {
    id: 1,
    image: "/images/d1.jpg",
    country: "France",
    travelers: "150,000",
  },
  {
    id: 2,
    image: "/images/d2.jpg",
    country: "USA",
    travelers: "250,000",
  },
  {
    id: 3,
    image: "/images/d3.jpg",
    country: "Italy",
    travelers: "180,000",
  },
  {
    id: 4,
    image: "/images/d4.jpg",
    country: "Japan",
    travelers: "200,000",
  },
  {
    id: 5,
    image: "/images/d5.jpg",
    country: "Australia",
    travelers: "120,000",
  },
  {
    id: 6,
    image: "/images/d6.jpg",
    country: "Canada",
    travelers: "175,000",
  },
  {
    id: 7,
    image: "/images/d7.jpg",
    country: "Germany",
    travelers: "160,000",
  },
  {
    id: 8,
    image: "/images/d8.jpg",
    country: "Brazil",
    travelers: "140,000",
  },
];

export const hotelsData = [
  {
    id: 1,
    image: "/images/h1.jpg",
    name: "The Grand London Resort and Spa",
    location: "Westminster, London",
    rating: 4.6,
    reviews: "2,345",
    price: "72",
  },
  {
    id: 2,
    image: "/images/h2.jpg",
    name: "Barcelona City Suites Deluxe Hotel",
    location: "Ciutat Vella, Barcelona",
    rating: 4.7,
    reviews: "1,912",
    price: "85",
  },
  {
    id: 3,
    image: "/images/h3.jpg",
    name: "Times Square Premium Stay Hotel",
    location: "Manhattan, New York",
    rating: 4.9,
    reviews: "3,420",
    price: "95",
  },
  {
    id: 4,
    image: "/images/h4.jpg",
    name: "Hilton Roma Luxury Hotel Palace",
    location: "Vaticano Prati, Rome",
    rating: 4.5,
    reviews: "2,876",
    price: "68",
  },
];

export const toursData = [
  {
    id: 1,
    image: "/images/t1.jpg",
    title: "Historic Wonders of Stonehenge & Oxford Tour",
    location: "Wiltshire, England",
    time: "12+ hours",
    type: "Cultural & Historical Tours",
    rating: 4.9,
    reviews: "1,245",
    price: "65",
  },
  {
    id: 2,
    image: "/images/t2.jpg",
    title: "Barcelona Gothic Quarter Walking Tour",
    location: "Ciutat Vella, Barcelona",
    time: "3+ hours",
    type: "Walking & Sightseeing Tours",
    rating: 4.7,
    reviews: "876",
    price: "50",
  },
  {
    id: 3,
    image: "/images/t3.jpg",
    title: "Thames Luxury Boat Cruise with Dinner",
    location: "London, United Kingdom",
    time: "2–3 hours",
    type: "Private & Luxury Cruises",
    rating: 4.8,
    reviews: "2,300",
    price: "110",
  },
  {
    id: 4,
    image: "/images/t4.jpg",
    title: "Edinburgh Haunted History Walking Tour",
    location: "Edinburgh, Scotland",
    time: "2+ hours",
    type: "Ghost & Mystery Tours",
    rating: 4.6,
    reviews: "1,050",
    price: "40",
  },
];

//app/data/data.ts
const fetchData = async () => {
  const rawServices = await prisma.services.findMany({
    select: {
      id: true,
      kw_img1: true,
      kw_title: true,
      kw_des: true,
      serviceName: {
        select: {
          serviceLink: true,
          serviceName: true,
        },
      },
    },
    orderBy: {
      created_at: "desc",
    },
  });

  const dataService: CarouselItem[] = rawServices.map((service) => {
    return {
      id: service.id.toString(),
      image: service.kw_img1,
      title: service.kw_title,
      description: service.kw_des,
      serviceName: {
        serviceLink: service.serviceName?.serviceLink || "#", // ✅ เผื่อกรณี null
        serviceName: service.serviceName.serviceName || "#", // ✅ เผื่อกรณี null
      },
    };
  });

  const rawImages = await prisma.image_uploads.findMany({
    include: {
      service: {
        select: {
          serviceName: true,
          serviceLink: true,
        },
      },
    },
    orderBy: {
      created_at: "desc",
    },
  });

  const dataImage: CarouselItem[] = rawImages.map((image) => {
    return {
      id: image.id.toString(),
      image: image.img_url,
      title: image.location,
      description: image.worked_date?.toString() ?? "",
      workedDate: image.worked_date ?? undefined,
      serviceName: {
        serviceLink: image.service?.serviceLink ?? "#",
        serviceName: image.service?.serviceName ?? "ไม่ระบุบริการ",
      },
    };
  });

  const rawBlog = await prisma.blogs.findMany({
    orderBy: {
      created_at: "desc",
    },
  });
  const dataBlog: CarouselItem[] = rawBlog.map((blog) => {
    return {
      id: blog.id.toString(),
      image: blog.image,
      title: blog.title,
      description: blog.description,
    };
  });

  return {
    dataService,
    dataImage,
    dataBlog,
  };
};
export default fetchData;
