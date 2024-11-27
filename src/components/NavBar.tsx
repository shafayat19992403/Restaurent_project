import React from "react";
import Menu from "./Menu";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="h-12 text-green-900 p-4 flex items-center justify-between border-b-2 border-b-green-900 uppercase">
      <div className="text-xl">
        <Link href="/">Khuda Lagse</Link>
      </div>
      <div>
        <Menu />
      </div>
    </div>
  );
};

export default NavBar;
