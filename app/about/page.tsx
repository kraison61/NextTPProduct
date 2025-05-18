import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

const imgUrl = process.env.NEXT_PUBLIC_MINIO_ENDPOINT
const bucketName = process.env.NEXT_PUBLIC_MINIO_BUCKET;

// either Static metadata
export const metadata: Metadata = {
  title: "บริษัท ธีรพงษ์เซอร์วิส จำกัด | ผู้เชี่ยวชาญรับเหมาก่อสร้างครบวงจร",
  description:
    "ธีรพงษ์เซอร์วิส จำกัด รับเหมาก่อสร้างครบวงจร กำแพงกันดิน ถมดิน เทพื้นคอนกรีต ก่อสร้างรั้ว ทีมงานมืออาชีพ มีประสบการณ์กว่า 10 ปี",
};

const pageAbout = () => {
  return (
    <div>
      <main className="max-w-5xl mx-auto px-4 pt-[20vh] pb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16 ">
          เกี่ยวกับ บริษัท ธีรพงษ์เซอร์วิส จำกัด (Theeraphong Co., Ltd.)
        </h1>

        <div className="space-y-24">
          {/* Section 1 */}
          <section className="flex flex-col md:flex-row items-center gap-8">
            
            <div className="w-full md:w-1/2">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                พันธกิจของเรา (Our Mission)
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                เราดำเนินงานด้วยหลัก 3 ประการ
                เพื่อสร้างผลงานที่ดีที่สุดให้แก่ลูกค้าทุกท่าน:
              </p>
              <ul className="list-disc pl-5 mt-4 text-gray-700 space-y-2">
                <li>
                  ✅ <strong>ราคาสมเหตุสมผล:</strong> ประเมินราคาอย่างยุติธรรม
                  คำนึงถึงงบประมาณของลูกค้า
                </li>
                <li>
                  ✅ <strong>งานคุณภาพ ไม่ทิ้งงาน:</strong> ใส่ใจในทุกรายละเอียด
                  ส่งมอบงานตรงเวลา และครบถ้วนตามสัญญา
                </li>
                <li>
                  ✅ <strong>ซื่อสัตย์ โปร่งใส:</strong>{" "}
                  ยึดถือความซื่อสัตย์ต่อลูกค้า เพราะความไว้วางใจของท่าน
                  คือหัวใจของการทำงานของเรา
                </li>
              </ul>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 py-2">
                จุดแข็งของ บริษัท ธีรพงษ์เซอร์วิส จำกัด (Why Choose Us)
              </h2>
              <ul className="list-disc pl-5 mt-4 text-gray-700 space-y-2">
                <li>🎯 มีประสบการณ์ในงานก่อสร้างมากกว่า 20 ปี</li>
                <li>🏆 ทีมงานมืออาชีพ พร้อมให้คำปรึกษาอย่างจริงใจ</li>
                <li>
                  🛠️ ให้บริการงานก่อสร้างหลากหลายประเภท ทั้งขนาดเล็กและขนาดใหญ่
                </li>
                <li>
                  📋 บริการประเมินราคาฟรี
                  พร้อมวางแผนงานอย่างชัดเจนก่อนเริ่มโครงการ
                </li>
                <li>💯 รับประกันคุณภาพงาน มาตรฐานดี ราคายุติธรรม</li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={`${imgUrl}/${bucketName}/about/194914_0.jpg`}
                alt="ภาพประกอบบริการ"
                width={800}
                height={500}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              />
            </div>
          </section>

          {/* Section 2 */}
          <section className="flex flex-col-reverse md:flex-row items-center gap-4">
            <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={`${imgUrl}/${bucketName}/about/194911_0.jpg`}
                alt="ภาพประกอบบริการ"
                width={800}
                height={500}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                บริการของเรา (Our Services)
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                ด้วยประสบการณ์มากกว่า 10 ปีในวงการก่อสร้าง
                เราพร้อมให้บริการแบบครบวงจร ด้วยทีมงานมืออาชีพที่คุณไว้ใจได้:
              </p>
              <ul className="list-disc pl-5 mt-4 text-gray-700 space-y-2">
                <li>🎯 มีประสบการณ์และความเชี่ยวชาญเฉพาะด้าน</li>
                <li>🏆 ทีมงานพร้อมให้คำปรึกษาอย่างจริงใจ</li>
                <li>🛠️ ให้บริการงานก่อสร้างหลากหลาย ครบจบในที่เดียว</li>
                <li>💯 รับประกันคุณภาพ มาตรฐานดี ราคายุติธรรม</li>
              </ul>
            </div>
          </section>
          <section className="gap-4 space-y-2" >
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 ">
              บริการของเรา (Our Services)
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              ด้วยประสบการณ์มากกว่า 10 ปีในวงการก่อสร้าง
              เราพร้อมให้บริการแบบครบวงจร ด้วยทีมงานมืออาชีพที่คุณไว้ใจได้:
            </p>

            <p>
              <strong>
                บริษัท ธีรพงษ์เซอร์วิส จำกัด | THEERAPHONG Co., Ltd.
              </strong>
            </p>
            <p>
              📞 โทร: 061-718-8847
              <br />
              📧 อีเมล: theeraphong.services@gmail.com
              <br />
              🌐 เว็บไซต์:{" "}
              <Link href="https://www.theeraphong.com">
                www.theeraphong.com
              </Link>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default pageAbout;