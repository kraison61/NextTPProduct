import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64">
        <Image
          src="/Logo1.png"
          alt="ธีรพงษ์เซอร์วิส-Logo"
          width={300} // ยังต้องระบุ เพื่อ Next.js จัดการ image optimization
          height={300}
          className="rounded-full drop-shadow-lg w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Logo;
