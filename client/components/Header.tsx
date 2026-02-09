"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed flex flex-col sm:flex-row justify-between items-center  p-2 bg-neutral-50 w-full z-50 transition-all duration-300 ${scrolled ? "top-0" : "-top-2"} shadow-xl `}
    >
      <div>LOGO</div>
      <div className="flex flex-row justify-between items-center">
        <Navbar />
        <button className="ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Buy
        </button>
      </div>
    </div>
  );
};

export default Header;
