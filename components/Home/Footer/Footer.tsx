import Link from "next/link";
import React from "react";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import Image from "next/image";

const imgUrl = process.env.NEXT_PUBLIC_MINIO_ENDPOINT;

const Footer = ({ targetId }: { targetId: string }) => {
  return (
    <div id="footerId" className="pt-16 pb-16">
      <div className="w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-2 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* 1st part */}
        <div className="space-y-5">
          <h3 className="text-lg font-bold">Company</h3>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            <Link href="/about">เกี่ยวกับเรา</Link>
          </p>
        </div>
        {/* 2nd part */}
        <div className="space-y-5">
          <h3 className="text-lg font-bold">Support</h3>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            <Link href="/#servicesId">บริการต่าง ๆ</Link>
          </p>
        </div>
        {/* 3rd part */}
        <div className="space-y-5">
          <h3 className="text-lg font-bold">Other Services</h3>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            <Link href="/#blogsId">ข่าวสาร และบทความ</Link>
          </p>
        </div>
        {/* 4th part */}
        <div>
          <h3 className="text-lg font-bold">ติดต่อเรา</h3>
          <div className="mt-6">
            <h4 className="text-sm text-gray-600">โทร | tel</h4>
            <h5 className="text-base font-bold text-blue-950 mt-1">
              062-718-8847, 087-700-7463
            </h5>
          </div>
          <div className="mt-6 flex items-start justify-between">
            {/* ซ้าย: ข้อความ */}
            <div>
              <h4 className="text-sm text-gray-600">ไลน์ไอดี | Line ID</h4>
              <Link href="https://line.me/ti/p/h9SHumuTEB">
                <h5 className="text-base font-bold text-blue-950 mt-1">
                  0627188847
                </h5>
              </Link>
            </div>

            {/* ขวา: รูปภาพ */}
            <div className="w-24 h-24 rounded overflow-hidden bg-gray-100">
              <Image
                src={`${imgUrl}/image/lineid.webp`}
                // src="http://139.59.105.108:9000/theeraphong/image/lineid.webp"
                alt="Line QR Code"
                width={200}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-sm text-gray-600">อีเมลล์ | Email</h4>
            <h5 className="text-base font-bold text-blue-950 mt-1">
              theeraphong.services@gmail.com
            </h5>
          </div>
          <div className="mt-6">
            <h4 className="text-sm text-gray-600">ที่อยู่ | Address</h4>
            <h5 className="text-base font-bold text-blue-950 mt-1">
              14 หมู่ 5 ต.บางกร่าง อ.เมืองนนทบุรี จ.นนทบุรี 11000
            </h5>
          </div>
        </div>
      </div>
      {/* Bottom section */}
      <div className="mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
        <p className="text-center md:text-left">
          © 2025 บริษัท ธีรพงษ์เซอร์วิส จำกัด | Theeraphong Co., Ltd. | โทร.
          062-718-8847 | Line: @theeraphongservice. All rights reserved
        </p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <span>Social : </span>
          <Link
            href="https://www.facebook.com/TheeraphongRetainingwall"
            className="text-gray-500 hover:text-gray-800"
          >
            <FaFacebook />
          </Link>
          <Link
            href="https://www.tiktok.com/@dy36mb8vjzm3?is_from_webapp=1&sender_device=pc"
            target="_blank"
            className="text-gray-500 hover:text-gray-800"
          >
            <FaTiktok />
          </Link>
          {/* <Link href="#" className="text-gray-500 hover:text-gray-800">
            <FaTwitter />
          </Link>
          <Link href="#" className="text-gray-500 hover:text-gray-800">
            <FaDribbble />
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;