import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";

const NavBar = () => {
  const user = false;
  return (
    <div className="h-12 text-green-900 p-4 flex items-center justify-between border-b-2 border-b-green-900 uppercase md:h-24 lg:px-20 xl:px-160">
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/"> Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">Khuda Lagse</Link>
      </div>
      <div className="md:hidden">
        <Menu />
      </div>

      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="flex items-center gap-2 cursor-pointer bg-red-400 px-3 py-3 rounded-md text-white font-bold">
          <Image src="/phone.png" alt="" width={20} height={20}></Image>
          <span>123 456 78</span>
        </div>
        {!user ? (
          <Link href="/login"> Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default NavBar;
