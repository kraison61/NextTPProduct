//Components/Navbar/Nav.tsx

"use client";
import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { usePathname } from "next/navigation";
import Logo from "../Logo/Logo";
type Props = {
  openNav: () => void; // Function type for openNav
};
const Nav = ({ openNav }: Props) => {
  const pathName = usePathname();
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (pathName === "/") {
        if (window.scrollY >= 90) {
          setNavBg(true);
        } else {
          setNavBg(false);
        }
      } else {
        setNavBg(true);
      }
    };

    handleScroll(); // ตรวจสอบสถานะเริ่มต้น

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathName]);

  return (
    <div
      className={` ${
        navBg ? "bg-blue-950 shadow-md" : "fixed"
      } transition-all duration-200 z-[1000] fixed w-full`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* LOGO */}
        <Link href="/">
          <div className="flex items-center space-x-2">
            <div className="text-xl md:text-2xl text-white uppercase font-bold">
              <Logo />
            </div>
          </div>
        </Link>
        {/* NavLinks  */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => {
            return (
              <a href={link.url} key={link.id}>
                <p className="relative text-white text-base font-medium w-fit block after:block after:content-['']  after:absolute after:h-[3px] after:bg-yellow-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition duration-300 after:origin-right">
                  {link.label}
                </p>
              </a>
            );
          })}
        </div>
        {/* buttons */}
        <div className="flex items-center space-x-4">
          <button className="md:px-12 md:py-2.5 px-8 py-2 text-black text-base bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg">
            <Link href="/#footerId">ติดต่อเรา</Link>
          </button>
          {/* Burger Menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
