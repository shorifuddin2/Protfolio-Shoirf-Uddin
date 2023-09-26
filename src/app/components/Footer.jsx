import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <Image src="/images/logo.png" alt="logo" width={60} height={60} className="border rounded-full bg-gradient-to-br from-primary-600 hover:from-primary-700 hover:to-secondary-700 to-secondary-600"/>
        </Link>
        </span>
        <p className="flex items-center justify-center hover:text-white text-slate-600">All &copy; rights reserved.2023</p>
        
      </div>
    </footer>
  );
};

export default Footer;
