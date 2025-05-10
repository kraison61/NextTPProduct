import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src="/Logo1.png"
        alt="ธีรพงษ์เซอร์วิส-Logo"
        width={300}
        height={300}
        className="rounded-full drop-shadow-lg"
      />
      {/* <div className="text-xl md:text-xl text-white uppercase font-medium text-center">
        ธีรพงษ์เซอร์วิส
      </div> */}
    </div>
  );
};

export default Logo;
