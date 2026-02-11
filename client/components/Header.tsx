"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import {useRouter} from "next/navigation"

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div
      className={` fixed flex sm:flex-row justify-between items-center  p-2 bg-neutral-50 w-full z-50 transition-all duration-300 ${scrolled ? "top-0" : "-top-2"} shadow-xl `}
    >
      <div onClick={() => router.push("/")} className="cursor-pointer p-2 text-lg font-bold">LOGO</div>
      <div className="flex flex-row justify-between items-center">
        <Navbar />
        <button className="hidden sm:block ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300 cursor-pointer" onClick= {() => router.push("/orders")}>
          Buy
        </button>
      </div>
    </div>
  );
};

export default Header;
