"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:hidden">
      <Image
        src="/menu.png"
        alt="Menu"
        width={28}
        height={28}
        className="cursor-pointer "
        onClick={() => setIsOpen((prev) => !prev)}
      />
      {isOpen && (
        <div className="absolute top-20 left-0 w-full h-[calc(100vh-80px)] bg-black/90 text-white flex flex-col items-center justify-center gap-8 text-xl z-30">
          <Link href="/"> Home </Link>
          <Link href="/"> Shop </Link>
          <Link href="/"> Deals </Link>
          <Link href="/"> About </Link>
          <Link href="/"> Contact </Link>
          <Link href="/"> Logout </Link>
          <Link href="/"> Cart(1) </Link>
        </div>
      )}
    </div>
  );
}

export default Menu;
