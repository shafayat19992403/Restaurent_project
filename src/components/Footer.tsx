import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="h-12 md:h-24 p-4 lg:p-20 xl:p-40 text-green-700 flex items-center justify-between px-10">
      <Link href="/" className="font-bold text-xl">
        KHUDA LAGSE
      </Link>
      <p>ALL RIGHTS RESERVERD</p>
    </div>
  );
};

export default Footer;
