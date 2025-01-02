"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CartModel from "./CartModel";
import NotificationIcon from "./NotificationIcon";

function NavIcons() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <div className="flex gap-4 xl:gap-6 items-center relative ">
      <Image
        src="/profile.png"
        alt="profile"
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={() => {
          setIsProfileOpen((pre) => !pre);
          setIsCartOpen(false);
        }}
      />
      {isProfileOpen && (
        <div className="absolute top-12 bg-gray-100 p-4 left-0 text-sm rounded-md shadow-md z-20 ">
          <Link href="/">Profile</Link>
          <div>Logout</div>
        </div>
      )}
      <Image
        src="/notification.png"
        alt="notification icon"
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <div
        className="cursor-pointer relative"
        onClick={() => {
          setIsCartOpen((pre) => !pre);
          setIsProfileOpen(false);
        }}
      >
        <Image src="/cart.png" alt="cart icon" width={22} height={22} />
        <NotificationIcon />
      </div>

      {isCartOpen && <CartModel />}
    </div>
  );
}

export default NavIcons;
